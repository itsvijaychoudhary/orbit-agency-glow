
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
    <section ref={containerRef} className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" id="contact">
      {/* Video editing timeline background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&h=1080&fit=crop"
          alt="Video editing timeline"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Book a <span className="text-blue-500">Discovery</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Call Today
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your personal brand with our complete content creation strategy. 
          From ideation to viral content - we handle everything so you can focus on scaling.
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
            className="relative bg-white text-gray-900 hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-xl transition-all duration-200 hover:scale-105 transform shadow-lg"
          >
            Book Your Discovery Call
          </button>
        </div>

        {/* Statistics - Same as landing page */}
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center mt-16 text-center">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">500M+</div>
            <div className="text-gray-300 text-lg">Views Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-500 mb-2">4 Years</div>
            <div className="text-gray-300 text-lg">Building Personal Brands</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">500+</div>
            <div className="text-gray-300 text-lg">Videos Created</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
