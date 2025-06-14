
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PromotionalBlock from '../components/PromotionalBlock';
import Blog from '../components/Blog';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleContactClick = () => {
    setActiveTab('contact');
  };

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <PromotionalBlock currentTab={activeTab} onContactClick={handleContactClick} />
          </>
        );
      case 'services':
        return (
          <>
            <Services />
            <PromotionalBlock currentTab={activeTab} onContactClick={handleContactClick} />
          </>
        );
      case 'portfolio':
        return (
          <>
            <Portfolio />
          </>
        );
      case 'blog':
        return (
          <>
            <Blog />
          </>
        );
      case 'faq':
        return (
          <>
            <FAQ />
          </>
        );
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="relative">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default Index;
