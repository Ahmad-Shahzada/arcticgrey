import React from "react";

const logos = [
  "/logos/zara.png",
  "/logos/monos.png",
  "/logos/barkbox.png",
  "/logos/peanuts.png",
  "/logos/emotion-shop.png",
  "/logos/harvard.png",
  "/logos/smurfs.png",
  "/logos/royce.png",
  "/logos/nxtbar.png",
  "/logos/talia.png",
  "/logos/sofia-ver.png",
];

const TrustedBrandsMarquee = () => {
  const repeatedLogos = [...logos, ...logos];

  return (
    <section className=" py-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-center text-[28px]  font-medium text-black mb-8">
          Trusted by thousands of Shopify brands
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="marquee-track flex items-center gap-16 md:gap-24 w-max">
            {repeatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Brand logo ${index + 1}`}
                  className="h-[34px] md:h-[42px] w-auto object-contain grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: scrollLeft 28s linear infinite;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TrustedBrandsMarquee;