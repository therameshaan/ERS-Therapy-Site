"use client";

import { useState, useEffect } from 'react';
import { Activity, Wind, Heart, LucideIcon, Play, Square } from 'lucide-react';

type Routine = {
  id: string;
  name: string;
  icon: LucideIcon;
  inhale: number;
  hold1: number;
  exhale: number;
  hold2: number;
  description: string;
  totalTime: number;
};

const routines: Routine[] = [
  {
    id: '4-7-8',
    name: '4-7-8 Relaxing',
    icon: Activity,
    inhale: 4,
    hold1: 7,
    exhale: 8,
    hold2: 0,
    description: 'Inhale for 4s, hold for 7s, exhale for 8s. Great for falling asleep and deep relaxation.',
    totalTime: 19,
  },
  {
    id: 'box',
    name: 'Box Breathing',
    icon: Wind,
    inhale: 4,
    hold1: 4,
    exhale: 4,
    hold2: 4,
    description: 'Inhale for 4s, hold for 4s, exhale for 4s, hold for 4s. Used for focus and stress relief.',
    totalTime: 16,
  },
  {
    id: 'belly',
    name: 'Deep Calm',
    icon: Heart,
    inhale: 4,
    hold1: 0,
    exhale: 6,
    hold2: 0,
    description: 'Inhale deeply for 4s, exhale slowly for 6s. Simple and effective for immediate calm.',
    totalTime: 10,
  },
];

export default function Breathing() {
  const [selected, setSelected] = useState<Routine>(routines[0]);
  const [phase, setPhase] = useState<'inhale' | 'hold1' | 'exhale' | 'hold2' | 'idle'>('idle');
  const [timeLeft, setTimeLeft] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft <= 0) {
      let nextPhase = phase;
      let addCycle = false;
      
      switch (phase) {
        case 'inhale':
          nextPhase = selected.hold1 > 0 ? 'hold1' : 'exhale';
          break;
        case 'hold1':
          nextPhase = 'exhale';
          break;
        case 'exhale':
          nextPhase = selected.hold2 > 0 ? 'hold2' : 'inhale';
          if (nextPhase === 'inhale') addCycle = true;
          break;
        case 'hold2':
          nextPhase = 'inhale';
          addCycle = true;
          break;
        default:
          nextPhase = 'inhale';
      }
      
      if (addCycle) setCycleCount(c => c + 1);
      setPhase(nextPhase);
      
      const nextTime = nextPhase === 'inhale' ? selected.inhale : 
                       nextPhase === 'hold1' ? selected.hold1 : 
                       nextPhase === 'exhale' ? selected.exhale : 
                       selected.hold2;
      setTimeLeft(nextTime);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isActive, timeLeft, phase, selected]);

  const startBreathing = () => {
    setIsActive(true);
    setPhase('inhale');
    setTimeLeft(selected.inhale);
    setCycleCount(0);
  };

  const stopBreathing = () => {
    setIsActive(false);
    setPhase('idle');
    setTimeLeft(0);
  };

  const getPhaseLabel = (): string => {
    switch (phase) {
      case 'inhale': return 'Breathe In';
      case 'hold1': return 'Hold';
      case 'exhale': return 'Breathe Out';
      case 'hold2': return 'Hold';
      default: return 'Ready';
    }
  };

  const scaleFactor = () => {
    if (!isActive) return 1;
    if (phase === 'inhale' || phase === 'hold1') return 1.5;
    if (phase === 'exhale' || phase === 'hold2') return 0.8;
    return 1;
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-4">
          Mindful Breathing
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Take a moment to pause. Select a breathing exercise below to help you relax, focus, or reduce anxiety.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {routines.map((routine) => (
          <div
            key={routine.id}
            className={`glass-card cursor-pointer transform transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col h-full ${
              selected.id === routine.id 
                ? 'ring-2 ring-indigo-500 shadow-lg shadow-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-900/20' 
                : 'border-border hover:shadow-md'
            }`}
            onClick={() => {
              setSelected(routine);
              if (isActive) stopBreathing();
            }}
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-full mr-4 ${selected.id === routine.id ? 'bg-indigo-500 text-white' : 'bg-indigo-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400'}`}>
                <routine.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{routine.name}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow">
              {routine.description}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                {routine.inhale} - {routine.hold1} - {routine.exhale} - {routine.hold2}
              </span>
              <span className="text-xs font-semibold text-indigo-500">{routine.totalTime}s cycle</span>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card text-center p-10 mt-8 relative overflow-hidden bg-gradient-to-br from-white to-indigo-50/50 dark:from-gray-900 dark:to-gray-800/80">
        {/* Decorative background blurs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative z-10">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{selected.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              Follow the breathing circle. Get comfortable and relax your shoulders.
            </p>
          </div>

          <div className="relative h-72 w-72 mx-auto mb-12">
            {/* Background ring */}
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-indigo-100 dark:border-gray-700"></div>
            
            {/* Animated breathing circle */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 opacity-20 transition-transform ease-in-out"
              style={{
                transform: \`scale(\${scaleFactor()})\`,
                transitionDuration: \`\${isActive ? (phase === 'inhale' ? selected.inhale : phase === 'exhale' ? selected.exhale : 1) * 1000}ms\`
              }}
            ></div>
            
            {/* Inner dynamic content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {isActive ? (
                <div className="flex flex-col items-center justify-center animate-fade-in">
                  <span className="text-4xl font-black text-indigo-600 dark:text-indigo-400 mb-2">
                    {timeLeft}
                  </span>
                  <span className="text-xl font-medium tracking-widest uppercase text-gray-600 dark:text-gray-300">
                    {getPhaseLabel()}
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <Wind className="h-12 w-12 mb-3 opacity-50" />
                  <span className="font-medium text-lg text-gray-500 dark:text-gray-400">Ready</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-sm flex items-center space-x-2 border border-gray-100 dark:border-gray-700">
              <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Cycles</span>
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{cycleCount}</span>
            </div>
            
            {!isActive ? (
              <button
                onClick={startBreathing}
                className="btn-primary px-8 py-4 text-lg font-bold rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 flex items-center transform transition-transform hover:scale-105"
              >
                <Play className="h-5 w-5 mr-2 fill-current" />
                Begin Session
              </button>
            ) : (
              <button
                onClick={stopBreathing}
                className="btn-secondary px-8 py-4 text-lg font-bold rounded-full shadow-sm flex items-center transform transition-transform hover:scale-105"
              >
                <Square className="h-5 w-5 mr-2 fill-current" />
                Stop Session
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}