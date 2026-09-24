import React, { useState } from 'react';
import { usePWAInstall } from '../utils/usePWAInstall';
import { Download, Share2, X, PlusSquare } from 'lucide-react';

export const PWAInstallButton: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already installed, hide prompt
  if (isInstalled) {
    return null;
  }

  // Android / Chrome / Edge
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className={`flex items-center justify-center gap-2 rounded-xl font-medium transition-all active:scale-95 cursor-pointer min-h-[44px] ${
          compact
            ? 'px-3 py-2 text-xs bg-sky-600 hover:bg-sky-500 text-white shadow-2xs'
            : 'px-4 py-2.5 text-sm bg-sky-600 hover:bg-sky-500 text-white shadow-xs'
        }`}
        title="Установить приложение на телефон"
      >
        <Download className="w-4 h-4 shrink-0" />
        <span>Установить PWA</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className={`flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-all active:scale-95 cursor-pointer min-h-[44px] ${
            compact ? 'px-2.5 py-1.5 text-xs' : 'px-3.5 py-2 text-xs sm:text-sm'
          }`}
          title="Как установить на iPhone"
        >
          <Share2 className="w-3.5 h-3.5 text-sky-600" />
          <span>На экран «Домой»</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-200">
            <div className="w-full max-w-sm rounded-2xl bg-white border border-slate-200 p-6 shadow-2xl text-left relative">
              <button
                onClick={() => setShowIOSGuide(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Установка на iPhone / iPad
                  </h3>
                  <p className="text-xs text-slate-500">
                    Работает офлайн без интернета
                  </p>
                </div>
              </div>

              <ol className="space-y-3 text-xs sm:text-sm text-slate-600 mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-700 text-xs">
                    1
                  </span>
                  <span>
                    Нажмите иконку <strong>«Поделиться»</strong> <Share2 className="inline w-3.5 h-3.5 text-sky-600" /> в нижней панели Safari.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-700 text-xs">
                    2
                  </span>
                  <span>
                    Пролистайте меню вниз и выберите <strong className="text-slate-900">«На экран "Домой"»</strong> <PlusSquare className="inline w-3.5 h-3.5 text-sky-600" />.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-700 text-xs">
                    3
                  </span>
                  <span>
                    Нажмите <strong>«Добавить»</strong> в правом верхнем углу.
                  </span>
                </li>
              </ol>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-full min-h-[44px] rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Понятно
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
