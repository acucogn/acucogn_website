
import React from 'react';

interface PromotionalBlockProps {
  currentTab: string;
  onContactClick?: () => void;
}

const PromotionalBlock = ({ currentTab, onContactClick }: PromotionalBlockProps) => {
  const getPromotionalContent = () => {
    switch (currentTab) {
      case 'home':
        return {
          icon: '🔷',
          title: 'AI Software Development Services for Smarter, Faster, and Better Operations',
          description: 'Take the guesswork out of innovation. Custom-built AI models simplify and transform business processes.',
          cta: 'Schedule a Free Consultation'
        };
      case 'services':
        return {
          icon: '🔷',
          title: 'Drive Business Excellence with End-to-End AI Consulting and Development Services',
          description: 'Our team helps you build, deploy, and scale AI systems that align with your goals.',
          cta: 'Schedule a Call Today'
        };
      default:
        return {
          icon: '🔷',
          title: 'AI Software Development Services for Smarter, Faster, and Better Operations',
          description: 'Take the guesswork out of innovation. Custom-built AI models simplify and transform business processes.',
          cta: 'Schedule a Free Consultation'
        };
    }
  };

  const currentPromo = getPromotionalContent();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-200 text-center">
          <div className="text-4xl mb-4">{currentPromo.icon}</div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {currentPromo.title}
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            {currentPromo.description}
          </p>
          <button
            onClick={onContactClick}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            👉 {currentPromo.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBlock;
