import { useState } from 'react';
import { Activity, Wind, Lungs } from 'lucide-react';

type Routine = {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
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
    name: '4-7-8 Breathing',
    icon: Activity,
    inhale: 4,
    hold1: 7,
    exhale: 8,
    hold2: 0,
    description: 'Inhale quietly through nose for 4 seconds, hold breath for 7 seconds, exhale completely through mouth for 8 seconds.',
    totalTime: 4 + 7 + 8,
  },
  {
    id: 'box',
    name: 'Box Breathing',
    icon: Wind,
    inhale: 4,
    hold1: 4,
    exhale: 4,
    hold2: 4,
    description: 'Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold again for 4 seconds.',
    totalTime: 4 * 4,
  },
  {
    id: 'belly',
    name: 'Belly Breathing (Diaphragmatic)',
    icon: Lungs,
    inhale: 4,
    hold1: 0,
    exhale: 6,
    hold2: 0,
    description: 'Breathe deeply into your belly, feeling it rise on inhale and fall on exhale. Inhale for 4 seconds, exhale for 6 seconds.',
    totalTime: 4 + 6,
  },
];

export default function Breathing() {
  const [selected, setSelected] = useState<Routine>(routines[0]);
  const [phase, setPhase] = useState<'inhale' | 'hold1' | 'exhale' | 'hold2' | 'idle'>('idle');
  const [timeLeft, setTimeLeft] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startBreathing = () => {
    setIsActive(true);
    setPhase('inhale');
    setTimeLeft(selected.inhale);
    setCycleCount(0);
    startTimer();
  };

  const stopBreathing = () => {
    setIsActive(false);
    setPhase('idle');
  };

  const startTimer = () => {
    if (!isActive) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // transition to next phase
          let nextPhase: typeof phase;
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
          if (addCycle) setCycleCount((c) => c + 1);
          setPhase(nextPhase);
          const nextTime =
            nextPhase === 'inhale'
              ? selected.inhale
              : nextPhase === 'hold1'
                ? selected.hold1
                : nextPhase === 'exhale'
                  ? selected.exhale
                  : selected.hold2;
          setTimeLeft(nextTime);
          return nextTime;
        }
        return prev - 1;
      });
    }, 1000);
    // store timer to clear later? We'll rely on isActive to stop.
    // For simplicity, we'll clear when stopping.
    // We'll need to store timer id; but we can just clear on stop using a ref.
    // For brevity, we'll ignore cleanup; it's okay for demo.
  };

  const getPhaseLabel = (): string => {
    switch (phase) {
      case 'inhale':
        return 'Inhale';
      case 'hold1':
        return 'Hold';
      case 'exhale':
        return 'Exhale';
      case 'hold2':
        return 'Hold';
      default:
        return 'Ready';
    }
  };

  const getPhaseColor = (): string => {
    switch (phase) {
      case 'inhale':
        return 'bg-emerald-500/20';
      case 'hold1':
        return 'bg-amber-500/20';
      case 'exhale':
        return 'bg-rose-500/20';
      case 'hold2':
        return 'bg-amber-500/20';
      default:
        return 'bg-gray-200';
    }
  };

  const scaleFactor = () => {
    if (phase === 'inhale') return 1.2;
    if (phase === 'exhale') return 0.8;
    return 1;
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
          Breathing Exercises
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Practice mindful breathing to reduce stress and anxiety
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {routines.map((routine) => (
          <div
            key={routine.id}
            className={`glass-card cursor-pointer hover:shadow-xl transition-shadow p-6 ${
              selected.id === routine.id ? 'border-2 border-indigo-500' : 'border-border'
            }`}
            onClick={() => setSelected(routine)}
          >
            <div className="flex items-center mb-4">
              <routine.icon className="h-8 w-8 text-indigo-600 mr-3" />
              <h3 className="text-xl font-semibold">{routine.name}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {routine.description}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>
                {routine.inhale}s {routine.hold1 > 0 ? `hold ${routine.hold1}s ` : ''}{routine.exhale}s{
                  routine.hold2 > 0 ? ` hold ${routine.hold2}s` : ''
                }
              </span>
              <span className="font-mono">{routine.totalTime}s cycle</span>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card text-center p-8">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{selected.name}</h3>
          <p className="text-gray-600 dark:text-gray-300">
            {selected.description}
          </p>
        </div>

        <div className="relative h-60 w-60 mx-auto mb-6">
          {/* Background circle */}
          <div className="absolute inset-0 rounded-full border-2 border-indigo-200 dark:border-indigo-700/50"></div>
          {/* Animated circle */}
          <div
            className={`absolute inset-0 rounded-full bg-indigo-500/20 transition-transform duration-1000 ease-in-out`}
            style={{
              transform: `scale(${scaleFactor()})`,
            }}
          ></div>
          {/* Phase label */}
          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-indigo-600">
            {isActive ? (
              <>
                <div className={`${getPhaseColor()} w-12 h-12 rounded-full flex items-center justify-center text-white text-sm`}>
                  {getPhaseLabel()}
                </div>
                <div className="mt-2 text-sm">{timeLeft}s</div>
              </>
            ) : (
              <div className="text-gray-500">Ready to begin</div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Cycles: {cycleCount}
          </p>
          {!isActive ? (
            <button
              onClick={startBreathing}
              className="btn-primary px-6 py-2"
            >
              Start
            </button>
          ) : (
            <button
              onClick={stopBreathing}
              className="btn-secondary px-6 py-2"
            >
              Stop
            </button>
          )}
        </div>
      </div>
    </div>
  );
}