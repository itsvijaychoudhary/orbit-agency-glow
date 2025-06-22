
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden" id="contact">
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
        
        <p className={`text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Let's collaborate to bring your vision to life. Whether you're a startup or an established brand, 
          we're here to help you make an impact.
        </p>

        <div className={`relative inline-block transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Doodle circle around button */}
          <svg 
            className="absolute -inset-4 w-full h-full animate-pulse" 
            viewBox="0 0 120 60" 
            fill="none"
          >
            <path 
              d="M10 30 Q20 10, 40 15 Q60 20, 80 15 Q100 10, 110 30 Q100 50, 80 45 Q60 40, 40 45 Q20 50, 10 30 Z" 
              stroke="white" 
              strokeWidth="2" 
              fill="none"
              opacity="0.6"
              strokeDasharray="5,5"
            />
          </svg>
          
          <button 
            onClick={scrollToTop}
            className="relative bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 transform shadow-lg"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
