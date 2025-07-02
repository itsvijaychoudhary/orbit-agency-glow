
import { useEffect, useRef } from 'react';

const MarqueeText = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const companies = [
    { name: 'Netflix', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png' },
    { name: 'Amazon', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' },
    { name: 'Google', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png' },
    { name: 'Microsoft', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png' },
    { name: 'Apple', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png' },
    { name: 'Tesla', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Tesla-Logo.png' },
    { name: 'Spotify', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Spotify-Logo.png' },
    { name: 'Uber', logo: 'https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png' }
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
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Trusted by Industry Leaders
        </h2>
      </div>
      
      <div 
        ref={marqueeRef}
        className="flex whitespace-nowrap transition-transform duration-[10000ms] ease-linear"
        style={{ transform: 'translateX(100%)' }}
      >
        {[...companies, ...companies].map((company, index) => (
          <div 
            key={index}
            className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg mx-4 px-6 py-3 min-w-[140px] h-16"
          >
            <img 
              src={company.logo} 
              alt={company.name}
              className="max-h-8 max-w-[100px] object-contain filter brightness-0 invert opacity-90"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeText;
