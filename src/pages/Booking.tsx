import React, { useEffect } from "react";
import BookingCalendar from "@/components/BookingCalendar";
import { Clock, CheckCircle, Headphones, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Booking = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bookingSteps = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Select a Date & Time",
      description: "Choose your preferred date and time from our availability calendar."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Tell Us About Your Project",
      description: "Provide details about your business goals and specific requirements."
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Consultation Call",
      description: "Our team will contact you to discuss your needs in detail."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Confirmation",
      description: "Receive your consultation confirmation and prepare for business transformation."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-aventis-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Book a Consultation</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Ready to transform your business? Schedule a consultation with our experts to discuss your goals and discover the right solutions for your success.
            </p>
          </div>
        </div>
      </section>
      
      {/* Booking Process */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">How Consultation Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our simple four-step process makes scheduling your consultation easy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingSteps.map((step, index) => (
              <div
                key={index}
                className="glassmorphism p-6 text-center animate-fade-in relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-primary mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                
                {index < bookingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-primary/50">
                    <MoveRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Booking Calendar */}
      <section className="py-16 px-6 md:px-12 bg-aventis-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Schedule Your Consultation</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose from our available slots and tell us about your project
            </p>
          </div>
          
          <BookingCalendar />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Common questions about our consultation process and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Is the initial consultation free?",
                answer: "Yes, we offer a complimentary 30-minute initial consultation to understand your business needs and explore how we can help you achieve your goals."
              },
              {
                question: "What should I prepare for the consultation?",
                answer: "Come prepared to discuss your business challenges, goals, and current situation. Any relevant documents or data about your business will help us provide more targeted advice."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. Simple projects may take 2-4 weeks, while comprehensive transformations can take 3-6 months or more."
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer: "Yes, we work with startups, small businesses, and large enterprises. Our solutions are tailored to fit the unique needs and budget of each client."
              },
              {
                question: "Can I reschedule my consultation?",
                answer: "Absolutely! You can reschedule your consultation up to 24 hours in advance. Just contact us and we'll help you find a new time that works."
              },
              {
                question: "What happens after the consultation?",
                answer: "We'll provide a detailed proposal with recommendations, timelines, and pricing. There's no obligation to proceed, and we'll give you time to consider your options."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-medium text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Direct Contact */}
      <section className="py-16 px-6 md:px-12 bg-aventis-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Prefer to Speak Directly?</h2>
                <p className="text-gray-300 mb-6">
                  If you have specific questions or prefer to discuss your requirements over the phone, our team is here to help.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-white">+1 (555) 123-4567</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-white">info@aventisservices.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-white">Mon-Fri: 9am-6pm | Sat: 10am-4pm</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Expert Consultation</h3>
                    <p className="text-gray-300">Get advice from industry professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Custom Solutions</h3>
                    <p className="text-gray-300">Tailored strategies for your unique needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Ongoing Support</h3>
                    <p className="text-gray-300">Continued assistance throughout your journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add Calendar and MessageSquare components for the icons
const Calendar = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const MessageSquare = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const Phone = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default Booking;