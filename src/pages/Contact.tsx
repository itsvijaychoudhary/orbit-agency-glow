
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '', budget: '' });
  };

  return (
    <div className={`min-h-screen bg-gray-900 text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Let's <span className="text-blue-500">Talk</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
              Ready to start your next project? We'd love to hear from you and discuss how we can help bring your vision to life.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 hover:scale-105 transform"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in touch</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-blue-500">Quick Contact</h3>
                    <div className="space-y-3">
                      <a 
                        href="mailto:hello@agency.com"
                        className="block text-lg hover:text-blue-500 transition-colors"
                      >
                        hello@agency.com
                      </a>
                      <a 
                        href="tel:+1234567890"
                        className="block text-lg hover:text-blue-500 transition-colors"
                      >
                        +1 (234) 567-8900
                      </a>
                      <a 
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors mt-4"
                      >
                        WhatsApp Us
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-blue-500">Office Location</h3>
                    <p className="text-gray-300 mb-4">
                      123 Creative Street<br />
                      Design District<br />
                      New York, NY 10001
                    </p>
                    
                    {/* Google Maps Embed */}
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-blue-500">Office Hours</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
