
import React, { useEffect } from 'react';

const InstagramFeed: React.FC = () => {
  // This is needed to make sure the Instagram widget is loaded after the component is mounted
  useEffect(() => {
    // Check if window.elfsight is already loaded
    if (window.elfsight && typeof window.elfsight.reinstallWidgets === 'function') {
      window.elfsight.reinstallWidgets();
    }
  }, []);

  return (
    <section className="py-12 bg-canto-cream">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-mackinac text-center mb-8 text-canto-terracotta">Follow Our Journey</h2>
        <div className="elfsight-app-d412e101-5237-46b9-8aff-2e7c76229575" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default InstagramFeed;
