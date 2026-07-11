import { Flame, Droplets, HeartHandshake, SunMedium, Moon } from 'lucide-react';

export default function MeditationGuides() {
  const practices = [
    {
      title: '5-Minute Mindfulness',
      icon: <Flame className="h-6 w-6 text-indigo-500" />,
      description: 'A quick practice to bring awareness to the present moment, focusing on breath and bodily sensations.',
      steps: [
        'Find a comfortable seated position with your spine straight.',
        'Close your eyes or soften your gaze.',
        'Bring attention to your natural breath, noticing the sensation of air entering and leaving your nostrils.',
        'When your mind wanders (it will!), gently guide it back to the breath without judgment.',
        'Continue for 5 minutes, gradually expanding awareness to include sounds, sensations, and thoughts.',
      ],
      iconBg: 'bg-indigo-50',
    },
    {
      title: 'Body Scan',
      icon: <Droplets className="h-6 w-6 text-blue-500" />,
      description: 'Systematically bring awareness to different parts of the body, releasing tension as you go.',
      steps: [
        'Lie down or sit comfortably, closing your eyes.',
        'Begin by bringing attention to the toes of your left foot.',
        'Slowly move your awareness up through the foot, ankle, calf, knee, thigh, and hip.',
        'Repeat on the right side, then move through the pelvis, lower back, abdomen, chest, upper back.',
        'Continue down the arms, through the shoulders, neck, jaw, and finally the top of the head.',
        'Notice any sensations without trying to change them.',
      ],
      iconBg: 'bg-blue-50',
    },
    {
      title: 'Loving-Kindness (Metta)',
      icon: <HeartHandshake className="h-6 w-6 text-pink-500" />,
      description: 'Cultivate feelings of love and compassion toward yourself and others.',
      steps: [
        'Sit comfortably with your eyes closed, taking a few deep breaths.',
        'Begin by directing loving-kindness toward yourself: repeat silently, "May I be happy, may I be healthy, may I be safe, may I live with ease."',
        'After a minute, bring to mind someone you love deeply. Repeat the phrases for them.',
        'Next, think of a neutral person (someone you neither like nor dislike). Extend the same wishes.',
        'Finally, think of someone you find challenging. See if you can offer them the same kindness.',
        'End by expanding your feelings to include all beings everywhere.',
      ],
      iconBg: 'bg-pink-50',
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400">
        Guided Meditation Practices
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Explore these evidence-based meditation practices to cultivate mindfulness, relaxation, and compassion.
      </p>

      <div className="grid gap-6">
        {practices.map((practice, index) => (
          <div key={index} className="glass-card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start mb-4">
              <div className={`${practice.iconBg} rounded-full p-3 mr-4 flex-shrink-0`}>
                {practice.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{practice.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{practice.description}</p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-indigo-600 dark:text-indigo-400">How to Practice:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                {practice.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}