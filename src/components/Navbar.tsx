import React from 'react';
import { Flame, BookOpen, PenTool, AlertCircle, Zap, BookMarked, Bookmark } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

export type ActiveTab = 'units' | 'drill' | 'reading' | 'vocabulary' | 'mistakes';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  streakDays: number;
  accuracy: number;
  mistakesCount: number;
  savedWordsCount?: number;
  onStartDailyDrill: () => void;
  isBlitzActive?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  streakDays,
  accuracy,
  mistakesCount,
  savedWordsCount = 0,
  onStartDailyDrill,
  isBlitzActive = false,
}) => {
  return (
    <>
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-3">
          {/* Brand Wordmark */}
          <button
            onClick={() => setActiveTab('units')}
            className="text-left group cursor-pointer focus:outline-none min-h-[44px] flex items-center"
          >
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors font-serif-book">
              Cambridge Drill
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-1.5">
            <button
              onClick={() => setActiveTab('units')}
              className={`min-h-[44px] px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer rounded-xl ${
                activeTab === 'units'
                  ? 'text-sky-900 bg-sky-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Юниты
            </button>

            <button
              onClick={() => setActiveTab('drill')}
              className={`min-h-[44px] px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer rounded-xl ${
                activeTab === 'drill' && !isBlitzActive
                  ? 'text-sky-900 bg-sky-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Тренажер
            </button>

            <button
              onClick={() => setActiveTab('reading')}
              className={`min-h-[44px] px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer rounded-xl ${
                activeTab === 'reading'
                  ? 'text-sky-900 bg-sky-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Чтение
            </button>

            <button
              onClick={() => setActiveTab('vocabulary')}
              className={`min-h-[44px] px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer rounded-xl relative ${
                activeTab === 'vocabulary'
                  ? 'text-sky-900 bg-sky-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>Мои слова</span>
              {savedWordsCount > 0 && (
                <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 text-xs font-semibold text-sky-700 bg-sky-50 rounded-full">
                  {savedWordsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('mistakes')}
              className={`min-h-[44px] px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer rounded-xl relative ${
                activeTab === 'mistakes'
                  ? 'text-sky-900 bg-sky-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>Банк ошибок</span>
              {mistakesCount > 0 && (
                <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 text-xs font-bold text-rose-700 bg-rose-50 rounded-full">
                  {mistakesCount}
                </span>
              )}
            </button>
          </nav>

          {/* Right Header Zone: Stats & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick stats chips */}
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1 font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded-lg">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{streakDays} дн.</span>
              </span>

              <span className="hidden xs:inline-flex font-mono-code tabular-nums font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded-lg">
                {accuracy}%
              </span>
            </div>

            {/* PWA Install Button */}
            <PWAInstallButton compact={true} />

            {/* Desktop Blitz CTA */}
            <button
              onClick={onStartDailyDrill}
              className="hidden md:flex min-h-[44px] items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors whitespace-nowrap shadow-xs cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Дневной блиц (10)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fixed Bottom Tab Bar */}
      <nav
        aria-label="Мобильная навигация"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]"
        style={{
          paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 8px)',
        }}
      >
        <div className="grid grid-cols-5 px-1 pt-1">
          {/* Tab 1: Юниты */}
          <button
            onClick={() => setActiveTab('units')}
            className={`min-h-[48px] py-1 flex flex-col items-center justify-center gap-1 rounded-xl transition-colors cursor-pointer select-none active:scale-95 ${
              activeTab === 'units'
                ? 'text-sky-600 font-semibold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-5 h-5 shrink-0" />
            <span className="text-[10px] leading-none tracking-tight">Юниты</span>
          </button>

          {/* Tab 2: Тренажёр */}
          <button
            onClick={() => setActiveTab('drill')}
            className={`min-h-[48px] py-1 flex flex-col items-center justify-center gap-1 rounded-xl transition-colors cursor-pointer select-none active:scale-95 ${
              activeTab === 'drill' && !isBlitzActive
                ? 'text-sky-600 font-semibold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <PenTool className="w-5 h-5 shrink-0" />
            <span className="text-[10px] leading-none tracking-tight">Тренажёр</span>
          </button>

          {/* Tab 3: Чтение */}
          <button
            onClick={() => setActiveTab('reading')}
            className={`min-h-[48px] py-1 flex flex-col items-center justify-center gap-1 rounded-xl transition-colors cursor-pointer select-none active:scale-95 ${
              activeTab === 'reading'
                ? 'text-sky-600 font-semibold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookMarked className="w-5 h-5 shrink-0" />
            <span className="text-[10px] leading-none tracking-tight">Чтение</span>
          </button>

          {/* Tab 4: Мои слова */}
          <button
            onClick={() => setActiveTab('vocabulary')}
            className={`min-h-[48px] py-1 flex flex-col items-center justify-center gap-1 rounded-xl transition-colors cursor-pointer select-none relative active:scale-95 ${
              activeTab === 'vocabulary'
                ? 'text-sky-600 font-semibold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <div className="relative">
              <Bookmark className="w-5 h-5 shrink-0" />
              {savedWordsCount > 0 && (
                <span className="absolute -top-1 -right-2 min-w-[14px] h-3.5 px-1 rounded-full bg-sky-600 text-white text-[9px] font-bold flex items-center justify-center leading-none">
                  {savedWordsCount > 99 ? '99+' : savedWordsCount}
                </span>
              )}
            </div>
            <span className="text-[10px] leading-none tracking-tight">Слова</span>
          </button>

          {/* Tab 5: Ошибки */}
          <button
            onClick={() => setActiveTab('mistakes')}
            className={`min-h-[48px] py-1 flex flex-col items-center justify-center gap-1 rounded-xl transition-colors cursor-pointer select-none relative active:scale-95 ${
              activeTab === 'mistakes'
                ? 'text-sky-600 font-semibold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <div className="relative">
              <AlertCircle className="w-5 h-5 shrink-0" />
              {mistakesCount > 0 && (
                <span className="absolute -top-1 -right-2.5 min-w-[16px] h-4 px-1 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center leading-none">
                  {mistakesCount > 99 ? '99+' : mistakesCount}
                </span>
              )}
            </div>
            <span className="text-[10px] leading-none tracking-tight">Ошибки</span>
          </button>
        </div>
      </nav>
    </>
  );
};
