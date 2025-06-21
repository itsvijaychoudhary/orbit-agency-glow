
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  return (
    <div className={`min-h-screen bg-gray-900 text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                About <span className="text-blue-500">Our Story</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
                We're a creative agency passionate about crafting digital experiences that inspire, engage, and drive results.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Journey</h2>
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
        </section>

        {/* Values Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-blue-500">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-4 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Meet Our Team</h2>
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
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-500 font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
