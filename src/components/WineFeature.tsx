
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const WineFeature: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-canto-lightcream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/0e3bb32a-38e2-410d-9571-ab3cfeaab0ee.png" 
                alt="Spanish Vineyard Estate" 
                className="w-full h-auto rounded-sm shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canto-black/20 to-transparent rounded-sm"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 flex flex-col space-y-6"
          >
            <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-canto-black">
              Spanish Tradition in Every Bottle
            </h2>
            
            <div className="w-20 h-0.5 bg-canto-gold"></div>
            
            <p className="text-lg">
              Canto de Casa embodies the rich heritage of Spanish winemaking. 
              Our vineyard is nestled in the heart of the D.O. Cariñena region, 
              where the Mediterranean climate and fertile soil create the perfect 
              conditions for our Tempranillo grapes.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex flex-col space-y-2">
                <span className="font-playfair text-xl text-canto-terracotta">Tradition</span>
                <p className="text-sm">Crafted using time-honored Spanish methods passed down through generations.</p>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="font-playfair text-xl text-canto-terracotta">Quality</span>
                <p className="text-sm">Hand-selected grapes from our organic vineyards, ensuring exceptional flavor.</p>
              </div>
            </div>
            
            <a 
              href="#" 
              className={cn(
                "inline-block border-2 border-canto-terracotta text-canto-terracotta px-8 py-3 mt-4",
                "hover:bg-canto-terracotta hover:text-white transition-colors duration-300 w-fit",
                "font-medium tracking-wider text-sm"
              )}
            >
              EXPLORE OUR VINEYARD
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WineFeature;
