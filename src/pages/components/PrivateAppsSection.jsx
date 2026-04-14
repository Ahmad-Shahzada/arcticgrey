import React from "react";
import { Puzzle, GitBranch, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: <Puzzle size={22} strokeWidth={1.8} />,
    title: "Custom Integrations",
    desc: "Connect your store to third-party tools, CRMs, ERPs, and more.",
  },
  {
    icon: <GitBranch size={22} strokeWidth={1.8} />,
    title: "Enhanced Workflows",
    desc: "Automate complex tasks like inventory, order fulfillment, or reporting.",
  },
  {
    icon: <BadgeCheck size={22} strokeWidth={1.8} />,
    title: "Store-Specific Features",
    desc: "Implement proprietary functionality that sets your brand apart.",
  },
];

const PrivateAppsSection = () => {
  return (
    <section className="bg py-16 md:py-20">
      <div className="px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-12 items-center">
          
          {/* Left Side */}
          <div className="max-w-[560px]">
            <h2 className="text-[34px] md:text-[42px]  leading-[1.15] font-medium text-black mb-5">
              Private Apps for Merchants
            </h2>
            <p className="text-[18px] leading-[1.75] text-[#3d3d3d] mb-10 max-w-[520px]">
              Tailored, proprietary solutions for your unique business needs.
              Whether you need a custom integration with your ERP system or
              specialized functionality unavailable in existing apps, our
              Private Apps are built exclusively for your Shopify store.
            </p>

            <div className="space-y-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#dedede] rounded-[14px] px-6 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-primary-accent mt-1 shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-[22px] leading-[1.2] font-medium text-black mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[15px] leading-[1.6] text-[#444] max-w-[360px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Image Panel */}
          <div className="flex items-center justify-center ">
            <img
              src="/images/apps-typ-1.webp"
              alt="Private apps illustration"
              className="w-full max-w-[800px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateAppsSection;