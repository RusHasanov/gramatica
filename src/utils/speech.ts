/**
 * Browser SpeechSynthesis wrapper for authentic British/English pronunciation.
 */

let cachedVoice: SpeechSynthesisVoice | null = null;

function getEnglishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  if (cachedVoice) return cachedVoice;

  const voices = window.speechSynthesis.getVoices();
  // Prefer British English for Cambridge style
  const gbVoice = voices.find(
    (v) => (v.lang === 'en-GB' || v.lang.startsWith('en_GB')) && !v.name.includes('Google')
  ) || voices.find((v) => v.lang === 'en-GB' || v.lang.startsWith('en_GB'));

  const usVoice = voices.find((v) => v.lang.startsWith('en'));
  cachedVoice = gbVoice || usVoice || null;
  return cachedVoice;
}

export function speakSentence(text: string, onEnd?: () => void): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    if (onEnd) onEnd();
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const cleanText = text.replace(/_+/g, '').replace(/\[.*?\]/g, '').trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'en-GB';
  utterance.rate = 0.92; // Slightly measured pace for language learning
  utterance.pitch = 1.0;

  const voice = getEnglishVoice();
  if (voice) {
    utterance.voice = voice;
  }

  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
  }

  window.speechSynthesis.speak(utterance);
}

export function pauseSpeech(): void {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.pause();
  }
}

export function resumeSpeech(): void {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.resume();
  }
}

export function stopSpeech(): void {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

// Ensure voices are loaded
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoice = null;
    getEnglishVoice();
  };
}
