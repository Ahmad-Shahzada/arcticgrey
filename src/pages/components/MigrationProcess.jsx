import useEmblaCarousel from "embla-carousel-react";
import {
  BarChart3,
  DatabaseBackup,
  MonitorSmartphone,
  ClipboardCheck,
  Headphones,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    icon: BarChart3,
    title: "Discovery & Strategy",
    description:
      "Evaluate your current platform and create a roadmap tailored to your goals.",
  },
  {
    icon: DatabaseBackup,
    title: "Data Mapping & Migration",
    description:
      "Securely transfer all your store data with no errors or losses.",
  },
  {
    icon: MonitorSmartphone,
    title: "Custom Design & Development",
    description:
      "Create a Shopify store that enhances your brand identity and user experience.",
  },
  {
    icon: ClipboardCheck,
    title: "Testing & QA",
    description:
      "Ensure every function performs flawlessly before launch.",
  },
  {
    icon: Headphones,
    title: "Launch & Ongoing Support",
    description:
      "Enjoy 24/7 post-launch support and a seamless transition.",
  },
];

export default function MigrationProcessSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: false,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-[34px] font-bold leading-[1.12] tracking-[-0.03em] text-black sm:text-[42px] md:text-[50px]">
            Our Proven
            <br />
            <span className="text-primary-accent">Migration </span>Process
          </h2>
        </div>

        <div className="mt-12 flex items-center justify-end gap-3 md:mt-5">
          <button
            onClick={scrollPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-soft bg-white text-black transition hover:bg-primary-gradient  hover:text-white"
            aria-label="Previous step"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-soft bg-white text-black transition hover:bg-primary-gradient  hover:text-white"
            aria-label="Next step"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_100%] cursor-move pr-4 sm:flex-[0_0_70%] md:flex-[0_0_38%] lg:flex-[0_0_24%]"
                >
                  <div className="relative h-full">
                    <div className="mb-8 flex items-center">
                      <Icon
                        className="h-9 w-9 shrink-0 text-primary-accent"
                        strokeWidth={1.7}
                      />

                      {index !== steps.length  && (
                        <div className="ml-4 h-px flex-1 border-t border-dashed border-primary-soft" />
                      )}
                    </div>

                    <h3 className="max-w-[260px] text-[23px] font-bold leading-[1.28] tracking-[-0.02em] text-black">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-[260px] text-[16px] leading-[1.8] text-black/75">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}