import React from 'react';

// Sample data for the services grid
const services = [
    {
        title: "Custom Shopify Theme Design",
        desc: "Comprehensive setup and customization services for new or existing Shopify stores, including theme devel...",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="#e8b959" strokeWidth="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="3.5" stroke="#e8b959" strokeWidth="1.5" />
                <path d="M14 17.5H21M17.5 14V21" stroke="#e8b959" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="6.5" cy="17.5" r="3.5" stroke="#e8b959" strokeWidth="1.5" />
            </svg>
        ),
        highlighted: false,
    },
    {
        title: "New Store Development",
        desc: "Complete your Shopify design & development tasks quickly with Bulk Hours.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L4 20H20L21 9" stroke="#e8b959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 9H21V9C21 9 19.5 9 18 11C16.5 9 15 9 15 9C15 9 13.5 9 12 11C10.5 9 9 9 9 9C9 9 7.5 9 6 11C4.5 9 3 9 3 9Z" stroke="#e8b959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 4H16L15 9H9L8 4Z" stroke="#e8b959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        highlighted: false,
    },
    {
        title: "Convert any Figma to Shopify",
        desc: "No design is too complex. Submit your Figma files, get a free quote and timeframe, and watch us build yo...",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5" cy="12" r="2" stroke="#e8b959" strokeWidth="1.5" />
                <circle cx="19" cy="12" r="2" stroke="#e8b959" strokeWidth="1.5" />
                <path d="M7 12H17" stroke="#e8b959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 7L17 12L12 17" stroke="#e8b959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        highlighted: false,
    },
    {
        title: "Free Shopify Concept Design",
        desc: "Designing user interfaces and experiences specifically for Shopify apps, ensuring they are intuitive and...",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18V19C9 20.6569 10.3431 22 12 22V22C13.6569 22 15 20.6569 15 19V18M9 18H15M9 18C7.13601 16.5097 6 14.3915 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 14.3915 16.864 16.5097 15 18M12 2V4" stroke="#e8b959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        highlighted: false,
    },
    {
        title: "Bulk Hours for Shopify Tasks",
        desc: "Complete your Shopify design & development tasks quickly and on-demand with Bulk Hours.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" stroke="#e8b959" strokeWidth="1.5" />
                <path d="M12 7V12L15 15" stroke="#e8b959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 5L21 3M5 5L3 3" stroke="#e8b959" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
        highlighted: false,
    },
    {
        title: "ERP Integrations",
        desc: "Specializing in the integration of leading ERP systems, such as NetSuite, Microsoft Dynamics, SAP, and o...",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#e8b959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.4 15A1.65 1.65 0 0 0 19 16.1L20.6 18.6C21 19.3 20.8 20.2 20.1 20.6L18.6 21.5C17.9 21.9 17 21.7 16.6 21L15 18.5A1.65 1.65 0 0 0 13.9 18.9V21.8C13.9 22.6 13.2 23.3 12.4 23.3H9.6C8.8 23.3 8.1 22.6 8.1 21.8V18.9A1.65 1.65 0 0 0 7 18.5L5.4 21C5 21.7 4.1 21.9 3.4 21.5L1.9 20.6C1.2 20.2 1 19.3 1.4 18.6L3 16.1A1.65 1.65 0 0 0 2.6 15H-0.4C-1.2 15 -1.9 14.3 -1.9 13.5V10.7C-1.9 9.9 -1.2 9.2 -0.4 9.2H2.6A1.65 1.65 0 0 0 3 8.1L1.4 5.6C1 4.9 1.2 4 1.9 3.6L3.4 2.7C4.1 2.3 5 2.5 5.4 3.2L7 5.7A1.65 1.65 0 0 0 8.1 5.3V2.4C8.1 1.6 8.8 0.9 9.6 0.9H12.4C13.2 0.9 13.9 1.6 13.9 2.4V5.3A1.65 1.65 0 0 0 15 5.7L16.6 3.2C17 2.5 17.9 2.3 18.6 2.7L20.1 3.6C20.8 4 21 4.9 20.6 5.6L19 8.1A1.65 1.65 0 0 0 19.4 9.2H22.4C23.2 9.2 23.9 9.9 23.9 10.7V13.5C23.9 14.3 23.2 15 22.4 15H19.4Z" stroke="#e8b959" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        highlighted: false,
    }
];

const leftImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
];

const centerImages = [
    "https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=600&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
];

const rightImages = [
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&q=80",
    "https://images.unsplash.com/photo-1607004468138-c7e4f29e5e04?w=600&q=80",
    "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&q=80",
];

