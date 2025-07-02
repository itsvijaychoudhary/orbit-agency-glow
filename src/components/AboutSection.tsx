
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

  return (
    <section ref={containerRef} className="py-24 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We Did It, <span className="text-blue-500">You Can Too</span>
          </h2>
        </div>

        {/* Personal Introduction */}
        <div className={`bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 p-12 rounded-lg transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Content Creator"
                  className="w-64 h-64 rounded-full object-cover mx-auto shadow-2xl"
                />
                <div className="mt-6 text-center">
                  <a 
                    href="https://www.youtube.com/channel/UCMxcb0HGuvzv_35zUqs2U9w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    100K+ Views on YouTube
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="text-lg md:text-xl text-gray-200 leading-relaxed">
                <p className="mb-6">
                  After spending years creating content that resonates with millions, I've realized one thing: 
                  <span className="text-blue-400 font-semibold"> attention is the new currency.</span>
                </p>
                <p className="mb-6">
                  With <span className="text-green-400 font-semibold">100K+ views on YouTube</span> and experience 
                  crafting <span className="text-purple-400 font-semibold">500+ videos</span>, I help brands stand out 
                  through powerful storytelling and content strategy.
                </p>
                <p>
                  Every scroll, every click, every view matters. Let me help you turn your expertise into 
                  content that converts and builds lasting relationships with your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
