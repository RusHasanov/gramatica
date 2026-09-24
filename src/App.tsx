/**
 * Cambridge Grammar Drill - Offline Application
 * Based on Raymond Murphy & Martin Hewings grammar series.
 */

import React, { useState, useEffect } from 'react';
import { CAMBRIDGE_UNITS, CambridgeUnit, GrammarExercise } from './data/cambridgeUnits';
import {
  UserStats,
  loadUserStats,
  recordExerciseResult,
  saveUserStats,
} from './utils/storage';
import { shuffleArray } from './utils/shuffle';
import { useOnlineStatus } from './utils/useOnlineStatus';
import { Navbar, ActiveTab } from './components/Navbar';
import { UnitCatalog } from './components/UnitCatalog';
import { ExerciseDrillView } from './components/ExerciseDrillView';
import { UnitGuideModal } from './components/UnitGuideModal';
import { MistakesBankView } from './components/MistakesBankView';
import { BookOpen, ArrowLeft, WifiOff } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('units');
  const [userStats, setUserStats] = useState<UserStats>(loadUserStats);
  const isOnline = useOnlineStatus();

  // Current drilling session (shuffled with Fisher-Yates)
  const [drillExercises, setDrillExercises] = useState<GrammarExercise[]>(() =>
    shuffleArray(CAMBRIDGE_UNITS[0].exercises)
  );
  const [currentDrillUnit, setCurrentDrillUnit] = useState<CambridgeUnit | null>(
    CAMBRIDGE_UNITS[0]
  );
  const [drillSessionTitle, setDrillSessionTitle] = useState<string>(
    'Юнит 1: Present Continuous vs Present Simple'
  );
  const [isBlitzActive, setIsBlitzActive] = useState(false);

  // Modal for reading full grammar rules
  const [guideModalUnit, setGuideModalUnit] = useState<CambridgeUnit | null>(null);

  // Sync stats from storage on mount
  useEffect(() => {
    setUserStats(loadUserStats());
  }, []);

  // Compute accuracy
  const accuracy =
    userStats.totalSolved > 0
      ? Math.round((userStats.totalCorrect / userStats.totalSolved) * 100)
      : 100;

  const unresolvedMistakesCount = userStats.mistakes.filter((m) => !m.resolved).length;

  // Handle unit selection from catalog - shuffle exercises with Fisher-Yates
  const handleSelectUnit = (unit: CambridgeUnit) => {
    setCurrentDrillUnit(unit);
    setIsBlitzActive(false);
    // Shuffle unit exercises on each launch as requested
    setDrillExercises(shuffleArray(unit.exercises));
    setDrillSessionTitle(`Юнит ${unit.unitNumber}: ${unit.titleRu}`);
    setActiveTab('drill');
  };

  // Start Daily Blitz (10 random exercises from all units, shuffled with Fisher-Yates)
  const handleStartDailyBlitz = () => {
    const allExercises: GrammarExercise[] = CAMBRIDGE_UNITS.flatMap((u) => u.exercises);
    const selected = shuffleArray(allExercises).slice(0, 10);

    setCurrentDrillUnit(null);
    setIsBlitzActive(true);
    setDrillExercises(selected);
    setDrillSessionTitle('Дневной кембриджский блиц (10 заданий)');
    setActiveTab('drill');
  };

  // Start drill on recorded mistakes
  const handleStartMistakesDrill = (exercises: GrammarExercise[]) => {
    if (exercises.length === 0) return;
    setCurrentDrillUnit(null);
    setIsBlitzActive(false);
    setDrillExercises(shuffleArray(exercises));
    setDrillSessionTitle('Работа над ошибками: закрепление слабых мест');
    setActiveTab('drill');
  };

  // Clear all mistakes history
  const handleClearMistakes = () => {
    const updated: UserStats = {
      ...userStats,
      mistakes: [],
    };
    saveUserStats(updated);
    setUserStats(updated);
  };

  // Handle exercise recording
  const handleRecordResult = (
    exercise: GrammarExercise,
    isCorrect: boolean,
    userAnswer: string
  ) => {
    const updated = recordExerciseResult(
      exercise,
      isCorrect,
      userAnswer,
      currentDrillUnit?.id,
      currentDrillUnit?.titleRu
    );
    setUserStats({ ...updated });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-sky-100 selection:text-sky-900 font-sans overflow-x-hidden">
      {/* Offline Status Badge */}
      {!isOnline && (
        <div className="bg-amber-600 text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-1.5 sticky top-0 z-50 shadow-xs">
          <WifiOff className="w-3.5 h-3.5" />
          <span>Офлайн-режим: все упражнения и правила доступны без интернета</span>
        </div>
      )}

      {/* Navigation (Top bar + Mobile bottom tab bar) */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab !== 'drill') setIsBlitzActive(false);
          setActiveTab(tab);
        }}
        streakDays={userStats.streakDays}
        accuracy={accuracy}
        mistakesCount={unresolvedMistakesCount}
        onStartDailyDrill={handleStartDailyBlitz}
        isBlitzActive={isBlitzActive && activeTab === 'drill'}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Tab 1: Units Catalog */}
        {activeTab === 'units' && (
          <UnitCatalog
            onSelectUnit={handleSelectUnit}
            onOpenUnitGuide={(unit) => setGuideModalUnit(unit)}
            completedUnitIds={userStats.completedUnitIds}
          />
        )}

        {/* Tab 2: Interactive Drill View */}
        {activeTab === 'drill' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  setIsBlitzActive(false);
                  setActiveTab('units');
                }}
                className="min-h-[44px] px-2 text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Ко всем юнитам</span>
              </button>

              {currentDrillUnit && (
                <button
                  onClick={() => setGuideModalUnit(currentDrillUnit)}
                  className="min-h-[44px] text-xs font-medium text-slate-700 hover:text-slate-900 flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-2xs cursor-pointer active:scale-95"
                >
                  <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                  <span>Шпаргалка</span>
                </button>
              )}
            </div>

            <ExerciseDrillView
              exercises={drillExercises}
              unit={currentDrillUnit}
              sessionTitle={drillSessionTitle}
              onRecordResult={handleRecordResult}
              onFinishSession={() => {
                setIsBlitzActive(false);
                setActiveTab('units');
              }}
              onOpenUnitGuide={(unit) => setGuideModalUnit(unit)}
            />
          </div>
        )}

        {/* Tab 3: Mistakes Bank */}
        {activeTab === 'mistakes' && (
          <MistakesBankView
            mistakes={userStats.mistakes}
            onStartMistakesDrill={handleStartMistakesDrill}
            onClearMistakes={handleClearMistakes}
          />
        )}
      </main>

      {/* Unit Guide Modal Dialog */}
      <UnitGuideModal
        unit={guideModalUnit}
        onClose={() => setGuideModalUnit(null)}
        onStartDrill={(unit) => {
          setGuideModalUnit(null);
          handleSelectUnit(unit);
        }}
      />

      {/* Editorial Footer (hidden on mobile to make room for bottom nav) */}
      <footer className="hidden md:block border-t border-slate-200 bg-white py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Grammar Drill · Офлайн-тренажер по мотивам English Grammar in Use (Raymond Murphy) и Advanced Grammar in Use (Martin Hewings).
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('units')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Юниты
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button
              onClick={() => setActiveTab('drill')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Тренажер
            </button>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <button
              onClick={() => setActiveTab('mistakes')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Банк ошибок
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
