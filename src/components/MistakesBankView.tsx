import React, { useState } from 'react';
import { SavedMistake } from '../utils/storage';
import { GrammarExercise } from '../data/cambridgeUnits';
import { AlertCircle, CheckCircle2, Play, Trash2 } from 'lucide-react';

interface MistakesBankViewProps {
  mistakes: SavedMistake[];
  onStartMistakesDrill: (exercises: GrammarExercise[]) => void;
  onClearMistakes: () => void;
}

export const MistakesBankView: React.FC<MistakesBankViewProps> = ({
  mistakes,
  onStartMistakesDrill,
  onClearMistakes,
}) => {
  const [filter, setFilter] = useState<'unresolved' | 'all'>('unresolved');

  const unresolvedMistakes = mistakes.filter((m) => !m.resolved);
  const displayedMistakes = filter === 'unresolved' ? unresolvedMistakes : mistakes;

  return (
    <div className="max-w-4xl mx-auto space-y-5 pb-24 md:pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif-book text-slate-900">
            Кабинет работы над ошибками
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Здесь автоматически сохраняются примеры, в которых вы ошиблись. 
            Повторное решение закрепляет грамматический навык до автоматизма.
          </p>
        </div>

        {unresolvedMistakes.length > 0 && (
          <button
            onClick={() => onStartMistakesDrill(unresolvedMistakes.map((m) => m.exercise))}
            className="min-h-[44px] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 shrink-0 shadow-xs"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Прорешать ошибки ({unresolvedMistakes.length})</span>
          </button>
        )}
      </div>

      {/* Control bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto no-scrollbar">
          <button
            onClick={() => setFilter('unresolved')}
            className={`min-h-[44px] px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              filter === 'unresolved'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Требуют повторения ({unresolvedMistakes.length})
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`min-h-[44px] px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              filter === 'all'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Все ошибки ({mistakes.length})
          </button>
        </div>

        {mistakes.length > 0 && (
          <button
            onClick={onClearMistakes}
            className="min-h-[44px] text-xs text-slate-400 hover:text-rose-600 transition-colors flex items-center gap-1.5 cursor-pointer self-end sm:self-auto px-2"
          >
            <Trash2 className="w-4 h-4" />
            <span>Очистить историю</span>
          </button>
        )}
      </div>

      {/* List of mistakes */}
      {displayedMistakes.length > 0 ? (
        <div className="space-y-3.5">
          {displayedMistakes.map((item, idx) => (
            <div
              key={`${item.exercise.id}-${idx}`}
              className={`p-4 sm:p-5 rounded-2xl border transition-all bg-white ${
                item.resolved
                  ? 'border-slate-200 opacity-75'
                  : 'border-rose-200 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-semibold text-slate-700">
                  {item.unitTitle || 'Кембриджское упражнение'}
                </span>
                <span className="flex items-center gap-1">
                  {item.resolved ? (
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Исправлено
                    </span>
                  ) : (
                    <span className="text-rose-700 font-semibold flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Требует закрепления
                    </span>
                  )}
                </span>
              </div>

              {/* The Sentence */}
              <div className="text-base text-slate-900 font-serif-book mb-3">
                <span>{item.exercise.sentenceBefore}</span>
                <span className="font-bold underline text-emerald-700 mx-1">
                  {item.exercise.correctAnswer}
                </span>
                <span>{item.exercise.sentenceAfter}</span>
              </div>

              {/* Contrast comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100 mb-2.5">
                <div>
                  <span className="text-slate-400">Ваш ответ:</span>
                  <p className="font-mono-code font-bold text-rose-700 line-through mt-0.5">
                    {item.userAnswer || '(пусто)'}
                  </p>
                </div>
                <div>
                  <span className="text-slate-400">Правильный ответ:</span>
                  <p className="font-mono-code font-bold text-emerald-700 mt-0.5">
                    {item.exercise.correctAnswer}
                  </p>
                </div>
              </div>

              {/* Rule reminder */}
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Разбор правила: </strong>
                {item.exercise.ruleExplanationRu}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center max-w-md mx-auto my-6 shadow-2xs">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 font-serif-book">
            Ошибок нет!
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            {filter === 'unresolved'
              ? 'Все сделанные ранее ошибки успешно исправлены или вы еще не совершали ошибок.'
              : 'История ошибок пуста.'}
          </p>
        </div>
      )}
    </div>
  );
};
