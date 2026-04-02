import React from 'react';

// --- Icons (Kept as provided) ---
const ConsultationIcon = () => (
  <svg className="w-7 h-7 md:w-9 md:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.303.025-.607.045-.912.059A29.135 29.135 0 0112 18.25c-3.15 0-6.13-.5-8.858-1.404a.997.997 0 01-.912-.059A2.18 2.18 0 010.25 14.894v-4.286c0-.969.616-1.813 1.5-2.097 1.239-.398 2.566-.614 3.942-.614 1.376 0 2.703.216 3.942.614.448.144.893.28 1.336.405.443-.125.888-.26 1.336-.405 1.239-.398 2.566-.614 3.942-.614 1.376 0 2.703.216 3.942.614z" />
  </svg>
);

const SupportIcon = () => (
  <svg className="w-7 h-7 md:w-9 md:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l-3 3m0 0l3 3m-3-3h13.5m-2.25-3.414a5.25 5.25 0 00-10.32 0M16.463 15.712a5.25 5.25 0 00-10.32 0" />
  </svg>
);

const RevenueIcon = () => (
  <svg className="w-7 h-7 md:w-9 md:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5M21.75 7.5V12.75M21.75 7.5H16.5" />
  </svg>
);

const TestingData = () => {
  return (
    <div className="mx-0 md:mx-5 bg-white py-10 md:py-16 px-4 md:px-10 lg:px-14">
      <section className="max-w-[1600px] mx-auto">
        <div className="bg-[#FAF7F0] rounded-[20px] md:rounded-[15px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center">

          <div className="w-full flex items-center justify-center p-6 md:p-10 lg:pl-10 order-1">
            <img
              src="/images/testingdata.webp"
              className="w-full h-auto max-w-[500px] md:max-w-[700px] lg:max-w-[900px] drop-shadow-sm"
              alt="A/B Testing Visualization"
            />
          </div>

          <div className="px-6 pb-12 pt-4 md:px-12 lg:pr-20 lg:py-20 flex flex-col justify-center lg:ml-10 xl:ml-20 max-w-xl mx-auto lg:mx-0 text-left order-2">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-[26px] sm:text-2xl md:text-4xl text-zinc-900 leading-tight lg:leading-[1.1] sm:whitespace-normal">
                <span className="font-bold pr-1 lg:pr-3">A/B Testing</span>
                and Data-Driven Optimization
              </h2>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed font-light">
                Optimize your Shopify site with data-driven decisions through A/B testing. Move beyond guesswork and drive growth by measuring the impact of your changes.
              </p>
            </div>

            <div className="mt-8 md:mt-10 divide-y divide-zinc-200 border-t border-zinc-200 text-left">
              <FeatureRow Icon={ConsultationIcon} title="Strategize, Design, Develop, Deploy" />
              <FeatureRow Icon={SupportIcon} title="Exclusively Plus Certified" />
              <FeatureRow Icon={RevenueIcon} title="In-Depth Analytics" />
            </div>

            <div className="mt-8 md:mt-10 flex justify-center lg:justify-start">
              <button className="w-full sm:w-auto bg-black text-white px-8 md:px-12 hover:border-yellow-500 py-4 md:py-5 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all group shadow-md active:scale-95">
                Start the A/B Test Drive
                <span className="group-hover:translate-x-2 transition-transform duration-300 italic text-xl md:text-2xl">→</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

const FeatureRow = ({ Icon, title }) => (
  <div className="flex items-center justify-between py-4 md:py-6 group cursor-pointer hover:bg-white transition-all rounded-md px-2 md:px-4 border-b border-zinc-100 last:border-0">
    {/* Left Side: Title */}
    <span className="text-sm md:text-lg font-medium text-zinc-900 group-hover:text-black transition-colors pr-4">
      {title}
    </span>

    {/* Right Side: Icon */}
    <div className="text-zinc-800 shrink-0">
      <Icon />
    </div>
  </div>
);

export default TestingData;