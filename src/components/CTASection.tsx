
import { useState, useEffect, useRef } from 'react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Ready to Create Something 
          <br />
          <span className="text-yellow-300">Amazing?</span>
        </h2>
        
        <p className={`text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Let's collaborate to bring your vision to life. Whether you're a startup or an established brand, 
          we're here to help you make an impact.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 transform shadow-lg">
            Let's Talk
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 transform">
            See Our Work
          </button>
        </div>

        {/* Contact info */}
        <div className={`mt-12 space-y-4 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-white/80">
            <a href="mailto:hello@agency.com" className="hover:text-white transition-colors text-lg">
              hello@agency.com
            </a>
            <span className="mx-4">•</span>
            <a href="tel:+1234567890" className="hover:text-white transition-colors text-lg">
              +1 (234) 567-8900
            </a>
          </div>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
