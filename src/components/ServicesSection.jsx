import React from 'react';
import { Squares2X2Icon, ChartBarIcon, MagnifyingGlassIcon, ArrowRightIcon, PlayIcon, Cog6ToothIcon, CpuChipIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline';

const ServicesSection = () => {
    const features = [
        { name: 'Shopify Theme Design', icon: Squares2X2Icon },
        { name: 'Conversion Rate Optimization', icon: ChartBarIcon },
        { name: 'Shopify UX & UI Audit', icon: MagnifyingGlassIcon },
    ];
    const taskFeatures = [
        { name: 'ERP Integration & Automation', icon: Cog6ToothIcon },
        { name: 'Gamify Your Cart Drawer', icon: CpuChipIcon }, // Approximated icon
        { name: 'If you can dream it, we can build it.', icon: Square3Stack3DIcon },
    ];
    return (
     <div className='bg-[#FBF7ED] px-2 sm:px-5'>
    {/* Reduced px-16 to responsive px-6 lg:px-16 */}
    <section className="bg-white pb-10 pt-8 rounded-tr-xl rounded-tl-xl px-6 lg:px-16 font-sans">
        <div className=" mx-auto">

            {/* --- Header Section --- */}
            <div className="flex flex-col items-center text-center mb-10 md:mb-16 relative">
                {/* Adjusted top position for mobile so it doesn't overlap header as much */}
                <img src="/public/images/elm.webp" className='w-24 md:w-32 mb-10 absolute -top-12 md:-top-20' alt="" />
                
                {/* Reduced pt-32 to pt-24 for mobile */}
                <p className="text-sm font-medium text-[#111111]/70 mb-4 pt-24 md:pt-32 tracking-tight">
                    Everything you need to sell, scale, and succeed
                </p>
                <h1 className="text-3xl md:text-5xl font-semibold text-[#111111] leading-tight tracking-tight flex flex-wrap items-center justify-center gap-2">
                    Our Suite of Services are Sweet <span className="text-3xl md:text-5xl ml-1">👨‍🍳</span>
                </h1>
            </div>

            {/* --- Bottom Content Card (Row 1) --- */}
            {/* Reduced p-20 to responsive p-8 md:p-20 */}
            <div className="bg-[#fbf7ec] border border-[#F1EFE9] rounded-2xl p-8 md:p-20 shadow-sm mb-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col order-2 lg:order-1">
                        <h2 className="text-3xl md:text-[32px] text-[#111111] leading-[1.1] mb-6">
                            Build a <span className="relative inline-block">
                                <span className='underline font-bold'>New</span>
                                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#FBD602] rounded-full -z-10"></span>
                            </span> Shopify Store
                        </h2>

                        <p className="text-[#4A4A4A] text-lg leading-relaxed mb-10 max-w-md">
                            Custom Shopify stores that are tailored for high performance, seamlessly integrate AI for continuous evolution, and deliver a lasting competitive advantage in eCommerce.
                        </p>

                        {/* Feature List - Removed fixed mr-20 for mobile */}
                        <div className="space-y-0 mb-10 lg:mr-20 border-t border-black/10">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-center justify-between py-6 border-b border-black/10 last:border-0">
                                    <span className="text-lg md:text-xl text-[#111111] pl-2 md:pl-4">{item.name}</span>
                                    <item.icon className="w-6 h-6 text-[#111111]" />
                                </div>
                            ))}
                        </div>

                        <button className="flex items-center justify-center text-sm gap-2 sm:gap-3 bg-black text-white px-3 sm:px-8 py-5 rounded-full font-bold hover:bg-zinc-800 transition-all w-full sm:w-fit group">
                            Start Your Shopify Test Drive
                            <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* Right Column: Video */}
                    <div className="relative flex justify-center items-center order-1 lg:order-2">
                        <div className="w-full aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden">
                            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                                <source src="/vidio/vidio-1.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- Content Card (Row 2) --- */}
            <div className="bg-[#fcf9f1] border border-[#F1EFE9] rounded-2xl p-8 md:p-16 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Video Column */}
                    <div className="relative group cursor-pointer order-1">
                        <div className="w-full aspect-square rounded-2xl overflow-hidden relative">
                            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                                <source src="/vidio/vidio-2.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    {/* Text Content Column - Adjusted mx-16 for mobile */}
                    <div className="flex flex-col md:px-4 lg:mx-16 order-2">
                        <h2 className="text-3xl md:text-[34px] lg:mr-28 text-[#111111] leading-[1.3] mb-6 font-semibold">
                            Complete Shopify Tasks Quickly
                        </h2>
                        <p className="text-[#4A4A4A] text-lg leading-relaxed mb-10 max-w-md">
                            Get an award-winning Shopify design & development team to work on your Shopify site, <span className="font-bold">on-demand</span> and at your fingertips, when you need them most.
                        </p>
                        
                        <div className="space-y-0 mb-10 border-t border-black/10">
                            {taskFeatures.map((item, index) => (
                                <div key={index} className="flex items-center justify-between py-6 border-b border-black/10 last:border-0">
                                    <span className="text-lg text-[#111111]">{item.name}</span>
                                    <item.icon className="w-6 h-6 md:w-8 md:h-8 font-bold text-[#111111]/80" />
                                </div>
                            ))}
                        </div>

                        <button className="flex items-center justify-center gap-3 bg-black text-white px-8 py-5 rounded-full font-bold hover:bg-zinc-800 transition-all w-full sm:w-fit group">
                            Get a Free Quote
                            <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                </div>
            </div>

        </div>
    </section>
</div>
    );
};

export default ServicesSection;