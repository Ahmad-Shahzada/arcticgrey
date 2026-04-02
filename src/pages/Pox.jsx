import React from 'react';
import {
    ArrowLeftRight,
    Shapes,
    Box,
    Tablet,
    Users,
    MoveRight
} from 'lucide-react';
import ShowcaseSection from '../components/Showcase';

const POS = () => {
    return (
        <div className="mx-3 lg:mx-5 bg-black text-white p-4 md:p-12 min-h-screen font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* --- COLUMN 1: LEFT SIDE LIST --- */}
                <div className="lg:col-span-4 flex flex-col gap-12 py-8 pr-5 pl-8">
                    <ServiceItem
                        icon={<ArrowLeftRight className="text-yellow-600" size={24} />}
                        title="POS Migrations to Shopify"
                        desc="Specializes in seamless, virtual Shopify POS setups that integrate your brick-and-mortar with e-commerce..."
                    />
                    <ServiceItem
                        icon={<Shapes className="text-yellow-600" size={24} />}
                        title="Custom POS Apps & Optimizations"
                        desc="Build a custom Shopify POS app to optimize face-to-face transactions with your unique business processes..."
                    />
                    <ServiceItem
                        icon={<Box className="text-yellow-600" size={24} />}
                        title="Inventory/Order Sync Across Channels"
                        desc="Shopify offers nonstop innovation and unmatched interoperability for simple unified retail."
                    />
                </div>

                {/* --- COLUMN 2: MIDDLE STACKED CARDS --- */}
                <div className="lg:col-span-4 flex flex-col gap-6 border-2 border-white/10 rounded-[14px] p-4">
                    {/* Top Card */}
                    <div className="bg-[#232323] border border-white/5 rounded-[14px] p-5 flex-1">
                        <Tablet className="text-yellow-600 mb-6" size={28} />
                        <h3 className="text-lg font-bold mb-3">POS System Integration</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Our end-to-end service draws on Shopify's migration guides, positioning resources, and best practices.
                        </p>
                    </div>

                    {/* Bottom Card */}
                    <div className="bg-[#232323] border border-white/5 rounded-[14px] p-5 flex-1">
                        <Users className="text-yellow-600 mb-6" size={28} />
                        <h3 className="text-lg font-bold mb-3">Unified D2C/B2B/POS Experiences</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Shopify POS delivers 22% lower total cost of ownership vs. competitors, per independent research.
                        </p>
                    </div>
                </div>

                {/* --- COLUMN 3: LARGE RIGHT CARD (The Tablet Showcase) --- */}
                <div className="lg:col-span-4 bg-[#111111] border border-white/5 rounded-[24px] p-8 flex flex-col items-center justify-between text-center relative overflow-hidden group">

                    {/* Tablet/Screen Design */}
                    <div className="w-full relative pt-4">
                        <div className=" p-2 ">
                            {/* The Image inside the tablet */}
                            <div className="">
                                <img
                                    src="/public/images/pos-right-image.webp"
                                    alt="Restaurant Kitchen"
                                    className="w-full h-full object-cover"
                                />
                                {/* Ambient Light Effect on Tablet */}
                            </div>
                        </div>
                        {/* Glow effect behind tablet */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-yellow-600/10 blur-[80px] -z-10" />
                    </div>

                    {/* Content Section */}
                    <div className="mt-8 mb-4">
                        <h3 className="text-2xl font-bold mb-2">100% Satisfaction, Risk-free trial</h3>
                        <p className="text-zinc-400 text-sm">Are you looking to switch to a POS?</p>
                    </div>

                    {/* Request Demo Button with Gold Border */}
                    <button className="group/btn relative inline-flex items-center gap-3 px-10 py-4 bg-black rounded-full border-2 border-yellow-500 hover:border-yellow-500 transition-all duration-300">
                        <span className="text-white font-semibold">Request POS Demo</span>
                        <MoveRight className="w-5 h-5 text-white transition-transform group-hover/btn:translate-x-1" />

                        {/* Slight Outer Glow for Button */}
                        <div className="absolute inset-0 rounded-full bg-yellow-600/5 blur-md -z-10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </button>
                </div>

            </div>
            <ShowcaseSection/>
        </div>
    );
};

// Helper Component
const ServiceItem = ({ icon, title, desc }) => (
    <div className="flex flex-col gap-3 group">
        <div className="p-1">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-white/90">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
    </div>
);

export default POS;