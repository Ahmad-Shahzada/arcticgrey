import React from 'react';
import { Database, BadgeCheck, TrendingUp, ArrowRight } from 'lucide-react';

const KlaviyoIntegration = () => {
  const scrollImages = [
    "/images/kalviyo-1.avif",
    "/images/kalviyo-2.avif",
    "/images/kalviyo-3.avif",
    "/images/kalviyo-4.avif",
    "/images/kalviyo-5.avif",
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

      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[24px] lg:rounded-[14px] overflow-hidden h-auto lg:h-[750px] bg-light-bg border border-zinc-100 shadow-sm">
        {/* LEFT SIDE */}
        <div className="w-full p-5 md:p-12 lg:px-28 flex flex-col justify-center bg-light-bg z-20 items-center lg:items-start text-left order-1 lg:order-1">
          <div className="space-y-4 md:space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-accent">
              Klaviyo Services
              <span className="inline-block w-8 h-[2px] bg-primary-accent" />
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-black leading-[1.15] tracking-tight">
              <span className="bg-primary-gradient bg-clip-text text-transparent">
                Klaviyo Integration
              </span>{" "}
              <span className="font-normal block sm:inline text-black">
                for Shopify Service
              </span>
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
                className="flex items-center justify-between py-5 md:py-6 border-b border-zinc-200  group cursor-pointer px-1 lg:px-3 transition-all duration-300"
              >
                <span className="text-base md:text-xl font-medium text-black group-hover:text-primary-accent transition-colors duration-300">
                  {feature.title}
                </span>
                <div className="text-black shrink-0 group-hover:text-primary-accent transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-primary-accent text-black px-6 md:px-8 py-5 md:py-6 rounded-full font-semibold flex items-center justify-center gap-4 hover:bg-light-text transition-all active:scale-95 group text-sm md:text-base">
              Book a Migration Consultation
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full relative overflow-hidden h-[400px] md:h-[500px] lg:h-full border-t lg:border-t-0 lg:border-l border-zinc-200 bg-[#f7fcfa] order-2 lg:order-2">
          {/* Fading Masks */}
          

          {/* Scrolling Container */}
          <div className="relative w-[140%] lg:w-[120%] h-[250%] -left-[20%] lg:-left-[30%] -top-[30%] rotate-[10deg] skew-y-[12deg] lg:skew-y-[20deg]">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-1 h-full animate-diagonal">
              {[0, 1, 2, 3, 4].map((trackIndex) => (
                <div
                  key={trackIndex}
                  className={`flex flex-col gap-2 ${trackIndex > 2 ? 'hidden md:flex' : 'flex'} ${trackIndex > 3 ? 'hidden lg:flex' : ''}`}
                  style={{ paddingTop: `${trackIndex * 40}px` }}
                >
                  {[...scrollImages, ...scrollImages, ...scrollImages].map((src, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border border-white/20 transition-colors duration-300"
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-28 h-auto object-cover opacity-90"
                      />
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