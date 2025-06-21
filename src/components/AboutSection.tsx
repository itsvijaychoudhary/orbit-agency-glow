
import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional results."
    },
    {
      title: "Collaboration",
      description: "We believe in working closely with our clients to understand their vision and bring it to life."
    },
    {
      title: "Excellence",
      description: "Every project is an opportunity to exceed expectations and deliver outstanding quality."
    },
    {
      title: "Impact",
      description: "We create solutions that make a real difference for businesses and their audiences."
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Chen",
      role: "Strategy Lead",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emma Wilson",
      role: "Brand Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
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
    <section ref={containerRef} className="py-24 px-4 bg-gray-800" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About <span className="text-blue-500">Our Story</span>
          </h2>
          <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We're a creative agency passionate about crafting digital experiences that inspire, engage, and drive results.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Journey</h3>
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Founded in 2018, [Agency Name] began as a small team of passionate creatives who believed that great design could change the world. What started as a shared vision in a small studio has grown into a full-service creative agency.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our journey has been defined by our commitment to pushing boundaries, embracing innovation, and delivering exceptional results for our clients. We've had the privilege of working with startups, established brands, and everything in between.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we continue to evolve, always staying ahead of industry trends while maintaining our core values of creativity, collaboration, and excellence.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-gray-700 p-8 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-2xl font-bold mb-4 text-blue-500">{value.title}</h4>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">Meet Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="text-center group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <p className="text-blue-500 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
