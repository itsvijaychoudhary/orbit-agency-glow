
import { useState, useEffect, useRef } from 'react';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      followers: "150K",
      platform: "Instagram",
      testimonial: "Working with this team transformed my content strategy completely. My engagement increased by 300% in just 3 months.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      followers: "250K", 
      platform: "YouTube",
      testimonial: "The strategic approach they brought to my content was game-changing. Every piece of content now drives real business results.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emma Rodriguez",
      followers: "500K",
      platform: "TikTok", 
      testimonial: "I went from struggling with content creation to having 2 months of high-quality content ready in advance.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Park",
      followers: "75K",
      platform: "LinkedIn",
      testimonial: "Their expertise in personal branding helped me establish thought leadership in my industry.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson", 
      followers: "320K",
      platform: "Instagram",
      testimonial: "The analytics and optimization they provide is next level. My brand visibility has skyrocketed.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Alex Kumar",
      followers: "180K",
      platform: "YouTube",
      testimonial: "From strategy to execution, everything is seamless. The team creates content that actually converts.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 px-4 bg-gray-800 overflow-hidden" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            What Our Clients <span className="text-blue-500">Say</span>
          </h2>
        </div>

        {/* Marquee Layout */}
        <div className="relative">
          {/* Top Row - Large cards */}
          <div className="flex animate-[scroll_30s_linear_infinite] mb-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={`large-${index}`}
                className="flex-shrink-0 w-96 h-48 bg-gray-700 p-6 rounded-lg mx-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <div className="flex items-center gap-2 text-blue-400">
                      <span className="text-sm">{testimonial.followers} • {testimonial.platform}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>

          {/* Middle Row - Medium cards */}
          <div className="flex animate-[scroll_25s_linear_infinite_reverse] mb-6">
            {[...testimonials.slice(2, 5), ...testimonials.slice(2, 5)].map((testimonial, index) => (
              <div 
                key={`medium-${index}`}
                className="flex-shrink-0 w-80 h-40 bg-gray-700 p-5 rounded-lg mx-3"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-base font-bold">{testimonial.name}</h3>
                    <div className="text-blue-400 text-xs">
                      {testimonial.followers} • {testimonial.platform}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row - Small cards */}
          <div className="flex animate-[scroll_20s_linear_infinite]">
            {[...testimonials.slice(1, 4), ...testimonials.slice(1, 4)].map((testimonial, index) => (
              <div 
                key={`small-${index}`}
                className="flex-shrink-0 w-64 h-32 bg-gray-700 p-4 rounded-lg mx-2"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-bold">{testimonial.name}</h3>
                    <div className="text-blue-400 text-xs">
                      {testimonial.followers}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-xs leading-tight">
                  "{testimonial.testimonial.substring(0, 80)}..."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scroll_reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
