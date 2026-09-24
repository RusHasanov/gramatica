import { SavedWord } from '../types/reading';

const SAVED_WORDS_KEY = 'cambridge_saved_vocabulary_v1';
const COMPLETED_READINGS_KEY = 'cambridge_completed_readings_v1';

export function loadSavedWords(): SavedWord[] {
  try {
    const raw = localStorage.getItem(SAVED_WORDS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load saved words', e);
    return [];
  }
}

export function saveWord(word: SavedWord): SavedWord[] {
  const current = loadSavedWords();
  const existingIdx = current.findIndex((w) => w.id === word.id);
  let updated: SavedWord[];
  if (existingIdx !== -1) {
    updated = [...current];
    updated[existingIdx] = word;
  } else {
    updated = [word, ...current];
  }
  try {
    localStorage.setItem(SAVED_WORDS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save word', e);
  }
  return updated;
}

export function removeWord(wordId: string): SavedWord[] {
  const current = loadSavedWords();
  const updated = current.filter((w) => w.id !== wordId);
  try {
    localStorage.setItem(SAVED_WORDS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to remove word', e);
  }
  return updated;
}

export function isWordSaved(word: string): boolean {
  const current = loadSavedWords();
  const id = word.toLowerCase().trim();
  return current.some((w) => w.id === id);
}

export function loadCompletedReadingIds(): string[] {
  try {
    const raw = localStorage.getItem(COMPLETED_READINGS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export function toggleReadingCompleted(readingId: string): { completedIds: string[]; isNowCompleted: boolean } {
  const current = loadCompletedReadingIds();
  const exists = current.includes(readingId);
  let updated: string[];
  if (exists) {
    updated = current.filter((id) => id !== readingId);
  } else {
    updated = [...current, readingId];
  }
  try {
    localStorage.setItem(COMPLETED_READINGS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update completed readings', e);
  }
  return { completedIds: updated, isNowCompleted: !exists };
}

export function markReadingCompleted(readingId: string): string[] {
  const current = loadCompletedReadingIds();
  if (current.includes(readingId)) return current;
  const updated = [...current, readingId];
  try {
    localStorage.setItem(COMPLETED_READINGS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save completed reading', e);
  }
  return updated;
}
