import { MagnifyingGlassIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { ArrowRightIcon, ChartBarIcon } from 'lucide-react';
import React from 'react'

const Migrate_build = () => {
    const features = [
        { name: 'Shopify Theme Design', icon: Squares2X2Icon },
        { name: 'Conversion Rate Optimization', icon: ChartBarIcon },
        { name: 'Shopify UX & UI Audit', icon: MagnifyingGlassIcon },
    ];
    return (
        <div>
            <div className="bg-light-bg rounded-2xl p-8 md:pb-20 md:px-16 shadow-sm mb-10 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10 rounded-2xl items-center border-2 border-primary-soft">
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
        </div>
    )
}

export default Migrate_build
