import React from "react";
import {
  Boxes,
  TrendingUp,
  Medal,
  Code2,
} from "lucide-react";

const features = [
  {
    icon: <Boxes size={22} strokeWidth={2.2} />,
    text: (
      <>
        <strong>Over 1,000 Shopify stores served</strong> through
        <br />
        our sister company.
      </>
    ),
  },
  {
    icon: <TrendingUp size={22} strokeWidth={2.2} />,
    text: (
      <>
        <strong>$1.5B+ revenue generated</strong> collectively for
        <br />
        our clients.
      </>
    ),
  },
  {
    icon: <Medal size={22} strokeWidth={2.2} />,
    text: (
      <>
        <strong>28+ commerce awards</strong> and more than{" "}
        <strong>550 five star reviews.</strong>
      </>
    ),
  },
  {
    icon: <Code2 size={22} strokeWidth={2.2} />,
    text: (
      <>
        <strong>End-to-end app development</strong> from
        <br />
        concept and design to publish and ongoing
        <br />
        updates.
      </>
    ),
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className=" py-16 md:py-24">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Content */}
          <div className="pt-3">
            <h2 className="text-[38px] sm:text-[46px] lg:text-[54px] leading-[1.18] tracking-[-1.2px] text-black mb-8">
              <span className="font-bold">We’re the Experts in</span>
              <br />
              <span className="font-normal">Shopify App Development</span>
            </h2>

            <p className="text-[18px]  leading-[1.85] text-[#222] max-w-[590px] mb-12">
              Arctic Grey Apps is a specialized team within the Arctic Grey
              family an{" "}
              <span className="font-bold">
                award-winning Shopify Plus Preferred Partner
              </span>{" "}
              with decades of combined experience building and optimizing
              eCommerce solutions. Now, we’re bringing our world-class
              expertise to{" "}
              <span className="font-bold">Shopify App Development</span>,
              helping merchants and entrepreneurs create{" "}
              <span className="font-bold">custom private apps</span> for
              their individual store needs and{" "}
              <span className="font-bold">public apps</span> ready to be
              listed on the Shopify App Store.
            </p>

            <button className="bg-primary-gradient text-white font-semibold text-[20px] px-10 py-5 rounded-[3px] transition min-w-[185px]">
              Request a Quote
            </button>
          </div>

          {/* Right Panel */}
          <div className="bg-white rounded-[12px] p-6 md:p-8 lg:p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
            <h3 className="text-[24px] md:text-[28px] font-medium text-black mb-6">
              Why work with us?
            </h3>

            <div className="space-y-5">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-light-bg rounded-[10px] px-6 py-6 flex items-start gap-4"
                >
                  <div className="text-primary-accent mt-1 shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-[18px] leading-[1.55] text-[#111]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;