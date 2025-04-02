
import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import WineFeature from '../components/WineFeature';
import InstagramFeed from '../components/InstagramFeed';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />
      <WineFeature />
      <section id="store" className="py-16 md:py-24 bg-canto-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-mackinac font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              Store Locator
            </h2>
            
            <div className="w-20 h-0.5 bg-canto-gold mx-auto mb-8"></div>
            
            <div className="p-8 bg-canto-lightcream rounded-md shadow-sm">
              <div className="bg-canto-terracotta text-white border-none mb-4 mx-auto inline-block px-2 py-1 rounded text-sm">COMING SOON</div>
              <p className="text-lg">
                We're working on making Canto de Casa available at select retailers near you. 
                Check back soon to find where you can purchase our exceptional Tempranillo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default HomePage;
