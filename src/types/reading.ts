import { GrammarExercise } from '../data/cambridgeUnits';

export interface ReadingSentence {
  en: string;
  ru: string;
}

export interface ReadingParagraph {
  sentences: ReadingSentence[];
}

export interface ReadingGlossaryEntry {
  ru: string;
  note?: string;
}

export interface ReadingQuestion {
  question: string;
  answer: string;
  acceptedAnswers: string[];
  explanationRu?: string;
}

export interface ReadingItem {
  id: string;
  title: string;
  author: string;
  source: string;
  license: string;
  level: 'A1-A2' | 'B1-B2' | 'C1-C2';
  topic: string;
  readingMinutes: number;
  wordCount: number;
  descriptionRu: string;
  paragraphs: ReadingParagraph[];
  glossary: Record<string, ReadingGlossaryEntry>; // [word in lowercase]: { ru, note? }
  questions: ReadingQuestion[];
  gapExercises: GrammarExercise[];
}

export interface ReadingSummary {
  id: string;
  title: string;
  author: string;
  source: string;
  license: string;
  level: 'A1-A2' | 'B1-B2' | 'C1-C2';
  topic: string;
  readingMinutes: number;
  wordCount: number;
  descriptionRu: string;
}

export interface SavedWord {
  id: string; // e.g. lowercase word
  word: string;
  ru: string;
  note?: string;
  contextSentenceEn: string;
  contextSentenceRu?: string;
  readingId?: string;
  readingTitle?: string;
  addedAt: number;
}
