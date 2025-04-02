
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-canto-cream">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-b from-canto-cream to-canto-cream/30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
          <div className="flex flex-col space-y-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="text-canto-gold font-light tracking-widest text-sm mb-4">
                FROM OUR CASA TO YOURS
              </div>
              
              <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-canto-black leading-tight">
                CANTO <span className="gold-underline">DE</span> CASA
              </h1>
              
              <div className="w-20 h-0.5 bg-canto-gold my-8"></div>
              
              <p className="max-w-md text-lg md:text-xl font-light italic">
                BRINGING A TASTE OF OUR CASA STRAIGHT TO YOUR TABLE
              </p>
              
              <p className="max-w-md mt-2 mb-8">
                Experience the essence of Spain with Canto de Casa, a distinguished Tempranillo crafted from our organic vineyards.
              </p>
              
              <a 
                href="#" 
                className={cn(
                  "inline-block bg-canto-terracotta text-white px-8 py-3",
                  "hover:bg-canto-terracotta/90 transition-colors duration-300",
                  "font-medium tracking-wider text-sm"
                )}
              >
                VIEW DETAILS
              </a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <img 
              src="/lovable-uploads/a0a97603-8004-4a02-aedc-b9ca7b7fd28b.png"
              alt="Canto de Casa Wine Bottle" 
              className="h-[500px] max-w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
