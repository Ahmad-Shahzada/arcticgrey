import React from 'react';
import { ArrowRightCircle } from 'lucide-react';

const UpArrow = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    className="inline mr-1"
  >
    <path
      d="M7 17l9.2-9.2M17 17V7.8m0 0H7.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PortfolioShowcase = () => {
  const desktopImages = [
    '/images/desktop_1.webp',
    '/images/desktop_2.webp',
    '/images/desktop_3.webp',
    '/images/desktop_4.webp',
    '/images/desktop_5.webp',
    '/images/desktop_6.webp',
  ];

  const mobileImages = [
    '/images/mobile_2.webp',
    '/images/mobile_3.avif',
    'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542291026-7eec264c2744?q=80&w=300&auto=format&fit=crop',
  ];

  const scrollDesktop = [...desktopImages, ...desktopImages, ...desktopImages];
  const scrollMobile = [...mobileImages, ...mobileImages, ...mobileImages];

  return (
    <div className="mx-5 bg-black text-white font-sans overflow-hidden py-16 md:pt-24">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes obliqueFlow {
            0% { transform: translateY(0); }
            100% { transform: translateY(-33.33%); }
          }
          @keyframes verticalFlow {
            0% { transform: translateY(0); }
            100% { transform: translateY(-33.33%); }
          }
          .animate-desktop { animation: obliqueFlow 10s linear infinite; }
          .animate-mobile-1 { animation: verticalFlow 35s linear infinite; }
          .animate-mobile-2 { animation: verticalFlow 45s linear infinite; }
        `,
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
            We’ve been busy,{' '}
            <span className="text-primary-accent italic">View Our Work</span>
          </h2>
        </div>

        {/* Main Grid Wrapper */}
        <div className="relative group flex flex-col lg:flex-row gap-6 items-start">
          {/* LEFT COLUMN */}
          <div className="flex-[2.2] flex flex-col gap-6 w-full">
            {/* Tilted Desktop Scroller */}
            <div className="relative border border-primary-soft rounded-3xl overflow-hidden bg-[#0a0a0a] h-[500px] md:h-[650px]">
              <div
                className="absolute inset-0 z-0"
                style={{
                  transform: 'rotate(15deg) scale(1.4)',
                  transformOrigin: 'center',
                }}
              >
                <div className="flex flex-col gap-8 pt-20 animate-desktop">
                  {[0, 1, 2].map((row) => (
                    <div key={row} className="flex gap-8">
                      {scrollDesktop.map((src, i) => (
                        <div
                          key={i}
                          className="flex-shrink-0 w-[300px] aspect-video rounded-xl overflow-hidden shadow-2xl bg-zinc-900 border border-white"
                        >
                          <img
                            src={src}
                            alt="Portfolio"
                            className="w-full h-full object-cover opacity-90"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none z-10" />
            </div>

            {/* Footer CTA */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-zinc-950/50 rounded-[32px] border border-white/5 shadow-2xl">
              <div className="flex items-center gap-6">
                <div>
                  <img
                    src="/images/even.webp"
                    className="rounded-xl"
                    alt="client"
                  />
                </div>
                <p className="hidden xl:block text-sm text-gray-300 font-light leading-snug max-w-md">
                  Get your free Shopify Test Drive, and let us show you a glimpse
                  of what we can do for you,{' '}
                  <span className="text-white font-medium">
                    100% risk free.
                  </span>
                </p>
              </div>

              <button className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary-soft rounded-full text-white font-bold text-base hover:bg-primary-accent hover:text-black transition-all group whitespace-nowrap">
                Claim My Free Design
                <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Mobile scroller */}
          <div className="flex-[0.8] relative border border-primary-soft rounded-3xl overflow-hidden bg-[#0a0a0a] h-[500px] lg:h-[755px] p-5">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent z-20" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20" />

            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="flex flex-col gap-4 animate-mobile-1">
                {scrollMobile.map((src, i) => (
                  <div
                    key={i}
                    className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg border border-white/10 bg-zinc-900"
                  >
                    <img
                      src={src}
                      alt="Mobile View"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div
                className="flex flex-col gap-4 animate-mobile-2"
                style={{ marginTop: '-50px' }}
              >
                {scrollMobile
                  .slice()
                  .reverse()
                  .map((src, i) => (
                    <div
                      key={i}
                      className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg border border-white/10 bg-zinc-900"
                    >
                      <img
                        src={src}
                        alt="Mobile View"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 pt-16 md:mx-10">
          {[
            { label: 'Conversion Rate', up: '28%' },
            { label: 'Order Value', up: '17%' },
            { label: 'Total Revenue', up: '22.6%' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md p-5 sm:p-6 rounded-[14px] border border-white/10 flex justify-between items-center group hover:border-primary-soft transition-all"
            >
              <div className="flex-1">
                <p className="text-[10px] sm:text-[11px] text-gray-400 font-bold uppercase tracking-tighter mb-2">
                  {stat.label}
                </p>
                <div className="text-sm sm:text-base font-black flex items-center bg-primary-gradient bg-clip-text text-transparent">
                  {stat.up} improvement
                </div>
              </div>
              <img
                src="/images/herowave.avif"
                className="w-24 sm:w-32 lg:w-40  hue-rotate-[100deg]"
                alt="wave"
              />
            </div>
          ))}
        </div>
    </div>
  );
};

export default PortfolioShowcase;