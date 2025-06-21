
import { useState, useRef, useEffect } from 'react';

const VideoShowreel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Auto-play when visible (muted)
          if (videoRef.current) {
            videoRef.current.play().catch(() => {
              // Auto-play failed, which is expected in many browsers
            });
          }
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={containerRef} className="py-24 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our <span className="text-blue-500">Showreel</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Experience our creative work in motion. A compilation of our finest projects and creative solutions.
          </p>
        </div>

        <div className={`relative rounded-lg overflow-hidden transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Video placeholder with poster */}
          <div className="relative bg-gray-900 aspect-video">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1492619392882-1d8862ebfbc3?w=1200&h=675&fit=crop"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              {/* Placeholder - in a real app, you'd have an actual video source */}
              <source src="#" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group hover:bg-black/40 transition-colors cursor-pointer" onClick={togglePlay}>
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 transition-colors">
                {isPlaying ? (
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className="w-2 h-6 bg-white rounded mr-1"></div>
                    <div className="w-2 h-6 bg-white rounded ml-1"></div>
                  </div>
                ) : (
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-8 border-white border-t-4 border-b-4 border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Video unavailable message */}
            <div className="absolute inset-0 flex items-center justify-center text-center p-8">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Showreel Coming Soon</h3>
                <p className="text-gray-300">
                  Our creative showreel is currently in production. 
                  <br />
                  Contact us to see our latest work samples.
                </p>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-lg font-bold mb-1">Creative Agency Showreel 2024</h3>
              <p className="text-sm opacity-90">A showcase of our best work and creative solutions</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 transform">
            See More Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoShowreel;
