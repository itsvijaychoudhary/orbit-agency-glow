
import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
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

  const problems = [
    {
      title: "Inconsistent Content",
      description: "Struggling to maintain regular posting schedules and consistent quality across platforms",
      icon: "📅"
    },
    {
      title: "Low Engagement",
      description: "Your content isn't resonating with your audience or driving meaningful interactions",
      icon: "📉"
    },
    {
      title: "Time Consuming",
      description: "Spending countless hours on content creation instead of focusing on your core business",
      icon: "⏰"
    },
    {
      title: "Poor ROI",
      description: "Traditional marketing methods aren't delivering the results you need in today's digital world",
      icon: "💸"
    }
  ];

  const solutions = [
    "Build authentic personal brand that stands out",
    "Create viral-ready content that drives engagement", 
    "Establish thought leadership in your industry",
    "Generate qualified leads through content marketing",
    "Scale your business with digital presence",
    "Free up your time to focus on what matters most"
  ];

  return (
    <section ref={containerRef} className="py-24 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            The Real Problems <span className="text-red-500">You're Facing</span>
          </h2>
          <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Why you need a strong digital presence in today's competitive landscape
          </p>
        </div>

        {/* Problems Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={problem.title}
              className={`bg-red-900/20 border border-red-500/30 p-8 rounded-lg transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">{problem.title}</h3>
              <p className="text-gray-300 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Solution Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 p-12 rounded-lg">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Digital Presence is <span className="text-blue-500">Critical</span> for Every Business
          </h3>
          <p className="text-lg text-gray-300 text-center mb-8 max-w-4xl mx-auto">
            In today's digital-first world, your online presence isn't just important—it's essential. 
            While traditional marketing reaches fewer people at higher costs, digital content marketing 
            allows you to connect authentically with your audience, build trust, and drive real business growth.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg"
              >
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-200">{solution}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
