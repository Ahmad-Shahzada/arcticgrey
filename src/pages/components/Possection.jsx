import React, { useState } from 'react';
import { RefreshCw, Scan, Maximize2 } from 'lucide-react';

const POSSection = () => {
  const goldGradient = "linear-gradient(90deg, #f7d379, #e9be65, #f5e583, #c89447, #dcab57, #d6a453, #f7d87b, #a57331, #c18d42)";

  const [activeTab, setActiveTab] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);

  const features = [
    { title: "Seamless Inventory Sync", icon: <RefreshCw size={22} /> },
    { title: "Scalable Pilots", icon: <Scan size={22} /> },
    { title: "Extend Capabilities as You Grow", icon: <Maximize2 size={22} /> },
  ];

  return (
    <section className="mx-0 md:mx-5 px-4 md:px-10 lg:px-10 pb-5 bg-white">
      <div className="min-h-screen bg-black rounded-3xl text-white p-6 md:p-12 lg:p-20 font-sans flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">

        {/* Background Glow - Responsive size */}
        <div
          className="absolute right-[-10%] top-[10%] lg:top-auto w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] blur-[100px] lg:blur-[150px] opacity-20 rounded-full pointer-events-none"
          style={{ background: goldGradient }}
        ></div>

        {/* Left Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8 lg:space-y-10 z-10 px-0 lg:px-10 text-center lg:text-left items-center lg:items-start order-2 lg:order-1 mt-12 lg:mt-0">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-medium leading-tight">
              Seamless Shopify{' '}
              <span className='text-primary-accent'>
                POS
              </span>
              <br className="hidden md:block" />
              <span className='text-primary-accent'>
                Setup
              </span>{' '}
              with Arctic Grey
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              Arctic Grey delivers seamless Shopify POS setups that sync your stores,
              streamline checkouts, and drive growth—remotely and efficiently.
            </p>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="w-full max-w-lg">
            {features.map((feature, index) => {
              const isHighlighted = activeTab === index || hoveredTab === index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={() => setHoveredTab(index)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`group cursor-pointer flex items-center justify-between py-5 md:py-6 px-4 border-b-2 border-primary-soft transition-all duration-300 ease-in-out
                    ${isHighlighted ? '' : 'bg-transparent border-zinc-700'}`}

                >
                  <span className="text-base md:text-lg font-medium transition-colors duration-300 text-white">
                    {feature.title}
                  </span>
                  <div className="transition-colors duration-300 text-white">
                    {feature.icon}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Gradient Border Button */}
          <div className="pt-6 lg:pt-8 w-full sm:w-auto">
            <div
              className="inline-block border-2 border-primary-soft rounded-full group cursor-pointer w-full sm:w-auto"
            >
              <button className="flex items-center justify-center gap-2.5 hover:bg-white hover:text-black px-6 md:px-8 py-3 md:py-3.5 bg-black text-white text-base md:text-lg font-medium rounded-full w-full transition-all duration-300">
                <span>
                  Start your Shopify Test Drive
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center order-1 lg:order-2">
          <img
            src="/images/seeamleass-right.webp"
            alt="Shopify POS Mockup"
            className="relative z-10 w-[85%] sm:w-[70%] lg:w-full max-w-[650px] object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default POSSection;