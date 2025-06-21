
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MarqueeText from '@/components/MarqueeText';
import Services from '@/components/Services';
import VideoShowreel from '@/components/VideoShowreel';
import ClientLogos from '@/components/ClientLogos';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-900 text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main>
        <Hero />
        <MarqueeText />
        <Services />
        <VideoShowreel />
        <ClientLogos />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
