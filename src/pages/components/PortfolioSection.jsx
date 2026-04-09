import React from 'react';
import { motion } from 'framer-motion';

const PortfolioSection = () => {
  // Replace these with your actual image paths
  const images = [
    "/images/desktop_1.webp",
    "/images/desktop_2.webp",
    "/images/desktop_3.webp",
    "/images/desktop_1.webp",
    "/images/desktop_5.webp",
    "/images/desktop_6.webp",
  ];

  // We duplicate the list to ensure a seamless infinite loop
  const scrollingImages = [...images, ...images, ...images];

  return (
    <section className="relative mx-5 bg-black text-white flex items-center">
      {/* Background Texture/Overlay */}
      {/* <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" /> */}

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-5xl font-semibold leading-tight mb-6">
            <span className="text-primary-accent">Build Your Dream Shopify Store</span> from Scratch
          </h2>
          <h3 className="text-2xl md:text-3xl mb-6">
            Custom, Scalable, and Growth-Ready
          </h3>
          <p className="text-gray-400 text-md leading-relaxed mb-8">
            Starting a new online store? As the #1 Shopify Platinum Partner, Arctic Grey will design, 
            build, and launch a tailored Shopify store for your brand—complete with integrations, 
            AI features, and expert support. No jargon, just results: Unlock 30%+ conversion boosts 
            and rapid growth without the hassle.
          </p>
          
          <button className="group flex items-center gap-3 border-2 border-primary-soft px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
            Get a Free Prototype Today
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Right Side: Animated Diagonal Scroll */}
        <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
          {/* This container is rotated to create the "Bottom-Left to Top-Right" flow.
              The images move upward within this rotated space.
          */}
          <div className="absolute inset-0 flex justify-center my-20 items-center">
            <motion.div 
              className="flex flex-col gap-6"
              initial={{ y: 0, x: 0 }}
              animate={{ 
                y: "-50%", // Moves the column up
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{
                // Rotate the entire column 25 degrees
                rotate: "5deg",
                width: "160%", 
              }}
            >
              {/* Grid Layout inside the moving column */}
              <div className="grid grid-cols-2 gap-6 ">
                {scrollingImages.map((src, idx) => (
                  <div 
                    key={idx} 
                    className="rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-transform "
                  >
                    <img 
                      src={src} 
                      alt={`Project ${idx}`} 
                      className="w-full h-auto object-cover grayscale-[0%] hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Faders to hide edges */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black via-transparent to-transparent z-20" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black z-20" />
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;