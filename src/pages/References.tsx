import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const References = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Featured Project */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Success Stories</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover how we've helped businesses achieve remarkable growth and success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glassmorphism p-1 h-full animate-fade-in">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                  alt="E-commerce Growth Strategy"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aventis-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  <div className="bg-primary inline-block px-3 py-1 text-xs font-medium text-primary-foreground rounded-full mb-2 self-start">
                    E-commerce
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">TechStart E-commerce Growth</h3>
                  <p className="text-gray-300 mb-4">Digital marketing strategy that increased online sales by 300% within 6 months for a growing tech startup.</p>
                </div>
              </div>
            </div>
            
            <div className="glassmorphism p-1 h-full animate-fade-in animation-delay-100">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                  alt="Corporate Transformation"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aventis-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  <div className="bg-primary inline-block px-3 py-1 text-xs font-medium text-primary-foreground rounded-full mb-2 self-start">
                    Consulting
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">GlobalCorp Digital Transformation</h3>
                  <p className="text-gray-300 mb-4">Complete business process optimization and digital transformation for a Fortune 500 company, improving efficiency by 45%.</p>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-1 h-full animate-fade-in animation-delay-200">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <img
                  src="/lovable-uploads/48e75083-18aa-4df9-bc91-8515485aa465.png"
                  alt="Brand Development Success"
                  className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aventis-black-DEFAULT to-transparent flex flex-col justify-end p-6">
                  <div className="bg-primary inline-block px-3 py-1 text-xs font-medium text-primary-foreground rounded-full mb-2 self-start">
                    Branding
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">HealthCare Brand Revolution</h3>
                  <p className="text-gray-300 mb-4">Complete brand identity redesign and marketing strategy that positioned a healthcare company as an industry leader.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-12 bg-aventis-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear from businesses that have transformed their operations with our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Aventis Services transformed our digital presence completely. Our online sales increased by 250% in just 4 months.",
                author: "Sarah Johnson",
                position: "CEO",
                company: "TechStart Solutions"
              },
              {
                quote: "The strategic consulting provided by Aventis helped us streamline our operations and reduce costs by 30%.",
                author: "Michael Chen",
                position: "Operations Director",
                company: "GlobalCorp Industries"
              },
              {
                quote: "Their creative team delivered a brand identity that perfectly captures our vision and resonates with our customers.",
                author: "Emily Rodriguez",
                position: "Marketing Director",
                company: "HealthCare Plus"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="text-primary text-4xl mb-2">"</div>
                  <p className="text-gray-300 italic">{testimonial.quote}</p>
                </div>
                <div className="flex items-center">
                  <div>
                    <h4 className="text-white font-medium">{testimonial.author}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let's work together to create your own business transformation success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Start Your Journey
              </Link>
              <Link
                to="/services"
                className="bg-transparent border border-primary text-primary hover:bg-primary/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default References;