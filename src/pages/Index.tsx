
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    document.title = "Canto de Casa | Spanish Winery";
  }, []);

  return (
    <div className="min-h-screen bg-canto-cream">
      <NavBar />
      
      <Hero />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-canto-black mb-6">
                The Song of Home
              </h2>
              
              <div className="w-20 h-0.5 bg-canto-gold mx-auto mb-8"></div>
              
              <p className="text-lg mb-8">
                Indulge in Canto de Casa, our classic Tempranillo from organic vineyards in Spain. Bringing a taste of our casa straight to your table.
              </p>
              
              <div className="inline-block">
                <img 
                  src="/lovable-uploads/c9c3db5e-73f5-4cac-a25d-ea69b2f2ea90.png" 
                  alt="Canto de Casa Vineyard Estate" 
                  className="max-w-xs md:max-w-sm mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-canto-lightcream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-canto-black mb-6">
                Wine
              </h2>
              
              <div className="w-20 h-0.5 bg-canto-gold mx-auto mb-8"></div>
              
              <p className="text-lg mb-8">
                Experience the essence of Spain with Canto de Casa, a distinguished Tempranillo crafted from our organic vineyards.
              </p>
              
              <p className="text-lg mb-8">
                This bold and versatile red wine captivates the palate, effortlessly complementing your favorite dishes and making every gathering memorable.
              </p>
              
              <div className="text-center mt-6">
                <a 
                  href="#" 
                  className="inline-block bg-canto-terracotta text-white px-8 py-3 hover:bg-canto-terracotta/90 transition-colors duration-300 font-medium tracking-wider text-sm"
                >
                  DISCOVER OUR WINE
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-canto-terracotta text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl mb-8">
                Visit Our Vineyard
              </h2>
              
              <p className="text-lg mb-8">
                Experience the beauty of our Spanish vineyard firsthand. Schedule a tour to learn about our winemaking process and enjoy exclusive tastings of our signature Tempranillo.
              </p>
              
              <a 
                href="#" 
                className="inline-block border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-canto-terracotta transition-colors duration-300 font-medium tracking-wider text-sm"
              >
                PLAN YOUR VISIT
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
