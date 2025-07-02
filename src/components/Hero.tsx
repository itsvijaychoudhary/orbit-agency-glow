
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Premiere Pro timeline background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=1920&h=1080&fit=crop"
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

        <button 
          onClick={scrollToContact}
          className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full font-bold text-xl transition-all duration-200 hover:scale-105 transform shadow-lg mb-12"
        >
          Book Your Discovery Call
        </button>

        {/* Statistics - Single horizontal line with smaller font */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center items-center mt-12 text-center">
          <div className="text-white text-lg sm:text-xl font-bold">500M+ Views Generated</div>
          <div className="text-white text-lg sm:text-xl font-bold">4 Years Building Personal Brands</div>
          <div className="text-white text-lg sm:text-xl font-bold">500+ Videos Created</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
