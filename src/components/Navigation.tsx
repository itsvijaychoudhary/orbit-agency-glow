
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold text-white hover:text-blue-500 transition-colors"
          >
            [Agency Name]
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={scrollToTop}
              className="text-white hover:text-blue-500 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-blue-500 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-blue-500 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="text-white hover:text-blue-500 transition-colors font-medium"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-500 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block h-0.5 w-full bg-white transform transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block h-0.5 w-full bg-white transform transition-transform duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-4 bg-gray-800 rounded-lg p-4 mt-2">
            <button 
              onClick={scrollToTop}
              className="text-white hover:text-blue-500 transition-colors font-medium text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-blue-500 transition-colors font-medium text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-blue-500 transition-colors font-medium text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="text-white hover:text-blue-500 transition-colors font-medium text-left"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-500 transition-colors font-medium text-left"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
