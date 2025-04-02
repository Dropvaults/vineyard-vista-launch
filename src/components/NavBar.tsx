
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from "@/components/ui/badge";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'HOME' },
    { id: 'wine', label: 'WINE' },
    { id: 'store', label: 'STORE LOCATOR' },
    { id: 'contact', label: 'CONTACT US' }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-canto-terracotta shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-canto-cream h-10">
          <img 
            src="/lovable-uploads/729280d8-1e37-4876-90b4-a3b543e50a03.png" 
            alt="Canto de Casa Logo"
            className="h-full"
          />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)}
              className="text-canto-cream text-sm tracking-wider menu-link flex items-center"
            >
              {item.label}
            </button>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-canto-cream" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-canto-terracotta absolute w-full py-4 shadow-md">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-canto-cream text-sm tracking-wider pl-2 py-2 border-b border-canto-cream/10 text-left flex items-center"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
