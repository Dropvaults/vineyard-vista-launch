
import React, { useEffect } from 'react';

const InstagramFeed: React.FC = () => {
  useEffect(() => {
    // Load Elfsight Instagram widget script
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="py-16 md:py-24 bg-canto-lightcream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl lg:text-5xl text-canto-black mb-6">
            Follow Our Journey
          </h2>
          <div className="w-20 h-0.5 bg-canto-gold mx-auto mb-8"></div>
          <p className="text-lg mb-8">
            Join us on Instagram as we share the beauty of our vineyards and the passion behind every bottle.
          </p>
        </div>
        
        {/* Elfsight Instagram Feed Widget */}
        <div className="elfsight-app-5cf99b9d-b738-48ca-9e60-e7bfdbd7d8b2"></div>
      </div>
    </div>
  );
};

export default InstagramFeed;
