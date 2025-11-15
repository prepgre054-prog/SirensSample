import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { VideoHero } from '@/components/VideoHero';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { TrustSection } from '@/components/TrustSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsContentVisible(true), 300);
  }, []);

  const handleExploreClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900">
      <Navigation isVisible={isNavVisible} />

      <div className="relative">
        <VideoHero
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
