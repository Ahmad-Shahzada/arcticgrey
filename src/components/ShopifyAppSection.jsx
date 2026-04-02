import React from 'react';

// --- Icons ---
const ConsultationIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.303.025-.607.045-.912.059A29.135 29.135 0 0112 18.25c-3.15 0-6.13-.5-8.858-1.404a.997.997 0 01-.912-.059A2.18 2.18 0 010.25 14.894v-4.286c0-.969.616-1.813 1.5-2.097 1.239-.398 2.566-.614 3.942-.614 1.376 0 2.703.216 3.942.614.448.144.893.28 1.336.405.443-.125.888-.26 1.336-.405 1.239-.398 2.566-.614 3.942-.614 1.376 0 2.703.216 3.942.614z" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l-3 3m0 0l3 3m-3-3h13.5m-2.25-3.414a5.25 5.25 0 00-10.32 0M16.463 15.712a5.25 5.25 0 00-10.32 0" />
  </svg>
);

const RevenueIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5M21.75 7.5V12.75M21.75 7.5H16.5" />
  </svg>
);

const ShopifyAppSection = () => {
  return (
  <div className="bg-white py-10 lg:py-16 px-3 sm:px-6 lg:mx-5 lg:px-16">
      
      <section className="max-w-[1400px] mx-auto">
        {/* Container: grid-cols-1 for mobile stack, lg:grid-cols-2 for desktop alignment */}
        <div className="bg-[#FAF7F0] rounded-[24px] lg:rounded-[14px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center">
          
          {/* --- LEFT SIDE: IMAGE --- */}
          {/* order-1 ensures image is on top on mobile */}
          <div className="w-full flex items-center justify-center p-8 md:p-12 lg:p-16 order-1">
            <img 
              src="/images/ai-shopify-apps.webp" 
              className="w-full h-auto max-w-[450px] md:max-w-[550px] lg:max-w-full object-contain drop-shadow-xl" 
              alt="Shopify App Ecosystem" 
            />
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          {/* order-2 puts text below image on mobile */}
          <div className="p-8 md:p-12 lg:pr-20 lg:pl-10 lg:py-20 flex flex-col justify-center order-2">
            <div className="space-y-6">
              {/* Header: text-3xl for mobile, md:text-5xl for big screen */}
              <h2 className="text-3xl md:text-5xl lg:text-[32px] text-zinc-900 font-semibold leading-[1.1] tracking-tight">
                Your <span className="font-bold">Shopify App</span>, Your Way
              </h2>
              <p className="text-zinc-500 text-base md:text-md max-w-lg font-normal leading-relaxed">
                We're bringing our world-class expertise to Shopify App Development, helping merchants and entrepreneurs create custom private apps for their individual store needs and public apps ready to be listed on the Shopify App Store.
              </p>
            </div>

            {/* Feature List */}
            <div className="mt-8 lg:mt-10 divide-y divide-zinc-200 border-t border-zinc-200">
              <FeatureRow Icon={ConsultationIcon} title="End-to-End Consultation" />
              <FeatureRow Icon={SupportIcon} title="Full Lifecycle Support" />
              <FeatureRow Icon={RevenueIcon} title="Revenue Generation" />
            </div>

            {/* CTA Button: w-full on mobile, sm:w-fit for desktop */}
            <div className="mt-8 lg:mt-10">
              <button className="w-full sm:w-fit bg-black text-white px-2 lg:px-10 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all group shadow-md active:scale-95">
                Learn More about Shopify Apps
                <span className="group-hover:translate-x-2 transition-transform duration-300 italic text-lg">→</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

const FeatureRow = ({ Icon, title }) => (
  <div className="flex items-center justify-between py-6 group cursor-pointer hover:bg-black/[0.02] transition-colors rounded-sm px-4">
    {/* Left Side: Title */}
    <span className="text-lg font-medium text-zinc-900 group-hover:text-black transition-colors">
        {title}
    </span>

    {/* Right Side: Icon */}
    <div className="text-zinc-800 flex items-center justify-center transition-transform group-hover:translate-x-1">
        <Icon />
    </div>
</div>
);

export default ShopifyAppSection;