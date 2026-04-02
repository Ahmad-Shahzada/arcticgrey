import React from 'react';

export default function Ai_apps() {
  const cards = [
    {
      image: '/images/ai-powered-1.webp',
      title: "Powerful AI Product Recommendations",
      description: "Our AI algorithm delivers dynamic product feeds, boosting conversions and average order value, giving your store a competitive edge in personalization."
    },
    {
      image: '/images/ai-powered-2.webp',
      title: "AI Speed Optimization",
      description: "AI Speed enhances Core Web Vitals, potentially increasing conversions by 7% per second saved, ensuring your store outperforms competitors in user experience."
    }
  ];

  const partners = [
    { name: 'Route', logoSrc: '/images/slider-1.avif' },
    { name: 'Matrixify', logoSrc: '/images/slider-2.png' },
    { name: 'Nosto', logoSrc: '/images/slider-3.avif' },
    { name: 'Ordergroove', logoSrc: '/images/slider-4.avif' },
    { name: 'Siena', logoSrc: '/images/slider-6.avif' },
    { name: 'TripleWhale', logoSrc: '/images/slider-7.png' },
  ];

  const logosToScroll = [...partners, ...partners];

  return (
    <div className='bg-[#fbf7ed] pt-6 md:pt-10 px-4 md:px-5'>
      <section className="min-h-screen w-full bg-black rounded-[14px] flex items-center justify-center p-6 md:p-12 lg:p-16 text-white antialiased overflow-hidden">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-[45px] tracking-tight my-5 md:my-20 text-center font-bold">
            <span className="text-[#BF905E]">AI-Powered</span> Shopify Apps
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 w-full mb-16 md:mb-20">
            {cards.map((card, index) => (
              <div key={index} className="flex flex-col items-start bg-[#0D0D0D] md:p-10 rounded-[20px] md:rounded-[30px] border border-gray-900/50">
                <div className="w-full mb-8 md:mb-12 flex ">
                  <img src={card.image} alt={card.title} className="w-full h-auto max-w-[500px] object-contain" />
                </div>

                <div className="w-full lg:max-w-[500px] mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-[32px] lg:max-w-[300px] mb-4 md:mb-6 font-semibold leading-tight">
                    {card.title}
                  </h2>
                  <p className="text-gray-300 md:text-white text-base md:text-[18px] leading-[1.6] font-normal">
                    {card.description}
                  </p>
                </div>
                <div className="w-full flex flex-wrap items-center justify-start gap-4 md:gap-5 mt-auto">
                  <a href="#" className="border-2 border-yellow-600 hover:border-white py-2 md:py-3 px-4 md:px-5 rounded-full transition-all shrink-0">
                    <img 
                      src='/images/shopify-app-store.webp' 
                      alt="Available on Shopify App Store" 
                      className="h-[20px] md:h-[25px] w-auto"
                    />
                  </a>

                  <a href="#" className="flex items-center gap-1.5 text-base md:text-[18px] font-medium text-white transition-colors">
                    Get Started for
                    <span className="text-yellow-600 font-semibold underline">Free!</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* PARTNER LOGO SECTION */}
          <div className="w-full flex flex-col items-center">
            <h2 className="text-[#e2e2e2] text-lg md:text-[20px] font-normal tracking-wide mb-8 md:mb-14 text-center px-4">
              We have partnered with top AI powered Shopify apps
            </h2>

            <div className="w-full max-w-[1200px] overflow-hidden relative">
              {/* Fade Edges */}
              <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
              
              {/* Animation Speed remains same, but spacing (gap) is responsive */}
              <div className="flex items-center gap-12 md:gap-20 w-max animate-scroll-left">
                {logosToScroll.map((partner, idx) => (
                  <div key={idx} className="flex-shrink-0 grayscale opacity-80 hover:opacity-100 transition-opacity">
                    <img 
                      src={partner.logoSrc} 
                      alt={partner.name} 
                      className="h-8 md:h-10 lg:h-12 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
      
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </div>
  );
}