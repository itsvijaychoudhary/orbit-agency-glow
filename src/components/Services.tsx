
import { useState, useEffect, useRef } from 'react';

const Services = () => {
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

  const services = [
    {
      title: "Ideation & Strategy",
      description: "We start with understanding your brand and creating content strategies that align with your goals and audience.",
      icon: "💡"
    },
    {
      title: "Content Planning",
      description: "Detailed content calendars and strategic planning to ensure consistent, engaging content that drives results.",
      icon: "📋"
    },
    {
      title: "Scripting",
      description: "Professional scriptwriting that captures your voice and delivers your message in the most engaging way possible.",
      icon: "✍️"
    },
    {
      title: "Video Shooting",
      description: "Professional video production services available in Bangalore with state-of-the-art equipment and experienced crew.",
      icon: "🎥"
    },
    {
      title: "Video Editing",
      description: "Expert post-production with our team of 50+ professional video editors to create stunning, viral-ready content.",
      icon: "✂️"
    },
    {
      title: "SEO Optimization",
      description: "Optimize your content for maximum reach and discoverability across all platforms with data-driven strategies.",
      icon: "📈"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 px-4" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            What We <span className="text-blue-500">Do</span>
          </h2>
          <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We help individuals and brands build their personal brand through a complete content creation process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-500">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-8">
            From ideation to viral content - we handle the complete process so you can focus on what you do best.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
