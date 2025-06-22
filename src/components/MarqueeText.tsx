
import { useEffect, useRef } from 'react';

const MarqueeText = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const companies = [
    'NETFLIX',
    'AMAZON',
    'GOOGLE',
    'MICROSOFT',
    'APPLE',
    'TESLA',
    'SPOTIFY',
    'UBER',
    'AIRBNB',
    'SHOPIFY'
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
        }, 15000);
      }
    };

    const interval = setInterval(animate, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-white/80 text-lg">
          Join the brands that trust us with their content strategy
        </p>
      </div>
      
      <div 
        ref={marqueeRef}
        className="flex whitespace-nowrap transition-transform duration-[15000ms] ease-linear"
        style={{ transform: 'translateX(100%)' }}
      >
        {[...companies, ...companies].map((company, index) => (
          <span 
            key={index}
            className="text-3xl md:text-5xl font-bold text-white mx-12 opacity-90"
          >
            {company}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeText;
