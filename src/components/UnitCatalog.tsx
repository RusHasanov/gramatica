import React, { useState } from 'react';
import { CAMBRIDGE_UNITS, CambridgeUnit } from '../data/cambridgeUnits';
import { BookOpen, Search, Play, CheckCircle2, X } from 'lucide-react';

interface UnitCatalogProps {
  onSelectUnit: (unit: CambridgeUnit) => void;
  onOpenUnitGuide: (unit: CambridgeUnit) => void;
  completedUnitIds: string[];
}

export const UnitCatalog: React.FC<UnitCatalogProps> = ({
  onSelectUnit,
  onOpenUnitGuide,
  completedUnitIds,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filtering
  const filteredUnits = CAMBRIDGE_UNITS.filter((unit) => {
    const matchesSearch =
      unit.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.titleRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.keyFormula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.ruleSummaryRu.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLevel = selectedLevel === 'all' || unit.level === selectedLevel;
    const matchesCategory = selectedCategory === 'all' || unit.category === selectedCategory;

    return matchesSearch && matchesLevel && matchesCategory;
  });

  return (
    <div className="space-y-6 sm:space-y-8 max-w-7xl mx-auto pb-20 md:pb-8">
      {/* Editorial Hero Banner - Clean White / Light Cambridge Styling */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white text-slate-900 shadow-xs">
        <img
          src="/src/assets/images/cambridge_study_desk_1790171215958.jpg"
          alt="Cambridge grammar textbook study desk"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-sky-50/60" />

        <div className="relative p-5 sm:p-8 md:p-10 max-w-3xl space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-sky-700">
            <span className="bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">Кембриджская методика</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Murphy & Hewings</span>
          </div>

          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold font-serif-book tracking-tight text-slate-900 leading-tight">
            Грамматика через осознанный ввод и мгновенную проверку
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl font-sans">
            Вместо пассивного кликанья по карточкам вы вписываете правильную форму глагола или связку,
            закрепляя кембриджский канон и мышечную память.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <button
              onClick={() => onSelectUnit(CAMBRIDGE_UNITS[0])}
              className="min-h-[44px] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2 shadow-xs"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Начать с Юнита 1 (Present Tenses)</span>
            </button>

            <button
              onClick={() => onSelectUnit(CAMBRIDGE_UNITS[2])}
              className="min-h-[44px] px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-all active:scale-98 cursor-pointer border border-slate-200 flex items-center justify-center"
            >
              Юнит 3: Present Perfect vs Past Simple
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar (White surfaces) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
        {/* Search Box */}
        <div className="relative w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск по теме (past, perfect, conditionals, will)..."
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

        {/* Level Filter Chips */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5 px-0.5">
            Уровень сложности
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-0.5 -mx-0.5">
            {[
              { id: 'all', label: 'Все уровни' },
              { id: 'A1-A2', label: 'A1-A2 (Essential Red)' },
              { id: 'B1-B2', label: 'B1-B2 (Grammar in Use Blue)' },
              { id: 'C1-C2', label: 'C1-C2 (Advanced Green)' },
            ].map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevel(lvl.id)}
                className={`min-h-[44px] px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all active:scale-95 cursor-pointer shrink-0 flex items-center justify-center ${
                  selectedLevel === lvl.id
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Chips */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5 px-0.5">
            Грамматический раздел
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-0.5 -mx-0.5 text-xs">
            {[
              { id: 'all', label: 'Все темы' },
              { id: 'Tenses', label: 'Времена глаголов' },
              { id: 'Conditionals', label: 'Условные предложения (If)' },
              { id: 'Passive', label: 'Пассивный залог' },
              { id: 'Modals', label: 'Модальные глаголы' },
              { id: 'Articles & Prepositions', label: 'Артикли и предлоги' },
              { id: 'Adjectives & Comparisons', label: 'Степени сравнения' },
              { id: 'Questions & Word Order', label: 'Вопросы и структуры' },
              { id: 'Clauses & Gerunds', label: 'Герундий и обороты' },
              { id: 'Advanced', label: 'Продвинутые C1' },
              { id: 'Real Life', label: 'Реальные ситуации' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`min-h-[44px] px-3.5 py-2 rounded-xl whitespace-nowrap transition-all active:scale-95 cursor-pointer shrink-0 flex items-center justify-center font-medium ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-2xs font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Single-column on mobile, responsive grid on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredUnits.map((unit) => {
          const isCompleted = completedUnitIds.includes(unit.id);

          return (
            <div
              key={unit.id}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 hover:border-slate-300 hover:shadow-2xs transition-all flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                {/* Meta line */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="font-mono-code font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                      Unit {unit.unitNumber}
                    </span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span>{unit.level}</span>
                  </div>

                  {isCompleted && (
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-xs bg-emerald-50 px-2 py-0.5 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Освоен
                    </span>
                  )}
                </div>

                {/* Titles */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-serif-book leading-snug">
                    {unit.titleEn}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{unit.titleRu}</p>
                </div>

                {/* Formula snippet */}
                <div className="p-2.5 bg-slate-50 rounded-xl text-xs font-mono-code text-slate-700 border border-slate-100 line-clamp-2">
                  {unit.keyFormula}
                </div>

                {/* Excerpt */}
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {unit.ruleSummaryRu}
                </p>
              </div>

              {/* Action buttons (min-height 44px each, touch friendly) */}
              <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenUnitGuide(unit)}
                  className="min-h-[44px] px-3 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer flex items-center gap-1.5 active:scale-95"
                >
                  <BookOpen className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Правило</span>
                </button>

                <button
                  onClick={() => onSelectUnit(unit)}
                  className="min-h-[44px] px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-2xs active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Решать ({unit.exercises.length})</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredUnits.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center max-w-md mx-auto">
          <p className="text-sm font-medium text-slate-700 mb-2">
            По запросу "{searchQuery}" ничего не найдено.
          </p>
          <p className="text-xs text-slate-500 mb-4">
            Попробуйте сбросить фильтры или изменить поисковый запрос.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedLevel('all');
              setSelectedCategory('all');
            }}
            className="min-h-[44px] px-5 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            Сбросить фильтры
          </button>
        </div>
      )}
    </div>
  );
};
