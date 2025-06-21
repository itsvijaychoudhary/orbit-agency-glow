
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white hover:text-blue-500 transition-colors">
              [AGENCY NAME]
            </Link>
            <p className="text-gray-400 mt-4 max-w-md">
              A creative agency passionate about crafting digital experiences that inspire, 
              engage, and drive meaningful results for forward-thinking businesses.
            </p>
            <div className="flex space-x-6 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/work" className="text-gray-400 hover:text-white transition-colors">Work</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>123 Creative Street</p>
              <p>Design District</p>
              <p>New York, NY 10001</p>
              <p className="mt-4">
                <a href="mailto:hello@agency.com" className="hover:text-white transition-colors">
                  hello@agency.com
                </a>
              </p>
              <p>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-8900
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 [Agency Name]. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
