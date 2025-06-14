
import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Custom AI Models Tailored to Your Business Goals',
      description: 'We build models aligned with your use-case for maximum ROI.',
      examples: 'Examples: Chatbots for healthcare, LLMs for HR, vision for retail.'
    },
    {
      title: 'Deployment On-Premise or Cloud',
      description: 'Flexible options: AWS, Azure, GCP or on-premise for regulated industries.',
      examples: ''
    },
    {
      title: 'End-to-End Support from Ideation to Deployment',
      description: 'We handle everything from prototype to monitoring. No AI expertise needed on your side.',
      examples: ''
    },
    {
      title: 'Strong Data Privacy & Compliance',
      description: 'HIPAA, GDPR-ready, privacy-by-design architecture with audits if needed.',
      examples: ''
    },
    {
      title: 'Integration-Ready APIs and SDKs',
      description: 'Easily connect with your existing tools (CRM, ERP, Apps, etc.).',
      examples: ''
    },
    {
      title: 'Innovation-Driven Approach',
      description: 'We stay ahead with R&D in cutting-edge AI trends like LLMs, Vision AI, Agentic AI.',
      examples: ''
    }
  ];

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what sets AcuCogn apart in the AI development landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="text-green-400 text-2xl mr-4 mt-1">✅</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 mb-3">
                    {reason.description}
                  </p>
                  {reason.examples && (
                    <p className="text-sm text-gray-400 italic">
                      {reason.examples}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
