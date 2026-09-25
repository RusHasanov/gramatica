import React, { useState, useEffect, useRef } from 'react';
import { ReadingItem, ReadingSentence, SavedWord } from '../types/reading';
import { GrammarExercise } from '../data/cambridgeUnits';
import { speakSentence, pauseSpeech, resumeSpeech, stopSpeech } from '../utils/speech';
import { isWordSaved, saveWord, removeWord } from '../utils/readingStorage';
import { checkAnswer } from '../utils/answerChecker';
import {
  ArrowLeft,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Check,
  Languages,
  X,
  Sparkles,
  BookOpen,
} from 'lucide-react';

interface ReadingDetailViewProps {
  reading: ReadingItem;
  onBack: () => void;
  isCompleted: boolean;
  onToggleCompleted: () => void;
  onRecordExerciseResult: (
    exercise: GrammarExercise,
    isCorrect: boolean,
    userAnswer: string,
    unitId?: string,
    unitTitle?: string
  ) => void;
  onWordSavedChanged?: () => void;
}

export const ReadingDetailView: React.FC<ReadingDetailViewProps> = ({
  reading,
  onBack,
  isCompleted,
  onToggleCompleted,
  onRecordExerciseResult,
  onWordSavedChanged,
}) => {
  // Font size state (px)
  const [fontSize, setFontSize] = useState<number>(18);

  // Visible sentence translations (keyed by "paraIdx-sentIdx")
  const [visibleTranslations, setVisibleTranslations] = useState<Record<string, boolean>>({});

  // Active word popover state
  const [activeWordData, setActiveWordData] = useState<{
    word: string;
    cleanWord: string;
    ru: string;
    note?: string;
    contextEn: string;
    contextRu: string;
    isSaved: boolean;
  } | null>(null);

  // Full-text continuous speech state
  const [isPlayingFullText, setIsPlayingFullText] = useState(false);
  const [isPausedFullText, setIsPausedFullText] = useState(false);
  const [currentSpokenIndex, setCurrentSpokenIndex] = useState<number | null>(null);

  // Comprehension questions states
  const [questionAnswers, setQuestionAnswers] = useState<Record<number, string>>({});
  const [questionResults, setQuestionResults] = useState<Record<number, { isCorrect: boolean; checked: boolean }>>({});

  // Gap exercises states
  const [gapAnswers, setGapAnswers] = useState<Record<string, string>>({});
  const [gapResults, setGapResults] = useState<
    Record<string, { isCorrect: boolean; checked: boolean; correctAnswer: string; explanation: string }>
  >({});

  // Flatten all sentences for continuous speech
  const allSentences: { sentence: ReadingSentence; paraIdx: number; sentIdx: number }[] = [];
  reading.paragraphs.forEach((p, pIdx) => {
    p.sentences.forEach((s, sIdx) => {
      allSentences.push({ sentence: s, paraIdx: pIdx, sentIdx: sIdx });
    });
  });

  // Stop speech when unmounting
  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

  // Continuous speech handler
  const playSentenceAtIndex = (index: number) => {
    if (index >= allSentences.length) {
      setIsPlayingFullText(false);
      setIsPausedFullText(false);
      setCurrentSpokenIndex(null);
      return;
    }

    setCurrentSpokenIndex(index);
    const item = allSentences[index];
    speakSentence(item.sentence.en, () => {
      playSentenceAtIndex(index + 1);
    });
  };

  const handleStartFullSpeech = () => {
    if (isPausedFullText) {
      resumeSpeech();
      setIsPausedFullText(false);
      setIsPlayingFullText(true);
      return;
    }
    stopSpeech();
    setIsPlayingFullText(true);
    setIsPausedFullText(false);
    playSentenceAtIndex(0);
  };

  const handlePauseFullSpeech = () => {
    pauseSpeech();
    setIsPausedFullText(true);
  };

  const handleStopFullSpeech = () => {
    stopSpeech();
    setIsPlayingFullText(false);
    setIsPausedFullText(false);
    setCurrentSpokenIndex(null);
  };

  // Play single sentence
  const handlePlaySingleSentence = (text: string) => {
    handleStopFullSpeech();
    speakSentence(text);
  };

  // Toggle single sentence translation
  const toggleSentenceTranslation = (key: string) => {
    setVisibleTranslations((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Word click handler
  const handleWordClick = (rawWord: string, sentenceEn: string, sentenceRu: string) => {
    const clean = rawWord.toLowerCase().replace(/[^a-z'-]/g, '').trim();
    if (!clean || clean.length < 2) return;

    // Check glossary direct, or without 's', 'ed', 'ing'
    let entry = reading.glossary[clean];
    let matchedWord = clean;

    if (!entry && clean.endsWith('s')) {
      const singular = clean.slice(0, -1);
      if (reading.glossary[singular]) {
        entry = reading.glossary[singular];
        matchedWord = singular;
      }
    }
    if (!entry && clean.endsWith('ed')) {
      const base = clean.slice(0, -2);
      if (reading.glossary[base]) {
        entry = reading.glossary[base];
        matchedWord = base;
      }
    }
    if (!entry && clean.endsWith('ing')) {
      const base = clean.slice(0, -3);
      if (reading.glossary[base]) {
        entry = reading.glossary[base];
        matchedWord = base;
      }
    }

    const isSaved = isWordSaved(matchedWord);

    setActiveWordData({
      word: rawWord.replace(/[^a-zA-Z'-]/g, ''),
      cleanWord: matchedWord,
      ru: entry ? entry.ru : 'Слово из контекста',
      note: entry?.note,
      contextEn: sentenceEn,
      contextRu: sentenceRu,
      isSaved,
    });
  };

  // Toggle saving active word
  const handleToggleSaveActiveWord = () => {
    if (!activeWordData) return;

    if (activeWordData.isSaved) {
      removeWord(activeWordData.cleanWord);
      setActiveWordData({ ...activeWordData, isSaved: false });
    } else {
      const newWord: SavedWord = {
        id: activeWordData.cleanWord,
        word: activeWordData.word,
        ru: activeWordData.ru,
        note: activeWordData.note,
        contextSentenceEn: activeWordData.contextEn,
        contextSentenceRu: activeWordData.contextRu,
        readingId: reading.id,
        readingTitle: reading.title,
        addedAt: Date.now(),
      };
      saveWord(newWord);
      setActiveWordData({ ...activeWordData, isSaved: true });
    }
    if (onWordSavedChanged) onWordSavedChanged();
  };

  // Check question answer
  const handleCheckQuestion = (qIdx: number) => {
    const userVal = (questionAnswers[qIdx] || '').trim().toLowerCase();
    const q = reading.questions[qIdx];
    if (!userVal) return;

    const accepted = [q.answer.toLowerCase(), ...(q.acceptedAnswers || []).map((a) => a.toLowerCase())];
    const isCorrect = accepted.some((a) => userVal === a || userVal.includes(a) || a.includes(userVal));

    setQuestionResults((prev) => ({
      ...prev,
      [qIdx]: { isCorrect, checked: true },
    }));
  };

  // Check gap exercise answer
  const handleCheckGap = (exercise: GrammarExercise) => {
    const userVal = (gapAnswers[exercise.id] || '').trim();
    if (!userVal) return;

    const result = checkAnswer(userVal, exercise.correctAnswer, exercise.acceptedAnswers);

    setGapResults((prev) => ({
      ...prev,
      [exercise.id]: {
        isCorrect: result.isCorrect,
        checked: true,
        correctAnswer: exercise.correctAnswer,
        explanation: exercise.ruleExplanationRu,
      },
    }));

    // Record into global Mistakes Bank / Stats
    onRecordExerciseResult(exercise, result.isCorrect, userVal, reading.id, reading.title);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-28 md:pb-12 text-slate-900">
      {/* Top Navigation & Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <button
          onClick={onBack}
          className="min-h-[44px] px-2 text-xs sm:text-sm font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1.5 cursor-pointer active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ко всем текстам</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Typography Zoom A- / A+ */}
          <div className="flex items-center bg-slate-100 rounded-xl p-1 text-xs">
            <button
              onClick={() => setFontSize((prev) => Math.max(14, prev - 1))}
              disabled={fontSize <= 14}
              title="Уменьшить шрифт"
              className="min-h-[36px] min-w-[36px] px-2 font-bold rounded-lg hover:bg-white text-slate-700 disabled:opacity-40 cursor-pointer"
            >
              A-
            </button>
            <span className="px-2 font-mono text-[11px] text-slate-500">{fontSize}px</span>
            <button
              onClick={() => setFontSize((prev) => Math.min(26, prev + 1))}
              disabled={fontSize >= 26}
              title="Увеличить шрифт"
              className="min-h-[36px] min-w-[36px] px-2 font-bold rounded-lg hover:bg-white text-slate-700 disabled:opacity-40 cursor-pointer"
            >
              A+
            </button>
          </div>

          {/* Mark as read toggle */}
          <button
            onClick={onToggleCompleted}
            className={`min-h-[44px] px-3.5 py-1.5 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 border ${
              isCompleted
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-slate-400'}`} />
            <span>{isCompleted ? 'Прочитано' : 'Отметить как прочитано'}</span>
          </button>
        </div>
      </div>

      {/* Title & Metadata Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-2xs space-y-2">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-mono-code font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-100">
            {reading.level}
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="text-slate-600 font-medium">{reading.topic}</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="text-slate-500">~{reading.readingMinutes} мин чтения</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold font-serif-book text-slate-900 leading-tight">
          {reading.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">{reading.descriptionRu}</p>
      </div>

      {/* Audio Master Control Bar: «Слушать весь текст» with pause */}
      <div className="bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-4 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
          <Volume2 className="w-4 h-4 text-sky-600 shrink-0" />
          <span>
            {isPlayingFullText && !isPausedFullText
              ? `Озвучивание: предложение ${(currentSpokenIndex ?? 0) + 1} из ${allSentences.length}`
              : isPausedFullText
              ? 'Аудио на паузе'
              : 'Озвучивание всего текста (British English)'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {!isPlayingFullText || isPausedFullText ? (
            <button
              onClick={handleStartFullSpeech}
              className="min-h-[44px] px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs active:scale-95"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{isPausedFullText ? 'Продолжить' : 'Слушать весь текст'}</span>
            </button>
          ) : (
            <button
              onClick={handlePauseFullSpeech}
              className="min-h-[44px] px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 bg-amber-50 border border-amber-200 hover:bg-amber-100 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
            >
              <Pause className="w-4 h-4 fill-amber-700 text-amber-700" />
              <span>Пауза</span>
            </button>
          )}

          {isPlayingFullText && (
            <button
              onClick={handleStopFullSpeech}
              className="min-h-[44px] px-3.5 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer flex items-center gap-1 active:scale-95"
              title="Остановить"
            >
              <Square className="w-3.5 h-3.5 fill-slate-600" />
              <span>Стоп</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Text Reader Container */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-xs space-y-6">
        <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-100 pb-2 flex items-center justify-between">
          <span>Нажмите на любое слово для перевода · значки справа переводят и озвучивают предложение</span>
        </div>

        {reading.paragraphs.map((paragraph, pIdx) => (
          <div key={pIdx} className="space-y-3">
            {paragraph.sentences.map((sent, sIdx) => {
              const sentenceKey = `${pIdx}-${sIdx}`;
              const isTranslationOpen = !!visibleTranslations[sentenceKey];

              // Find if this sentence is the currently spoken one
              const globalIndex = allSentences.findIndex(
                (item) => item.paraIdx === pIdx && item.sentIdx === sIdx
              );
              const isCurrentlySpoken = isPlayingFullText && currentSpokenIndex === globalIndex;

              // Tokenize words
              const tokens = sent.en.split(/(\s+|[.,!?;:—"“”'’()]+)/);

              return (
                <div
                  key={sentenceKey}
                  className={`p-2.5 sm:p-3 rounded-xl transition-all ${
                    isCurrentlySpoken
                      ? 'bg-sky-50 ring-2 ring-sky-300'
                      : 'hover:bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    {/* The English Sentence with Clickable Words */}
                    <div
                      className="font-serif-book leading-relaxed flex-1"
                      style={{ fontSize: `${fontSize}px` }}
                    >
                      {tokens.map((token, tIdx) => {
                        const isWord = /[a-zA-Z]/.test(token);
                        if (!isWord) {
                          return <span key={tIdx}>{token}</span>;
                        }

                        const clean = token.toLowerCase().replace(/[^a-z'-]/g, '');
                        const isGlossaryWord = !!reading.glossary[clean];

                        return (
                          <span
                            key={tIdx}
                            onClick={() => handleWordClick(token, sent.en, sent.ru)}
                            className={`cursor-pointer rounded transition-colors ${
                              isGlossaryWord
                                ? 'underline decoration-sky-400 decoration-dotted underline-offset-4 hover:bg-sky-100 text-sky-950 font-medium'
                                : 'hover:bg-slate-100 text-slate-900'
                            }`}
                            title="Нажмите для перевода"
                          >
                            {token}
                          </span>
                        );
                      })}
                    </div>

                    {/* Sentence Action Buttons: Speak & Translate */}
                    <div className="flex items-center gap-1 shrink-0 pt-0.5">
                      <button
                        onClick={() => handlePlaySingleSentence(sent.en)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-sky-50 min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer transition-colors"
                        title="Озвучить предложение"
                        aria-label="Озвучить предложение"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => toggleSentenceTranslation(sentenceKey)}
                        className={`p-1.5 rounded-lg min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer transition-colors ${
                          isTranslationOpen
                            ? 'bg-sky-50 text-sky-700'
                            : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                        }`}
                        title="Показать / скрыть перевод"
                        aria-label="Перевод"
                      >
                        <Languages className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Russian Translation Dropdown */}
                  {isTranslationOpen && (
                    <div className="mt-2 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600 italic font-sans leading-relaxed animate-in fade-in duration-150">
                      {sent.ru}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Section 1: Comprehension Questions */}
      {reading.questions && reading.questions.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-sky-600" />
            <h2 className="text-lg font-bold font-serif-book text-slate-900">
              Вопросы на понимание текста
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Впишите краткий или полный ответ на английском языке на основе прочитанного.
          </p>

          <div className="space-y-4 pt-2">
            {reading.questions.map((q, idx) => {
              const res = questionResults[idx];
              const ansVal = questionAnswers[idx] || '';

              return (
                <div key={idx} className="p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                  <p className="text-sm font-semibold text-slate-800">
                    {idx + 1}. {q.question}
                  </p>

                  <form
                    autoComplete="off"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleCheckQuestion(idx);
                    }}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
                  >
                    <input
                      type="text"
                      name="grammar-answer"
                      value={ansVal}
                      readOnly={res?.checked && res.isCorrect}
                      onChange={(e) =>
                        setQuestionAnswers((prev) => ({
                          ...prev,
                          [idx]: e.target.value,
                        }))
                      }
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleCheckQuestion(idx);
                        }
                      }}
                      onFocus={(e) => {
                        const target = e.currentTarget;
                        setTimeout(() => {
                          const rect = target.getBoundingClientRect();
                          const offset = 70;
                          const targetY = window.scrollY + rect.top - offset;
                          window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
                        }, 150);
                      }}
                      placeholder="Ваш ответ на английском..."
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="off"
                      data-lpignore="true"
                      data-form-type="other"
                      spellCheck={false}
                      enterKeyHint="go"
                      className="flex-1 min-h-[44px] px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 text-slate-900"
                    />

                    <button
                      type="submit"
                      disabled={!ansVal.trim()}
                      className="min-h-[44px] px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer disabled:opacity-40 active:scale-95"
                    >
                      Проверить
                    </button>
                  </form>

                  {res?.checked && (
                    <div className="pt-1 text-xs">
                      {res.isCorrect ? (
                        <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Верно!</span>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-rose-700 font-semibold">
                            <XCircle className="w-4 h-4 text-rose-600" />
                            <span>Не совсем точно. Авторский ответ:</span>
                            <span className="font-mono font-bold text-slate-800">{q.answer}</span>
                          </div>
                          {q.explanationRu && (
                            <p className="text-slate-500 italic">{q.explanationRu}</p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Section 2: Gap Exercises from the text */}
      {reading.gapExercises && reading.gapExercises.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-sky-600" />
            <h2 className="text-lg font-bold font-serif-book text-slate-900">
              Грамматические упражнения по тексту
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Раскройте скобки в правильной форме. Допущенные ошибки автоматически сохраняются в общий Банк ошибок.
          </p>

          <div className="space-y-4 pt-2">
            {reading.gapExercises.map((ex, idx) => {
              const res = gapResults[ex.id];
              const userVal = gapAnswers[ex.id] || '';

              return (
                <div key={ex.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                  <div className="text-xs font-semibold text-slate-500 flex items-center justify-between">
                    <span>Упражнение {idx + 1}</span>
                    <span className="font-mono text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {ex.promptWord}
                    </span>
                  </div>

                  <form
                    autoComplete="off"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleCheckGap(ex);
                    }}
                    className="space-y-2.5"
                  >
                    <div className="text-base font-serif-book text-slate-900 leading-relaxed">
                      <span>{ex.sentenceBefore} </span>
                      <span className="inline-block align-baseline mx-1">
                        <input
                          type="text"
                          name="grammar-answer"
                          value={userVal}
                          readOnly={res?.checked && res.isCorrect}
                          onChange={(e) =>
                            setGapAnswers((prev) => ({
                              ...prev,
                              [ex.id]: e.target.value,
                            }))
                          }
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleCheckGap(ex);
                            }
                          }}
                          onFocus={(e) => {
                            const target = e.currentTarget;
                            setTimeout(() => {
                              const rect = target.getBoundingClientRect();
                              const offset = 70;
                              const targetY = window.scrollY + rect.top - offset;
                              window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
                            }, 150);
                          }}
                          placeholder={ex.promptWord}
                          autoCapitalize="off"
                          autoCorrect="off"
                          autoComplete="off"
                          data-lpignore="true"
                          data-form-type="other"
                          spellCheck={false}
                          enterKeyHint="go"
                          className="font-sans font-medium px-2.5 py-1 text-center rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                          style={{ minWidth: '120px' }}
                        />
                      </span>
                      <span> {ex.sentenceAfter}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        type="submit"
                        disabled={!userVal.trim()}
                        className="min-h-[44px] px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer disabled:opacity-40 active:scale-95"
                      >
                        Проверить форму
                      </button>
                    </div>
                  </form>

                  {res?.checked && (
                    <div className="pt-2 border-t border-slate-200/80 space-y-1 text-xs">
                      {res.isCorrect ? (
                        <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Правильно!</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-rose-700 font-semibold">
                          <XCircle className="w-4 h-4 text-rose-600" />
                          <span>Неверно. Правильно:</span>
                          <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            {res.correctAnswer}
                          </span>
                        </div>
                      )}
                      <p className="text-slate-600">{ex.ruleExplanationRu}</p>
                      <p className="text-slate-500 italic">Перевод: {ex.russianTranslation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Active Word Popover / Bottom Sheet */}
      {activeWordData && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-2xs p-0 sm:p-4 animate-in fade-in duration-150">
          <div
            className="w-full sm:max-w-md bg-white border border-slate-200 rounded-t-2xl sm:rounded-2xl p-5 shadow-2xl space-y-4 animate-in slide-in-from-bottom duration-200"
            style={{
              paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 20px)',
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold font-serif-book text-slate-900">
                    {activeWordData.word}
                  </h3>
                  {activeWordData.note && (
                    <span className="text-[11px] font-mono font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                      {activeWordData.note}
                    </span>
                  )}
                </div>
                <p className="text-base font-semibold text-slate-800 mt-1">
                  {activeWordData.ru}
                </p>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => speakSentence(activeWordData.word)}
                  className="p-2 rounded-xl text-slate-500 hover:text-sky-600 hover:bg-sky-50 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                  title="Произнести"
                  aria-label="Произнести"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveWordData(null)}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-xl min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                  aria-label="Закрыть"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Context Sentence */}
            <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1 text-xs">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Контекст из текста:
              </span>
              <p className="font-serif-book text-slate-900 leading-relaxed text-sm">
                {activeWordData.contextEn}
              </p>
              <p className="text-slate-500 italic">{activeWordData.contextRu}</p>
            </div>

            {/* Button: «В мои слова» */}
            <button
              onClick={handleToggleSaveActiveWord}
              className={`w-full min-h-[48px] rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98 shadow-xs ${
                activeWordData.isSaved
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              {activeWordData.isSaved ? (
                <>
                  <BookmarkCheck className="w-4 h-4 text-emerald-600" />
                  <span>В моих словах (нажмите, чтобы удалить)</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  <span>Добавить в «Мои слова»</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
