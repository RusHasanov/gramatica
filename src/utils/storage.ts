import { GrammarExercise } from '../data/cambridgeUnits';

export interface UserStats {
  streakDays: number;
  lastActiveDate: string; // YYYY-MM-DD
  totalSolved: number;
  totalCorrect: number;
  completedUnitIds: string[];
  mistakes: SavedMistake[];
}

export interface SavedMistake {
  exercise: GrammarExercise;
  unitId?: string;
  unitTitle?: string;
  userAnswer: string;
  timestamp: number;
  resolved: boolean;
}

const STORAGE_KEY = 'cambridge_grammar_drill_v1';

export function getTodayKey(): string {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

export function loadUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        streakDays: 1,
        lastActiveDate: getTodayKey(),
        totalSolved: 0,
        totalCorrect: 0,
        completedUnitIds: [],
        mistakes: [],
      };
    }
    const data: UserStats = JSON.parse(raw);
    return data;
  } catch (e) {
    return {
      streakDays: 1,
      lastActiveDate: getTodayKey(),
      totalSolved: 0,
      totalCorrect: 0,
      completedUnitIds: [],
      mistakes: [],
    };
  }
}

export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save user stats', e);
  }
}

export function recordExerciseResult(
  exercise: GrammarExercise,
  isCorrect: boolean,
  userAnswer: string,
  unitId?: string,
  unitTitle?: string
): UserStats {
  const stats = loadUserStats();
  const today = getTodayKey();

  // Streak logic
  if (stats.lastActiveDate !== today) {
    const lastDate = new Date(stats.lastActiveDate);
    const currDate = new Date(today);
    const diffDays = Math.round((currDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));

    if (diffDays === 1) {
      stats.streakDays += 1;
    } else if (diffDays > 1) {
      stats.streakDays = 1;
    }
    stats.lastActiveDate = today;
  }

  stats.totalSolved += 1;
  if (isCorrect) {
    stats.totalCorrect += 1;
    // If it was previously in mistakes, mark it as resolved or remove
    const existingIdx = stats.mistakes.findIndex((m) => m.exercise.id === exercise.id);
    if (existingIdx !== -1) {
      stats.mistakes[existingIdx].resolved = true;
    }
  } else {
    // Record mistake
    const existingIdx = stats.mistakes.findIndex((m) => m.exercise.id === exercise.id);
    if (existingIdx !== -1) {
      stats.mistakes[existingIdx].userAnswer = userAnswer;
      stats.mistakes[existingIdx].timestamp = Date.now();
      stats.mistakes[existingIdx].resolved = false;
    } else {
      stats.mistakes.unshift({
        exercise,
        unitId,
        unitTitle,
        userAnswer,
        timestamp: Date.now(),
        resolved: false,
      });
    }
  }

  saveUserStats(stats);
  return stats;
}
