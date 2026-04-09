// src/components/PlatinumPartnerSection.jsx
import React from 'react';

// Use this to import assets from your assets folder
import award1 from '../../../public/images/portfolio-1.webp';
import award2 from '../../../public/images/portfolio-2.webp';
import award3 from '../../../public/images/portfolio-3.webp';

export default function PlatinumPartnerSection() {
    const awards = [
        { image: award1, title: 'Best Support', year: '2021' },
        { image: award2, title: 'Best Website Design', year: '2022' },
        { image: award3, title: 'Best Web Developers in New York', year: '2022' },
        // Replicate awards for seamless scrolling
        { image: award1, title: 'Best Support', year: '2021' },
        { image: award2, title: 'Best Website Design', year: '2022' },
        { image: award3, title: 'Best Web Developers in New York', year: '2022' },
        { image: award1, title: 'Best Support', year: '2021' },
        { image: award2, title: 'Best Website Design', year: '2022' },
        { image: award3, title: 'Best Web Developers in New York', year: '2022' },
        { image: award1, title: 'Best Support', year: '2021' },
        { image: award2, title: 'Best Website Design', year: '2022' },
        { image: award3, title: 'Best Web Developers in New York', year: '2022' },
    ];

    const team = [
        {
            name: 'Brooke Sanderson',
            role: 'Merchant Success Director',
            image: '/images/human-1.webp',
            bg: 'bg-[#FAF8F5]', // Faded beige BG for Brooke
        },
        {
            name: 'Jake Amos',
            role: 'Co-Founder',
            image: '/images/human-2.webp',
            bg: 'bg-white', // Pure white BG for others
        },
        {
            name: 'Truc Peter',
            role: 'Senior Account Executive',
            image: '/images/human-3.webp',
            bg: 'bg-white',
        },
        {
            name: 'Brooke Sanderson',
            role: 'Merchant Success Director',
            image: '/images/human-1.webp',
            bg: 'bg-[#FAF8F5]', // Faded beige BG for Brooke
        },
        {
            name: 'Jake Amos',
            role: 'Co-Founder',
            image: '/images/human-2.webp',
            bg: 'bg-white', // Pure white BG for others
        },
        {
            name: 'Truc Peter',
            role: 'Senior Account Executive',
            image: '/images/human-3.webp',
            bg: 'bg-white',
        },
        {
            name: 'Brooke Sanderson',
            role: 'Merchant Success Director',
            image: '/images/human-1.webp',
            bg: 'bg-[#FAF8F5]', // Faded beige BG for Brooke
        },
        {
            name: 'Jake Amos',
            role: 'Co-Founder',
            image: '/images/human-2.webp',
            bg: 'bg-white', // Pure white BG for others
        },
        {
            name: 'Truc Peter',
            role: 'Senior Account Executive',
            image: '/images/human-3.webp',
            bg: 'bg-white',
        },
    ];

    return (
        <div className='mx-5 pt-10'>
            <section className="w-full bg-black flex items-center justify-center rounded-xl font-sans antialiased text-white">
                <div className="w-full relative">

                    <div className="flex flex-col gap-16">

                        <div className="grid grid-cols-1 md:grid-cols-[1fr,1.3fr] gap-x-12 xl:gap-x-16 gap-y-10 pt-5 lg:pt-0 items-start relative">

                            <div className="lg:w-[700px] flex flex-col gap-6 p-5 lg:p-20 relative z-20">
                                <h1 className="text-2xl lg:text-4xl leading-[1.15] tracking-tight">
                                    Arctic Grey is the #1 Highest Ranked <span className="text-primary-accent">Platinum</span> Partner on Shopify Worldwide
                                </h1>
                            </div>

                            <div className="w-full md:h-[220px] bg-white md:rounded-[12px] md:rounded-tl p-6 md:pt-10 overflow-hidden relative z-0">

                                <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

                                <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                                {/* Scrolling Content */}
                                <div className="flex items-center gap-10 animate-scroll-left">
                                    {awards.map((award, index) => (
                                        <div key={index} className="flex flex-col items-center justify-center text-center gap-3 w-[150px] flex-shrink-0 ">
                                            <img
                                                src={award.image}
                                                alt={award.title}
                                                className="h-[70px] w-auto object-contain"
                                            />
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-[12px] font-normal text-black">{award.title}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row: Team Cards */}
                        <div className="cursor-pointer grid grid-cols-1 md:grid-cols-3 px-5 lg:px-10 pb-20 gap-10 lg:gap-14 w-full">
                            {team.map((member, index) => (

                                <div
                                    key={index}
                                    className={`relative group flex flex-col items-center ${member.bg
                                        } px-10 rounded-[24px] shadow-2xl transition-all duration-300 ease-in-out overflow-hidden z-10`}
                                >
                                    <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

                                    <div className="w-full text-center flex flex-col items-center gap-2 my-10 relative z-10">
                                        <h3 className="text-[20px] md:text-[22px] font-bold text-black tracking-tight transition-all duration-300 group-hover:text-white">
                                            {member.name}
                                        </h3>
                                        <p className="text-[16px] font-normal text-gray-700 transition-all duration-300 group-hover:text-white/90">
                                            {member.role}
                                        </p>
                                    </div>

                                    <div className="w-full flex justify-center relative z-10">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
            </section>

            <section className="relative w-full min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center bg-light-bg overflow-hidden py-16 md:py-24 px-5 md:px-12">

                <div
                    className="absolute bottom-0 left-0 w-full h-[120px] sm:h-[160px] md:h-[200px] bg-no-repeat bg-bottom bg-contain md:bg-cover pointer-events-none opacity-60 md:opacity-100"
                    style={{ backgroundImage: "url('/images/text-bg.webp')" }}
                    aria-hidden="true"
                />


                <div className="relative z-10 max-w-4xl mx-auto text-left lg:text-center">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-2 md:mb-6 tracking-tight leading-tight">
                        The Future of eCommerce with AI
                    </h2>

                    <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        As AI reshapes eCommerce with advancements in personalization, automation, and analytics,
                        Arctic Grey leads the charge. Our proactive adoption of AI ensures your store remains competitive,
                        leveraging trends like hyper-personalization and predictive analytics to drive growth.
                    </p>
                </div>

            </section>
        </div>
    );
}