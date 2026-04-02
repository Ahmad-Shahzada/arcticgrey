import React, { useState } from 'react';

export default function CompetitiveEdge() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "Stay Ahead of Trends",
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" /></svg>,
      desc: "Our proactive adoption of AI tools like ChatGPT, Codex, and Cursor AI keeps your store innovative and ahead of the competition."
    },
    {
      title: "Maximize Efficiency",
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
      desc: "We streamline your operations using automated workflows and high-performance code to reduce overhead."
    },
    {
      title: "Enhance Customer Experience",
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg>,
      desc: "Intuitive UI/UX design focused on conversion optimization and seamless mobile-first journeys."
    },
    {
      title: "Data-Driven Decisions",
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>,
      desc: "Leveraging advanced analytics to provide actionable insights into your customer's shopping behavior."
    },
    {
      title: "Future-Proof Your Business",
      icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
      desc: "Building scalable architectures on Shopify that grow with your brand without technical debt."
    }
  ];

  const companies = [
    { name: "BARKBOX", weight: "font-black" },
    { name: "PEANUTS", weight: "font-bold" },
    { name: "Lids", weight: "font-black italic" },
    { name: "shopify", weight: "font-extrabold" },
    { name: "MAGENTO", weight: "font-medium" },
    { name: "SALESFORCE", weight: "font-bold" }
  ];

  return (
    <>
      <section className="hidden lg:block px-5 pb-20 md:pb-32 bg-[#FBF7ED] overflow-hidden">
        {/* Ticker Animation CSS */}
        <style>{`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-company-ticker {
          display: flex;
          align-items: center;
          gap: 4rem;
          width: max-content;
          animation: tickerScroll 25s linear infinite;
        }
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>

        <div className="pb-4 grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] bg-white rounded-xl gap-8 items-start">

          {/* --- LEFT SIDE: HEADING & ACCORDION --- */}
          <div className="flex flex-col h-full w-full  justify-end order-2 py-8 pl-20 pr-10 lg:order-1 lg:mt-0">
            <div className="mb-12 absolute top-[1620px]">
              <h2 className="text-[48px] text-black tracking-tight mb-4 leading-[1.05]">
                Gain a Competitive Edge with Arctic Grey
              </h2>
              <p className="text-[#666] text-[17px] max-w-[820px] ">
                Arctic Grey offers specialized optimizations like UX/UI audits, speed enhancements, mobile-first themes, and custom apps to ensure real-time synchronization and personalized experiences, while also handling complex setups such as loyalty programs, product customizers, and in-store kiosks that bridge online and offline retail.
              </p>
            </div>

            <div className="border-t border-black/10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-black/10 transition-all cursor-pointer"
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex justify-between items-center py-7 group">
                    <span className={`text-md md:text-xl  font-medium transition-all duration-300 ${activeTab === index ? 'text-black ' : 'text-black group-hover:text-black'}`}>
                      {item.title}
                    </span>
                    <div className={`transition-transform  duration-300 ${activeTab === index ? 'rotate-90 scale-110' : ''}`}>
                      {item.icon}
                    </div>
                  </div>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeTab === index ? 'max-h-32 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-500 text-base md:text-md leading-relaxed max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: OVERLAPPING IMAGE & SCROLLING CARD --- */}
          <div className="relative w-full flex flex-col items-center  order-1 lg:order-2">

            {/* Main Background Image Container */}
            <div className="relative w-[740px] rounded-[10px] shadow-sm">
              <img
                src="/images/AG_desktop.webp"
                className="w-full h-full  object-cover "
                alt="Arctic Grey Office"
              />
              {/* Specified color overlay */}
              <div className="absolute inset-0 lg:bg-white opacity-30 mix-blend-multiply"></div>
            </div>

            {/* Overlapping White Stat Card */}
            <div className="relative z-10 w-full lg:bg-white rounded-[32px] p-10 md:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)] -mt-32 md:-mt-48 lg:-mt-80 lg:m-5 max-w-[600px]">
              <div className="text-center">
                {/* Dynamic Big Number */}
                <h3 className="text-7xl font-bold text-black tracking-tighter mb-4">
                  1000+
                </h3>
                <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-10">
                  Shopify Stores Built
                </p>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-gray-100 mb-10" />

                {/* AUTO-SCROLLING COMPANY NAMES */}
                <div className="relative w-full overflow-hidden mask-fade">
                  <div className="animate-company-ticker">
                    {/* Duplicated for infinite scroll effect */}
                    {[...companies, ...companies].map((company, index) => (
                      <span
                        key={index}
                        className={`${company.weight} text-lg md:text-xl tracking-tighter text-black opacity-30 uppercase italic whitespace-nowrap`}
                      >
                        {company.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Golden Accent Line decoration */}
            <div className="absolute top-10 -right-4 w-48 h-48 opacity-20 pointer-events-none hidden xl:block">
              <svg viewBox="0 0 100 100" fill="none" className="rotate-45">
                <path d="M100 0L0 100" stroke="#dcab57" strokeWidth="0.5" />
                <path d="M80 0L0 80" stroke="#dcab57" strokeWidth="0.5" opacity="0.5" />
              </svg>
            </div>
          </div>

        </div>
      </section>


      <section className="block lg:hidden px-4 md:px-8 py-12 md:py-24 bg-[#FBF7ED] overflow-hidden">
        <style>{`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-company-ticker {
          display: flex;
          align-items: center;
          gap: 2rem;
          width: max-content;
          animation: tickerScroll 20s linear infinite;
        }
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>

        {/* Main Card Container */}
        <div className="max-w-7xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">

          <div className="p-6 sm:p-12 lg:p-20 order-2 lg:order-1 flex flex-col justify-center">
            <div className="mb-8 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight mb-6 leading-[1.1]">
                Gain a Competitive Edge <br className="hidden xl:block" /> with Arctic Grey
              </h2>
              <p className="text-zinc-500 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
                Arctic Grey offers specialized optimizations like UX/UI audits, speed enhancements, and mobile-first themes to ensure real-time synchronization and personalized experiences.
              </p>
            </div>

            <div className="border-t border-zinc-100">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-zinc-100 transition-all cursor-pointer"
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex justify-between items-center py-5 sm:py-7 group">
                    <span className={`text-base sm:text-lg lg:text-xl font-semibold transition-all duration-300 ${activeTab === index ? 'text-black' : 'text-zinc-400'}`}>
                      {item.title}
                    </span>
                    <div className={`text-xl transition-transform duration-300 ${activeTab === index ? 'rotate-90 scale-125' : 'grayscale opacity-50'}`}>
                      {item.icon}
                    </div>
                  </div>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeTab === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full flex flex-col items-center order-1 lg:order-2 bg-[#F9F9F9] lg:bg-transparent">

            <div className="w-full aspect-[4/3] lg:h-full overflow-hidden">
              <img
                src="/images/AG_desktop.webp"
                className="w-full h-full object-cover"
                alt="Arctic Grey Office"
              />
              <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 w-[90%] sm:w-[80%] lg:w-[85%] bg-white rounded-3xl p-8 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.1)] -mt-24 sm:-mt-32 lg:-mt-40 xl:-mt-52 mb-12 lg:mb-0">
              <div className="text-center">
                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black tracking-tighter mb-2">
                  1000+
                </h3>
                <p className="text-zinc-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] mb-8">
                  Shopify Stores Built
                </p>

                <div className="w-full h-px bg-zinc-100 mb-8" />

                <div className="relative w-full overflow-hidden mask-fade">
                  <div className="animate-company-ticker">
                    {[...companies, ...companies].map((company, index) => (
                      <span
                        key={index}
                        className={`${company.weight} text-base sm:text-xl tracking-tighter text-black/30 uppercase italic whitespace-nowrap`}
                      >
                        {company.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-10 -right-4 w-48 h-48 opacity-10 pointer-events-none hidden xl:block">
              <svg viewBox="0 0 100 100" fill="none" className="rotate-45">
                <path d="M100 0L0 100" stroke="#dcab57" strokeWidth="0.5" />
              </svg>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}