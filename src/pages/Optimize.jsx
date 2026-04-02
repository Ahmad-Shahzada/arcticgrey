import React from 'react';
import { FileSearch, Gamepad2, ShoppingCart, BarChart3, Monitor, Zap, MoveRight } from 'lucide-react';

const leftServices = [
  {
    icon: <FileSearch className="w-7 h-7 text-[#FFC107]" />,
    title: 'Home/Collection/Product Page Audits',
    description: 'A data-driven redesign that boosted conversions by up to 30%, and shine through every click.',
  },
  {
    icon: <Gamepad2 className="w-7 h-7 text-[#FFC107]" />,
    title: 'Gamify Your Cart Drawer',
    description: 'Revitalize your Shopify store with a cart drawer that accelerates sales and delights with unique incentives.',
  },
  {
    icon: <ShoppingCart className="w-7 h-7 text-[#FFC107]" />,
    title: 'Checkout Optimizations',
    description: 'Get 2X faster checkout interactions and page transitions that increase your conversion rates.',
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-[#FFC107]" />,
    title: 'A/B Testing & Deployment',
    description: 'Optimize through data-driven insights for superior performance and enhanced outcomes.',
  },
];

const scrollImages = [
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=400&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=400&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=400&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&h=600&auto=format&fit=crop",
];

const Optimize = () => {
  return (
    <>
      <style>
        {`
          @keyframes scrollUpAnimation {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-custom-scroll {
            animation: scrollUpAnimation linear infinite;
          }
        `}
      </style>

      <div className="bg-black text-white p-4 sm:p-6 md:p-12 overflow-x-hidden mx-3 lg:mx-5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr,2.2fr] gap-10 lg:gap-12">

          {/* --- LEFT SECTION --- */}
          {/* Switched to a 2-column grid on tablets (md) and 1-column on mobile/desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 md:gap-10 lg:gap-12 px-2 sm:px-4 lg:px-0 lg:pl-10">
            {leftServices.map((service, index) => (
              <div key={index} className="flex flex-col gap-2 group">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold tracking-tight">{service.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* --- RIGHT SECTION --- */}
          <div className="flex flex-col gap-6 sm:gap-8">

            {/* TOP: Scrolling Grid Section */}
            <div className="relative rounded-[14px] border border-white/10 bg-black h-[400px] sm:h-[450px] lg:h-[420px] overflow-hidden">
              
              {/* THE SCROLLING BACKGROUND */}
              {/* Reduced rotation on mobile to prevent extreme cropping */}
              <div className="absolute inset-0 z-0 overflow-hidden" style={{ perspective: '1500px' }}>
                <div
                  className="grid grid-cols-3 gap-3 sm:gap-4 px-4 sm:px-10 opacity-100 w-[140%] sm:w-[120%] lg:w-[110%] -ml-[20%] sm:-ml-[10%] lg:-ml-[66%]"
                  style={{ 
                    transform: window.innerWidth > 1024 
                      ? 'rotateX(20deg) rotateY(-20deg) rotateZ(20deg)' 
                      : 'rotateX(10deg) rotateY(-10deg) rotateZ(10deg)' 
                  }}
                >
                  {[0, 1, 2].map((col) => (
                    <div
                      key={col}
                      className="flex flex-col gap-3 sm:gap-4 animate-custom-scroll opacity-60"
                      style={{
                        animationDuration: col === 0 ? '35s' : col === 1 ? '25s' : '30s'
                      }}
                    >
                      {[...scrollImages, ...scrollImages].map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          className="rounded-xl sm:rounded-2xl w-full aspect-[3/4] object-cover shadow-2xl border border-white/5"
                          alt="Portfolio preview"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* CONTENT OVERLAYS */}
              <div className="relative z-10 flex flex-col justify-center gap-4 sm:gap-6 p-5 sm:p-8 lg:p-5 h-full bg-transparent">
                {[
                  { icon: <Monitor />, title: "UX/UI Shopify Audit", text: "Improve conversion rates, AOV, and CLV by optimizing and enhancing the overall shopping experience." },
                  { icon: <Zap />, title: "Speed Plus Optimizations", text: "Improving your page load speed by one second leads to a 7% average increase in conversion rates." }
                ].map((card, idx) => (
                  <div key={idx} className="bg-black/60 p-4 sm:p-5 rounded-[14px] max-w-md border border-white/20 backdrop-blur-md">
                    <div className="mb-2 sm:mb-4">
                      {React.cloneElement(card.icon, { className: "w-6 h-6 sm:w-7 h-7 text-[#FFC107]" })}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">{card.title}</h3>
                    <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM: Performance Dashboard Section */}
            <div className="relative group rounded-[14px] border border-white/10 bg-[#111] h-[180px] sm:h-[220px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Analytics Dashboard"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_sm:shadow-[inset_0_0_100px_rgba(0,0,0,1)]" />
              
              <div className="relative z-20 flex h-full items-center justify-center sm:justify-end p-6 sm:p-12 sm:pr-16">
                <button className="flex items-center gap-2 sm:gap-3 bg-black text-white border-2 border-[#FFC107] px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-bold hover:bg-[#FFC107] hover:text-black transition-all duration-300 shadow-xl active:scale-95 whitespace-nowrap">
                  Claim Free Audit
                  <MoveRight className="w-4 h-4 sm:w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Optimize;