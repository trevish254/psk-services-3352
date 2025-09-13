import React, { useEffect, useState } from "react";
import BlogPost from "@/components/BlogPost";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const blogPosts = [
    {
      id: "digital-transformation",
      title: "Digital Transformation Strategies for Modern Businesses",
      excerpt: "Comprehensive guide on how businesses can leverage digital technologies to streamline operations and drive growth in the digital age.",
      date: "December 15, 2024",
      readTime: "8 min read",
      author: "Strategic Team",
      category: "Strategy",
      imageSrc: "/lovable-uploads/8dced82a-6a2c-48ee-a060-463c28764183.png",
      featured: true
    },
    {
      id: "2",
      title: "Building Brand Identity That Resonates",
      excerpt: "Key principles for creating a strong brand identity that connects with your target audience and drives customer loyalty.",
      date: "December 10, 2024",
      readTime: "6 min read",
      author: "Creative Team",
      category: "Branding",
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    },
    {
      id: "3",
      title: "SEO Strategies for Business Growth",
      excerpt: "Proven search engine optimization techniques that help businesses increase their online visibility and attract more customers.",
      date: "December 5, 2024",
      readTime: "7 min read",
      author: "Marketing Team",
      category: "Digital Marketing",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      id: "4",
      title: "Effective Business Consulting Approaches",
      excerpt: "How professional consulting can transform your business operations and accelerate growth through strategic planning and optimization.",
      date: "November 28, 2024",
      readTime: "9 min read",
      author: "Consulting Team",
      category: "Consulting",
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      id: "5",
      title: "Social Media Marketing Best Practices",
      excerpt: "Essential strategies for building a strong social media presence that engages your audience and drives business results.",
      date: "November 20, 2024",
      readTime: "5 min read",
      author: "Digital Team",
      category: "Digital Marketing",
      imageSrc: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80"
    },
    {
      id: "6",
      title: "The Future of Business Technology",
      excerpt: "Exploring emerging technologies and their potential impact on business operations, from AI to blockchain and beyond.",
      date: "November 15, 2024",
      readTime: "10 min read",
      author: "Tech Team",
      category: "Technology",
      imageSrc: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80"
    }
  ];
  
  const categories = [
    "All",
    "Strategy",
    "Branding",
    "Digital Marketing",
    "Consulting",
    "Technology"
  ];
  
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-aventis-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Insights & Resources</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Expert insights, industry trends, and practical advice to help your business succeed
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center animate-fade-in animation-delay-200">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-aventis-black-DEFAULT border-primary/30 w-full"
              />
            </div>
            
            <div className="w-full md:w-1/2 flex gap-2 overflow-x-auto pb-2 no-scrollbar flex-nowrap md:justify-end">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-aventis-black-DEFAULT text-gray-300 hover:bg-aventis-black-card"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPost
                  key={post.id}
                  {...post}
                  className={`animate-fade-in ${post.featured ? "md:col-span-2" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl text-white mb-2">No posts found</h3>
              <p className="text-gray-400">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 px-6 md:px-12 bg-aventis-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with Business Insights</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive the latest articles, tips, and industry news directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-aventis-black-DEFAULT border-primary/30 flex-grow"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;