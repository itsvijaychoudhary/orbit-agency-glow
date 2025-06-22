
import { useState, useEffect, useRef } from 'react';

const ResultsSection = () => {
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

  const results = [
    {
      number: "500M+",
      label: "Views Generated",
      description: "Total views across all client content"
    },
    {
      number: "50+",
      label: "Video Editors",
      description: "Professional editors in our team"
    },
    {
      number: "300%",
      label: "Average Growth",
      description: "Client follower increase in 6 months"
    },
    {
      number: "1000+",
      label: "Videos Created",
      description: "High-quality content delivered"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Extraordinary <span className="text-blue-500">Results</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Numbers that speak for themselves - see the impact we've created for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div 
              key={result.label}
              className={`text-center p-8 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
                {result.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{result.label}</h3>
              <p className="text-gray-400">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
