import { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [currentService, setCurrentService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Brand Strategy",
      description: "We develop comprehensive brand strategies that define your unique position in the market and resonate with your target audience.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing campaigns across all digital channels to maximize your reach and drive meaningful engagement.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "Video Production",
      description: "From concept to post-production, we create compelling video content that tells your story and captivates your audience.",
      image: "https://images.unsplash.com/photo-1492619392882-1d8862ebfbc3?w=600&h=400&fit=crop"
    },
    {
      title: "Web Development",
      description: "Custom websites and applications built with modern technologies, optimized for performance and user experience.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentService((prev) => (prev + 1) % services.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible, services.length]);

  return (
    <section ref={containerRef} className="py-24 px-4" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            What We <span className="text-blue-500">Do</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We specialize in creating comprehensive creative solutions that elevate brands and drive meaningful results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Image */}
          <div className={`relative overflow-hidden rounded-lg transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <img 
              src={services[currentService].image}
              alt={services[currentService].title}
              className="w-full h-96 object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Service Content */}
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500">
                {services[currentService].title}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {services[currentService].description}
              </p>
            </div>

            {/* Service Navigation */}
            <div className="flex space-x-2 mb-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentService(index)}
                  className={`w-12 h-1 rounded-full transition-all duration-300 ${
                    index === currentService ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            {/* Service List */}
            <div className="space-y-3">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentService(index)}
                  className={`block w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    index === currentService 
                      ? 'bg-blue-600/20 border-l-4 border-blue-500' 
                      : 'hover:bg-gray-800'
                  }`}
                >
                  <span className="font-semibold">{service.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
