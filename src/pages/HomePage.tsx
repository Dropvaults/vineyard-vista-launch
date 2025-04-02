
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
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default HomePage;
