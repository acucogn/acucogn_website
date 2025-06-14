
import React from 'react';


const Services = () => {
  const services = [
    {
      icon: '🤖',
      title: 'AI Chatbot Development',
      subtitle: 'Build Smart, Human-Like Conversations that Work for Your Business 24/7',
      description: `At AcuCogn, we create intelligent chatbots that go beyond basic Q&A. These bots are powered by advanced AI (like ChatGPT, LLaMA, Gemini), and can understand context, tone, and intent — just like a real human assistant.

Think of it as hiring a smart virtual assistant who never sleeps, never makes mistakes, and handles thousands of queries at once.`,
      features: [
        'Multilingual Support: Reach and assist customers across the globe in their native language — from English to Hindi, French to Spanish, and more.',
        'Seamless Platform Integration: Our chatbots work smoothly on WhatsApp, websites, mobile apps, Slack, Microsoft Teams, and other tools your team or users already use.',
        'Context-Aware & Industry-Specific: We customize the bot to your industry. Whether you\'re in healthcare, e-commerce, HR, or finance, the chatbot understands the right language, use-case, and customer need.',
        'Personalized Customer Experience: Our bots can remember past conversations, personalize responses, and even make suggestions — powered by powerful Large Language Models (LLMs).'
      ]
    },
    {
      icon: '🧠',
      title: 'AI Consulting',
      subtitle: 'Turn Your Ideas into Actionable, Real-World AI Solutions',
      description: `If you're new to AI or unsure how to apply it to your business — our consulting team is here to help. We don’t just talk tech; we help you find real ways to use AI that save time, cut costs, and improve decision-making.

Whether you’re starting from scratch or scaling up, we turn your AI dreams into dependable software systems.`,
      features: [
        'AI Strategy & Roadmap: We understand your business and help plan how AI can be added step-by-step for maximum results with minimum risk.',
        'AI Readiness Assessment: Not sure if your data or systems are ready for AI? We’ll assess what’s needed, what’s missing, and how to fill the gaps.',
        'Model Selection & Training: Based on your use-case, we pick the best model — whether it’s a chatbot, image recognizer, or prediction engine — and train it using your own data.',
        'Scalable AI Implementation: From a small pilot to full-scale rollout, we ensure your AI solution grows as your business grows — with complete support and monitoring.'
      ]
    },
    {
      icon: '🎨',
      title: 'Generative AI Development',
      subtitle: 'Create Images, Text, Code, and Entire Workflows with the Power of AI',
      description: `With Generative AI, we give your business the ability to create — whether it’s marketing content, product descriptions, custom artwork, personalized code, or even automated workflows. All powered by custom-trained AI models.

Imagine a creative assistant that can write, draw, code, and even make business decisions — all tailored to your needs.`,
      features: [
        'Text, Image, & Code Generation: Need product descriptions, custom blog content, unique graphics, or even code snippets? Our GenAI tools can generate them in seconds.',
        'Fine-Tuning for Your Business: We train generative models using your own data so that the results sound like your brand, follow your industry style, and meet your quality standards.',
        'AI Agents for Automation: These are intelligent, task-focused AI bots that can handle customer support, generate reports, or make business decisions based on live data.',
        'Secure API & App Integration: We wrap everything in secure APIs so you can plug the AI into your mobile app, website, CRM, or internal tools easily.'
      ]
    }
  ];

  return (
    <section 
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80')`,
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
            🚀 Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to transform your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-6xl mb-6 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                {service.title}
              </h3>
              <div className="text-md text-blue-700 font-semibold mb-4 text-center">{service.subtitle}</div>
              <p className="text-gray-700 mb-6 whitespace-pre-line">{service.description}</p>
              <ul className="space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-600">
                    <span className="text-blue-600 mr-3 mt-1">✅</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
