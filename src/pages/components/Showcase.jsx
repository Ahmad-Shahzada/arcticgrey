import React from "react";

const phoneShots = [
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=500&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=500&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=500&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1556656793-062ff98782ee?q=80&w=500&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?q=80&w=500&auto=format&fit=crop"  
];

const clientLogos_1 = ["EVERLAST", "BARK BOX", "CASHMERE", "FORME", "HARVARD"];
const clientLogos_2 = ["PEANUTS", "hiya", "IPSY", "Lids", "OLAPLEX"];
const clientLogos_3 = ["SHARK TANK", "SMURFS", "SOFIA", "State Liberty", "SESAME"];

const ShowcaseSection = () => {
    return (
        <div className="bg-black p-4 md:p-10">
            <style>{`
                @keyframes marquee-x {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @keyframes marquee-y {
                    from { transform: translateY(0); }
                    to { transform: translateY(-50%); }
                }
                .animate-marquee-x { animation: marquee-x 30s linear infinite; }
                .animate-marquee-y { animation: marquee-y 40s linear infinite; }
                .animate-marquee-y-slow { animation: marquee-y 60s linear infinite; }
            `}</style>

            <section className="relative overflow-hidden rounded-[24px] bg-[#0a0a0a] md:h-[250px] border border-white/10 flex items-center shadow-2xl">
                
                {/* 1. Background Layer: Tilted Scrolling Columns */}
                <div className="absolute inset-0 opacity-40 z-0 flex justify-center items-center pointer-events-none">
                    <div className="flex gap-4 md:gap-6 rotate-[-15deg] scale-150">
                        <VerticalScroll images={phoneShots} slow />
                        <div className="mt-20"><VerticalScroll images={phoneShots} /></div>
                        <VerticalScroll images={phoneShots} slow />
                        <div className="-mt-20"><VerticalScroll images={phoneShots} /></div>
                        <VerticalScroll images={phoneShots} slow />
                        <VerticalScroll images={phoneShots} />
                    </div>
                </div>

                {/* 2. Glass Container for Logos (Left Side) */}
                <div className="relative z-20 w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    
                    <div className="relative w-full md:w-[60%] lg:w-[750px] rounded-[20px] bg-white/5 backdrop-blur-md border border-white/20 p-6 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        {/* Edge Fading for Logos */}
                        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-zinc-900/80 to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-zinc-900/80 to-transparent z-10" />

                        <div className="space-y-4">
                            <LogoRow textLogos={clientLogos_1} />
                            <LogoRow textLogos={clientLogos_2} reverse />
                            <LogoRow textLogos={clientLogos_3} />
                        </div>
                    </div>

                    {/* 3. Floating CTA Button (Right Side) */}
                    <div className="shrink-0">
                        <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-md shadow-2xl">
                            Book a POS Call Today
                            <div className="bg-black text-white rounded-full p-2 group-hover:translate-x-1 transition-transform">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Background Column Component
const VerticalScroll = ({ images, slow }) => (
    /* Removed large width and gap to keep columns tight */
    <div className="flex flex-col gap-2 md:w-[140px]"> 
        <div className={slow ? "animate-marquee-y-slow" : "animate-marquee-y"}>
            {[...images, ...images].map((img, i) => (
                <div 
                    key={i} 
                    /* Removed mb-4 and aspect-[9/16]. Added h-auto and smaller gap */
                    className="mb-2 w-full rounded-lg overflow-hidden border border-white/5 bg-zinc-900"
                >
                    <img 
                        src={img} 
                        /* Ensures the image takes its natural height without extra space */
                        className="w-full h-auto object-cover opacity-50" 
                        alt="" 
                    />
                </div>
            ))}
        </div>
    </div>
);

// Logo Row Component
const LogoRow = ({ textLogos, reverse }) => (
    <div className="flex overflow-hidden group">
        <div className={`flex gap-4 ${reverse ? 'animate-marquee-x [animation-direction:reverse]' : 'animate-marquee-x'}`}>
            {[...textLogos, ...textLogos].map((text, i) => (
                <div key={i} className="bg-white min-w-[100px] h-10 flex items-center justify-center rounded-lg px-4 text-black font-black text-xs tracking-tighter shadow-sm">
                    {text}
                </div>
            ))}
        </div>
    </div>
);

export default ShowcaseSection;