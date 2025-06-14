
import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Why should I hire dedicated AI engineers from your team for my AI development project?',
      answer: 'Our engineers deliver custom, high-performing AI solutions, with a focus on quality, speed, and cost-efficiency.'
    },
    {
      question: 'Do I need to have a deep understanding of AI concepts to work with you?',
      answer: 'Not at all! We guide you every step of the way in simple, non-technical language.'
    },
    {
      question: 'How do you ensure the reliability and accuracy of AI models?',
      answer: 'Rigorous testing, validation, and ongoing model tuning ensure optimal performance.'
    },
    {
      question: 'What is the typical timeline for an AI development project?',
      answer: 'Generally 2–6 months based on scope, from discovery to deployment.'
    },
    {
      question: 'What is the cost structure for AI development services?',
      answer: 'Flexible pricing—projects start below $10k and scale based on complexity.'
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section 
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/90"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our AI development services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ArrowDown
                  className={`text-blue-600 transition-transform duration-300 ${
                    openQuestion === index ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
