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
    text: 'Your present circumstances don\'t determine where you can go; they merely determine where you start.',
    author: 'Nido Qubein',
  },
  {
    text: 'You don\'t have to control your thoughts. You just have to stop letting them control you.',
    author: 'Dan Millman',
  },
  {
    text: 'Self-compassion is simply giving the same kindness to ourselves that we would give to others.',
    author: 'Christopher Germer',
  },
  {
    text: 'Almost everything will work again if you unplug it for a few minutes, including you.',
    author: 'Anne Lamott',
  },
  {
    text: 'The greatest weapon against stress is our ability to choose one thought over another.',
    author: 'William James',
  },
];

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="text-center py-12">
      <div className="glass-card p-8 max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Quote className="h-8 w-8 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Daily Inspiration
          </h2>
          <RefreshCw className="h-8 w-8 ml-3 text-indigo-500 hover:text-indigo-600 cursor-pointer" onClick={getNewQuote} />
        </div>
        <blockquote className="text-lg italic text-gray-800 dark:text-gray-100 mb-6">
          <p className="mb-4">“{quote.text}”</p>
          <footer className="text-right text-sm text-gray-600 dark:text-gray-400">— {quote.author}</footer>
        </blockquote>
        <button
          onClick={getNewQuote}
          className="btn-primary px-6 py-3"
        >
          Get New Quote
        </button>
      </div>
    </div>
  );
}