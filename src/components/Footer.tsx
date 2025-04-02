
import React from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-canto-terracotta text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <h3 className="font-playfair text-2xl font-semibold">CANTO DE CASA</h3>
            <p className="text-sm text-white/80 max-w-xs">
              A distinguished Spanish winery dedicated to producing exceptional Tempranillo 
              wines that capture the essence of our heritage.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h4 className="font-playfair text-lg font-semibold">Contact</h4>
            <div className="text-sm space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>D.O. Cariñena, Spain</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@cantodecasa.com</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h4 className="font-playfair text-lg font-semibold">Visit</h4>
            <div className="text-sm space-y-1">
              <p>Vineyard Tours: Monday-Saturday</p>
              <p>10:00 AM - 5:00 PM</p>
              <p>Tastings by appointment</p>
            </div>
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="#" 
                className="text-white hover:text-canto-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-sm text-center text-white/70">
          <p>© {new Date().getFullYear()} Canto de Casa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
