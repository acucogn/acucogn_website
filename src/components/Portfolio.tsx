
import React, { useState } from 'react';

const Portfolio = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);

  const portfolioItems = [
    {
      title: 'Healthcare',
      description: 'Revolutionizing healthcare through automation and integration with Azure Copilot, MS Teams, and dynamic provider databases.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop'
    },
    {
      title: 'Customer Support',
      description: 'Smart chatbots with sentiment personalization and auto ticket routing.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop'
    },
    {
      title: 'HR & Workforce Automation',
      description: 'End-to-end hiring, payroll, and HR automation using AI.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=300&fit=crop'
    },
    {
      title: 'Appointment Buddy with Agentic AI',
      description: 'Converts user queries into SQL, enables non-technical access to databases, offers instant real-time insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
    },
    {
      title: 'Customer Support AI Buddy',
      description: 'Automates HR registrations, claims, reduces support workloads, delivers real-time resolution.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop'
    }
  ];

  return (
    <section 
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/90"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful AI implementations across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col h-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow">
                  {item.description}
                </p>
                <button
                  onClick={() => setShowDemoForm(true)}
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 mt-auto"
                >
                  🔍 View Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Request Popup */}
        {showDemoForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Request for Demo
              </h3>
              <p className="text-gray-600 text-center mb-6">
                For live demo, contact us at{' '}
                <a href="mailto:sales@acucogn.com" className="text-blue-600 hover:text-blue-700">
                  sales@acucogn.com
                </a>
              </p>
              <button
                onClick={() => setShowDemoForm(false)}
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
