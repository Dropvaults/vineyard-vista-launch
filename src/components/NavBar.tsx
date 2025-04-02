
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        <div className="text-canto-cream text-2xl font-playfair font-bold">
          CANTO DE CASA
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['HOME', 'WINE', 'SHOP', 'CONTACT US'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-canto-cream text-sm tracking-wider menu-link"
            >
              {item}
            </a>
          ))}
          <a href="#" className="text-canto-cream flex items-center space-x-2">
            <span className="text-sm tracking-wider menu-link">FOLLOW</span>
            <Instagram size={18} />
          </a>
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
            {['HOME', 'WINE', 'SHOP', 'CONTACT US'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-canto-cream text-sm tracking-wider pl-2 py-2 border-b border-canto-cream/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#" 
              className="text-canto-cream flex items-center space-x-2 pl-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-sm tracking-wider">FOLLOW</span>
              <Instagram size={18} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
