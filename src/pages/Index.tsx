
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import WineFeature from '@/components/WineFeature';
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
                Canto de Casa, meaning "Song of Home" in Spanish, represents our 
                family's century-old commitment to winemaking excellence. Each 
                bottle is a harmonious expression of our estate's terroir and the 
                passionate craftsmanship of our artisans.
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
      
      <WineFeature />
      
      <section className="py-16 md:py-24 bg-canto-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-canto-black mb-12">
                Our Collection
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Tempranillo Reserva",
                  year: "2018",
                  description: "Bold and complex with notes of dark fruit and oak."
                },
                {
                  name: "Crianza",
                  year: "2019",
                  description: "Elegant and balanced with hints of vanilla and spice."
                },
                {
                  name: "Rosado",
                  year: "2021",
                  description: "Fresh and vibrant with delicate berry aromas."
                }
              ].map((wine, index) => (
                <motion.div
                  key={wine.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col space-y-4">
                    <h3 className="font-playfair font-semibold text-xl text-canto-black">
                      {wine.name}
                    </h3>
                    <div className="text-canto-gold font-medium">{wine.year}</div>
                    <p className="text-canto-black/80">{wine.description}</p>
                    <a 
                      href="#" 
                      className="text-canto-terracotta hover:text-canto-terracotta/80 text-sm font-medium mt-2 inline-block"
                    >
                      View Wine →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="#" 
                className="inline-block bg-canto-terracotta text-white px-8 py-3 hover:bg-canto-terracotta/90 transition-colors duration-300 font-medium tracking-wider text-sm"
              >
                EXPLORE ALL WINES
              </a>
            </div>
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
                Join Our Wine Club
              </h2>
              
              <p className="text-lg mb-8">
                Become a part of the Canto de Casa family and enjoy exclusive access to limited releases, 
                special events, and personalized tasting experiences.
              </p>
              
              <a 
                href="#" 
                className="inline-block border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-canto-terracotta transition-colors duration-300 font-medium tracking-wider text-sm"
              >
                BECOME A MEMBER
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
