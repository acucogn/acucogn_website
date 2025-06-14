
import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onNavigate?: (tab: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  const handleGetStarted = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  const handleViewWork = () => {
    if (onNavigate) {
      onNavigate('portfolio');
    }
  };

  return (
    <section 
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-white relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/90"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Businesses with{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Next-Gen AI Solutions
            </span>
          </h1>

          {/* Sub-heading */}
          <h2 className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Partner with AcuCogn for Innovation Through AI Solutions
          </h2>

          {/* Intro Paragraph */}
          <p className="text-lg text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
            At AcuCogn, we specialize in transforming enterprises through cutting-edge Artificial Intelligence. 
            From intuitive AI Chatbot Development to AI Consulting Services and Generative AI Development, 
            we partner with you to unlock automation, personalization, and business intelligence like never before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={handleGetStarted}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </button>
            <button 
              onClick={handleViewWork}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
        </div>

        {/* Additional Section */}
        <div className="mt-20 bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Partner with AcuCogn for Innovation Through AI Solutions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
            <div>
              <p className="mb-6">
                We bring end-to-end expertise to every stage of your AI journey, from strategy and development 
                to deployment and optimization. Our team collaborates closely with you to transform your ideas 
                into impactful AI-driven applications with precision and care.
              </p>
              <p>
                Every solution we deliver is crafted with meticulous attention to detail, ensuring robust 
                performance, scalability, and seamless integration. Leveraging advanced algorithms and modern 
                frameworks, we consistently exceed expectations.
              </p>
            </div>
            <div>
              <p className="mb-6">
                At AcuCogn, innovation is at the heart of what we do. Our dedicated R&D practices ensure we 
                stay ahead of the curve by adopting the latest AI methodologies and tools, providing your 
                business with a competitive edge.
              </p>
              <p>
                Moreover, we prioritize security and compliance by adhering to stringent global standards, 
                including HIPAA and GDPR, ensuring your AI systems are not only powerful but also secure and reliable.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what sets AcuCogn apart in the AI development landscape
            </p>
          </div>

<div className="grid md:grid-cols-2 gap-8">
  {[
    {
      title: 'Custom AI Models, Built Just for You',
      description: 'Your business is unique — and your AI should be too. At AcuCogn, we don’t use generic, one-size-fits-all models. We take time to understand your exact business goals and build AI solutions that directly address them. Whether it’s a smart chatbot for hospitals, a resume screening tool for HR, or image recognition in retail — we build it specifically for you.',
      examples: 'Example: A chatbot that answers health questions 24/7, or a GenAI tool that screens job applications in seconds.'
    },
    {
      title: 'Flexible Deployment — Cloud or On-Premise',
      description: 'You choose where your AI lives — and we make it work. We understand some industries have strict data rules. That’s why we offer flexible deployment options: host on the cloud (AWS, Azure, or GCP) for easy scaling, or deploy on your internal servers if you need more control and security.',
      examples: 'Example: Perfect for healthcare, finance, and government projects with strict data privacy policies.'
    },
    {
      title: 'Full Support from Start to Finish',
      description: 'You don’t need to be an AI expert — that’s our job. We guide you at every stage — from brainstorming ideas and building a working prototype to launching the system and keeping it running smoothly. You focus on your business while we handle the tech.',
      examples: 'Example: Regular updates, easy-to-understand reports, and direct access to our expert team.'
    },
    {
      title: 'Built-in Data Privacy and Compliance',
      description: 'Your data is safe and your system stays compliant. We follow the highest global standards for data security (HIPAA, GDPR, etc.). Our systems are designed with privacy-first in mind — meaning encryption, access control, and regular audits are built right in.',
      examples: 'Example: Ideal for industries where trust, privacy, and compliance are critical.'
    },
    {
      title: 'Plug-and-Play Integration with Your Tools',
      description: 'AI that fits right into your existing systems. No need to change your current setup — our solutions come with ready-made APIs and SDKs that work smoothly with your apps, websites, CRMs, ERPs, and more.',
      examples: 'Example: Think of it as upgrading your tools, not replacing them.'
    },
    {
      title: 'Always Innovating, Always Improving',
      description: 'We bring you the latest in AI — before it becomes mainstream. With a dedicated R&D team, we constantly explore new trends like Large Language Models (LLMs), Vision AI, and AI Agents. That means your solutions stay competitive, future-ready, and built on the best technologies available.',
      examples: 'Example: Our innovation = your business advantage.'
    }
  ].map((reason, index) => (
    <div
      key={index}
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-green-400 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start mb-4">
        <div className="text-green-500 text-2xl mr-4 mt-1">✅</div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {reason.title}
          </h3>
          <p className="text-gray-600 mb-3">
            {reason.description}
          </p>
          {reason.examples && (
            <p className="text-sm text-gray-500 italic">
              {reason.examples}
            </p>
          )}
        </div>
      </div>
    </div>
  ))}
</div>
</div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <ArrowDown className="text-gray-400 animate-bounce" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
