const features = [
  {
    title: "Scalability and Performance",
    description:
      "Shopify Plus handles high-volume sales with 99.99% uptime and blazing-fast page loads.",
  },
  {
    title: "Growth Tools",
    description:
      "Shopify’s one-click Shop Pay checkout converts up to 36% better than competitors.",
  },
  {
    title: "Cost-Effective Ownership",
    description:
      "With a lower total cost of ownership than Magento, Salesforce, and others, Shopify helps you scale without unexpected expenses.",
  },
  {
    title: "Customization at Scale",
    description:
      "Leverage Shopify’s drag-and-drop editor, APIs, and 10,000+ apps to customize your store—no developer dependency required.",
  },
];

export default function WhyShopifySection() {
  return (
    <section className="bg-light-bg py-16 md:py-24">
      <div className="mx-auto grid max-w-[1450px] grid-cols-1 items-start gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.15fr] lg:gap-16 lg:px-8">
        <div>
          <h2 className="text-[42px] font-bold leading-none tracking-[-0.03em] text-black sm:text-[54px] md:text-[64px] lg:text-[52px]">
            Why Shopify?
          </h2>

          <div className="mt-10 space-y-9 md:mt-12 md:space-y-10">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-7">
                <span className="mt-1 block h-[102px] w-[2px] shrink-0 bg-[#0f8a78]" />

                <div className="max-w-[520px]">
                  <h3 className="text-[24px] font-bold leading-[1.25] tracking-[-0.02em] text-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-[2] text-black/85">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <img
            src="/images/why_shopify.webp"
            alt="Why Shopify comparison diagram"
            className="h-auto w-full max-w-[760px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}