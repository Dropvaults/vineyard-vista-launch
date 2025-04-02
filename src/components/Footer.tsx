
import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-canto-terracotta text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-4">
            <h3 className="font-mackinac text-2xl font-semibold">CANTO DE CASA</h3>
            <p className="text-sm text-white/80 max-w-xs font-mackinac">
              A distinguished Spanish winery dedicated to producing exceptional Tempranillo 
              wines that capture the essence of our heritage.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h4 className="font-mackinac text-lg font-semibold">Contact</h4>
            <div className="text-sm space-y-2 font-mackinac">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@cantodecasawines.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-sm text-center text-white/70">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 font-mackinac">
            <p>© {new Date().getFullYear()} Canto de Casa. All rights reserved.</p>
            <span className="hidden md:inline mx-2">•</span>
            <a 
              href="#" 
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
