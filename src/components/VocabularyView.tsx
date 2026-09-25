import React, { useState, useEffect, useRef } from 'react';
import { SavedWord } from '../types/reading';
import { loadSavedWords, removeWord } from '../utils/readingStorage';
import { speakSentence } from '../utils/speech';
import { shuffleArray } from '../utils/shuffle';
import {
  Bookmark,
  Volume2,
  Trash2,
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Search,
  X,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

interface VocabularyViewProps {
  onGoToReading?: () => void;
}

export const VocabularyView: React.FC<VocabularyViewProps> = ({ onGoToReading }) => {
  const [words, setWords] = useState<SavedWord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Drill / Practice Mode states
  const [isDrillMode, setIsDrillMode] = useState(false);
  const [drillQueue, setDrillQueue] = useState<SavedWord[]>([]);
  const [drillIndex, setDrillIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [drillChecked, setDrillChecked] = useState(false);
  const [drillCorrectCount, setDrillCorrectCount] = useState(0);
  const drillInputRef = useRef<HTMLInputElement>(null);

  // Load words from localStorage on mount
  useEffect(() => {
    setWords(loadSavedWords());
  }, []);

  const reloadWords = () => {
    setWords(loadSavedWords());
  };

  const handleDelete = (wordId: string) => {
    const updated = removeWord(wordId);
    setWords(updated);
  };

  // Start Practice Drill
  const handleStartDrill = () => {
    if (words.length === 0) return;
    setDrillQueue(shuffleArray([...words]));
    setDrillIndex(0);
    setUserAnswer('');
    setDrillChecked(false);
    setDrillCorrectCount(0);
    setIsDrillMode(true);
    if (drillInputRef.current) {
      drillInputRef.current.focus();
    }
    setTimeout(() => drillInputRef.current?.focus(), 50);
  };

  // Check Drill Answer
  const currentDrillWord = drillQueue[drillIndex];
  const isCorrectAnswer =
    currentDrillWord &&
    userAnswer.trim().toLowerCase() === currentDrillWord.word.trim().toLowerCase();

  const handleCheckDrill = () => {
    if (!userAnswer.trim() || !currentDrillWord) return;
    setDrillChecked(true);
    if (isCorrectAnswer) {
      setDrillCorrectCount((prev) => prev + 1);
    }
    drillInputRef.current?.focus({ preventScroll: true });
  };

  const handleNextDrill = () => {
    setUserAnswer('');
    setDrillChecked(false);
    setDrillIndex((prev) => prev + 1);
    if (drillInputRef.current) {
      drillInputRef.current.focus({ preventScroll: true });
    }
    setTimeout(() => drillInputRef.current?.focus({ preventScroll: true }), 40);
  };

  // Filtered words
  const filteredWords = words.filter(
    (w) =>
      w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.ru.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Drill Completion Screen
  if (isDrillMode && drillIndex >= drillQueue.length) {
    const total = drillQueue.length;
    const percentage = total > 0 ? Math.round((drillCorrectCount / total) * 100) : 0;

    return (
      <div className="max-w-xl mx-auto space-y-5 pb-24 md:pb-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-center shadow-xs">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-serif-book text-slate-900 mb-1">
            Повторение завершено!
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Правильно вспомнили: <strong className="text-emerald-700">{drillCorrectCount}</strong> из {total} слов ({percentage}%).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleStartDrill}
              className="w-full sm:w-auto min-h-[48px] px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Повторить ещё раз</span>
            </button>
            <button
              onClick={() => setIsDrillMode(false)}
              className="w-full sm:w-auto min-h-[48px] px-6 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer flex items-center justify-center"
            >
              К списку слов
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Drill Question Screen
  if (isDrillMode && currentDrillWord) {
    // Generate context gap sentence
    const escaped = currentDrillWord.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
    const clozeContext = currentDrillWord.contextSentenceEn
      ? currentDrillWord.contextSentenceEn.replace(regex, '_______')
      : null;

    return (
      <div className="max-w-xl mx-auto space-y-5 pb-28 md:pb-8">
        {/* Drill Header */}
        <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200">
          <button
            onClick={() => setIsDrillMode(false)}
            className="text-sky-700 font-semibold hover:underline cursor-pointer min-h-[36px] flex items-center"
          >
            ← Завершить повторение
          </button>
          <span className="font-mono font-semibold">
            {drillIndex + 1} / {drillQueue.length}
          </span>
        </div>

        {/* Drill Flashcard */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
          <div className="text-center space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Перевод на русский:
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-book text-slate-900">
              {currentDrillWord.ru}
            </h3>
            {currentDrillWord.note && (
              <span className="inline-block text-xs font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 mt-1">
                {currentDrillWord.note}
              </span>
            )}
          </div>

          {/* Context with Cloze Gap */}
          {clozeContext && (
            <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl text-xs sm:text-sm text-slate-700 font-serif-book text-center leading-relaxed">
              «{clozeContext}»
            </div>
          )}

          {/* Input field for user */}
          <form
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              if (!drillChecked) {
                if (userAnswer.trim()) handleCheckDrill();
              } else {
                handleNextDrill();
              }
            }}
            className="space-y-4"
          >
            <div className="text-center">
              <input
                ref={drillInputRef}
                type="text"
                name="grammar-answer"
                value={userAnswer}
                readOnly={drillChecked}
                onChange={(e) => setUserAnswer(e.target.value)}
                onFocus={(e) => {
                  const target = e.currentTarget;
                  setTimeout(() => {
                    const rect = target.getBoundingClientRect();
                    const offset = 70;
                    const targetY = window.scrollY + rect.top - offset;
                    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
                  }, 150);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    if (!drillChecked) {
                      if (userAnswer.trim()) handleCheckDrill();
                    } else {
                      handleNextDrill();
                    }
                  }
                }}
                placeholder="Впишите английское слово..."
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="off"
                data-lpignore="true"
                data-form-type="other"
                spellCheck={false}
                enterKeyHint={drillChecked ? 'next' : 'go'}
                className="w-full min-h-[48px] px-4 py-2.5 text-center text-lg font-medium border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 bg-white text-slate-900"
              />
            </div>

            {!drillChecked ? (
              <button
                type="submit"
                onPointerDown={(e) => e.preventDefault()}
                onMouseDown={(e) => e.preventDefault()}
                disabled={!userAnswer.trim()}
                className="w-full min-h-[48px] text-sm font-semibold rounded-xl bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-40 transition-all cursor-pointer shadow-xs active:scale-98 touch-manipulation"
                style={{ touchAction: 'manipulation' }}
              >
                Проверить
              </button>
            ) : (
              <div className="space-y-4">
                {isCorrectAnswer ? (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-emerald-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Верно: {currentDrillWord.word}!</span>
                  </div>
                ) : (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-center space-y-1">
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-rose-800">
                      <XCircle className="w-5 h-5 text-rose-600" />
                      <span>Правильный ответ:</span>
                      <strong className="font-mono text-slate-900 font-bold underline">
                        {currentDrillWord.word}
                      </strong>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onPointerDown={(e) => e.preventDefault()}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={handleNextDrill}
                  className="w-full min-h-[48px] text-sm font-semibold rounded-xl bg-sky-600 text-white hover:bg-sky-500 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs active:scale-98 touch-manipulation"
                  style={{ touchAction: 'manipulation' }}
                >
                  <span>{drillIndex < drillQueue.length - 1 ? 'Следующее слово' : 'Завершить'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }

  // Normal List View
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-24 md:pb-8">
      {/* Header zone */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-sky-600" />
            <h1 className="text-xl sm:text-2xl font-bold font-serif-book text-slate-900">
              Мои слова ({words.length})
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Слова, сохранённые во время чтения текстов, с переводом и оригинальным контекстом.
          </p>
        </div>

        {words.length > 0 && (
          <button
            onClick={handleStartDrill}
            className="min-h-[44px] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs active:scale-95 shrink-0"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Режим повторения</span>
          </button>
        )}
      </div>

      {/* Search Input */}
      {words.length > 0 && (
        <div className="relative w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск по сохранённым словам и переводам..."
            className="w-full min-h-[44px] pl-10 pr-10 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 bg-white text-slate-900"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Очистить поиск"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* Words Grid */}
      {filteredWords.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {filteredWords.map((word) => (
            <div
              key={word.id}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold font-serif-book text-slate-900">
                      {word.word}
                    </h3>
                    <p className="text-sm font-semibold text-sky-800 mt-0.5">
                      {word.ru}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => speakSentence(word.word)}
                      className="p-1.5 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer transition-colors"
                      title="Озвучить слово"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(word.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer transition-colors"
                      title="Удалить из словаря"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {word.note && (
                  <span className="inline-block text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    {word.note}
                  </span>
                )}

                {word.contextSentenceEn && (
                  <div className="pt-2 text-xs text-slate-600 border-t border-slate-100 space-y-0.5">
                    <p className="font-serif-book text-slate-800 leading-relaxed">
                      «{word.contextSentenceEn}»
                    </p>
                    {word.contextSentenceRu && (
                      <p className="text-slate-400 italic">{word.contextSentenceRu}</p>
                    )}
                  </div>
                )}
              </div>

              {word.readingTitle && (
                <div className="pt-2 mt-2 border-t border-slate-50 text-[10px] text-slate-400">
                  Из текста: {word.readingTitle}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : words.length > 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center max-w-md mx-auto">
          <p className="text-sm font-medium text-slate-700 mb-2">
            Слов по запросу "{searchQuery}" не найдено.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="min-h-[44px] px-4 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl cursor-pointer"
          >
            Сбросить поиск
          </button>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 text-center max-w-md mx-auto shadow-2xs">
          <div className="w-14 h-14 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-3">
            <Bookmark className="w-7 h-7" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 font-serif-book">
            Ваш словарь пока пуст
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
            Открывайте тексты во вкладке «Чтение», нажимайте на любые незнакомые слова и добавляйте их в словарь одной кнопкой.
          </p>

          {onGoToReading && (
            <button
              onClick={onGoToReading}
              className="min-h-[44px] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto shadow-xs active:scale-95"
            >
              <BookOpen className="w-4 h-4" />
              <span>Перейти к текстам</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
