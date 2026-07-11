import ChatBot from '@/components/ChatBot';
import Breathing from '@/components/Breathing';
import MeditationGuides from '@/components/MeditationGuides';
import WellnessTips from '@/components/WellnessTips';
import QuoteGenerator from '@/components/QuoteGenerator';
import LeBronGallery from '@/components/LeBronGallery';

export default function Home() {
  return (
    <>
      {/* Chatbot / Core Dashboard Section */}
      <section id="chatbot" className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
            Welcome to Your Wellness Companion
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A safe space to explore your thoughts and feelings with supportive AI companionship.
          </p>
          <div className="glass-card p-6">
            <ChatBot />
          </div>
        </div>
      </section>

      {/* Breathing Exercises Section */}
      <section id="breathing" className="pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
            Breathing Exercises
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Simple yet powerful techniques to calm your mind and body.
          </p>
          <div className="glass-card p-6">
            <Breathing />
          </div>
        </div>
      </section>

      {/* Meditation Guides Section */}
      <section id="meditation" className="pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
            Meditation & Mindfulness Guides
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Guided practices to cultivate presence, compassion, and inner peace.
          </p>
          <div className="glass-card p-6">
            <MeditationGuides />
          </div>
        </div>
      </section>

      {/* Wellness & Therapy Tips Section */}
      <section id="wellness" className="pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
            Wellness & Therapy Tips
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Practical tools and checklists to support your mental health journey.
          </p>
          <div className="glass-card p-6">
            <WellnessTips />
          </div>
        </div>
      </section>

      {/* Motivational Quotes Section */}
      <section id="quotes" className="pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
            Motivational Quotes
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Inspiring words to uplift your spirit and encourage growth.
          </p>
          <div className="glass-card p-6">
            <QuoteGenerator />
          </div>
        </div>
      </section>

      {/* LeBron James Gallery Section */}
      <section id="gallery" className="pb-12">
        <LeBronGallery />
      </section>
    </>
  );
}