import React from "react";

const Apps_hero = () => {
  return (
    <section className=" flex items-center">
      <div className=" w-full px-6 md:px-10 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="max-w-[560px]">
            <h1 className="text-[42px] sm:text-[52px] lg:text-[60px] leading-[1.1] font-semibold text-black tracking-[-1px]">
              Build Innovative
              <br />
              Shopify Apps with
              <br />
              Arctic Grey Apps
            </h1>

            <div className="w-[235px] h-[4px] bg-primary-gradient rounded-full mt-2 mb-8 ml-[120px]"></div>

            <p className="text-[18px] leading-[1.75] text-[#222] max-w-[560px] mb-10 ">
              From concept to reality—public and private Shopify App
              solutions built by a team with over{" "}
              <span className="font-bold">550+ five-star reviews</span>{" "}
              and a track record of generating{" "}
              <span className="font-bold">$1.5B</span> in revenue for
              merchants worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="bg-primary-gradient  text-white font-semibold text-[20px] px-10 py-5 rounded-[3px] min-w-[190px] transition">
                Get Started
              </button>

              <button className="border-2 border-primary-soft text-primary-gradient hover:bg-primary-gradient hover:text-white font-semibold text-[20px] px-10 py-5 rounded-[3px] min-w-[220px] transition">
                Schedule a Call
              </button>
            </div>

            <div className="flex items-center gap-3 text-black text-[18px]">
              <div className="flex items-center gap-[2px] text-[#d6a23a] text-[22px] leading-none">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="font-medium">
                550+ five-star reviews
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/apps_hero.webp"
              alt="Shopify app development illustration"
              className="w-full max-w-[660px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apps_hero;