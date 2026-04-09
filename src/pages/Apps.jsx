import React from 'react';
import { Phone, Workflow, Puzzle, Sparkles, Shapes, ShoppingBag, ArrowRight } from 'lucide-react';

// --- DATA ---
const servicesData = [
    {
        icon: <Phone className="w-6 h-6 text-primary-accent" />,
        title: 'Mobile App Development',
        description: 'Boost sales and engage customers with a custom mobile app connected to your Shopify Store.',
    },
    {
        icon: <Sparkles className="w-6 h-6 text-primary-accent" />,
        title: 'AI Agents & Shopify AI',
        description: 'Automate tasks with AI agents, enhance customer experiences, and gain insights with Shopify AI.',
    },
    {
        icon: <Workflow className="w-6 h-6 text-primary-accent" />,
        title: 'Workflow Automation',
        description: 'Streamlining UI, API, and performance testing with automation for flawless experiences.',
    },
    {
        icon: <Puzzle className="w-6 h-6 text-primary-accent" />,
        title: 'App Integrations',
        description: 'Integrate any Shopify App to your Shopify store, we help with setup, configuration, implementation and o...',
    },
    {
        icon: <Phone className="w-6 h-6 text-primary-accent" />,
        title: 'Mobile App Development',
        description: 'Boost sales and engage customers with a custom mobile app connected to your Shopify Store.',
    },
    {
        icon: <Sparkles className="w-6 h-6 text-primary-accent" />,
        title: 'AI Agents & Shopify AI',
        description: 'Automate tasks with AI agents, enhance customer experiences, and gain insights with Shopify AI.',
    },
];


const awardLogos = [
    "/public/images/portfolio-1.webp",
    "/public/images/portfolio-2.webp",
    "/public/images/portfolio-3.webp",
];

const mobileMocks = [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&h=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=400&h=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=400&h=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=400&h=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=400&h=700&auto=format&fit=crop",
];

const Apps = () => {
    return (
        <>
            {/* Injecting CSS Animations directly into the document */}
            <style>
                {`
          @keyframes diagScrollUpLeft {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-15%, -50%); }
          }
          
          @keyframes scrollX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-diag-scroll {
            animation: diagScrollUpLeft 30s linear infinite;
          }

          .animate-marquee-x {
            animation: scrollX 15s linear infinite;
          }
        `}
            </style>

            <div className="mx-3 lg:mx-5 bg-black text-white p-6 md:p-16 font-sans min-h-screen overflow-x-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr,1.2fr] gap-12 lg:gap-8 items-start">

                    {/* --- LEFT SECTION --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 px-5">
                        {servicesData.slice(0, 6).map((service, index) => (
                            <div key={index} className="flex flex-col gap-3 group">
                                <div className="">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="relative group overflow-hidden rounded-[14px] border border-gray-800 bg-black h-[500px] shadow-2xl">
                        {/* 1. SCROLLING BACKGROUND (Now set to 100% opacity for clarity) */}
                        <div className="absolute inset-0 z-0 scale-125 opacity-60" style={{ perspective: '1200px' }}>
                            <div
                                className="grid grid-cols-3 gap-6 px-8 w-[100%] ml-[35%] opacity-100" // Set opacity to 100
                                style={{ transform: 'rotateX(15deg) rotateY(-15deg) rotateZ(-10deg)' }}
                            >
                                {[0, 1, 2].map((col) => (
                                    <div
                                        key={col}
                                        className="flex flex-col gap-6 animate-diag-scroll"
                                        style={{
                                            animationDuration: col === 1 ? '40s' : col === 0 ? '30s' : '35s',
                                            maxWidth: '120px',
                                            transform: col === 1 ? 'translateY(100px)' : 'none'
                                        }}
                                    >
                                        {[...mobileMocks, ...mobileMocks].map((src, i) => (
                                            <img
                                                key={i}
                                                src={src}
                                                className="rounded-[12px] w-full aspect-[9/16] object-cover border border-white/10 shadow-lg"
                                                alt="Mobile UI Preview"
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,1)]"></div>

                        {/* 3. FLOATING AWARDS: Top Right Horizontal Marquee */}
                        <div className="absolute top-0 right-0 z-20 w-[85%] max-w-[340px]">
                            <div className="bg-[#101010]/40 backdrop-blur-md p-6 rounded-bl-xl border border-white/10 shadow-2xl overflow-hidden">
                                <div className="flex flex-col gap-6">

                                    <div className="overflow-hidden flex">
                                        <div className="flex gap-12 animate-marquee-x">
                                            {[...awardLogos, ...awardLogos].map((src, i) => (
                                                <img
                                                    key={i}
                                                    src={src}
                                                    className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                                                    alt="Partner Logo"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. CTA BUTTON */}
                        <div className="relative z-30 flex h-full items-end justify-center p-6 sm:p-10 lg:p-12">
                            <button className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold bg-white text-black rounded-full shadow-xl hover:bg-gray-100 ">
                                <span className="whitespace-nowrap">Request App Quote</span>
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Apps;