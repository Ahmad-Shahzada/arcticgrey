import React, { useState } from 'react';
import { Eye, Waypoints, ArrowLeftRight, ArrowRight } from 'lucide-react';

const ShopifyChatSection = () => {
  const [hoveredTab, setHoveredTab] = useState(null);

  const features = [
    { title: "Broadened Visibility", icon: <Eye size={22} /> },
    { title: "Optimized Conversion Path", icon: <Waypoints size={22} /> },
    { title: "Streamlined Operations", icon: <ArrowLeftRight size={22} /> },
  ];

  return (
    <section className="mx-0 md:mx-5 bg-white px-4 md:px-10 lg:px-14 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row rounded-[24px] lg:rounded-[14px] overflow-hidden min-h-fit lg:min-h-[700px] shadow-sm">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 bg-light-bg p-8 md:p-16 lg:p-24 flex flex-col justify-center items-center lg:items-start text-left order-2 lg:order-1">
          <div className="space-y-4 md:space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-accent">
              AI Commerce
              <span className="inline-block w-8 h-[2px] bg-primary-accent" />
            </span>

            <h2 className="text-2xl md:text-4xl text-black leading-[1.2] lg:leading-[1.15] tracking-tight">
              Connect{" "}
              <span className="font-bold bg-primary-gradient bg-clip-text text-transparent">
                Shopify
              </span>{" "}
              Products <br className="hidden md:block" />
              Through{" "}
              <span className="font-bold bg-primary-gradient bg-clip-text text-transparent">
                ChatGPT
              </span>
            </h2>

            <p className="text-zinc-500 text-base md:text-lg max-w-lg leading-relaxed font-normal mx-auto lg:mx-0">
              Unlock the future of shopping with seamless Shopify-ChatGPT integration.
              We help merchants embed their products into AI chats, enabling natural,
              data-secure product discovery and effortless conversions.
            </p>
          </div>

          <div className="mt-8 w-full max-w-md border-t border-zinc-200 text-left">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredTab(index)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`flex items-center justify-between py-5 md:py-6 px-4 border-b-2 transition-all duration-300 cursor-pointer
                  ${
                    hoveredTab === index
                      ? ''
                      : 'border-zinc-200'
                  }`}
              >
                <span
                  className={`text-base md:text-lg font-normal transition-colors ${
                    hoveredTab === index ? 'text-primary-accent' : 'text-zinc-800'
                  }`}
                >
                  {feature.title}
                </span>
                <div
                  className={`transition-colors ${
                    hoveredTab === index ? 'text-primary-accent' : 'text-black'
                  }`}
                >
                  {feature.icon}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 lg:mt-12 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-primary-accent text-black px-8 md:px-10 py-5 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-light-text transition-all active:scale-95 group">
              Book a Free Consultation
              <ArrowRight
                size={24}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/2 bg-[#0C0C0C] relative flex items-center justify-center py-16 px-6 lg:p-20 overflow-hidden order-1 lg:order-2">
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay grayscale pointer-events-none"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Video Mockup */}
          <div className="relative z-10 w-full max-w-[220px] md:max-w-[300px] aspect-[9/18.5] bg-zinc-900 rounded-[2.5rem] md:rounded-[3.5rem] border-[6px] md:border-[10px] border-zinc-800 shadow-2xl overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              src="/vidio/shopifyChat.mp4"
            />
          </div>

          {/* Floating ChatGPT Icon */}
          <div className="absolute top-[10%] left-[8%] md:top-[15%] md:left-[10%] lg:left-[15%] z-20 bg-black p-3 md:p-4 rounded-xl md:rounded-2xl border border-primary-soft shadow-2xl transform -rotate-6 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
            <img
              src="/images/chatgpt-icon-golden.webp"
              alt="ChatGPT"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Floating Shopify Icon */}
          <div className="absolute bottom-[10%] right-[8%] md:bottom-[15%] md:right-[10%] lg:right-[15%] z-20 bg-black p-3 md:p-4 rounded-xl md:rounded-2xl border border-primary-soft shadow-2xl transform rotate-6 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
            <img
              src="/images/shopify-iccon-black-back.webp"
              alt="Shopify"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyChatSection;