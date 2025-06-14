
import React from 'react';

interface FooterProps {
  onNavigate?: (tab: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const handleNavigation = (tab: string) => {
    if (onNavigate) {
      onNavigate(tab);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/aaea7331-77b1-42dc-9daa-4d0d32f6dc3f.png" 
                alt="AcuCogn Logo" 
                className="h-12 w-auto mr-3"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Transforming businesses with innovative AI solutions that drive growth, efficiency, and intelligent automation.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>5717 Legacy Dr Suite 250, Plano, TX 75024</p>
              <p>Phone: +1 (516) 957-8453</p>
              <p>Email: sales@acucogn.com</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>AI Chatbot Development</li>
              <li>AI Consulting</li>
              <li>Generative AI Development</li>
              <li>Custom AI Solutions</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => handleNavigation('home')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('services')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('portfolio')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2025 AcuCogn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
