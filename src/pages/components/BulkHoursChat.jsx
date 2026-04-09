import React from 'react';

const BulkHoursChat = () => {
  return (
    <div className='mx-5 pt-10'>
      <div className="relative bg-black flex flex-col items-center justify-center px-6 py-20 font-sans overflow-hidden">

        <div
          className="absolute bottom-0 left-0 w-full h-[800px] bg-no-repeat bg-bottom bg-contain opacity-90 pointer-events-none"
          style={{ backgroundImage: "url('/images/foot-bg.webp')" }}
          aria-hidden="true"
        />
        <div className="relative z-10 text-center max-w-4xl mb-12">
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">
            Complete Shopify Tasks Quickly <br />
            with <span className="text-primary-accent">Bulk Hours</span> by Arctic Grey
          </h1>
          <p className="text-[#8a8a8a] text-sm md:text-base leading-relaxed max-w-3xl ">
            We’ve built this AI chat box to help quote hours needed for projects, please provide as much details as possible in
            terms of what you’d like to build in this chat box, and we will give you an estimate of hours in real time.
          </p>
        </div>
        <div className="relative z-10 w-full max-w-[850px] bg-[#0d0d0d] border border-[#272727] rounded-[24px] p-8 md:p-14 shadow-2xl flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L22 20H2L12 2Z" stroke="#10b981" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M12 10L17 19H7L12 10Z" fill="#10b981" />
            </svg>
            <span className="text-[13px] font-bold tracking-[0.2em] text-white uppercase">
              Arctic Grey
            </span>
          </div>
          <div className="w-full max-w-[500px] h-[4px] bg-[#1f1f1f] rounded-full mb-10 overflow-hidden flex">
            <div className="h-full w-[45%] bg-primary-gradient rounded-full"></div>
          </div>
          <div className="text-center mb-8">
            <p className="font-semibold text-white mb-3 text-sm md:text-base">
              Ask AI anything, for example:
            </p>
            <p className="text-[#aaaaaa] text-sm">
              If I need emergency fixes and general tech support for.
            </p>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center bg-[#1a1a1a] border border-[#333333] rounded-xl p-2 pl-5 transition-all focus-within:border-[#555555]">
            <input
              type="text"
              placeholder="Type your request here, e.g., 'Migrate my store'"
              className="flex-1 w-full bg-transparent text-white placeholder-[#666666] outline-none text-sm py-3 md:py-0"
            />
            <button className="w-full md:w-auto mt-2 md:mt-0 ml-0 md:ml-4 bg-[#333333] hover:bg-[#444444] text-[#dddddd] text-sm font-medium py-2.5 px-6 rounded-lg transition-colors">
              Get a Quote
            </button>
          </div>

        </div>

      </div>

     
    </div>
  );
};

export default BulkHoursChat;