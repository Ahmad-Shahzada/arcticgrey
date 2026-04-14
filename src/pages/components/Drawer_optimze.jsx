import {
  Rocket,
  HousePlus,
  RefreshCcw,
  SmartphoneCharging,
} from "lucide-react";

const optimizationPoints = [
  {
    icon: Rocket,
    title: "Skyrocket Conversions",
    description:
      "Poor cart design kills sales. But optimized carts with seamless UX can lift conversion rates by 14–22% (EcoCart). Why? They reduce friction, keeping shoppers engaged without page reloads.",
    active: true,
  },
  {
    icon: HousePlus,
    title: "Boost AOV Instantly",
    description:
      "Cart upsells and cross-sells in the drawer can increase AOV by 10–30% (UpsellWP, ConvertCart). Examples? Brands using post-purchase upsells see AOV jumps of 18–19% (VWO). Tiered incentives like 'Spend $50 more for free shipping' motivate bigger baskets.",
    active: false,
  },
  {
    icon: RefreshCcw,
    title: "Maximize CLV for Long-Term Wealth",
    description:
      "A delightful cart experience builds trust and loyalty. Happy customers return, increasing CLV by up to 95% with just a 5% retention boost. Optimized drawers with surprises (free gifts, rewards) turn buyers into advocates, fostering repeat purchases and referrals.",
    active: false,
  },
  {
    icon: SmartphoneCharging,
    title: "Slash Abandonment",
    description:
      "Mobile abandonment hits 77%—but responsive drawers cut this by keeping the flow intuitive. Add urgency timers or progress bars, and watch drop-offs plummet.",
    active: false,
  },
];

export default function CartDrawerOptimizationSection() {
  return (
    <section className=" py-10 md:py-14 bg-light-bg">
      <div className="mx-auto max-w-[1340px] rounded-[28px] bg-white px-5 py-6 sm:px-7 md:px-10 md:py-10 lg:px-12 lg:py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-12">
          <div className="relative">
            <div className="overflow-hidden rounded-[22px] bg-black">
              <img
                src="/images/cart-drawer-tab-image.webp"
                alt="Cart drawer optimization preview"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="pt-1">
            <h2 className="max-w-[560px] text-[30px] font-medium leading-[1.15] tracking-[-0.03em] text-[#111111] sm:text-[34px] md:text-[35px]">
              Why cart drawer needs optimization?
            </h2>

            <div className="mt-7 md:mt-8">
              {optimizationPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className={`relative ${
                      index !== optimizationPoints.length - 1
                        ? "border-b border-black/10"
                        : ""
                    }`}
                  >
                    <div
                      className={`flex gap-5 px-4 py-5 md:px-5 ${
                        item.active ? "bg-light-bg" : "bg-transparent"
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-[#111111]">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-[610px] text-[14px] leading-[1.7] text-[#5c5c5c] ">
                          {item.description}
                        </p>
                      </div>

                      <div className="shrink-0 pt-1">
                        <Icon
                          className="h-5 w-5 text-[#111111]"
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}