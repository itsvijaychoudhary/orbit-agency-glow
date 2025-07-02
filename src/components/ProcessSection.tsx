
import { useState, useEffect, useRef } from 'react';

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate scroll progress within the section
      const startOffset = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, startOffset / (elementHeight + windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      step: "01",
      title: "Brand Strategy & Planning",
      duration: "1-2 Hours",
      description: "We understand your brand, target audience, and goals. In just 1-2 hours, we create a comprehensive 2-month content strategy that's ready to execute within a week.",
      features: ["Brand Analysis", "Audience Research", "Content Strategy", "2-Month Planning"],
      color: "from-blue-600 to-blue-800",
      icon: "🎯"
    },
    {
      step: "02", 
      title: "Filming & Post Production",
      duration: "2 Months Content",
      description: "We film 2 months worth of content in advance, ensuring you have a consistent pipeline. Our professional team handles everything from shooting to post-production with quick turnarounds.",
      features: ["Professional Filming", "2 Months Backup Content", "Expert Editing", "Quick Delivery"],
      color: "from-purple-600 to-purple-800",
      icon: "🎬"
    },
    {
      step: "03",
      title: "Scale & Optimize",
      duration: "Ongoing",
      description: "Watch your brand scale with our deep analytics and SEO optimization. We continuously analyze what works and optimize your content strategy for maximum impact and growth.",
      features: ["Performance Analytics", "SEO Optimization", "Growth Tracking", "Strategy Refinement"],
      color: "from-green-600 to-green-800",
      icon: "📈"
    }
  ];

  const getCurrentCardIndex = () => {
    if (scrollProgress < 0.33) return 0;
    if (scrollProgress < 0.66) return 1;
    return 2;
  };

  const getCardTransform = (index: number) => {
    const currentIndex = getCurrentCardIndex();
    const stepProgress = (scrollProgress - (index * 0.33)) / 0.33;
    
    if (index < currentIndex) {
      // Card has moved out of frame - completely hidden
      return {
        transform: 'translateY(-120%) scale(0.7)',
        opacity: 0,
        zIndex: 1
      };
    } else if (index === currentIndex) {
      // Current active card
      if (index < steps.length - 1 && stepProgress > 0) {
        // Card is moving up and scaling down as it exits
        const moveUp = Math.min(stepProgress * 120, 120);
        const scaleDown = Math.max(1 - (stepProgress * 0.3), 0.7);
        
        return {
          transform: `translateY(-${moveUp}%) scale(${scaleDown})`,
          opacity: 1,
          zIndex: 10
        };
      } else {
        // Card is stationary
        return {
          transform: 'translateY(0%) scale(1)',
          opacity: 1,
          zIndex: 10
        };
      }
    } else if (index === currentIndex + 1) {
      // Next card - fade in as current card moves out
      const fadeIn = Math.max(0, Math.min(1, stepProgress));
      
      return {
        transform: 'translateY(0%) scale(1)',
        opacity: fadeIn,
        zIndex: 5
      };
    } else {
      // Future cards - completely hidden
      return {
        transform: 'translateY(0%) scale(1)',
        opacity: 0,
        zIndex: 1
      };
    }
  };

  return (
    <section ref={containerRef} className="py-24 px-4 bg-gray-800 relative" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              How We <span className="text-blue-500">Do It</span>
            </h2>
            <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Our proven 3-step process that transforms your brand presence
            </p>
          </div>

          <div className="relative h-96">
            {steps.map((step, index) => {
              const transforms = getCardTransform(index);
              
              return (
                <div 
                  key={`step-${index}`}
                  className="absolute inset-0 w-full transition-all duration-500 ease-out"
                  style={{
                    transform: transforms.transform,
                    opacity: transforms.opacity,
                    zIndex: transforms.zIndex
                  }}
                >
                  {/* Single Rectangle Card Component */}
                  <div className="bg-gray-700 rounded-lg shadow-2xl p-8 mx-auto max-w-4xl h-full">
                    <div className="flex items-start gap-8 h-full">
                      {/* Left side - Text content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-6xl font-bold text-blue-500">{step.step}</span>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                            <span className="text-blue-400 font-medium">{step.duration}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {step.description}
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {step.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="text-green-500">✓</span>
                              <span className="text-sm text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right side - Visual element */}
                      <div className="w-64 h-64 flex-shrink-0">
                        <div className={`h-full bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-xl`}>
                          <span className="text-8xl opacity-30">
                            {step.icon}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
