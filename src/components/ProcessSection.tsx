
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
      color: "from-blue-600 to-blue-800"
    },
    {
      step: "02", 
      title: "Filming & Post Production",
      duration: "2 Months Content",
      description: "We film 2 months worth of content in advance, ensuring you have a consistent pipeline. Our professional team handles everything from shooting to post-production with quick turnarounds.",
      features: ["Professional Filming", "2 Months Backup Content", "Expert Editing", "Quick Delivery"],
      color: "from-purple-600 to-purple-800"
    },
    {
      step: "03",
      title: "Scale & Optimize",
      duration: "Ongoing",
      description: "Watch your brand scale with our deep analytics and SEO optimization. We continuously analyze what works and optimize your content strategy for maximum impact and growth.",
      features: ["Performance Analytics", "SEO Optimization", "Growth Tracking", "Strategy Refinement"],
      color: "from-green-600 to-green-800"
    }
  ];

  const getStepTransform = (index: number) => {
    const stepTrigger = index * 0.33;
    const nextStepTrigger = (index + 1) * 0.33;
    
    if (scrollProgress < stepTrigger) {
      // Before this step is active - next card is hidden
      if (index === 0) {
        return { 
          transform: 'translateY(0%)', 
          scale: 1,
          opacity: 1,
          zIndex: 10 - index
        };
      } else {
        return { 
          transform: 'translateY(0%)', 
          scale: 1,
          opacity: 0,
          zIndex: 10 - index
        };
      }
    } else if (scrollProgress >= stepTrigger && scrollProgress < nextStepTrigger) {
      // This step is active
      const stepProgress = (scrollProgress - stepTrigger) / 0.33;
      
      if (index < steps.length - 1) {
        // Card moving up with scale reduction
        const moveUp = stepProgress * 100;
        const scaleDown = 1 - (stepProgress * 0.3); // Scale down to 0.7
        
        // Next card fading in
        const nextCardOpacity = stepProgress;
        
        return {
          current: { 
            transform: `translateY(-${moveUp}%)`, 
            scale: scaleDown,
            opacity: 1, // Keep opacity constant
            zIndex: 10 - index
          },
          next: {
            transform: 'translateY(0%)', 
            scale: 1,
            opacity: nextCardOpacity,
            zIndex: 10 - index - 1
          }
        };
      } else {
        // Last card - just visible
        return { 
          transform: 'translateY(0%)', 
          scale: 1,
          opacity: 1,
          zIndex: 10 - index
        };
      }
    } else {
      // After this step - card is gone
      return { 
        transform: 'translateY(-100%)', 
        scale: 0.7,
        opacity: 1,
        zIndex: 10 - index
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
              const transforms = getStepTransform(index);
              const isCurrentActive = typeof transforms === 'object' && 'current' in transforms;
              
              return (
                <div key={`step-${index}`}>
                  {/* Current card */}
                  <div 
                    className="absolute inset-0 w-full transition-all duration-300 ease-out"
                    style={isCurrentActive ? transforms.current : transforms}
                  >
                    <div className="flex flex-col lg:flex-row items-center gap-12 h-full">
                      <div className="lg:w-1/2">
                        <div className="bg-gray-700 p-8 rounded-lg shadow-2xl">
                          <div className="flex items-center gap-4 mb-6">
                            <span className="text-6xl font-bold text-blue-500">{step.step}</span>
                            <div>
                              <h3 className="text-2xl font-bold">{step.title}</h3>
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
                      </div>
                      <div className="lg:w-1/2">
                        <div className={`h-64 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-2xl`}>
                          <span className="text-8xl opacity-20">
                            {step.step === "01" ? "🎯" : step.step === "02" ? "🎬" : "📈"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Next card (for fade-in effect) */}
                  {isCurrentActive && index < steps.length - 1 && (
                    <div 
                      className="absolute inset-0 w-full transition-all duration-300 ease-out"
                      style={transforms.next}
                    >
                      <div className="flex flex-col lg:flex-row items-center gap-12 h-full">
                        <div className="lg:w-1/2">
                          <div className="bg-gray-700 p-8 rounded-lg shadow-2xl">
                            <div className="flex items-center gap-4 mb-6">
                              <span className="text-6xl font-bold text-blue-500">{steps[index + 1].step}</span>
                              <div>
                                <h3 className="text-2xl font-bold">{steps[index + 1].title}</h3>
                                <span className="text-blue-400 font-medium">{steps[index + 1].duration}</span>
                              </div>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                              {steps[index + 1].description}
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                              {steps[index + 1].features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <span className="text-green-500">✓</span>
                                  <span className="text-sm text-gray-400">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="lg:w-1/2">
                          <div className={`h-64 bg-gradient-to-br ${steps[index + 1].color} rounded-lg flex items-center justify-center shadow-2xl`}>
                            <span className="text-8xl opacity-20">
                              {steps[index + 1].step === "01" ? "🎯" : steps[index + 1].step === "02" ? "🎬" : "📈"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