export default function ServicesShowcase() {
    return (
        <>
            <style>
                {`
          @keyframes scroll-up {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-scroll-fast { animation: scroll-up 18s linear infinite; }
          .animate-scroll-medium { animation: scroll-up 22s linear infinite; }
          .animate-scroll-slow { animation: scroll-up 28s linear infinite; }

          .pause-on-hover:hover .animate-scroll-fast,
          .pause-on-hover:hover .animate-scroll-medium,
          .pause-on-hover:hover .animate-scroll-slow {
            animation-play-state: paused;
          }
        `}
            </style>
            <section className="mx-3 sm:mx-5 bg-black text-white min-h-screen px-4 md:px-12 py-10 font-sans overflow-hidden">
                <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row gap-8 lg:gap-16">

                    {/* LEFT COLUMN: Grid & Banner */}
                    <div className="flex-1 flex flex-col order-2 xl:order-1">

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8">
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    className={`flex flex-col p-6 rounded-2xl cursor-pointer transition-all ${service.highlighted
                                        ? 'bg-gradient-to-br from-[#1a1710] to-[#0a0a0a] border border-[#d4af37]/20 shadow-[0_0_30px_rgba(212,175,55,0.05)]'
                                        : 'bg-transparent hover:bg-[#0f0f0f] border border-transparent hover:border-[#222]'
                                        }`}
                                >
                                    <div className="mb-4">{service.icon}</div>
                                    <h3 className="text-[15px] font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-[#888888] text-sm font-medium leading-tight">
                                        {service.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Promo Banner with Video */}
                        <div className="relative w-full h-auto md:h-[120px] rounded-2xl border-2 border-[#464646] bg-gradient-to-r from-[#111] to-[#050505] flex flex-col md:flex-row items-center p-6 md:p-0 md:pr-6 overflow-visible mt-16 mb-4">

                            {/* Background Glow Effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-[#d5c387] opacity-[0.1] blur-[20px] pointer-events-none"></div>

                            {/* Left Side: Video (Overlapping on Desktop, Regular on Mobile) */}
                            <div className="relative md:absolute md:left-5 md:-top-7 w-full md:w-[240px] aspect-video md:h-[146px] rounded-md overflow-hidden z-10 mb-6 md:mb-0">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/vidio/build.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            {/* Center Text & Right Button Container */}
                            <div className="w-full flex-1 flex flex-col md:flex-row items-center justify-between md:ml-[290px] z-10 gap-6 md:gap-0">

                                {/* Text Block */}
                                <div className='text-center md:text-left'>
                                    <h4 className="text-[16px] font-semibold text-white mb-0 leading-tight">Buy 20:00 Bulk Hours</h4>
                                    <p className="text-[18px] font-semibold text-[#e8b959] leading-tight">Get 10:00 Bulk Hours FREE</p>
                                </div>

                                {/* Button Block */}
                                <button className="w-full md:w-auto bg-white text-black hover:bg-gray-200 font-semibold px-10 py-4 md:py-5 rounded-full flex items-center justify-center transition-colors">
                                    Limited Time Deal
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Scrolling Case Studies */}
                    <div className="w-full xl:w-[500px] order-1 xl:order-2 relative h-[500px] md:h-[700px] border border-[#3a3a3a] rounded-[10px] bg-[#050505] overflow-hidden flex-shrink-0 pause-on-hover">

                        {/* Shadow Overlays */}
                        <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_120px_80px_rgba(0,0,0,1)]"></div>
                        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/90 to-transparent z-20 pointer-events-none"></div>

                        {/* 3-Column Container */}
                        <div className="absolute inset-0 w-full xl:w-[120%] h-full flex justify-center items-start">

                            {/* Left Column - Hidden on mobile, half visible on XL */}
                            <div className="hidden sm:flex w-[30%] xl:w-[40%] flex-col gap-3 animate-scroll-medium -mt-20 opacity-40">
                                {[...leftImages, ...leftImages].map((imgUrl, index) => (
                                    <div key={`left-${index}`} className="w-full aspect-video rounded-md overflow-hidden border border-[#222] xl:translate-x-[-10%]">
                                        <img src={imgUrl} alt="" className="w-full h-full object-cover grayscale" />
                                    </div>
                                ))}
                            </div>

                            {/* Center Column - Main focus on all devices */}
                            <div className="w-[85%] sm:w-[40%] flex flex-col gap-3 animate-scroll-fast z-10 scale-100 xl:scale-110 px-2 sm:px-0">
                                {[...centerImages, ...centerImages].map((imgUrl, index) => (
                                    <div key={`center-${index}`} className="w-full aspect-video rounded-md overflow-hidden border border-[#e8b959]/30 shadow-[0_0_30px_rgba(232,185,89,0.15)] bg-[#111]">
                                        <img src={imgUrl} alt="" className="w-full h-full object-cover brightness-110" />
                                    </div>
                                ))}
                            </div>

                            {/* Right Column - Hidden on mobile, half visible on XL */}
                            <div className="hidden sm:flex w-[30%] xl:w-[60%] flex-col gap-3 animate-scroll-slow -mt-32 opacity-40">
                                {[...rightImages, ...rightImages].map((imgUrl, index) => (
                                    <div key={`right-${index}`} className="w-full aspect-video rounded-md overflow-hidden border border-[#222] xl:translate-x-[10%]">
                                        <img src={imgUrl} alt="" className="w-full h-full object-cover grayscale" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Button */}
                        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30 w-[80%] sm:w-auto">
                            <button className="w-full sm:w-auto bg-white text-black font-medium px-8 py-3 rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.8)] hover:scale-105 transition-all">
                                View Case Studies
                                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}