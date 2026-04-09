import React, { useState } from 'react';
import { Asterisk } from 'lucide-react';
import centralGraphic from '/images/back-whiy-choose-mobile.webp';

const WhyPartner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: 'Innovation that evolves',
      description:
        'Pioneering AI solutions to keep your store at the forefront of eCommerce.',
    },
    {
      title: 'Solutions that scale',
      description:
        'Flexible infrastructure built to grow alongside your business demands.',
    },
    {
      title: 'Data driven action',
      description:
        'Turning complex analytics into actionable insights for better decision making.',
    },
    {
      title: 'Evolves with AI',
      description:
        'Continuous learning systems that adapt to market trends in real-time.',
    },
  ];

  const brands = [
    'SMARTRI',
    'TRIPLE WHALE',
    'AUTOMMIC',
    'SHOP LIFT',
    'GROOTAPPS',
    'NETSUITE',
    'MATRIXIFY',
    'OKENDO',
  ];

  const scrollingBrands = [...brands, ...brands];

  const trustLogos = [
    { id: 1, src: '/images/review-1.svg', alt: 'Shopify Reviews' },
    { id: 2, src: '/images/review-2.svg', alt: 'Shopify Plus Reviews' },
    { id: 3, src: '/images/review-3.svg', alt: 'Google Reviews' },
    { id: 4, src: '/images/review-4.svg', alt: 'Trustpilot Reviews' },
    { id: 5, src: '/images/review-5.svg', alt: 'Clutch Reviews' },
    { id: 6, src: '/images/review-6.svg', alt: 'Shopify Certified Partners' },
  ];

  return (
    <>
      <div className="px-4 md:px-5 bg-light-bg pt-10">
        <section className="w-full bg-white py-12 md:py-20 rounded-[14px] flex items-center justify-center px-6 md:px-12 lg:px-16 antialiased overflow-hidden relative">
          {/* subtle rings */}
          <div className="hidden sm:block absolute left-[-180px] bottom-[-220px] w-[500px] h-[500px] border-t-2 border-l-2 border-primary-soft/40 rounded-full z-0 pointer-events-none" />
          <div className="hidden sm:block absolute left-[-230px] bottom-[-280px] w-[600px] h-[600px] border-t-2 border-l-2 border-primary-soft/20 rounded-full z-0 opacity-60 pointer-events-none" />

          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] gap-x-8 xl:gap-x-16 gap-y-12 lg:gap-y-0 relative max-w-[1400px]">
            {/* Column 1: Copy */}
            <div className="flex flex-col gap-4 md:gap-6 m-4 max-w-full lg:max-w-[380px] relative z-10 text-left items-start">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-accent">
                Why Partner
                <span className="inline-block w-8 h-[2px] bg-primary-accent" />
              </span>

              <h2 className="text-black font-medium leading-[1.1] text-2xl md:text-4xl tracking-tighter">
                Why Partner
                <br />
                with Arctic Grey?
              </h2>
              <p className="text-zinc-700 font-normal leading-relaxed text-base md:text-lg tracking-normal">
                Partner with Arctic Grey to ensure your store evolves with AI, maintaining a
                competitive edge in the ever-changing eCommerce landscape.
              </p>
              <div className="hidden lg:block absolute left-0 bottom-[-50px] text-gray-300 opacity-60 text-2xl">
                ✦
              </div>
            </div>

            {/* Column 2: Central scroller */}
            <div className="relative flex justify-center w-[180px] sm:w-[220px] md:w-[300px] aspect-[9/14] md:aspect-[9/16] border border-gray-100/50 rounded-2xl overflow-hidden shadow-2xl z-10 mx-auto bg-black">
              <img
                src={centralGraphic}
                alt="Central texture"
                className="absolute inset-0 w-full h-full object-cover scale-105 opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-start z-10 overflow-hidden pointer-events-none">
                <div className="flex flex-col items-center w-full animate-scroll-up-continuous">
                  {scrollingBrands.map((brand, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center py-6 md:py-8 w-full"
                    >
                      <span className="text-white font-medium text-[16px] md:text-[22px] tracking-[0.2em] uppercase whitespace-nowrap opacity-90">
                        {brand}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-x-0 top-0 h-16 md:h-24 bg-gradient-to-b from-black/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>

            {/* Column 3: Accordions */}
            <div className="flex flex-col gap-4 md:gap-6 relative z-10 w-full max-w-full lg:max-w-[480px] mx-auto">
              {items.map((item, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    className="flex flex-col border-b border-zinc-200 pb-4 md:pb-6 last:border-none cursor-pointer group"
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="flex items-center justify-between gap-4 w-full">
                      <h3
                        className={`transition-colors duration-300 text-[16px] md:text-[19px] font-medium ${
                          isOpen ? 'text-primary-accent' : 'text-zinc-800'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <div className="ml-auto">
                        <Asterisk
                          size={24}
                          strokeWidth={2}
                          className={`transition-all duration-500 ease-in-out ${
                            isOpen
                              ? 'text-primary-accent rotate-90 scale-110'
                              : 'text-zinc-400'
                          }`}
                        />
                      </div>
                    </div>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[#333333] font-normal leading-relaxed text-sm md:text-base max-w-[360px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Logo strip */}
      <section className="w-full bg-light-bg py-12 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-28">
            {trustLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-[30px] md:h-[40px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyPartner;