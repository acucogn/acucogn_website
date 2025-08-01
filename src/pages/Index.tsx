import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PromotionalBlock from '../components/PromotionalBlock';
import Blog from '../components/Blog';
import ChatWidget from "../components/ChatWidget";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Hero onNavigate={(tab) => navigate(tab)} />
      <PromotionalBlock currentTab="home" onContactClick={() => navigate('/contact')} />
    </>
  );
};

const ServicesPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Services />
      <PromotionalBlock currentTab="services" onContactClick={() => navigate('/contact')} />
    </>
  );
};

const Index = () => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <main className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
    <ChatWidget />
  </div>
);

export default Index;