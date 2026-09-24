import React from 'react';
import { CambridgeUnit } from '../data/cambridgeUnits';
import { X, BookOpen, AlertTriangle, KeyRound, Clock, Play } from 'lucide-react';

interface UnitGuideModalProps {
  unit: CambridgeUnit | null;
  onClose: () => void;
  onStartDrill: (unit: CambridgeUnit) => void;
}

export const UnitGuideModal: React.FC<UnitGuideModalProps> = ({
  unit,
  onClose,
  onStartDrill,
}) => {
  if (!unit) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/40 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-[92vh]">
        {/* Header - Clean White */}
        <div className="bg-white border-b border-slate-200 text-slate-900 p-4 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs text-sky-700 font-semibold mb-1 pr-10">
            <span>Юнит {unit.unitNumber}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>{unit.book}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">{unit.level}</span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold font-serif-book tracking-tight text-slate-900 mb-0.5 pr-8">
            {unit.titleEn}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">{unit.titleRu}</p>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto flex-1 text-slate-800">
          {/* Main Rule Summary */}
          <div>
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-sky-600" />
              Суть кембриджского правила
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200">
              {unit.ruleSummaryRu}
            </p>
          </div>

          {/* Key Formula */}
          <div>
            <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5 text-sky-600" />
              Ключевая формула структуры
            </h3>
            <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl font-mono-code text-xs sm:text-sm text-sky-950 font-semibold">
              {unit.keyFormula}
            </div>
          </div>

          {/* Time markers */}
          {unit.markerWords.length > 0 && (
            <div>
              <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                Слова-маркеры и контекст
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {unit.markerWords.map((word) => (
                  <span
                    key={word}
                    className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Common pitfalls */}
          {unit.pitfallsRu && (
            <div className="p-3.5 sm:p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                Типичная ошибка русскоговорящих
              </h3>
              <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                {unit.pitfallsRu}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-slate-500">
            {unit.exercises.length} упражнений
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="min-h-[44px] px-3.5 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Закрыть
            </button>
            <button
              onClick={() => {
                onClose();
                onStartDrill(unit);
              }}
              className="min-h-[44px] px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 shadow-xs"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Решать юнит</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
