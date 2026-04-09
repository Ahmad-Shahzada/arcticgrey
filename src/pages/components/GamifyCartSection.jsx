import React, { useState } from 'react';
import { TrendingUp, ShoppingCart, TrendingDown } from 'lucide-react';

const GamifyCartSection = () => {
  const goldGradient = "linear-gradient(90deg, #f7d379, #e9be65, #f5e583, #c89447, #dcab57, #d6a453, #f7d87b, #a57331, #c18d42)";

  const [activeTab, setActiveTab] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);

  const features = [
    { title: "Multiply Your Conversions", icon: <TrendingUp size={22} /> },
    { title: "Next-Level Upsells & Cross-Sells", icon: <ShoppingCart size={22} /> },
    { title: "Reduce Checkout Drop-Offs", icon: <TrendingDown size={22} /> },
  ];

  return (
    /* Outer section: Responsive margins and padding */
    <section className="mx-0 md:mx-5 bg-white px-4 md:px-10 lg:px-14 pt-10 pb-10">

      {/* Main Container: col on mobile, row on desktop. min-h is flexible on mobile */}
      <div className="flex flex-col lg:flex-row rounded-[24px] lg:rounded-[14px] overflow-hidden min-h-fit lg:min-h-[700px] shadow-sm border border-zinc-100">

        {/* --- LEFT SIDE: VIDEO/MOCKUP (Cream Background) --- */}
        {/* order-1 ensures this is on top on mobile */}
        <div className="w-full lg:w-1/2 bg-light-bg relative flex items-center justify-center p-8 md:p-12 lg:p-20 order-1 lg:order-1">
          <div className="relative z-10 w-full max-w-[450px] aspect-[3/3.5] rounded-xl overflow-hidden ">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              src="/vidio/drawer.mp4"
            />
          </div>
        </div>

        {/* --- RIGHT SIDE: CONTENT (Black Background) --- */}
        {/* order-2 ensures this is below the video on mobile */}
        <div className="w-full lg:w-1/2 bg-black px-5 py-5 md:px-16 lg:px-24 flex flex-col justify-center text-white order-2 lg:order-2 text-left items-center lg:items-start">
          <div className="space-y-6">
            <div className="flex flex-col lg:flex-row  gap-3">
              <h2 className="text-2xl md:text-4xl font-medium leading-tight">
                🎮 Gamify Your
                <span className='block lg:inline lg:pl-3 text-primary-accent' >
                  Cart Drawer & Checkout
                </span>
              </h2>
            </div>
            <p className="text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
              The cart drawer decides who buys and who bounces. Optimize it,
              and you'll turn abandoned carts into completed checkouts.
            </p>
          </div>

          {/* Feature Tabs: Full width on mobile */}
          <div className="mt-10 md:mt-12 w-full max-w-md border-t border-zinc-800 text-left">
            {features.map((feature, index) => {
              const isHighlighted = activeTab === index || hoveredTab === index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={() => setHoveredTab(index)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`group cursor-pointer flex items-center justify-between border-b border-primary-soft py-5 md:py-6 px-1 lg:px-4 border-b-2 transition-all duration-300
                    ${isHighlighted ? 'bg-white/5' : 'bg-transparent border-zinc-800'}`}
                >
                  <span className={`text-base md:text-lg font-medium transition-colors duration-300 text-white`}>
                    {feature.title}
                  </span>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Premium Gradient Button: Responsive width */}
          <div className="pt-12 md:pt-16 w-full sm:w-auto">
            <div
              className="border-2 border-primary-soft inline-block rounded-full group cursor-pointer w-full sm:w-auto"
            >
              <button className="flex items-center justify-center gap-2.5 hover:bg-white hover:text-black px-6 md:px-10 py-3.5 md:py-4 bg-black text-white text-base md:text-lg font-medium rounded-full w-full transition-all duration-300">
                <span>
                  Start your Shopify Test Drive
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GamifyCartSection;