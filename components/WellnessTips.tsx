"use client";

import { useState } from 'react';
import { Droplets, Ear, Eye, Hand, Wind, HeartHandshake } from 'lucide-react';

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
      icon: <Eye className="h-5 w-5" />,
      prompt: 'Name 5 things you can see around you.',
      example: 'A blue pen, a green plant, a white clock, a brown book, a gray wall.',
    },
    {
      sense: 'Touch',
      icon: <Hand className="h-5 w-5" />,
      prompt: 'Notice 4 things you can feel.',
      example: 'The texture of your clothes, the chair beneath you, the air on your skin, your feet in your shoes.',
    },
    {
      sense: 'Sound',
      icon: <Ear className="h-5 w-5" />,
      prompt: 'Identify 3 things you can hear.',
      example: 'Birds chirping, distant traffic, your own breath.',
    },
    {
      sense: 'Smell',
      icon: <Wind className="h-5 w-5" />,
      prompt: 'Notice 2 things you can smell.',
      example: 'Coffee, fresh air, soap.',
    },
    {
      sense: 'Taste',
      icon: <Droplets className="h-5 w-5" />,
      prompt: 'Notice 1 thing you can taste.',
      example: 'The lingering taste of toothpaste, a sip of water.',
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

  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400">
        Wellness & Therapy Tips
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Practical tools and daily practices to support your mental well-being.
      </p>

      {/* 5-4-3-2-1 Grounding Tool */}
      <section className="glass-card p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Droplets className="h-5 w-5 mr-2 text-indigo-500" />
          5-4-3-2-1 Grounding Technique
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          A simple yet powerful exercise to reduce anxiety and bring yourself back to the present moment by engaging your five senses.
        </p>

        <div className="flex items-center justify-center mb-4">
          <button
            onClick={startGrounding}
            disabled={groundingActive}
            className="btn-primary px-6 py-2"
          >
            {groundingActive ? 'Practicing...' : 'Start Grounding Exercise'}
          </button>
          <button
            onClick={resetGrounding}
            disabled={!groundingActive}
            className="ml-2 btn-secondary px-4 py-2"
          >
            Reset
          </button>
        </div>

        {groundingActive ? (
          <div className="text-center py-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                {groundingStep === 0 && <Eye className="h-8 w-8 text-indigo-500" />}
                {groundingStep === 1 && <Hand className="h-8 w-8 text-indigo-500" />}
                {groundingStep === 2 && <Ear className="h-8 w-8 text-indigo-500" />}
                {groundingStep === 3 && <Wind className="h-8 w-8 text-indigo-500" />}
                {groundingStep === 4 && <Droplets className="h-8 w-8 text-indigo-500" />}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              {groundingSteps[groundingStep].sense}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
              {groundingSteps[groundingStep].prompt}
            </p>
            <p className="italic text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Example: {groundingSteps[groundingStep].example}
            </p>
            <div className="flex justify-center mt-6 space-x-3">
              <button
                onClick={prevGroundingStep}
                disabled={groundingStep === 0}
                className="btn-secondary px-4 py-2"
              >
                Previous
              </button>
              <button
                onClick={nextGroundingStep}
                disabled={groundingStep === groundingSteps.length - 1}
                className="btn-primary px-4 py-2"
              >
                {groundingStep === groundingSteps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {groundingSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-3 text-sm">
                <div className="flex-shrink-0 mt-1">
                  <span className="w-3 h-3 bg-indigo-500 rounded-full flex items-center justify-center text-xs text-white">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{step.sense}</p>
                  <p className="text-gray-600 dark:text-gray-300">{step.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Self-Care Checklist */}
      <section className="glass-card p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <HeartHandshake className="h-5 w-5 mr-2 text-indigo-500" />
          Daily Self-Care Checklist
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Track your daily self-care habits to build resilience and well-being.
        </p>
        <div className="space-y-2">
          {selfCareItems.map((item) => (
            <div key={item.id} className="flex items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
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
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-3 flex-1 text-sm">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => {
              setSelfCareItems(
                selfCareItems.map((item) => ({ ...item, checked: false }))
              );
            }}
            className="btn-secondary px-4 py-2"
          >
            Reset All
          </button>
        </div>
      </section>
    </div>
  );
}