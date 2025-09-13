import React, { useEffect } from "react";
import { Volume2, Lightbulb, Music2, Speaker, Mic, MonitorSpeaker, Wrench, Video, Film, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      id: "marketing",
      icon: <Volume2 size={32} />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive growth. From SEO and content marketing to paid advertising and analytics.",
      image: "/lovable-uploads/708f9e32-840d-46a4-aaa4-75ad2689e16f.png",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Content Marketing Strategy",
        "Social Media Management",
        "Email Marketing Campaigns",
        "Analytics and Reporting"
      ]
    },
    {
      id: "consulting",
      icon: <Lightbulb size={32} />,
      title: "Business Consulting",
      description: "Expert business consulting to optimize your operations and accelerate your success. Strategic planning, process improvement, and growth strategies.",
      image: "/lovable-uploads/becfc2e3-b59f-4f86-afca-b9f6fc7b7c14.png",
      features: [
        "Strategic Business Planning",
        "Operational Optimization",
        "Process Improvement",
        "Market Analysis & Research",
        "Financial Planning & Analysis",
        "Change Management"
      ]
    },
    {
      id: "creative",
      icon: <Music2 size={32} />,
      title: "Creative Services",
      description: "Professional creative solutions including branding, design, and content creation. Bring your brand vision to life with our expert creative team.",
      image: "/lovable-uploads/03e83f18-76a1-4349-a197-dbde03a93343.png",
      features: [
        "Brand Identity & Logo Design",
        "Website Design & Development",
        "Graphic Design & Print Materials",
        "Content Creation & Copywriting",
        "Video Production & Editing",
        "Photography & Visual Content"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Speaker size={24} />,
      title: "Web Development",
      description: "Custom websites and web applications built for performance."
    },
    {
      icon: <Mic size={24} />,
      title: "E-commerce Solutions",
      description: "Complete online store setup and optimization services."
    },
    {
      icon: <MonitorSpeaker size={24} />,
      title: "Data Analytics",
      description: "Business intelligence and data-driven insights."
    },
    {
      icon: <Wrench size={24} />,
      title: "Technical Support",
      description: "Ongoing maintenance and technical assistance."
    },
    {
      icon: <Video size={24} />,
      title: "Training & Education",
      description: "Team training and skill development programs."
    },
    {
      icon: <Film size={24} />,
      title: "Project Management",
      description: "End-to-end project coordination and delivery."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-aventis-black-light py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Our Services</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Professional business solutions for companies of all sizes. From strategic consulting to digital marketing and creative services, we help accelerate your growth.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow animate-fade-in animation-delay-200"
            >
              Book a Consultation
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">What We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive business solutions tailored to your unique needs
            </p>
          </div>
          
          {mainServices.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-20 last:mb-0 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full lg:w-1/2">
                <div className="glassmorphism p-1 rounded-2xl h-full">
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full aspect-video lg:aspect-auto transition-transform duration-10000 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="bg-aventis-black-light rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-4">What's Included:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-primary mt-1 mr-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 px-6 md:px-12 bg-aventis-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Additional Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized services to support your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Our team of experts is ready to help you plan and execute strategies that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Get Started
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/references"
                className="bg-transparent border border-primary text-primary hover:bg-primary/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;