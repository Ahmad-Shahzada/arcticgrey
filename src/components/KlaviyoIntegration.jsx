import React from 'react';
import { Database, BadgeCheck, TrendingUp, ArrowRight } from 'lucide-react';

const KlaviyoIntegration = () => {
  const scrollImages = [
    "/public/images/kalviyo-1.avif",
    "/public/images/kalviyo-2.avif",
    "/public/images/kalviyo-3.avif",
    "/public/images/kalviyo-4.avif",
    "/public/images/kalviyo-5.avif",
  ];

  const rightBgColor = "#F2EEE3"; 

  return (
    <section className="mx-0 md:mx-5 bg-white px-4 md:px-10 lg:px-14 pt-10 pb-10">
      <style>{`
        @keyframes diagonalScroll {
          from { transform: translate(0, 0); }
          to { transform: translate(15%, -40%); }
        }
        .animate-diagonal {
          animation: diagonalScroll 30s linear infinite;
        }
        @media (min-width: 1024px) {
          @keyframes diagonalScroll {
            from { transform: translate(0, 0); }
            to { transform: translate(20%, -50%); }
          }
          .animate-diagonal {
            animation: diagonalScroll 40s linear infinite;
          }
        }
        .animate-diagonal:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Main Container: Mobile pe stacking, Big screen pe 50/50 split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[24px] lg:rounded-[14px] overflow-hidden h-auto lg:h-[750px] bg-[#FAF7F0] border border-zinc-100 shadow-sm">
        
        {/* --- LEFT SIDE: CONTENT --- */}
        {/* Mobile: text-center, Big Screen: text-left & exact padding */}
        <div className="w-full p-5 md:p-12 lg:px-28 flex flex-col justify-center bg-[#FAF7F0] z-20 items-center lg:items-start text-left order-1 lg:order-1">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-[1.15] tracking-tight">
              Klaviyo Integration <span className="font-normal block sm:inline">for Shopify Service</span>
            </h2>
            <p className="text-zinc-800 text-base md:text-lg lg:text-xl max-w-lg leading-relaxed font-light mx-auto lg:mx-0">
              Empower your Shopify store with Klaviyo—unifying data, automation, 
              and customer engagement for smarter, scalable growth.
            </p>
          </div>

          {/* Feature List */}
          <div className="mt-8 md:mt-12 w-full max-w-md border-t border-zinc-200">
            {[
              { title: "Unify Customer Data", icon: <Database size={22} /> },
              { title: "Proven Expertise", icon: <BadgeCheck size={22} /> },
              { title: "Grow Efficiently", icon: <TrendingUp size={22} /> },
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center justify-between py-5 md:py-6 border-b hover:bg-white hover:border-yellow-500 border-zinc-200 group cursor-pointer px-1 lg:px-3 transition-all duration-300"
              >
                <span className="text-base md:text-xl font-medium text-black">
                  {feature.title}
                </span>
                <div className="text-black shrink-0">
                  {feature.icon}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button: Mobile pe full width button, Big screen pe auto width */}
          <div className="mt-10 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-black text-white px-6 md:px-8 py-5 md:py-6 rounded-full font-semibold flex items-center justify-center gap-4 hover:bg-zinc-800 transition-all active:scale-95 group text-sm md:text-base">
              Book a Migration Consultation
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: DIAGONAL SCROLLING --- */}
        {/* Mobile: Container height 400px, Big screen: h-full */}
        <div className="w-full relative overflow-hidden h-[400px] md:h-[500px] lg:h-full border-t lg:border-t-0 lg:border-l border-zinc-200 bg-[#e6e6e5] order-2 lg:order-2"> 
          
          {/* Fading Masks */}
          <div className="absolute top-0 left-0 w-full h-24 md:h-32 z-10 pointer-events-none"
               style={{ background: `linear-gradient(to bottom, ${rightBgColor} 0%, transparent 100%)` }}></div>
          <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 z-10 pointer-events-none"
               style={{ background: `linear-gradient(to top, ${rightBgColor} 0%, transparent 100%)` }}></div>

          {/* Scrolling Container */}
          {/* Mobile pe w-[150%] aur rotation adjust ki hai taake khali jagah nazar na aaye */}
          <div className="relative w-[140%] lg:w-[120%] h-[250%] -left-[20%] lg:-left-[30%] -top-[30%] rotate-[10deg] skew-y-[12deg] lg:skew-y-[20deg]">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-1 h-full animate-diagonal">
              
              {/* Tracks (Track 4 & 5 auto-hide on mobile via hidden md:flex) */}
              {[0, 1, 2, 3, 4].map((trackIndex) => (
                <div 
                  key={trackIndex} 
                  className={`flex flex-col gap-2 ${trackIndex > 2 ? 'hidden md:flex' : 'flex'} ${trackIndex > 3 ? 'hidden lg:flex' : ''}`}
                  style={{ paddingTop: `${trackIndex * 40}px` }}
                >
                  {[...scrollImages, ...scrollImages, ...scrollImages].map((src, i) => (
                    <div key={i} className="rounded-xl overflow-hidden shadow-sm">
                      <img src={src} alt="" className="w-28 h-auto object-cover opacity-90" />
                    </div>
                  ))}
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default KlaviyoIntegration;