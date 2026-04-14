import { ArrowRight } from "lucide-react";

export default function CartOptimizationBanner() {
  return (
    <section className="py-6 md:py-8">
      <div className="mx-5">
        <div className="relative overflow-hidden rounded-[18px] bg-black min-h-[270px] md:min-h-[268px]">
          <div className="px-10 grid min-h-[270px] grid-cols-1 items-center md:min-h-[268px] md:grid-cols-[220px_1fr_220px]">
            <div className="relative hidden h-full md:block">
              <img
                src="/images/cart_left_1.webp"
                alt="Cart drawer left preview"
                className="absolute bottom-0 left-0 w-[210px] object-contain"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 text-center md:px-10">
              <p className="mx-auto max-w-[760px] text-[22px] font-medium leading-[1.55] tracking-[-0.02em] text-white md:text-[18px] lg:text-[20px]">
                Without this optimization, your store is like a leaky bucket:
                Traffic pours in, but revenue trickles out. Competitors with slick
                drawers (think seamless upsells and one-click incentives) are
                stealing your customers right now.
              </p>

              <button className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-primary-soft px-8 py-4 text-[20px] font-semibold tracking-[-0.01em] text-white transition hover:bg-white hover:text-black md:px-10 md:py-4 md:text-[18px]">
                Gamify your Cart for $1995
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            <div className="relative hidden h-full md:block">
              <img
                src="/images/cart_left_2.webp"
                alt="Cart drawer right preview"
                className="absolute bottom-0 right-0 w-[300px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}