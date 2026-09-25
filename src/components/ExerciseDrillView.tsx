import React, { useState, useEffect, useRef } from 'react';
import { GrammarExercise, CambridgeUnit } from '../data/cambridgeUnits';
import { checkAnswer, CheckResult } from '../utils/answerChecker';
import { speakSentence } from '../utils/speech';
import {
  Volume2,
  CheckCircle2,
  XCircle,
  ArrowRight,
  BookOpen,
  Lightbulb,
  ChevronDown,
  Sparkles,
  RotateCcw,
} from 'lucide-react';

interface ExerciseDrillViewProps {
  exercises: GrammarExercise[];
  unit?: CambridgeUnit | null;
  onRecordResult: (exercise: GrammarExercise, isCorrect: boolean, userAnswer: string) => void;
  onFinishSession?: () => void;
  onOpenUnitGuide?: (unit: CambridgeUnit) => void;
  sessionTitle?: string;
}

export const ExerciseDrillView: React.FC<ExerciseDrillViewProps> = ({
  exercises,
  unit,
  onRecordResult,
  onFinishSession,
  onOpenUnitGuide,
  sessionTitle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [hasChecked, setHasChecked] = useState(false);
  const [checkResult, setCheckResult] = useState<CheckResult | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isRuleExpanded, setIsRuleExpanded] = useState(false);

  // Stats for the current session
  const [sessionCorrectCount, setSessionCorrectCount] = useState(0);

  // Virtual keyboard state for mobile
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const currentExercise = exercises[currentIndex];
  const isLastQuestion = currentIndex >= exercises.length - 1;

  // Auto-focus input on question change without closing keyboard
  useEffect(() => {
    setUserAnswer('');
    setHasChecked(false);
    setCheckResult(null);
    setShowHint(false);
    setIsRuleExpanded(false);

    // Keep focus immediately in the field so keyboard does not dismiss and reopen
    if (inputRef.current) {
      inputRef.current.focus();
    }
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 40);
    return () => clearTimeout(timer);
  }, [currentIndex, exercises]);

  // Smooth scroll card near top edge with a small offset (accounting for sticky header)
  const scrollToCardTop = () => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const offset = 64; // header height + margin
    const targetY = window.scrollY + rect.top - offset;
    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: 'smooth',
    });
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
    setTimeout(() => {
      scrollToCardTop();
    }, 150);
  };

  // Track virtual viewport resize/scroll for iPhone and browsers without interactive-widget
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    const handleViewportChange = () => {
      const kbHeight = Math.max(0, Math.round(window.innerHeight - vv.height - (vv.offsetTop || 0)));
      if (kbHeight > 80) {
        setKeyboardHeight(kbHeight);
        setIsKeyboardOpen(true);
      } else {
        setKeyboardHeight(0);
        setIsKeyboardOpen(false);
      }

      if (document.activeElement === inputRef.current) {
        scrollToCardTop();
      }
    };

    vv.addEventListener('resize', handleViewportChange);
    vv.addEventListener('scroll', handleViewportChange);
    return () => {
      vv.removeEventListener('resize', handleViewportChange);
      vv.removeEventListener('scroll', handleViewportChange);
    };
  }, []);

  // Handle checking the answer
  const handleCheck = () => {
    if (!currentExercise || !userAnswer.trim()) return;

    const result = checkAnswer(
      userAnswer,
      currentExercise.correctAnswer,
      currentExercise.acceptedAnswers
    );

    setCheckResult(result);
    setHasChecked(true);

    if (result.isCorrect) {
      setSessionCorrectCount((prev) => prev + 1);
    }

    onRecordResult(currentExercise, result.isCorrect, userAnswer.trim());
  };

  // Next exercise or finish
  const handleNext = () => {
    if (isLastQuestion) {
      if (onFinishSession) onFinishSession();
      setCurrentIndex((prev) => prev + 1); // trigger summary screen
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Keyboard shortcut: Enter to check or next
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!hasChecked) {
        if (userAnswer.trim()) handleCheck();
      } else {
        handleNext();
      }
    }
  };

  // Text-to-speech pronunciation
  const handleSpeak = () => {
    if (!currentExercise || isSpeaking) return;
    const fullSentence = `${currentExercise.sentenceBefore} ${currentExercise.correctAnswer} ${currentExercise.sentenceAfter}`.trim();
    setIsSpeaking(true);
    speakSentence(fullSentence, () => setIsSpeaking(false));
  };

  // Completion Screen
  if (currentIndex >= exercises.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-center max-w-xl mx-auto shadow-xs my-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-serif-book">
          Сессия успешно завершена!
        </h3>
        <p className="text-sm text-slate-600 mb-6">
          Вы прорешали все задания: <strong className="text-emerald-600">{sessionCorrectCount}</strong> из {exercises.length} верно ({Math.round((sessionCorrectCount / (exercises.length || 1)) * 100)}%).
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              setCurrentIndex(0);
              setSessionCorrectCount(0);
            }}
            className="w-full sm:w-auto min-h-[48px] px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Пройти снова</span>
          </button>
          {onFinishSession && (
            <button
              onClick={onFinishSession}
              className="w-full sm:w-auto min-h-[48px] px-6 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors cursor-pointer flex items-center justify-center"
            >
              К каталогу юнитов
            </button>
          )}
        </div>
      </div>
    );
  }

  // Dynamic width for cloze input based on content length
  const maxCharLength = Math.max(
    currentExercise.promptWord.length,
    userAnswer.length,
    currentExercise.correctAnswer.length
  );

  return (
    <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 pb-28 md:pb-8">
      {/* Exercise Header & Progress */}
      <div className="flex items-center justify-between text-xs text-slate-500 pb-2.5 border-b border-slate-200">
        <div className="flex items-center gap-2 truncate">
          {unit ? (
            <button
              onClick={() => onOpenUnitGuide && onOpenUnitGuide(unit)}
              className="text-sky-700 font-semibold hover:underline flex items-center gap-1 cursor-pointer truncate min-h-[36px]"
            >
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Юнит {unit.unitNumber}: {unit.titleRu}</span>
            </button>
          ) : (
            <span className="font-semibold text-slate-700 truncate">
              {sessionTitle || 'Тренажер грамматики'}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <span className="font-mono-code tabular-nums text-slate-600 font-medium">
            {currentIndex + 1} / {exercises.length}
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="font-mono-code tabular-nums text-emerald-700 font-semibold">
            {sessionCorrectCount} верн.
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-sky-600 h-full transition-all duration-300 rounded-full"
          style={{ width: `${((currentIndex + 1) / exercises.length) * 100}%` }}
        />
      </div>

      {/* Main Interactive Card - Clean White Styling */}
      <div
        ref={cardRef}
        className={`bg-white border rounded-2xl p-4 sm:p-7 transition-all shadow-xs scroll-mt-16 sm:scroll-mt-20 ${
          hasChecked
            ? checkResult?.isCorrect
              ? 'border-emerald-300 ring-1 ring-emerald-200'
              : 'border-rose-300 ring-1 ring-rose-200'
            : 'border-slate-200'
        }`}
      >
        {/* Card Header: instruction & speech */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <p className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Раскройте скобки в правильной форме
          </p>

          <button
            onClick={handleSpeak}
            disabled={isSpeaking}
            title="Прослушать произношение"
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-sky-700 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-sky-50 transition-colors cursor-pointer min-h-[44px]"
          >
            <Volume2 className={`w-4 h-4 shrink-0 ${isSpeaking ? 'animate-pulse text-sky-600' : ''}`} />
            <span className="hidden xs:inline">{isSpeaking ? 'Озвучивание...' : 'Озвучить'}</span>
          </button>
        </div>

        {/* The Sentence with In-line Cloze Input (wrapped in form with autocomplete off) */}
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            if (!hasChecked) {
              if (userAnswer.trim()) handleCheck();
            } else {
              handleNext();
            }
          }}
          className="my-3 sm:my-5"
        >
          <div className="text-[18px] sm:text-[20px] font-normal leading-relaxed text-slate-900 font-serif-book">
            <span>{currentExercise.sentenceBefore}</span>

            <span className="inline-block align-baseline mx-1">
              <input
                ref={inputRef}
                type="text"
                name="grammar-answer"
                value={userAnswer}
                readOnly={hasChecked}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={handleInputFocus}
                onBlur={() => setIsInputFocused(false)}
                placeholder={currentExercise.promptWord}
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="off"
                data-lpignore="true"
                data-form-type="other"
                spellCheck={false}
                enterKeyHint={hasChecked ? 'next' : 'go'}
                style={{
                  width: `${Math.max(8, maxCharLength + 2)}ch`,
                  fontSize: '18px',
                }}
                className={`font-sans font-medium px-2.5 py-1 text-center rounded-xl border transition-all max-w-[calc(100vw-64px)] focus:outline-none focus:ring-2 ${
                  hasChecked
                    ? checkResult?.isCorrect
                      ? 'border-emerald-500 bg-emerald-50/80 text-emerald-900 font-semibold'
                      : 'border-rose-500 bg-rose-50/80 text-rose-900 line-through'
                    : 'border-slate-300 bg-white text-slate-900 focus:border-sky-500 focus:ring-sky-200'
                }`}
              />
            </span>

            <span>{currentExercise.sentenceAfter}</span>
          </div>
        </form>

        {/* Target prompt helper */}
        <div className="text-xs text-slate-500 mt-2 mb-4 flex items-center gap-2">
          <span>Слово для изменения:</span>
          <span className="font-mono-code font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
            {currentExercise.promptWord}
          </span>
        </div>

        {/* Hint button before check & Mobile compact check button */}
        {!hasChecked ? (
          <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer min-h-[44px]"
            >
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{showHint ? 'Скрыть подсказку' : 'Подсказка по правилу'}</span>
            </button>

            {/* Mobile-only compact check button directly in the card next to Hint */}
            <button
              type="button"
              onClick={handleCheck}
              disabled={!userAnswer.trim()}
              className={`md:hidden min-h-[40px] px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-xs flex items-center gap-1.5 active:scale-95 ${
                userAnswer.trim()
                  ? 'bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>Проверить</span>
            </button>

            {/* Desktop-only inside card check button */}
            <button
              type="button"
              onClick={handleCheck}
              disabled={!userAnswer.trim()}
              className={`hidden md:flex min-h-[44px] items-center gap-2 px-5 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer shadow-xs ${
                userAnswer.trim()
                  ? 'bg-slate-900 text-white hover:bg-slate-800'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>Проверить ответ</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-700 text-slate-200 rounded">
                Enter
              </kbd>
            </button>
          </div>
        ) : (
          /* Mobile-only compact next button in the card after checking */
          <div className="flex items-center justify-end md:hidden pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={handleNext}
              className="min-h-[40px] px-3.5 py-1.5 text-xs font-semibold bg-sky-600 text-white hover:bg-sky-500 rounded-xl transition-colors cursor-pointer shadow-xs flex items-center gap-1.5 active:scale-95"
            >
              <span>{isLastQuestion ? 'Завершить урок' : 'Следующий пример'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Contextual Hint */}
        {showHint && !hasChecked && (
          <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-950 flex items-start gap-2.5">
            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Подсказка: </span>
              {currentExercise.hintRu}
            </div>
          </div>
        )}

        {/* Post-Check Section: Compact Rule & Translation */}
        {hasChecked && (
          <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
            {/* Status message */}
            <div className="flex items-center gap-2">
              {checkResult?.isCorrect ? (
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{checkResult.feedback}</span>
                </div>
              ) : (
                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold text-rose-800">
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>Неверно. Правильно:</span>
                  <span className="font-mono-code font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
                    {currentExercise.correctAnswer}
                  </span>
                </div>
              )}
            </div>

            {/* Full completed sentence in English & Russian (Compact) */}
            <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <div className="text-sm sm:text-base font-serif-book text-slate-900">
                <span>{currentExercise.sentenceBefore}</span>
                <span className="font-bold text-emerald-700 underline decoration-emerald-500 decoration-2 mx-1">
                  {checkResult?.matchedAnswer || currentExercise.correctAnswer}
                </span>
                <span>{currentExercise.sentenceAfter}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 italic">
                Перевод: {currentExercise.russianTranslation}
              </p>
            </div>

            {/* Quick formula / key hint */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              {currentExercise.ruleFormula && (
                <span className="text-xs font-mono-code font-semibold text-sky-900 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-lg">
                  {currentExercise.ruleFormula}
                </span>
              )}

              {/* Desktop inside card next button */}
              <button
                onClick={handleNext}
                className="hidden md:flex min-h-[44px] items-center gap-2 px-5 py-2 text-sm font-semibold bg-sky-600 text-white hover:bg-sky-500 rounded-xl transition-colors cursor-pointer shadow-xs ml-auto"
              >
                <span>{isLastQuestion ? 'Завершить урок' : 'Следующий пример'}</span>
                <ArrowRight className="w-4 h-4" />
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-sky-700 text-sky-100 rounded">
                  Enter
                </kbd>
              </button>
            </div>

            {/* Collapsible Detailed Cambridge Rule Breakdown */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsRuleExpanded(!isRuleExpanded)}
                className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center justify-between cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>{isRuleExpanded ? 'Скрыть подробный разбор' : 'Подробный кембриджский разбор правила'}</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 shrink-0 ${
                    isRuleExpanded ? 'rotate-180 text-sky-600' : 'text-slate-400'
                  }`}
                />
              </button>

              {isRuleExpanded && (
                <div className="mt-2 p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 animate-in fade-in duration-150">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {currentExercise.ruleExplanationRu}
                  </p>
                  {currentExercise.hintRu && (
                    <div className="pt-2 border-t border-slate-200 text-xs text-amber-900">
                      <strong className="font-semibold">Ключ к выбору: </strong>
                      {currentExercise.hintRu}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Helpful Hint on bottom (Desktop) */}
      <div className="hidden sm:flex items-center justify-between text-[11px] text-slate-400 px-1">
        <span>Enter: быстрая проверка ответа · повторный Enter: переход к следующему заданию</span>
        <span>Принимаются как полные формы, так и сокращения</span>
      </div>

      {/* BIG Prominent Action Button for Mobile above Tab Bar / Keyboard */}
      <div
        className="md:hidden fixed left-0 right-0 z-30 px-4 py-2.5 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_16px_rgba(0,0,0,0.05)] transition-[bottom] duration-150 ease-out"
        style={{
          bottom:
            keyboardHeight > 80
              ? `${keyboardHeight}px`
              : (isKeyboardOpen || isInputFocused)
                ? '0px'
                : 'max(calc(52px + env(safe-area-inset-bottom, 0px)), 56px)',
        }}
      >
        {!hasChecked ? (
          <button
            onClick={handleCheck}
            disabled={!userAnswer.trim()}
            className={`w-full min-h-[48px] px-6 text-base font-semibold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98 shadow-xs ${
              userAnswer.trim()
                ? 'bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <span>Проверить ответ</span>
            <kbd className="px-1.5 py-0.5 text-xs font-mono bg-slate-700 text-slate-200 rounded">
              Enter
            </kbd>
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full min-h-[48px] px-6 text-base font-semibold rounded-xl bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs active:scale-98"
          >
            <span>{isLastQuestion ? 'Завершить урок' : 'Следующий пример'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
