import React from 'react';
import {
  Squares2X2Icon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  ArrowRightIcon,
  Cog6ToothIcon,
  CpuChipIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline';

const ServicesSection = () => {
  const features = [
    { name: 'Shopify Theme Design', icon: Squares2X2Icon },
    { name: 'Conversion Rate Optimization', icon: ChartBarIcon },
    { name: 'Shopify UX & UI Audit', icon: MagnifyingGlassIcon },
  ];

  const taskFeatures = [
    { name: 'ERP Integration & Automation', icon: Cog6ToothIcon },
    { name: 'Gamify Your Cart Drawer', icon: CpuChipIcon },
    { name: 'If you can dream it, we can build it.', icon: Square3Stack3DIcon },
  ];

  return (
    <div className="px-2 sm:px-5">
      <section className="bg-white pb-10 pt-8 rounded-tr-xl rounded-tl-xl px-6 lg:px-16 font-sans">
        <div className="mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-10 md:mb-16 relative">
            <img
              src="/images/elm.webp"
              className="w-24 md:w-32 mb-10 absolute -top-12 md:-top-20"
              alt=""
            />

            <p className="text-sm font-medium text-zinc-700 mb-4 pt-24 md:pt-32 tracking-tight">
              Everything you need to sell, scale, and succeed
            </p>

            <h1 className="text-3xl md:text-5xl font-semibold text-zinc-900 leading-tight tracking-tight flex flex-wrap items-center justify-center gap-2">
              Our Suite of Services are Sweet{' '}
              <span className="text-3xl md:text-5xl ml-1">👨‍🍳</span>
            </h1>
          </div>

          {/* Card 1 */}
          <div className="bg-light-bg rounded-2xl p-8 md:p-20 shadow-sm mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col order-2 lg:order-1">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-accent mb-4">
                  Store Launch
                  <span className="inline-block w-8 h-[2px] bg-primary-accent" />
                </span>

                <h2 className="text-3xl md:text-[32px] text-zinc-900 leading-[1.1] mb-6">
                  Build a{' '}
                  <span className="bg-primary-gradient bg-clip-text text-transparent font-bold">
                    New
                  </span>{' '}
                  Shopify Store
                </h2>

                <p className="text-zinc-600 text-lg leading-relaxed mb-10 max-w-md">
                  Custom Shopify stores that are tailored for high performance,
                  seamlessly integrate AI for continuous evolution, and deliver a
                  lasting competitive advantage in eCommerce.
                </p>

                <div className="space-y-0 mb-10 lg:mr-20 border-t border-black/10">
                  {features.map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-center cursor-pointer justify-between py-6 border-b border-black/10 last:border-0"
                    >
                      <span className="text-lg md:text-xl text-zinc-900 pl-2 md:pl-4 group-hover:text-primary-accent transition-colors">
                        {item.name}
                      </span>
                      <item.icon className="w-6 h-6 text-zinc-900 group-hover:text-primary-accent transition-colors" />
                    </div>
                  ))}
                </div>

                <button className="flex items-center justify-center text-sm gap-2 sm:gap-3 bg-primary-accent text-black px-3 sm:px-8 py-5 rounded-full font-bold hover:bg-light-text transition-all w-full sm:w-fit group">
                  Start Your Shopify Test Drive
                  <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="relative flex justify-center items-center order-1 lg:order-2">
                <div className="w-full aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden">
                  <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src="/vidio/vidio-1.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-light-bg rounded-2xl p-8 md:p-16 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative group cursor-pointer order-1">
                <div className="w-full aspect-square rounded-2xl overflow-hidden relative">
                  <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src="/vidio/vidio-2.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="flex flex-col md:px-4 lg:mx-16 order-2">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-accent mb-4">
                  Shopify Support
                  <span className="inline-block w-8 h-[2px] bg-primary-accent" />
                </span>

                <h2 className="text-3xl md:text-[34px] lg:mr-28 text-zinc-900 leading-[1.3] mb-6 font-semibold">
                  Complete Shopify Tasks Quickly
                </h2>

                <p className="text-zinc-600 text-lg leading-relaxed mb-10 max-w-md">
                  Get an award-winning Shopify design & development team to work
                  on your Shopify site, <span className="font-bold text-zinc-900">on-demand</span>{' '}
                  and at your fingertips, when you need them most.
                </p>

                <div className="space-y-0 mb-10 border-t border-black/10">
                  {taskFeatures.map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-center cursor-pointer justify-between py-6 border-b border-black/10 last:border-0"
                    >
                      <span className="text-lg text-zinc-900 group-hover:text-primary-accent transition-colors">
                        {item.name}
                      </span>
                      <item.icon className="w-6 h-6 md:w-8 md:h-8 font-bold text-zinc-800 group-hover:text-primary-accent transition-colors" />
                    </div>
                  ))}
                </div>

                <button className="flex items-center justify-center gap-3 bg-primary-accent text-black px-8 py-5 rounded-full font-bold hover:bg-light-text transition-all w-full sm:w-fit group">
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