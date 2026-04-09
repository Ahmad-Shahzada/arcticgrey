import React from 'react';
import { ArrowRight } from 'lucide-react';

const ShopifyHeroSection = () => {
    return (
        <section className="mx-5 relative overflow-hidden bg-black px-10 text-white  lg:py-16">
            <div className="absolute inset-x-0 bg-[radial-gradient(circle_at_center,rgba(140,102,55,0.18),transparent_65%)]" />

            <div className="relative mx-auto grid gap-12 lg:grid-cols-[1.02fr_0.98fr]">
                <div className="pl-5">
                    <h1 className="leading-[1.08] tracking-[-0.03em] text-white text-[55px] font-normal">
                        Start Your Free, Try Before You Buy,{' '}
                        <span className="text-primary-accent">Shopify</span> Test Drive<br /> Today
                    </h1>

                    <p className="mt-8 max-w-[710px] text-lg leading-[1.55] text-white/88 md:text-[1.04rem] lg:text-[1.18rem]">
                        Not sure if Shopify is right for your brand? We&apos;ll build you a
                        fully functional, custom-branded store within 5 business days. 100%
                        free, so you can test everything before committing.
                    </p>

                    <p className="mt-6 text-base text-primary-accent md:text-[1.05rem]">
                        Brands saw an average 28% higher conversion rate with Arctic Grey.
                    </p>

                    <div className="mt-10 flex flex-col items-start gap-5 lg:flex-row lg:items-center">
                        <button className="inline-flex shrink-0 items-center gap-3 rounded-full border-2 border-primary-soft px-6 py-4 text-md font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black">
                            <span>Start Your Free Concept Design</span>
                            <ArrowRight className="h-5 w-5" />
                        </button>

                        <p className="text-base italic leading-relaxed text-white/80 md:text-[1.02rem]">
                            Limited to 20 brands per week — claim your spot.
                        </p>
                    </div>

                </div>

                <div className="flex justify-end">
                    <img
                        src="/images/service_migrate.webp"
                        alt="Shopify store preview"
                        className="h-auto w-[80%] object-contain"
                    />
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 md:mx-3">
                {[
                    { label: 'Conversion Rate', up: '28%' },
                    { label: 'Order Value', up: '17%' },
                    { label: 'Total Revenue', up: '22.6%' },
                ].map((stat, i) => (
                    <div
                        key={i}
                        className="bg-white/5 backdrop-blur-md p-5 sm:p-6 rounded-[14px] border border-white/10 flex justify-between items-center group hover:border-primary-soft transition-all"
                    >
                        <div className="flex-1">
                            <p className="text-[10px] sm:text-[11px] text-gray-400 font-bold uppercase tracking-tighter mb-2">
                                {stat.label}
                            </p>
                            <div className="text-sm sm:text-base font-black flex items-center bg-primary-gradient bg-clip-text text-transparent">
                                {stat.up} improvement
                            </div>
                        </div>
                        <img
                            src="/images/herowave.avif"
                            className="w-24 sm:w-32 lg:w-40  hue-rotate-[100deg]"
                            alt="wave"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShopifyHeroSection;
