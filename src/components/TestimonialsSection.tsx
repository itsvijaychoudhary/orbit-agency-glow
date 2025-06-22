
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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            What Our Clients <span className="text-blue-500">Say</span>
          </h2>
        </div>

        {/* Single Row Layout */}
        <div className="flex animate-[marquee-left_40s_linear_infinite] gap-6">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={`testimonial-${index}`}
              className="flex-shrink-0 w-80 h-72 bg-gray-700 p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-6">
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
