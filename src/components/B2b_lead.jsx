import React from 'react';

// --- Icons ---
const ConsultationIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.303.025-.607.045-.912.059A29.135 29.135 0 0112 18.25c-3.15 0-6.13-.5-8.858-1.404a.997.997 0 01-.912-.059A2.18 2.18 0 010.25 14.894v-4.286c0-.969.616-1.813 1.5-2.097 1.239-.398 2.566-.614 3.942-.614 1.376 0 2.703.216 3.942.614.448.144.893.28 1.336.405.443-.125.888-.26 1.336-.405 1.239-.398 2.566-.614 3.942-.614 1.376 0 2.703.216 3.942.614z" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l-3 3m0 0l3 3m-3-3h13.5m-2.25-3.414a5.25 5.25 0 00-10.32 0M16.463 15.712a5.25 5.25 0 00-10.32 0" />
  </svg>
);

const RevenueIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5M21.75 7.5V12.75M21.75 7.5H16.5" />
  </svg>
);

const B2b_lead = () => {
  return (
    <div className="mx-0 md:mx-5">
      <section className="mx-auto w-full bg-white py-8 md:py-12 px-4 md:px-10 lg:px-14">
        {/* Grid: 1 column on mobile, 2 on lg screens */}
        <div className="bg-[#FAF7F0] rounded-[14px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center min-h-fit lg:min-h-[600px]">

          {/* LEFT SIDE: IMAGE (Order-1 on mobile) */}
          <div className="w-full h-full flex items-center justify-center p-8 md:p-12 lg:px-16 order-1 lg:order-1">
            <img
              src="/images/b2b_lead.webp"
              className="w-full max-w-[350px] md:max-w-[500px] lg:max-w-[600px] object-contain drop-shadow-sm"
              alt="B2B Lead"
            />
          </div>

          {/* RIGHT SIDE: CONTENT (Order-2 on mobile) */}
          <div className="p-5 md:p-16 lg:p-24 flex flex-col justify-center order-2 lg:order-2 items-center lg:items-start text-left">
            <div className="space-y-4 md:space-y-6 max-w-lg">
              {/* Headline: Small font + whitespace-nowrap for mobile single line */}
              <h2 className="text-[20px] sm:text-3xl md:text-4xl text-zinc-900 leading-[1.1] tracking-tight sm:whitespace-normal">
                Why <span className="font-bold border-b-2 md:border-b-4 border-black/5">B2B</span> Leads The Way
              </h2>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed font-light mx-auto lg:mx-0">
                Optimize your Shopify site with data-driven decisions through A/B testing. Move beyond guesswork and drive growth by measuring impact.
              </p>
            </div>

            {/* Feature List */}
            <div className="mt-8 md:mt-10 divide-y divide-zinc-200 border-t border-zinc-200 w-full max-w-md">
              <FeatureRow Icon={ConsultationIcon} title="End-to-End Consultation" />
              <FeatureRow Icon={SupportIcon} title="Full Lifecycle Support" />
              <FeatureRow Icon={RevenueIcon} title="Revenue Generation" />
            </div>

            {/* CTA Button */}
            <div className="mt-8 md:mt-10 w-full sm:w-auto">
              <button className="bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all group shadow-xl active:scale-95 text-[12px] md:text-sm uppercase tracking-widest w-full sm:w-auto">
                Explore Features
                <span className="group-hover:translate-x-2 text-xl md:text-2xl transition-transform duration-300">→</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

const FeatureRow = ({ Icon, title }) => (
  <div className="flex items-center justify-between py-4 md:py-6 group cursor-pointer hover:bg-white hover:border-b hover:border-yellow-500 px-4 lg:px-6 -mx-3 transition-all duration-300">
    <span className="text-sm md:text-lg font-semibold text-black transition-colors">
      {title}
    </span>
    <div className="text-black ">
      <Icon />
    </div>
  </div>
);

export default B2b_lead;