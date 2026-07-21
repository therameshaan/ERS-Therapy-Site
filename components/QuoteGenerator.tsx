"use client";

import { useState } from 'react';
import { Quote, RefreshCw } from 'lucide-react';

const quotes = [
  {
    text: 'You yourself, as much as anybody in the entire universe, deserve your love and affection.',
    author: 'Buddha',
  },
  {
    text: 'Almost everything will work again if you unplug it for a few minutes, including you.',
    author: 'Anne Lamott',
  },
  {
    text: 'Self-care is not selfish. You cannot serve from an empty vessel.',
    author: 'Eleanor Brownn',
  },
  {
    text: 'You are not a drop in the ocean. You are the entire ocean in a drop.',
    author: 'Rumi',
  },
  {
    text: 'Healing takes time, and asking for help is a courageous step.',
    author: 'Mariska Hargitay',
  },
  {
    text: 'Your present circumstances don\\'t determine where you can go; they merely determine where you start.',
    author: 'Nido Qubein',
  },
  {
    text: 'You don\\'t have to control your thoughts. You just have to stop letting them control you.',
    author: 'Dan Millman',
  },
  {
    text: 'Self-compassion is simply giving the same kindness to ourselves that we would give to others.',
    author: 'Christopher Germer',
  },
  {
    text: 'The greatest weapon against stress is our ability to choose one thought over another.',
    author: 'William James',
  },
];

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(quotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const getNewQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * quotes.length);
      } while (quotes[randomIndex].text === quote.text);
      setQuote(quotes[randomIndex]);
      setIsAnimating(false);
    }, 300); // Wait for fade out
  };

  return (
    <div className="text-center py-12">
      <div className="relative glass-card p-10 max-w-3xl mx-auto overflow-hidden group hover:shadow-2xl transition-shadow duration-500 bg-gradient-to-br from-white to-indigo-50/80 dark:from-gray-900 dark:to-indigo-900/20">
        <div className="absolute -top-6 -left-6 text-indigo-100 dark:text-gray-800 transform -rotate-12 opacity-50 group-hover:scale-110 transition-transform duration-500">
          <Quote size={120} />
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Daily Inspiration
            </h2>
          </div>
          
          <blockquote className={\`text-xl md:text-2xl font-medium italic text-gray-800 dark:text-gray-100 mb-8 max-w-2xl transition-opacity duration-300 \${isAnimating ? 'opacity-0' : 'opacity-100'}\`}>
            <p className="mb-6 leading-relaxed">"{quote.text}"</p>
            <footer className="text-right text-lg font-semibold text-indigo-500 dark:text-indigo-400">
              — {quote.author}
            </footer>
          </blockquote>
          
          <button
            onClick={getNewQuote}
            className="btn-primary px-8 py-3 rounded-full flex items-center space-x-2 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform transition-all hover:-translate-y-1"
          >
            <RefreshCw className={\`h-5 w-5 \${isAnimating ? 'animate-spin' : ''}\`} />
            <span>Discover Another</span>
          </button>
        </div>
      </div>
    </div>
  );
}