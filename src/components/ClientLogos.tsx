
import { useEffect, useRef, useState } from 'react';

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Placeholder client data
  const clients = [
    { name: "TechStart", logo: "TS" },
    { name: "EcoFriendly", logo: "EF" },
    { name: "HealthApp", logo: "HA" },
    { name: "RetailPro", logo: "RP" },
    { name: "FoodTech", logo: "FT" },
    { name: "StartupX", logo: "SX" },
    { name: "GreenEnergy", logo: "GE" },
    { name: "FinanceHub", logo: "FH" }
  ];

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
    <section ref={containerRef} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Trusted by <span className="text-blue-500">Industry Leaders</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We've had the privilege of working with innovative companies across various industries.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <div 
              key={client.name}
              className={`group bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-all duration-300 hover:scale-105 flex items-center justify-center h-24 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500 mb-2 group-hover:text-blue-400 transition-colors">
                  {client.logo}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <blockquote className="text-2xl md:text-3xl font-light italic text-gray-300 mb-6">
            "Working with [Agency Name] transformed our brand presence. Their creative vision and strategic approach delivered results beyond our expectations."
          </blockquote>
          <cite className="text-lg">
            <span className="font-semibold text-blue-500">Sarah Johnson</span>
            <span className="text-gray-400"> — CEO, TechStart</span>
          </cite>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">150+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className={`transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">50+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className={`transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
