/**
 * Smart answer verification for Cambridge grammar cloze exercises.
 * Handles contractions, punctuation, case-insensitivity, and minor typos.
 */

// Normalized contraction equivalents
const CONTRACTION_PAIRS: [RegExp, string][] = [
  [/\bdo not\b/gi, "don't"],
  [/\bdoes not\b/gi, "doesn't"],
  [/\bdid not\b/gi, "didn't"],
  [/\bhave not\b/gi, "haven't"],
  [/\bhas not\b/gi, "hasn't"],
  [/\bhad not\b/gi, "hadn't"],
  [/\bwill not\b/gi, "won't"],
  [/\bwould not\b/gi, "wouldn't"],
  [/\bcannot\b/gi, "can't"],
  [/\bcan not\b/gi, "can't"],
  [/\bcould not\b/gi, "couldn't"],
  [/\bshould not\b/gi, "shouldn't"],
  [/\bmust not\b/gi, "mustn't"],
  [/\bis not\b/gi, "isn't"],
  [/\bare not\b/gi, "aren't"],
  [/\bwas not\b/gi, "wasn't"],
  [/\bwere not\b/gi, "weren't"],
  [/\bi am\b/gi, "i'm"],
  [/\byou are\b/gi, "you're"],
  [/\bwe are\b/gi, "we're"],
  [/\bthey are\b/gi, "they're"],
  [/\bhe is\b/gi, "he's"],
  [/\bshe is\b/gi, "she's"],
  [/\bit is\b/gi, "it's"],
  [/\bi have\b/gi, "i've"],
  [/\byou have\b/gi, "you've"],
  [/\bwe have\b/gi, "we've"],
  [/\bthey have\b/gi, "they've"],
  [/\bi will\b/gi, "i'll"],
  [/\byou will\b/gi, "you'll"],
  [/\bhe will\b/gi, "he'll"],
  [/\bshe will\b/gi, "she'll"],
  [/\bwe will\b/gi, "we'll"],
  [/\bthey will\b/gi, "they'll"],
  [/\bi would\b/gi, "i'd"],
  [/\byou would\b/gi, "you'd"],
  [/\bhe would\b/gi, "he'd"],
  [/\bshe would\b/gi, "she'd"],
  [/\bwe would\b/gi, "we'd"],
  [/\bthey would\b/gi, "they'd"],
];

function normalizeText(text: string): string {
  if (!text) return '';
  const trimmed = text.trim().toLowerCase();
  // Support zero article entries like -, —, zero, no article, etc.
  if (['-', '—', '–', 'zero', 'no article', 'none', 'no', 'прочерк', 'нулевой'].includes(trimmed)) {
    return '—';
  }
  return text
    .toLowerCase()
    .replace(/[’‘`]/g, "'") // normalize all apostrophe variants
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '') // remove trailing punctuation except apostrophe
    .replace(/\s+/g, ' ')
    .trim();
}

// Expand contractions to base forms for lenient matching
function canonicalize(text: string): string[] {
  const norm = normalizeText(text);
  const variants = new Set<string>([norm]);

  // Variant without apostrophes (e.g. dont -> don't)
  variants.add(norm.replace(/'/g, ''));

  // Expand / collapse contractions
  for (const [regex, contracted] of CONTRACTION_PAIRS) {
    if (regex.test(norm)) {
      variants.add(norm.replace(regex, contracted));
    }
    // Also reverse check
    const escaped = contracted.replace("'", "\\'");
    const revRegex = new RegExp(`\\b${escaped}\\b`, 'gi');
    if (revRegex.test(norm)) {
      // Find matching expanded form
      const pair = CONTRACTION_PAIRS.find(([_, c]) => c.toLowerCase() === contracted.toLowerCase());
      if (pair) {
        const expandedSample = pair[0].source.replace(/\\b/g, '');
        variants.add(norm.replace(revRegex, expandedSample));
      }
    }
  }

  return Array.from(variants);
}

function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

export interface CheckResult {
  isCorrect: boolean;
  isAlmostCorrect: boolean;
  feedback: string;
  matchedAnswer: string;
}

export function checkAnswer(
  userRaw: string,
  correctAnswer: string,
  acceptedAnswers: string[] = []
): CheckResult {
  const user = normalizeText(userRaw);
  if (!user) {
    return {
      isCorrect: false,
      isAlmostCorrect: false,
      feedback: 'Пожалуйста, впишите ответ.',
      matchedAnswer: correctAnswer,
    };
  }

  const allValid = [correctAnswer, ...acceptedAnswers];
  const userVariants = canonicalize(user);

  // Exact match check
  for (const valid of allValid) {
    const validVariants = canonicalize(valid);
    for (const u of userVariants) {
      if (validVariants.includes(u)) {
        return {
          isCorrect: true,
          isAlmostCorrect: false,
          feedback: 'Отлично! Верный ответ.',
          matchedAnswer: valid,
        };
      }
    }
  }

  // Check for 1-character typo (e.g. spelling of irregular verbs)
  for (const valid of allValid) {
    const normValid = normalizeText(valid);
    const dist = levenshteinDistance(user, normValid);
    if (dist === 1 && normValid.length > 3) {
      return {
        isCorrect: true,
        isAlmostCorrect: true,
        feedback: `Почти идеально! Небольшая опечатка в написании: правильно "${valid}".`,
        matchedAnswer: valid,
      };
    }
  }

  return {
    isCorrect: false,
    isAlmostCorrect: false,
    feedback: 'Неверно. Посмотрите правильную структуру ниже.',
    matchedAnswer: correctAnswer,
  };
}
