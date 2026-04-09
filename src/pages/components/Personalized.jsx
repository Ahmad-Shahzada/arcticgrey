import React, { useState } from 'react';
import { RefreshCw, Scan, Maximize2 } from 'lucide-react';

const Personalized = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);

  const features = [
    { title: "Seamless Inventory Sync", icon: <RefreshCw size={20} /> },
    { title: "Scalable Pilots", icon: <Scan size={20} /> },
    { title: "Extend Capabilities as You Grow", icon: <Maximize2 size={20} /> },
  ];

  return (
    <section className="mx-0 md:mx-5 bg-white pt-10">
      <div className="bg-black rounded-[24px] lg:rounded-[14px] text-white overflow-hidden relative min-h-fit lg:min-h-[700px] flex items-center mx-4 md:mx-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full px-6 py-12 md:px-16 lg:py-20 items-center">
          {/* IMAGE */}
          <div className="relative flex justify-center items-center order-2 lg:order-1">
            <img
              src="/images/ai-agent-main.webp"
              alt="eCommerce Service Mockup"
              className="relative z-10 w-full max-w-[300px] md:max-w-[500px] lg:max-w-[700px] h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col space-y-8 md:space-y-10 z-10 order-1 lg:order-2 lg:ml-10 text-left items-center lg:items-start">
            <div className="space-y-4 md:space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-accent">
                AI Automation
                <span className="inline-block w-8 h-[2px] bg-primary-accent" />
              </span>

              <h1 className="text-2xl md:text-4xl max-w-md leading-[1.15] tracking-tight font-semibold">
                Fully Automated Shopify Store With{" "}
                <span className="inline pl-3 bg-primary-gradient bg-clip-text text-transparent">
                  AI Agents
                </span>
              </h1>

              <p className="text-zinc-400 text-sm md:text-base lg:text-lg max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
                Create seamless, personalized shopping experiences with Arctic Grey’s
                end-to-end Shopify Product Customizers that drive engagement and
                operational efficiency.
              </p>
            </div>

            <div className="w-full max-w-lg text-left">
              {features.map((feature, index) => {
                const isHighlighted = activeTab === index || hoveredTab === index;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveTab(index)}
                    onMouseEnter={() => setHoveredTab(index)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className={`group cursor-pointer flex items-center justify-between py-4 md:py-6 px-4 border-b-2 transition-all duration-300 ease-in-out ${
                      isHighlighted
                        ? 'bg-white/5 border-primary-soft'
                        : 'bg-transparent border-zinc-800'
                    }`}
                  >
                    <span
                      className={`text-base md:text-lg font-medium transition-colors duration-300 ${
                        isHighlighted ? '' : 'text-white'
                      }`}
                    >
                      {feature.title}
                    </span>
                    <div
                      className={`transition-colors duration-300 ${
                        isHighlighted ? 'text-primary-accent' : 'text-white'
                      }`}
                    >
                      {feature.icon}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 md:pt-8 w-full sm:w-auto">
              <button className="flex items-center justify-center gap-2.5 bg-primary-accent hover:bg-light-text text-black px-6 md:px-8 py-3.5 md:py-4 text-sm md:text-lg font-semibold rounded-full w-full sm:w-auto transition-all duration-300 group">
                <span>
                  Build My Custom AI Agent Team
                  <span className="inline-block group-hover:translate-x-2 transition-transform duration-300 italic pl-2 md:pl-3">
                    →
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personalized;