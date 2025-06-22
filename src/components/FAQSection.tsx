
import { useState, useEffect, useRef } from 'react';

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
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

  const faqs = [
    {
      question: "What do we offer?",
      answer: "We offer a complete personal branding solution including strategy development, content planning, professional scripting, video production (in Bangalore), expert editing by our 50+ video editors, and SEO optimization. We handle everything from ideation to viral content creation."
    },
    {
      question: "Who is this for?",
      answer: "Our services are perfect for entrepreneurs, business owners, influencers, coaches, consultants, and anyone looking to build a strong personal brand. Whether you're just starting or looking to scale your existing presence, we can help you achieve your goals."
    },
    {
      question: "What is the timeline for results to show up?",
      answer: "You'll start seeing content go live within 1-2 weeks after our strategy session. Significant engagement improvements typically happen within 30-60 days, while substantial follower growth and business impact usually occur within 3-6 months of consistent execution."
    },
    {
      question: "Is there any guarantee on results?",
      answer: "While we can't guarantee specific numbers due to algorithm changes and market variables, we do guarantee high-quality content, strategic approach, and our commitment to your success. Our track record shows 300% average growth for clients who follow our complete process."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section ref={containerRef} className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Frequently Asked <span className="text-blue-500">Questions</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Get answers to the most common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-gray-800 rounded-lg overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <span className={`text-2xl transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? 'max-h-96 pb-6' : 'max-h-0'
              }`}>
                <p className="px-6 text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
