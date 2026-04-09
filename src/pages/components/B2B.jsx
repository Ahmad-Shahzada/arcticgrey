import React, { useState } from 'react';
import { RefreshCw, Scan, Maximize2 } from 'lucide-react';

const B2b = () => {
    const goldGradient = "linear-gradient(90deg, #f7d379, #e9be65, #f5e583, #c89447, #dcab57, #d6a453, #f7d87b, #a57331, #c18d42)";

    const [activeTab, setActiveTab] = useState(null);
    const [hoveredTab, setHoveredTab] = useState(null);

    const features = [
        { title: "Seamless Inventory Sync", icon: <RefreshCw size={20} /> },
        { title: "Scalable Pilots", icon: <Scan size={20} /> },
        { title: "Extend Capabilities as You Grow", icon: <Maximize2 size={20} /> },
    ];

    return (
        <section className="bg-white lg:mx-5 px-4 py-10 md:px-10 lg:px-14">

            <div className="relative grid min-h-fit grid-cols-1 items-center overflow-hidden rounded-3xl bg-black text-white lg:min-h-[700px] lg:grid-cols-2 lg:rounded-xl">

                <div className="relative order-1 flex items-center justify-center p-8 md:p-12 lg:order-2 lg:justify-start ">
                    <div
                        className="absolute h-[60%] w-[60%] rounded-full opacity-20 blur-[80px] md:blur-[150px]"
                        style={{ background: goldGradient }}
                    ></div>

                    <img
                        src="/images/b2b.webp"
                        alt="Shopify POS Mockup"
                        className="relative z-10 w-full max-w-[350px] object-contain drop-shadow-2xl md:max-w-[500px] lg:max-w-[830px]"
                    />
                </div>

                <div className="z-10 order-2 flex flex-col items-center p-5 sm:p-12 lg:order-1 lg:items-start lg:p-24 lg:pl-20 text-left">

                    <div className="space-y-6 lg:pr-20">
                        <h1 className="text-[24px] sm:text-2xl md:text-4xl font-normal leading-[1.1]  sm:whitespace-normal">
                            <span
                                className='inline lg:pr-3 text-primary-accent'
                            >
                                B2B-D2C
                            </span>
                            {" "}Success with Shopify
                        </h1>
                        <p className="mx-auto max-w-md text-base leading-relaxed text-gray-300 md:text-lg lg:mx-0">
                            Arctic Grey delivers seamless Shopify POS setups that sync your stores,
                            streamline checkouts, and drive growth—remotely and efficiently.
                        </p>
                    </div>

                    <div className="mt-10 w-full max-w-md text-left">
                        {features.map((feature, index) => {
                            const isHighlighted = activeTab === index || hoveredTab === index;

                            return (
                                <div
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    onMouseEnter={() => setHoveredTab(index)}
                                    onMouseLeave={() => setHoveredTab(null)}
                                    className={`group flex cursor-pointer items-center justify-between border-b-2 border-primary-soft lg:px-4 py-5 transition-all duration-300 md:py-6
                                        ${isHighlighted ? 'bg-white/5' : 'bg-transparent border-zinc-800'}`}
                                    
                                >
                                    <span className="text-sm font-medium text-white md:text-lg">
                                        {feature.title}
                                    </span>
                                    <div className="shrink-0 text-white">
                                        {feature.icon}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-10 w-full sm:w-auto">
                        <div
                            className="border-2 border-primary-soft inline-block cursor-pointer rounded-full transition-transform active:scale-95 w-full sm:w-auto"
                        >
                            <button className="flex h-full w-full items-center justify-center gap-2.5 rounded-full bg-black px-8 py-4 text-base font-medium text-white transition-all hover:bg-white hover:text-black md:px-10 md:text-lg">
                                Start your Shopify Test Drive
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default B2b;