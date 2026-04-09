import React, { useState } from 'react';

// --- Sub-Components ---
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

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tickerItems = [
    'Unified Shopify Development',
    '1,000+ Stores Supported',
    '$5B+ In Merchant Revenue',
    'Proven Results & Backed By Data',
    'D2C & B2B Shopify Expertise',
    'Award-Winning Developers',
  ];

  return (
    <section
      className="relative mx-3 md:mx-4 lg:mx-5 mb-8 rounded-b-[24px] overflow-hidden bg-fix bg-center bg-cover bg-no-repeat transition-all duration-700"
      style={{
        // Deep Forest Gradient Background (kept as-is)
        background: `radial-gradient(circle at top left, #062016 0%, #0000 60%), url('/images/main-hero-f-desktop.webp')`,
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* --- RESPONSIVE CONTAINER --- */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-10 pb-6">
        {/* --- MAIN HERO TOP --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 md:mx-10 items-center mb-16 md:mb-20 pt-10">
          {/* TEXT CONTENT */}
          <div className="space-y-6 md:space-y-8 lg:mt-10 text-center lg:text-left">
            <h1 className="text-4xl sm:text-[54px] font-bold leading-tight text-white">
              Try Before You Buy <br className="hidden sm:block" />
              <span className="bg-primary-gradient bg-clip-text text-transparent">
                Shopify Support
              </span>
            </h1>

            <p className="text-gray-300 text-lg lg:text-[22px] max-w-lg mx-auto lg:mx-0">
              <span className="text-light-text font-medium">Award-Winning </span>
              Shopify Developers. Fixes, Upgrades, New Builds &{' '}
              <span className="text-light-text">
                Migrations. Work starts in hours.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8">
              {/* GRADIENT BUTTON */}
              <button className="relative group w-full sm:w-auto px-10 py-4 rounded-full font-bold overflow-hidden text-white transition-all">
                {/* Button Background Gradient */}
                <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105 bg-primary-gradient" />
                <div className="relative z-10 flex items-center justify-center">
                  <span className="text-black">Book a Call</span>
                  <span className="pl-3 text-xl text-black">→</span>
                </div>
              </button>

              {/* SHOPIFY PARTNER BADGE */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="/images/shopify.avif"
                  alt="Shopify"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* ACTION CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {[
              {
                icon: 'M23 6l-9.5 9.5-5-5L1 18',
                prefix: 'I Need To',
                highlight: 'Upgrade My Shopify Store',
                desc: 'Need to move fast? Get quote to complete any Shopify task.',
                btnText: 'Free Quote',
                footerLink: 'Get a Free Audit',
              },
              {
                icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
                prefix: 'I Need To Build',
                highlight: 'A New Shopify Store',
                desc: 'Try Before You Buy Concept Design & Action Plan.',
                btnText: 'Free Prototype',
                footerLink: 'Migrate to Shopify',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group bg-black backdrop-blur-sm cursor-pointer p-6 sm:p-8 rounded-[30px] border-2 border-white/10 flex flex-col items-start text-left hover:border-primary-soft transition-all duration-500"
              >
                {/* --- ICON (Changes to Green) --- */}
                <div className="text-white group-hover:text-primary-accent mb-6 transition-colors duration-300">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d={card.icon}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {i === 0 && (
                      <path
                        d="M17 6h6v6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                  </svg>
                </div>

                <h2 className="text-2xl sm:text-[24px] lg:text-[28px] font-bold text-white leading-tight mb-4">
                  <span className="bg-primary-gradient bg-clip-text text-transparent">
                    {card.prefix} <br /> {card.highlight}
                  </span>
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 sm:mb-10">
                  {card.desc}
                </p>

                {/* --- BUTTON --- */}
                <button
                  className="w-full py-3 border border-primary-soft rounded-xl text-primary-accent font-bold group-hover:bg-primary-gradient group-hover:text-black transition-all duration-300 mb-6"
                >
                  {card.btnText} <span className="ml-1">→</span>
                </button>

                <div className="w-full text-center">
                  <a
                    href="#"
                    className="text-primary-accent text-xs font-bold underline underline-offset-4 hover:text-primary-300"
                  >
                    {card.footerLink} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- TICKER --- */}
        <div className="relative overflow-hidden w-full py-5 border-y border-white/5 mb-10 md:mb-12 md:mx-10 bg-primary-900/20">
          <div className="animate-scroll whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <div
                key={i}
                className="inline-flex items-center mx-4 sm:mx-8"
              >
                <span className="w-2 h-2 bg-primary-accent rounded-full mr-4 shadow-[0_0_8px_#10b981]" />
                <span className="text-gray-300 text-xs sm:text-sm font-medium tracking-wide uppercase">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- STATS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 md:mx-10">
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

        {/* --- LOGO FOOTER --- */}
        <div
          className="flex flex-wrap justify-center lg:justify-between md:mx-10 items-center gap-6 sm:gap-10 py-8 border-t border-white/5 grayscale opacity-60 hover:grayscale-0 transition-all duration-700 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/ft-bg.webp')` }}
        >
          {['review1', 'review2', 'review3', '4', 'review5'].map((img, i) => (
            <img
              key={i}
              src={`/images/${img}.webp`}
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
              alt="partner"
            />
          ))}
        </div>
      </div>
    </section>
  );
}