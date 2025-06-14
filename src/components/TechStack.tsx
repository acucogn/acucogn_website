
import React from 'react';

const TechStack = () => {
  const techCategories = [
    {
      title: 'Languages',
      items: [
        { name: 'Python', logo: '🐍' },
        { name: 'Golang', logo: '🟦' }
      ]
    },
    {
      title: 'Frameworks',
      items: [
        { name: 'TensorFlow', logo: '🧠' },
        { name: 'PyTorch', logo: '🔥' },
        { name: 'Scikit-learn', logo: '📊' },
        { name: 'OpenCV', logo: '👁️' },
        { name: 'LangChain', logo: '🔗' }
      ]
    },
    {
      title: 'ML Libraries',
      items: [
        { name: 'NumPy', logo: '🔢' },
        { name: 'Pandas', logo: '🐼' },
        { name: 'Matplotlib', logo: '📈' },
        { name: 'SciPy', logo: '⚗️' },
        { name: 'spaCy', logo: '🗣️' }
      ]
    },
    {
      title: 'Databases',
      items: [
        { name: 'MySQL', logo: '🗄️' },
        { name: 'PostgreSQL', logo: '🐘' },
        { name: 'MongoDB', logo: '🍃' },
        { name: 'Vector DB', logo: '🔍' },
        { name: 'Graph DB', logo: '🕸️' },
        { name: 'Firebase', logo: '🔥' }
      ]
    },
    {
      title: 'Deployment',
      items: [
        { name: 'Docker', logo: '🐳' },
        { name: 'Kubernetes', logo: '☸️' },
        { name: 'Serverless', logo: '⚡' },
        { name: 'ECS', logo: '📦' },
        { name: 'GCP', logo: '☁️' },
        { name: 'AWS', logo: '🌐' }
      ]
    },
    {
      title: 'Cloud AI Services',
      items: [
        { name: 'AWS Bedrock', logo: '🏗️' },
        { name: 'CodeGuru', logo: '👨‍💻' },
        { name: 'DevOpsGuru', logo: '🔧' },
        { name: 'Lex', logo: '💬' },
        { name: 'Transcribe', logo: '📝' },
        { name: 'Q', logo: '❓' },
        { name: 'PartyRock', logo: '🎉' }
      ]
    },
    {
      title: 'Generative AI',
      items: [
        { name: 'GPT', logo: '🤖' },
        { name: 'Llama 2/3', logo: '🦙' },
        { name: 'Gemini', logo: '♊' },
        { name: 'Titan', logo: '⚡' },
        { name: 'Mistral', logo: '🌪️' },
        { name: 'DALL·E 3', logo: '🎨' },
        { name: 'Stable Diffusion', logo: '🌊' },
        { name: 'Hugging Face', logo: '🤗' }
      ]
    },
    {
      title: 'Visualization',
      items: [
        { name: 'Power BI', logo: '📊' },
        { name: 'Tableau', logo: '📈' },
        { name: 'Google Data Studio', logo: '📉' }
      ]
    },
    {
      title: 'Other Tools',
      items: [
        { name: 'Snowflake', logo: '❄️' },
        { name: 'IBM Watson', logo: '🧠' },
        { name: 'NVIDIA Triton', logo: '🚀' },
        { name: 'Apache Kafka', logo: '🌊' }
      ]
    }
  ];

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technologies We Specialize In</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our expertise spans across frameworks, libraries, and tools that empower us to craft intelligent systems tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 flex items-center gap-1"
                  >
                    <span className="text-xs">{item.logo}</span>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
