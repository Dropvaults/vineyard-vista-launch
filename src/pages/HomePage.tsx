
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
      
      <section className="py-16 md:py-24 bg-canto-lightcream text-center" id="wine">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-mackinac font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            The Song of Home
          </h2>
          
          <div className="w-20 h-0.5 bg-canto-gold mx-auto mb-8"></div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg">
              Indulge in Canto de Casa, our classic Tempranillo from organic vineyards in Spain. Bringing 
              a taste of our casa straight to your table.
            </p>
          </div>
          
          <div className="flex justify-center mb-16">
            <img 
              src="/lovable-uploads/81762000-f354-407f-8b4e-022ac2bdde76.png" 
              alt="Spanish Vineyard House" 
              className="h-48 w-auto"
            />
          </div>
          
          <h2 className="font-mackinac font-bold text-3xl md:text-4xl lg:text-5xl mb-6 mt-16">
            Wine
          </h2>
          
          <div className="w-20 h-0.5 bg-canto-gold mx-auto mb-8"></div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg mb-6">
              Experience the essence of Spain with Canto de Casa, a distinguished Tempranillo crafted 
              from our organic vineyards.
            </p>
            <p className="text-lg">
              This bold and versatile red wine captures the palate, effortlessly complementing your 
              favorite dishes and making every gathering memorable.
            </p>
          </div>
          
          <div className="flex justify-center mb-16">
            <img 
              src="/lovable-uploads/a0a97603-8004-4a02-aedc-b9ca7b7fd28b.png" 
              alt="Canto de Casa Wine Bottle" 
              className="h-80 w-auto"
            />
          </div>
        </div>
      </section>
      
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
