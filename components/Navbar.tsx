import Link from 'next/link';
import { Menu, Sun, Moon, MessageSquare, Zap, Heart, Video, Quote, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">ERS Therapy</span>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
            <Link href="#breathing" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Breathing</Link>
            <Link href="#meditation" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Meditation</Link>
            <Link href="#wellness" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Wellness</Link>
            <Link href="#quotes" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Quotes</Link>
            <Link href="#gallery" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
          </div>
          <div className="flex items-center space-x-3">
            <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden px-2 pt-2 pb-3 space-y-1 ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700">Dashboard</Link>
          <Link href="#breathing" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700">Breathing</Link>
          <Link href="#meditation" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700">Meditation</Link>
          <Link href="#wellness" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700">Wellness</Link>
          <Link href="#quotes" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700">Quotes</Link>
          <Link href="#gallery" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700">Gallery</Link>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-3"></div>
          <button onClick={() => setIsDark(!isDark)} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700">
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}