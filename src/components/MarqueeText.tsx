
import { useEffect, useRef } from 'react';

const MarqueeText = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const keywords = [
    'BRAND STRATEGY',
    'DIGITAL MARKETING',
    'VIDEO PRODUCTION',
    'WEB DEVELOPMENT',
    'SOCIAL MEDIA',
    'CREATIVE CONSULTING',
    'VISUAL IDENTITY',
    'CONTENT CREATION'
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const animate = () => {
      const firstChild = marquee.firstElementChild as HTMLElement;
      if (firstChild) {
        const translateX = -firstChild.offsetWidth;
        marquee.style.transform = `translateX(${translateX}px)`;
        
        setTimeout(() => {
          marquee.appendChild(firstChild);
          marquee.style.transform = 'translateX(0)';
        }, 10000);
      }
    };

    const interval = setInterval(animate, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
      <div 
        ref={marqueeRef}
        className="flex whitespace-nowrap transition-transform duration-[10000ms] ease-linear"
      >
        {[...keywords, ...keywords].map((keyword, index) => (
          <span 
            key={index}
            className="text-4xl md:text-6xl font-bold text-white mx-12 opacity-90"
          >
            {keyword}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeText;
