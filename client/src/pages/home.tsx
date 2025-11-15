import { useState } from 'react';
import { WaterAnimation } from '@/components/WaterAnimation';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { TrustSection } from '@/components/TrustSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleAnimationComplete = () => {
    setIsContentVisible(true);
    setTimeout(() => setIsNavVisible(true), 500);
  };

  const handleExploreClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen">
      <WaterAnimation onAnimationComplete={handleAnimationComplete} />
      
      <Navigation isVisible={isNavVisible} />
      
      <div className="relative">
        <HeroSection 
          isContentVisible={isContentVisible} 
          onExploreClick={handleExploreClick}
        />
        <ServicesSection />
        <PortfolioSection />
        <TrustSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
