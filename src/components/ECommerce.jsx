import React, { useState } from 'react';
import { RefreshCw, Scan, Maximize2 } from 'lucide-react';

const Ecommerece = () => {
    const goldGradient = "linear-gradient(90deg, #f7d379, #e9be65, #f5e583, #c89447, #dcab57, #d6a453, #f7d87b, #a57331, #c18d42)";

    const [activeTab, setActiveTab] = useState(null);
    const [hoveredTab, setHoveredTab] = useState(null);

    const features = [
        { title: "Seamless Inventory Sync", icon: <RefreshCw size={20} /> },
        { title: "Scalable Pilots", icon: <Scan size={20} /> },
        { title: "Extend Capabilities as You Grow", icon: <Maximize2 size={20} /> },
    ];

    return (
        /* Outer Section: Mobile pe margins remove kiye hain taake container width mile */
        <section className="mx-0 md:mx-5 bg-white px-4 md:px-10 lg:px-14 pt-10 pb-10">

            {/* Main Black Container */}
            <div className="bg-black rounded-[24px] lg:rounded-[14px] text-white overflow-hidden relative min-h-fit lg:min-h-[700px] flex items-center shadow-2xl">

                {/* Grid: order-2 on mobile for text ensures image comes first */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full px-6 py-12 md:px-16 md:py-20 items-center">

                    {/* --- IMAGE SIDE (Mobile: Top, Desktop: Left) --- */}
                    <div className="relative flex justify-center items-center order-1 lg:order-1">
                        {/* Glow Effect */}
                        <div
                            className="absolute w-[80%] h-[80%] blur-[80px] md:blur-[120px] opacity-20 rounded-full pointer-events-none"
                            style={{ background: goldGradient }}
                        ></div>

                        <img
                            src="/public/images/ai-personalised.webp"
                            alt="eCommerce Service Mockup"
                            className="relative z-10 w-full max-w-[320px] md:max-w-[500px] lg:max-w-[700px] h-auto object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* --- CONTENT SIDE (Mobile: Bottom, Desktop: Right) --- */}
                    <div className="flex flex-col space-y-8 md:space-y-10 z-10 order-2 lg:order-2 items-center lg:items-start text-left lg:ml-10">
                        <div className="space-y-4 md:space-y-6">
                            <h1 className="text-2xl md:text-4xl lg:text-4xl max-w-xl leading-[1.15] tracking-tight sm:whitespace-normal">
                                <span
                                    className='inline lg:pr-3'
                                    style={{ backgroundImage: goldGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                                >
                                    Personalized
                                </span>
                                {" "}eCommerce Development Service
                            </h1>
                            <p className="text-zinc-400 text-sm md:text-base lg:text-md max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
                                Create seamless, personalized shopping experiences with Arctic Grey’s end-to-end Shopify Product Customizers that drive engagement, sales, and operational efficiency.
                            </p>
                        </div>

                        {/* Interactive Feature Tabs */}
                        <div className="w-full max-w-lg text-left">
                            {features.map((feature, index) => {
                                const isHighlighted = activeTab === index || hoveredTab === index;

                                return (
                                    <div
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        onMouseEnter={() => setHoveredTab(index)}
                                        onMouseLeave={() => setHoveredTab(null)}
                                        className={`group cursor-pointer flex items-center justify-between py-5 md:py-6 lg:px-4 border-b-2 transition-all duration-300 ease-in-out
                                            ${isHighlighted ? 'bg-white/5' : 'bg-transparent border-zinc-900'}`}
                                        style={isHighlighted ? { borderImageSource: goldGradient, borderImageSlice: 1 } : {}}
                                    >
                                        <span className="text-base md:text-lg font-medium text-white">
                                            {feature.title}
                                        </span>
                                        <div className="text-white shrink-0">
                                            {feature.icon}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4 md:pt-8 w-full sm:w-auto">
                            <div
                                style={{ backgroundImage: goldGradient }}
                                className="inline-block p-[2px] rounded-full group cursor-pointer w-full sm:w-auto"
                            >
                                <button className="flex items-center justify-center gap-2.5 hover:bg-white hover:text-black px-6 md:px-8 py-3.5 bg-black text-white text-base md:text-lg font-medium rounded-full w-full transition-all duration-300">
                                    <span>
                                        Book a free consultation
                                        <span className="inline-block group-hover:translate-x-2 transition-transform duration-300 text-xl md:text-2xl italic pl-3">→</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecommerece;