import React from 'react';

const Icon = ({ path }) => (
    <svg className="w-6 h-6 text-white mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
    </svg>
);

const ShopifyBuilderSection = () => {
    return (
        <section className="mx-0 md:mx-5 bg-white px-4 md:px-10 lg:px-14 pt-10 pb-10">
            <div className="w-full bg-white rounded-[24px] lg:rounded-[14px] flex flex-col lg:flex-row overflow-hidden border border-gray-100">

                <div className="w-full lg:w-1/2 bg-[#0a0a0a] relative flex flex-col min-h-fit lg:min-h-[600px] overflow-hidden order-2 lg:order-1">
                    <div className="relative z-10 grid grid-cols-2 pt-5 w-full">
                        <div className="p-6 md:p-10 border-b border-r border-gray-600/40 flex flex-row items-start justify-start gap-3 md:gap-4">
                            <div className="text-white flex-shrink-0 mt-1">
                                <Icon path="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-xl md:text-3xl font-semibold text-white leading-none tracking-tighter">1000+</div>
                                <p className="text-gray-400 text-[10px] md:text-[12px] font-bold uppercase tracking-wider mt-2 leading-tight">
                                    Shopify Stores Served
                                </p>
                            </div>
                        </div>

                        <div className="p-6 md:p-10 border-b border-gray-600/40 flex flex-row items-start justify-start gap-3 md:gap-4">
                            <div className="mt-1 flex-shrink-0 text-white">
                                <Icon path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-xl md:text-3xl font-semibold text-white leading-none tracking-tighter">$5B+</div>
                                <p className="text-gray-400 text-[10px] md:text-[12px] font-bold uppercase tracking-wider mt-2 leading-tight">
                                    Revenue for Merchants
                                </p>
                            </div>
                        </div>
                        <div className="p-6 md:p-10 border-r border-gray-600/40 flex flex-row items-start justify-start gap-3 md:gap-4">
                            <div className="mt-1 flex-shrink-0 text-white">
                                <Icon path="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-xl md:text-3xl text-white font-semibold leading-none tracking-tighter">550+</div>
                                <p className="text-gray-400 text-[10px] md:text-[12px] font-bold uppercase tracking-wider mt-2 leading-tight">
                                    Five Star Reviews
                                </p>
                            </div>
                        </div>
                        <div className="p-6 md:p-10 flex flex-row items-start justify-start gap-3 md:gap-4">
                            <div className="mt-1 flex-shrink-0 text-white">
                                <Icon path="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </div>
                            <div className="flex flex-col">
                                <div className="text-xl md:text-3xl text-white font-semibold leading-none tracking-tighter">28+</div>
                                <p className="text-gray-400 text-[10px] md:text-[12px] font-bold uppercase tracking-wider mt-2 leading-tight">
                                    Awards Won
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full h-[200px] md:h-[300px] flex items-end justify-center px-4">
                        <div className="relative transform translate-y-4 md:translate-y-8 w-full max-w-[400px] lg:max-w-none">
                            <img
                                src="/images/ai-counter-image.webp"
                                alt="Shopify Dashboard Graphics"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-5 md:p-12 lg:px-20 xl:px-24 flex flex-col justify-center bg-[#FDF9F3] order-1 lg:order-2">
                    <h1 className="text-2xl md:text-4xl leading-tight text-black mb-4 md:mb-6 text-left">
                        <span className='font-bold'>Build</span> Your Custom <span className='font-bold'>Shopify Store</span>
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 text-left mx-auto lg:mx-0 max-w-lg">
                        Launch your brand-ready Shopify store with Arctic Grey—expertly designed, fully integrated, and optimized for 30%+ higher conversions.
                    </p>

                    <div className="space-y-2 md:space-y-4">
                        {["Accelerate Growth", "Future-Ready Design", "Expert Partnership"].map((text) => (
                            <div key={text} className="flex justify-between items-center py-3 md:py-4 border-b border-gray-200 group cursor-pointer hover:bg-black/[0.02] lg:px-5 transition-all">
                                <span className="text-base md:text-lg font-semibold">{text}</span>
                                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 md:mt-12 flex justify-center lg:justify-start">
                        <button className="group w-full sm:w-auto bg-black text-white rounded-full py-4 md:py-5 px-6 md:px-8 flex items-center justify-center lg:justify-between text-sm md:text-lg font-bold hover:bg-gray-800 transition-all">
                            <span>Start Building Today</span>
                            <span className="ml-4 transition-transform group-hover:translate-x-1">→</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ShopifyBuilderSection;