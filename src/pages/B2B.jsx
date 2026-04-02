import React from 'react';
import {
    ArrowLeftRight,
    Shapes,
    Settings,
    Layers3,
    Database,
    MoveRight
} from 'lucide-react';

const B2B = () => {
    return (
        /*
          * UPDATED:
          * 1. bg-black -> bg-gradient-to-br from-[#004d40] via-[#00c853] to-[#b2ff59]
          * (Shopify-like green gradient: deep teal -> vibrant green -> lime accent)
          * 2. text-white -> text-[#e0f2f1] (very pale teal, better contrast on green)
          */
        <div className="mx-3 lg:mx-5 bg-gradient-to-br from-[#004d40] via-[#00c853] to-[#b2ff59] text-[#e0f2f1] p-4 md:p-8 lg:p-12 min-h-screen font-sans overflow-x-hidden">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">

                {/* --- COLUMN 1: LEFT SIDE LIST (Stacks first on mobile) --- */}
                <div className="md:col-span-4 lg:col-span-4 pl-7 lg:pl-10 flex flex-col gap-10 md:gap-16 py-4 md:py-8">
                    {/*
                      * UPDATED: icon text-yellow-500 -> text-[#b2ff59] (lime accent from gradient)
                      */}
                    <ServiceItem
                        icon={<ArrowLeftRight className="text-[#b2ff59]" size={24} />}
                        title="B2B Migrations"
                        desc="Migrating B2B businesses to Shopify, ensuring a smooth transition of product catalogs, customer data, an..."
                    />
                    <ServiceItem
                        icon={<Shapes className="text-[#b2ff59]" size={24} />}
                        title="Custom B2B Apps & Features"
                        desc="Developing strategic plans tailored to B2B e-commerce, focusing on digital transformation, customer expe..."
                    />
                    <ServiceItem
                        icon={<Settings className="text-[#b2ff59]" size={24} />}
                        title="ERP Sync for B2B Operations"
                        desc="Integrating Shopify with ERP, CRM, and other enterprise systems to automate business processes, improve..."
                    />
                </div>

                {/* --- RIGHT SIDE CONTAINER (Spans more columns on desktop) --- */}
                <div className="md:col-span-8 lg:col-span-8 flex flex-col gap-6">

                    {/* TOP ROW: Two Small Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/*
                          * UPDATED:
                          * bg-[#0f0f0f] -> bg-[#004d40]/80 (semi-transparent deep teal)
                          * border-white/10 -> border-[#e0f2f1]/20 (pale teal border)
                          * Layers3 text-yellow-500 -> text-[#b2ff59] (lime accent)
                          * h3 text-white -> text-white (already white, fine on deep teal)
                          * p text-gray-400 -> text-[#b2dfdb] (pale teal, readable)
                          */}
                        <div className="bg-[#004d40]/80 border border-[#e0f2f1]/20 rounded-[14px] p-6 lg:p-8 h-auto sm:h-48 backdrop-blur-sm">
                            <Layers3 className="text-[#b2ff59] mb-4" size={24} />
                            <h3 className="text-lg font-semibold mb-2 text-white">B2B Store Setup & Customization</h3>
                            <p className="text-[#b2dfdb] text-sm leading-snug">
                                Crafting custom Shopify themes that cater specifically to B2B requirements, such as quick-order forms, c...
                            </p>
                        </div>

                        {/* UPDATED: Same styling as above */}
                        <div className="bg-[#004d40]/80 border border-[#e0f2f1]/20 rounded-[14px] p-6 lg:p-8 h-auto sm:h-48 backdrop-blur-sm">
                            <Database className="text-[#b2ff59] mb-4" size={24} />
                            <h3 className="text-lg font-semibold mb-2 text-white">Wholesale Integrations</h3>
                            <p className="text-[#b2dfdb] text-sm leading-snug">
                                Setup a dynamic B2B storefront, apply discounts, manage wholesale orders and customer's in one place.
                            </p>
                        </div>
                    </div>

                    {/* BOTTOM ROW: Team & Case Study Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        
                        {/* Team Card */}
                        {/*
                          * UPDATED:
                          * border-white/10 -> border-[#e0f2f1]/20
                          * from-black via-black/60 -> from-[#004d40] via-[#004d40]/60 (fade to teal)
                          * img border-[#0f0f0f] -> border-[#004d40] (teal border around avatars)
                          */}
                        <div className="relative border border-[#e0f2f1]/20 rounded-[14px] overflow-hidden flex flex-col h-[350px] md:h-[400px] group">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop"
                                alt="Office Background"
                                className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#004d40] via-[#004d40]/60 to-transparent z-10" />
                            
                            <div className="flex-1 flex items-center justify-center relative z-20 px-4">
                                <div className="flex -space-x-3 md:-space-x-4"> 
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <img
                                            key={i}
                                            src={`https://i.pravatar.cc/150?u=team${i}`}
                                            className="w-12 h-12 md:w-16 md:h-16 rounded-[14px] border-4 border-[#004d40] object-cover shadow-2xl"
                                            alt="team member"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-30 p-6 md:p-8 pt-0 flex justify-center">
                                {/*
                                  * UPDATED:
                                  * bg-white text-black -> bg-[#e0f2f1] text-[#004d40] (pale teal bg, teal text)
                                  * hover:bg-gray-200 -> hover:bg-white
                                  */}
                                <button className="w-full bg-[#e0f2f1] text-[#004d40] py-3 md:py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white transition-all">
                                    Schedule B2B Consultation <MoveRight size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Case Study Card */}
                        {/*
                          * UPDATED:
                          * bg-[#0f0f0f] -> bg-[#004d40]/80
                          * border-white/10 -> border-[#e0f2f1]/20
                          * inner images border-white/10 -> border-[#e0f2f1]/20
                          * h4 text-white -> text-white
                          * p text-gray-400 -> text-[#b2dfdb]
                          * button bg/text same as Team Card
                          */}
                        <div className="relative bg-[#004d40]/80 border border-[#e0f2f1]/20 rounded-[14px] overflow-hidden h-[350px] md:h-[400px] flex flex-col group backdrop-blur-sm">
                            {/* Visual Overlap (Hidden on very small screens to save space, or scaled down) */}
                            <div className="absolute inset-x-0 top-6 md:top-10 flex justify-center items-start gap-2 md:gap-4 px-6 md:px-10 opacity-60">
                                <div className="w-1/3 aspect-[3/4] bg-zinc-800 rounded-[10px] md:rounded-[14px] rotate-[-8deg] translate-y-4 overflow-hidden border border-[#e0f2f1]/20">
                                    <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=200" className="object-cover h-full" alt="" />
                                </div>
                                <div className="w-1/3 aspect-[3/4] bg-zinc-700 rounded-[10px] md:rounded-[14px] z-10 scale-110 overflow-hidden border border-[#e0f2f1]/30 shadow-2xl">
                                    <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=200" className="object-cover h-full" alt="" />
                                </div>
                                <div className="w-1/3 aspect-[3/4] bg-zinc-800 rounded-[10px] md:rounded-[14px] rotate-[8deg] translate-y-4 overflow-hidden border border-[#e0f2f1]/20">
                                    <img src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=200" className="object-cover h-full" alt="" />
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-[#004d40] via-[#004d40]/90 to-transparent flex flex-col justify-end p-6 md:p-8 text-center">
                                <h4 className="text-lg font-bold mb-1 text-white">The Challenge</h4>
                                <p className="text-xs text-[#b2dfdb] mb-4 md:mb-6 px-2 md:px-4 line-clamp-2">
                                    In redesigning Shopify stores, our focus was on creating immersive, educational product pages that highlight the science behind the product.
                                </p>
                                <button className="w-full bg-[#e0f2f1] text-[#004d40] py-3 md:py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white transition-all">
                                    View Case Studies <MoveRight size={20} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

/*
  * UPDATED ServiceItem colors:
  * text-white -> text-white (good on gradient)
  * text-gray-400 -> text-[#e0f2f1] (pale teal for better contrast)
  */
const ServiceItem = ({ icon, title, desc }) => (
    <div className="group cursor-default">
        <div className="mb-3 md:mb-4 transform transition-transform group-hover:scale-110 duration-300">
            {icon}
        </div>
        <h3 className="text-base md:text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-[#e0f2f1] text-xs md:text-sm leading-relaxed">{desc}</p>
    </div>
);

export default B2B;