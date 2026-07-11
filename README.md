# ERSTherapy - Mental Wellness Platform

A comprehensive, professional single-page web application inspired by the ERS Therapy platform, focusing on mental wellness, interactive meditation tools, and motivational media. Built with Next.js, React, Tailwind CSS, and Lucide Icons.

## Features

- **Interactive Chatbot**: A supportive AI companion for expressing thoughts and feelings
- **Breathing Exercises**: Guided 4-7-8, Box, and Belly breathing techniques with visual aids
- **Meditation Guides**: 5-Minute Mindfulness, Body Scan, and Loving-Kindness practices
- **Wellness Tools**: 
  - 5-4-3-2-1 Grounding Technique (interactive)
  - Self-Care Checklist (toggleable)
- **Motivational Quotes**: Random quote generator with refresh functionality
- **LeBron James Gallery**: Stylized image gallery featuring the provided Cloudinary assets
- **Responsive Design**: Mobile-friendly layout with dark/light mode toggle
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Image Optimization**: Next.js Image component
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ERSTherapy
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

To create a production build:
```bash
npm run build
# or
yarn build
```

To start the production server:
```bash
npm start
# or
yarn start
```

## Project Structure

```
ERSTherapy/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── ChatBot.tsx
│   ├── Breathing.tsx
│   ├── MeditationGuides.tsx
│   ├── WellnessTips.tsx
│   ├── QuoteGenerator.tsx
│   └── LeBronGallery.tsx
├── public/
├── styles/
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Customization

### Adding New Quotes

Edit the `quotes` array in `components/QuoteGenerator.tsx` to add more motivational quotes.

### Modifying Breathing Patterns

Adjust the `routines` array in `components/Breathing.tsx` to change inhalation, exhalation, and hold times.

### Styling

The application uses Tailwind CSS. Modify `tailwind.config.js` to customize colors, fonts, and other design tokens.

## Accessibility Features

- Semantic HTML elements
- ARIA labels for interactive components
- Keyboard navigable interface
- Sufficient color contrast ratios
- Responsive design for all screen sizes

## Disclaimer

This application is intended to provide supportive tools for mental wellness and is **not** a replacement for professional therapy, counseling, or medical advice. If you are experiencing a mental health crisis, please seek help from a qualified professional or contact emergency services.

### Crisis Resources

- **US**: 988 Suicide & Crisis Lifeline (call or text 988)
- **International**: Find a helpline at [findahelpline.com](https://findahelpline.com)
- **Emergency Services**: 911 (US) or your local emergency number

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by the ERS Therapy platform
- Icons provided by Lucide
- Images provided via Cloudinary