import React from 'react';
import { Link } from 'react-router-dom';
import URLS from '../config/urls.config';

// Sample data for the services grid
const services = [
  {
    title: "Seamless Migration to Shopify",
    desc: "Comprehensive setup and customization services for new or existing Shopify stores, including theme devel...",
    icon: (
      <img src="/public/images/migrate_1.svg" alt="" />
    ),
    highlighted: false,
  },
  {
    title: "Migrate from BigCommerce to Shopify",
    desc: "Complete your Shopify design & development tasks quickly with Bulk Hours.",
    icon: (
      <img src="/public/images/migrate_2.svg" alt="" />
    ),
    highlighted: false,
  },
  {
    title: "Convert any Figma to Shopify",
    desc: "No design is too complex. Submit your Figma files, get a free quote and timeframe, and watch us build yo...",
    icon: (
      <img src="/public/images/migrate_3.svg" alt="" />
    ),
    highlighted: false,
  },
  {
    title: "Free Shopify Concept Design",
    desc: "Designing user interfaces and experiences specifically for Shopify apps, ensuring they are intuitive and...",
    icon: (
      <img src="/public/images/migrate_4.svg" alt="" />
    ),
    highlighted: false,
  },
  {
    title: "Bulk Hours for Shopify Tasks",
    desc: "Complete your Shopify design & development tasks quickly and on-demand with Bulk Hours.",
    icon: (
      <img src="/public/images/migrate_5.svg" alt="" />
    ),
    highlighted: false,
  },
  {
    title: "ERP Integrations",
    desc: "Specializing in the integration of leading ERP systems, such as NetSuite, Microsoft Dynamics, SAP, and o...",
    icon: (
      <img src="/public/images/migrate_6.svg" alt="" />
    ),
    highlighted: false,
  },
  {
    title: "Custom Shopify Theme Design",
    desc: "Comprehensive setup and customization services for new or existing Shopify stores, including theme devel...",
    icon: (
      <img src="/public/images/migrate_7.svg" alt="" />
    ),
    highlighted: false,
  },
  {
    title: "New Store Development",
    desc: "Complete your Shopify design & development tasks quickly with Bulk Hours.",
    icon: (
      <img src="/public/images/migrate_8.svg" className="text-primary-accent" alt="" />
    ),
    highlighted: false,
  },
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

export default function Migrate() {
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
                <Link to={URLS.SERVICE_PAGES.MIGRATE_1}
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
                </Link>
              ))}
            </div>
          </div>



          {/* RIGHT COLUMN: Boxes on Top, Images Below */}
          <div className="w-full xl:w-[500px] order-1 xl:order-2 relative h-[650px] md:h-[700px] rounded-xl overflow-hidden flex-shrink-0 flex flex-col pause-on-hover shadow-2xl">

            {/* 1. TOP SECTION: Static Content (The two black boxes) */}
            <div className="relative z-30 flex flex-col border border-white/20 py-5 rounded-xl items-center pt-8 px-6 gap-4 bg-[#050505]">
              {/* Box 1: Shopify Test Drive */}
              <div className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 shadow-xl">
                <div className="text-primary-accent mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Shopify Test Drive</h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  Unsure where to start? Get a risk free shopify test drive, where we start to migrate your business to Sh...
                </p>
              </div>

              {/* Box 2: 8-Phase Migration Protocol */}
              <div className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 shadow-xl">
                <div className="text-primary-accent mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 16l-4-4 4-4M17 8l4 4-4 4M3 12h18" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">8-Phase Migration Protocol</h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  After 1,000+ builds, we've created the ultimate business migration protocol to move your operations over ...
                </p>
              </div>
            </div>

            {/* 2. BOTTOM SECTION: Scrolling Images Area */}
            <div className="relative flex-1 mt-4 overflow-hidden">
              {/* The Scrolling Grid */}
              <div className="absolute inset-0 w-full h-full flex justify-center items-start opacity-30 grayscale blur-[1px]">
                {/* Left Column */}
                <div className="w-1/3 flex flex-col gap-3 animate-scroll-medium">
                  {[...leftImages, ...leftImages].map((imgUrl, index) => (
                    <div key={`l-${index}`} className="w-full aspect-video rounded-lg overflow-hidden border border-white/5">
                      <img src={imgUrl} className="w-full h-full object-cover" alt="" />
                    </div>
                  ))}
                </div>
                {/* Center Column */}
                <div className="w-1/3 flex flex-col gap-3 animate-scroll-fast z-10 scale-105">
                  {[...centerImages, ...centerImages].map((imgUrl, index) => (
                    <div key={`c-${index}`} className="w-full aspect-video rounded-lg overflow-hidden border border-white/10">
                      <img src={imgUrl} className="w-full h-full object-cover" alt="" />
                    </div>
                  ))}
                </div>
                {/* Right Column */}
                <div className="w-1/3 flex flex-col gap-3 animate-scroll-slow mt-10">
                  {[...rightImages, ...rightImages].map((imgUrl, index) => (
                    <div key={`r-${index}`} className="w-full aspect-video rounded-lg overflow-hidden border border-white/5">
                      <img src={imgUrl} className="w-full h-full object-cover" alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. FLOATING BUTTON: Bottom Fixed */}
            <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-40 w-[55%]">
              <button className="w-full bg-white text-black font-bold py-4 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-105">
                Get a Free Test Drive
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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