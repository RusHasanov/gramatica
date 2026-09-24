import React, { useState } from 'react';
import { READINGS_INDEX } from '../data/readings';
import { ReadingSummary } from '../types/reading';
import { BookOpen, Clock, CheckCircle2, Search, X, Sparkles, ArrowRight, User } from 'lucide-react';

interface ReadingCatalogProps {
  onSelectReading: (id: string) => void;
  completedReadingIds: string[];
}

export const ReadingCatalog: React.FC<ReadingCatalogProps> = ({
  onSelectReading,
  completedReadingIds,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');

  const filteredReadings = READINGS_INDEX.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.descriptionRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.topic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || item.level === selectedLevel;
    const matchesTopic = selectedTopic === 'all' || item.topic === selectedTopic;
    return matchesSearch && matchesLevel && matchesTopic;
  });

  const topics = ['all', ...Array.from(new Set(READINGS_INDEX.map((r) => r.topic)))];

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-24 md:pb-8">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-sky-600" />
          <span>Кембриджское чтение в оригинале</span>
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif-book text-slate-900 leading-snug">
          Адаптированные тексты с кликабельным глоссарием
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed max-w-3xl">
          Читайте аутентичные тексты, нажимайте на любые слова для мгновенного перевода и добавления в личный словарь. 
          Слушайте предложения британским произношением и закрепляйте материал вопросами и упражнениями.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3.5">
        {/* Search Input */}
        <div className="relative w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск текстов по названию или теме..."
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
              { id: 'A1-A2', label: 'A1-A2 (Начальный)' },
              { id: 'B1-B2', label: 'B1-B2 (Средний)' },
              { id: 'C1-C2', label: 'C1-C2 (Продвинутый)' },
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

        {/* Topic Filter Chips */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5 px-0.5">
            Тематика
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-0.5 -mx-0.5 text-xs">
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTopic(t)}
                className={`min-h-[44px] px-3.5 py-2 rounded-xl whitespace-nowrap transition-all active:scale-95 cursor-pointer shrink-0 flex items-center justify-center font-medium ${
                  selectedTopic === t
                    ? 'bg-slate-900 text-white shadow-2xs font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {t === 'all' ? 'Все темы' : t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* List of Readings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredReadings.map((reading) => {
          const isCompleted = completedReadingIds.includes(reading.id);

          return (
            <div
              key={reading.id}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 hover:border-slate-300 hover:shadow-2xs transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Meta Top Line */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono-code font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                      {reading.level}
                    </span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-slate-600 font-medium">{reading.topic}</span>
                  </div>

                  {isCompleted && (
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-xs bg-emerald-50 px-2 py-0.5 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Прочитано
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-serif-book leading-snug">
                    {reading.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-3 leading-relaxed">
                    {reading.descriptionRu}
                  </p>
                </div>

                {/* Stats badge */}
                <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>~{reading.readingMinutes} мин</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>{reading.wordCount} слов</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">
                  {reading.source}
                </span>

                <button
                  onClick={() => onSelectReading(reading.id)}
                  className="min-h-[44px] px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs active:scale-95"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Читать</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredReadings.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center max-w-md mx-auto">
          <p className="text-sm font-medium text-slate-700 mb-2">
            Текстов по выбранным фильтрам не найдено.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedLevel('all');
              setSelectedTopic('all');
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
