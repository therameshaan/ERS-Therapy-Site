"use client";

import { useState } from 'react';
import { Droplets, Ear, Eye, Hand, Wind, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function WellnessTips() {
  const [groundingActive, setGroundingActive] = useState(false);
  const [groundingStep, setGroundingStep] = useState(0);
  const [selfCareItems, setSelfCareItems] = useState([
    { id: 1, text: 'Get 7-9 hours of sleep', checked: false },
    { id: 2, text: 'Move your body for 30 minutes', checked: false },
    { id: 3, text: 'Drink 8 glasses of water', checked: false },
    { id: 4, text: 'Practice mindfulness or meditation', checked: false },
    { id: 5, text: 'Connect with a friend or loved one', checked: false },
    { id: 6, text: 'Engage in a hobby you enjoy', checked: false },
    { id: 7, text: 'Spend time in nature', checked: false },
  ]);

  const groundingSteps = [
    {
      sense: 'Sight',
      icon: <Eye className="h-10 w-10" />,
      prompt: 'Name 5 things you can see around you.',
      example: 'A blue pen, a green plant, a white clock, a brown book, a gray wall.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      sense: 'Touch',
      icon: <Hand className="h-10 w-10" />,
      prompt: 'Notice 4 things you can feel.',
      example: 'The texture of your clothes, the chair beneath you, the air on your skin, your feet in your shoes.',
      color: 'text-amber-500',
      bgColor: 'bg-amber-100 dark:bg-amber-900/30'
    },
    {
      sense: 'Sound',
      icon: <Ear className="h-10 w-10" />,
      prompt: 'Identify 3 things you can hear.',
      example: 'Birds chirping, distant traffic, your own breath.',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/30'
    },
    {
      sense: 'Smell',
      icon: <Wind className="h-10 w-10" />,
      prompt: 'Notice 2 things you can smell.',
      example: 'Coffee, fresh air, soap.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30'
    },
    {
      sense: 'Taste',
      icon: <Droplets className="h-10 w-10" />,
      prompt: 'Notice 1 thing you can taste.',
      example: 'The lingering taste of toothpaste, a sip of water.',
      color: 'text-rose-500',
      bgColor: 'bg-rose-100 dark:bg-rose-900/30'
    },
  ];

  const startGrounding = () => {
    setGroundingActive(true);
    setGroundingStep(0);
  };

  const resetGrounding = () => {
    setGroundingActive(false);
    setGroundingStep(0);
  };

  const nextGroundingStep = () => {
    setGroundingStep((prev) => Math.min(prev + 1, groundingSteps.length - 1));
  };

  const prevGroundingStep = () => {
    setGroundingStep((prev) => Math.max(prev - 1, 0));
  };

  const completedCount = selfCareItems.filter((i) => i.checked).length;
  const progressPercentage = Math.round((completedCount / selfCareItems.length) * 100);

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-4">
          Wellness & Therapy Tips
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Practical tools and daily practices to support your mental well-being and build resilience.
        </p>
      </div>

      {/* 5-4-3-2-1 Grounding Tool */}
      <section className="glass-card p-8 relative overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold flex items-center text-gray-800 dark:text-gray-100">
              <Droplets className="h-6 w-6 mr-3 text-indigo-500" />
              5-4-3-2-1 Grounding Technique
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">
              A simple yet powerful exercise to reduce anxiety and bring yourself back to the present moment by engaging your five senses.
            </p>
          </div>
          
          {!groundingActive && (
            <button
              onClick={startGrounding}
              className="hidden md:flex btn-primary px-6 py-3 rounded-full shadow-lg hover:shadow-indigo-500/40 transform transition hover:-translate-y-1 font-semibold"
            >
              Start Exercise
            </button>
          )}
        </div>

        {!groundingActive && (
          <button
            onClick={startGrounding}
            className="md:hidden w-full mb-6 btn-primary px-6 py-3 rounded-full font-semibold"
          >
            Start Exercise
          </button>
        )}

        {groundingActive ? (
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 relative text-center">
            <button 
              onClick={resetGrounding}
              className="absolute top-4 right-4 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline"
            >
              End Session
            </button>
            
            <div className="flex items-center justify-center mb-6">
              <div className={\`w-24 h-24 rounded-full flex items-center justify-center \${groundingSteps[groundingStep].bgColor} \${groundingSteps[groundingStep].color} shadow-inner\`}>
                {groundingSteps[groundingStep].icon}
              </div>
            </div>
            <h3 className={\`text-3xl font-extrabold mb-4 \${groundingSteps[groundingStep].color}\`}>
              {5 - groundingStep}. {groundingSteps[groundingStep].sense}
            </h3>
            <p className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-6 max-w-xl mx-auto">
              {groundingSteps[groundingStep].prompt}
            </p>
            <div className="bg-white dark:bg-gray-700/50 p-4 rounded-xl max-w-xl mx-auto border border-gray-100 dark:border-gray-600 mb-8">
              <p className="italic text-gray-600 dark:text-gray-300">
                <span className="font-semibold not-italic mr-2">Example:</span>
                {groundingSteps[groundingStep].example}
              </p>
            </div>
            
            <div className="flex justify-center items-center space-x-6">
              <button
                onClick={prevGroundingStep}
                disabled={groundingStep === 0}
                className={\`px-6 py-2 rounded-full font-medium transition-colors \${groundingStep === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600'}\`}
              >
                Previous
              </button>
              
              <div className="flex space-x-2">
                {groundingSteps.map((_, idx) => (
                  <div key={idx} className={\`w-2 h-2 rounded-full \${idx === groundingStep ? groundingSteps[groundingStep].color.replace('text-', 'bg-') : 'bg-gray-300 dark:bg-gray-600'}\`}></div>
                ))}
              </div>

              <button
                onClick={groundingStep === groundingSteps.length - 1 ? resetGrounding : nextGroundingStep}
                className="btn-primary px-8 py-2 rounded-full font-semibold shadow-md"
              >
                {groundingStep === groundingSteps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groundingSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-white/40 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700/50 hover:shadow-md transition-shadow">
                <div className={\`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-sm \${step.bgColor} \${step.color}\`}>
                  {5 - index}
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-gray-100">{step.sense}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">{step.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Self-Care Checklist */}
      <section className="glass-card p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold flex items-center text-gray-800 dark:text-gray-100 mb-2">
              <HeartHandshake className="h-6 w-6 mr-3 text-rose-500" />
              Daily Self-Care
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Small daily actions build the foundation for mental resilience.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex flex-col items-end">
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">{completedCount} of {selfCareItems.length} completed</span>
            <div className="w-full md:w-48 h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
              <div 
                className="h-full bg-gradient-to-r from-rose-400 to-indigo-500 transition-all duration-1000 ease-out"
                style={{ width: \`\${progressPercentage}%\` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {selfCareItems.map((item) => (
            <label 
              key={item.id} 
              className={\`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-200 border \${item.checked ? 'bg-indigo-50/50 border-indigo-200 dark:bg-indigo-900/10 dark:border-indigo-800/30' : 'bg-white/50 border-gray-100 hover:bg-gray-50 dark:bg-gray-800/50 dark:border-gray-700 dark:hover:bg-gray-800'}\`}
            >
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => {
                    setSelfCareItems(
                      selfCareItems.map((i) =>
                        i.id === item.id ? { ...i, checked: !i.checked } : i
                      )
                    );
                  }}
                  className="sr-only"
                />
                <div className={\`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors \${item.checked ? 'bg-indigo-500 border-indigo-500' : 'border-gray-300 dark:border-gray-600'}\`}>
                  {item.checked && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
              </div>
              <span className={\`ml-4 font-medium transition-colors \${item.checked ? 'text-indigo-900 dark:text-indigo-200 line-through opacity-70' : 'text-gray-700 dark:text-gray-200'}\`}>
                {item.text}
              </span>
            </label>
          ))}
        </div>
        
        {completedCount > 0 && (
          <div className="flex justify-end mt-6">
            <button
              onClick={() => {
                setSelfCareItems(
                  selfCareItems.map((item) => ({ ...item, checked: false }))
                );
              }}
              className="text-sm font-medium text-gray-500 hover:text-rose-500 transition-colors"
            >
              Reset Checklist
            </button>
          </div>
        )}
      </section>
    </div>
  );
}