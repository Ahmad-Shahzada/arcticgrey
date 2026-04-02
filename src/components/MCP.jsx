import React from 'react';

// --- Icons ---
const ConsultationIcon = () => (
    <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.303.025-.607.045-.912.059A29.135 29.135 0 0112 18.25c-3.15 0-6.13-.5-8.858-1.404a.997.997 0 01-.912-.059A2.18 2.18 0 010.25 14.894v-4.286c0-.969.616-1.813 1.5-2.097 1.239-.398 2.566-.614 3.942-.614 1.376 0 2.703.216 3.942.614.448.144.893.28 1.336.405.443-.125.888-.26 1.336-.405 1.239-.398 2.566-.614 3.942-.614 1.376 0 2.703.216 3.942.614z" />
    </svg>
);

const SupportIcon = () => (
    <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l-3 3m0 0l3 3m-3-3h13.5m-2.25-3.414a5.25 5.25 0 00-10.32 0M16.463 15.712a5.25 5.25 0 00-10.32 0" />
    </svg>
);

const RevenueIcon = () => (
    <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5M21.75 7.5V12.75M21.75 7.5H16.5" />
    </svg>
);

const MCP = () => {
    return (
        /* Outer Section: Mobile pe padding kam, Desktop pe px-14 exactly */
        <div className="mx-0 md:mx-5 bg-white py-4 px-4 md:px-10 lg:px-14">
            {/* Inner Container */}
            <section className="">
                <div className="bg-[#FAF7F0] px-2 md:px-5 rounded-[24px] lg:rounded-[14px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center">

                    {/* --- IMAGE SIDE (Order-1 on mobile) --- */}
                    <div className="w-full flex items-center justify-center p-6 md:p-12 lg:p-0 order-1 lg:order-2">
                        <img
                            src="/public/images/mcp-image0.webp"
                            className="w-full h-auto max-w-[400px] md:max-w-[600px] lg:max-w-full object-contain"
                            alt="Shopify App Ecosystem"
                        />
                    </div>

                    {/* --- CONTENT SIDE (Order-2 on mobile) --- */}
                    <div className="p-5 md:p-12 lg:px-20 lg:py-20 flex flex-col justify-center order-2 lg:order-1 items-center lg:items-start text-left">
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-4xl lg:text-4xl text-zinc-900 leading-[1.2] lg:leading-[1.1]">
                                Storefront <span className="font-bold pr-1 lg:pr-3">MCP</span>Integration Service
                            </h2>
                            <p className="text-zinc-600 text-sm md:text-base lg:text-md leading-relaxed max-w-xl font-light mx-auto lg:mx-0">
                                Turn your store into a smart, conversational shopping experience with Storefront MCP. Powered by real-time Shopify data, it helps customers get instant, tailored answers that boost confidence and conversions.
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="mt-8 w-full max-w-md divide-y divide-zinc-200 border-t border-zinc-200">
                            <FeatureRow Icon={ConsultationIcon} title="End-to-End Consultation" />
                            <FeatureRow Icon={SupportIcon} title="Full Lifecycle Support" />
                            <FeatureRow Icon={RevenueIcon} title="Revenue Generation" />
                        </div>

                        {/* Button: Mobile pe w-full, Desktop pe auto */}
                        <div className="mt-10 w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-black text-white px-8 lg:px-10 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all group shadow-md active:scale-95 text-sm md:text-base">
                                MCP Integration For $595
                                <span className="group-hover:translate-x-2 transition-transform duration-300 text-xl md:text-2xl italic">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureRow = ({ Icon, title }) => (
    <div className="flex items-center justify-between py-4 md:py-6 group cursor-pointer hover:bg-black/[0.02] transition-colors rounded-sm lg:px-4 text-left">
        {/* Title stays on the left */}
        <span className="text-base md:text-xl font-medium text-zinc-900 group-hover:text-black transition-colors">
            {title}
        </span>

        {/* Icon pushed to the right side */}
        <div className="text-zinc-800 flex items-center justify-center transition-transform group-hover:translate-x-1 shrink-0">
            <Icon />
        </div>
    </div>
);

export default MCP;