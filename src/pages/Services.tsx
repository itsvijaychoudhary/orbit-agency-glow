
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      title: "Brand Strategy & Identity",
      short: "Complete brand development from strategy to visual identity",
      full: "We create comprehensive brand strategies that define your unique position in the market. Our process includes brand positioning, messaging frameworks, visual identity design, logo creation, and brand guidelines that ensure consistency across all touchpoints.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop"
    },
    {
      title: "Digital Marketing",
      short: "Multi-channel digital marketing campaigns that drive results",
      full: "Our digital marketing experts craft data-driven campaigns across social media, search engines, and digital platforms. We focus on audience targeting, content creation, campaign optimization, and performance tracking to maximize your ROI and reach your business goals.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "Video Production",
      short: "High-quality video content for all platforms and purposes",
      full: "From concept to post-production, we create compelling video content that tells your story. Our services include commercial videos, social media content, documentaries, animated explainers, and live event coverage with professional equipment and creative expertise.",
      image: "https://images.unsplash.com/photo-1492619392882-1d8862ebfbc3?w=600&h=400&fit=crop"
    },
    {
      title: "Web Development",
      short: "Custom websites and applications built for performance",
      full: "We develop responsive, fast-loading websites and web applications using modern technologies. Our development process includes user experience design, custom coding, CMS integration, e-commerce solutions, and ongoing maintenance and support.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    },
    {
      title: "Social Media Management",
      short: "Complete social media strategy and content management",
      full: "We manage your social media presence across all major platforms with strategic content planning, community management, influencer partnerships, and performance analytics. Our approach focuses on building authentic engagement and growing your online community.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop"
    },
    {
      title: "Creative Consulting",
      short: "Strategic creative guidance for your business challenges",
      full: "Our creative consultants work with your team to solve complex business challenges through innovative thinking. We provide strategic guidance on creative direction, campaign development, brand positioning, and creative process optimization.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className={`min-h-screen bg-gray-900 text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Our <span className="text-blue-500">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
              Comprehensive creative solutions tailored to elevate your brand and drive meaningful results.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                        <button
                          onClick={() => toggleExpanded(index)}
                          className="ml-4 p-2 hover:bg-gray-700 rounded-full transition-colors duration-200"
                        >
                          <ChevronDown 
                            className={`w-6 h-6 transition-transform duration-300 ${
                              expandedService === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>
                      <p className="text-gray-300 text-lg mb-4">{service.short}</p>
                      <div className={`overflow-hidden transition-all duration-500 ${
                        expandedService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-gray-400 leading-relaxed pt-4 border-t border-gray-700">
                          {service.full}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help bring your vision to life with our comprehensive creative services.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200 hover:scale-105 transform">
              Start Your Project
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
