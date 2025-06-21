
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

const Work = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: "TechStart Rebrand",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop",
      problem: "TechStart needed a complete brand overhaul to compete in the crowded fintech space.",
      approach: "We developed a comprehensive brand strategy focusing on trust, innovation, and accessibility.",
      result: "40% increase in brand recognition and 25% boost in customer acquisition within 6 months.",
      testimonial: "The new brand identity perfectly captures our vision and has transformed how customers perceive us.",
      client: "CEO, TechStart"
    },
    {
      title: "EcoFriendly Campaign",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      problem: "EcoFriendly needed to increase awareness of their sustainable products among millennials.",
      approach: "Multi-platform social media campaign with influencer partnerships and user-generated content.",
      result: "200% increase in social media engagement and 150% growth in online sales.",
      testimonial: "Their creative approach helped us connect with our target audience in an authentic way.",
      client: "Marketing Director, EcoFriendly"
    },
    {
      title: "HealthApp Launch Video",
      category: "Video Production",
      image: "https://images.unsplash.com/photo-1492619392882-1d8862ebfbc3?w=600&h=400&fit=crop",
      problem: "HealthApp needed a compelling launch video to explain their complex health tracking features.",
      approach: "Created an animated explainer video with clear storytelling and engaging visuals.",
      result: "1M+ views across platforms and featured in major tech publications.",
      testimonial: "The video perfectly explained our app's value proposition and drove incredible engagement.",
      client: "Founder, HealthApp"
    },
    {
      title: "RetailPro Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      problem: "RetailPro's outdated website was hindering their B2B sales process.",
      approach: "Built a modern, responsive website with integrated CRM and advanced analytics.",
      result: "300% increase in qualified leads and 50% reduction in bounce rate.",
      testimonial: "Our new website has become our most effective sales tool. The results speak for themselves.",
      client: "Sales Director, RetailPro"
    },
    {
      title: "FoodTech Social Strategy",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop",
      problem: "FoodTech struggled to build community around their meal delivery service.",
      approach: "Developed content strategy focusing on food photography, recipes, and community engagement.",
      result: "500% follower growth and 80% increase in app downloads from social media.",
      testimonial: "They transformed our social presence from zero to a thriving community of food lovers.",
      client: "CMO, FoodTech"
    },
    {
      title: "StartupX Pitch Deck",
      category: "Design",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      problem: "StartupX needed a compelling pitch deck for their Series A funding round.",
      approach: "Created a visually stunning presentation that clearly communicated their value proposition.",
      result: "Successfully raised $5M in Series A funding with multiple investor meetings.",
      testimonial: "The pitch deck was instrumental in securing our funding. Investors were impressed from slide one.",
      client: "CEO, StartupX"
    }
  ];

  const openModal = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className={`min-h-screen bg-gray-900 text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Our <span className="text-blue-500">Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
              Explore our portfolio of successful projects and the impact we've created for our clients.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="group cursor-pointer bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
                  onClick={() => openModal(index)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">View Case Study</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-blue-500 text-sm font-medium uppercase tracking-wide">{project.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.problem}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={projects[selectedProject].image} 
                  alt={projects[selectedProject].title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <span className="text-blue-500 text-sm font-medium uppercase tracking-wide">
                    {projects[selectedProject].category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2">{projects[selectedProject].title}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-red-500">Problem</h3>
                    <p className="text-gray-300">{projects[selectedProject].problem}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-yellow-500">Approach</h3>
                    <p className="text-gray-300">{projects[selectedProject].approach}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-green-500">Result</h3>
                    <p className="text-gray-300">{projects[selectedProject].result}</p>
                  </div>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg">
                  <blockquote className="text-lg italic mb-4">
                    "{projects[selectedProject].testimonial}"
                  </blockquote>
                  <cite className="text-blue-500 font-medium">— {projects[selectedProject].client}</cite>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Work;
