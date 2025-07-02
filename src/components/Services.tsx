
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

  const shortFormVideos = [
    {
      title: "Reel with subtitles",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=400&fit=crop"
    },
    {
      title: "Product showcase edit",
      thumbnail: "https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=300&h=400&fit=crop"
    },
    {
      title: "Tutorial quick cut",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=300&h=400&fit=crop"
    },
    {
      title: "Behind scenes reel",
      thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=300&h=400&fit=crop"
    }
  ];

  const longFormVideos = [
    {
      title: "Cinematic vlog cut",
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=225&fit=crop"
    },
    {
      title: "Interview style edit",
      thumbnail: "https://images.unsplash.com/photo-1478720568477-b2709d01a6f3?w=400&h=225&fit=crop"
    },
    {
      title: "Documentary narrative",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=225&fit=crop"
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
            From short-form content to cinematic masterpieces
          </p>
        </div>

        {/* Short-form videos row */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-500">Short-Form Videos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {shortFormVideos.map((video, index) => (
              <div 
                key={video.title}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-3">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-300 text-sm font-medium">{video.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Long-form videos row */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-purple-500">Long-Form Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {longFormVideos.map((video, index) => (
              <div 
                key={video.title}
                className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg aspect-video mb-3">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-300 text-sm font-medium">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
