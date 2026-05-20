import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  BrushCleaning,
  Code2,
  Workflow
} from "lucide-react";

const processSteps = [
  {
    id: "plan",
    label: "Plan",
    icon: Workflow,
    image: "/images/plan.webp",
    sectionTitle: "1. Plan",
    quote:
      "We define the app structure, features, and user journey before design starts.",
    cards: [
      {
        title: "Requirement Gathering",
        description: "We collect goals, features, and technical needs clearly."
      },
      {
        title: "Wireframing",
        description: "We map the layout and user flow before visual design."
      },
      {
        title: "Project Scope",
        description: "We define timeline, milestones, and deliverables."
      }
    ]
  },
  {
    id: "design",
    label: "Design",
    icon: BrushCleaning,
    image: "/images/desgin.webp",
    sectionTitle: "2. Design",
    quote:
      "We create polished UI screens and interaction patterns for the app.",
    cards: [
      {
        title: "UI Exploration",
        description: "We create layouts that match your brand and product goals."
      },
      {
        title: "Responsive Screens",
        description: "Each view is designed for desktop, tablet, and mobile."
      },
      {
        title: "Design Approval",
        description: "You review the final screens before development begins."
      }
    ]
  },
  {
    id: "develop",
    label: "Develop",
    icon: Code2,
    image: "/images/develop.webp",
    sectionTitle: "3. Develop",
    quote:
      "We turn the approved design into a fast, scalable application.",
    cards: [
      {
        title: "Frontend Development",
        description: "We build reusable components and polished interactions."
      },
      {
        title: "Backend Integration",
        description: "We connect APIs, logic, and required services."
      },
      {
        title: "QA Testing",
        description: "We test flows, responsiveness, and bug fixes thoroughly."
      }
    ]
  },
  {
    id: "deploy",
    label: "Deploy",
    icon: Bell,
    image: "/images/deploy.webp",
    sectionTitle: "4. Deploy",
    quote:
      "No more ‘Oops! That update broke the live site!’ thanks to our robust deployment process.",
    cards: [
      {
        title: "Version Control via GitHub",
        description: "Track every change and roll back easily if needed."
      },
      {
        title: "App Store Submission",
        description:
          "We handle the entire process, from listing details to compliance checks."
      },
      {
        title: "Ongoing Maintenance",
        description:
          "Post-launch support for quick bug fixes, new features, and performance optimization."
      }
    ]
  }
];

export default function ProcessSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = processSteps[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? processSteps.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === processSteps.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-white py-14 md:py-20 ">
      <div className="px-6 md:px-10 lg:px-20">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-black md:text-5xl">
          Our Process
        </h2>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex flex-wrap items-center rounded-2xl border border-primary-soft bg-white p-1 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary-accent text-white"
                      : "text-black/70 hover:bg-[#f7f7f7]"
                  }`}
                >
                  <Icon size={16} strokeWidth={1.8} />
                  <span>{step.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative ">
          <div className="overflow-hidden rounded-[20px]">
            <div className="relative aspect-[16/9] w-full">
              <img
                src={activeStep.image}
                alt={activeStep.label}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <button
            onClick={goPrev}
            className="absolute left-[-12px] top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-md transition hover:bg-black hover:text-white md:left-[-24px]"
            aria-label="Previous slide"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={goNext}
            className="absolute right-[-12px] top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-md transition hover:bg-black hover:text-white md:right-[-24px]"
            aria-label="Next slide"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
          <h3 className="text-3xl font-semibold tracking-tight text-black">
            {activeStep.sectionTitle}
          </h3>

          <p className="max-w-3xl text-lg font-medium leading-[1.5] text-black">
            “{activeStep.quote}”
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {activeStep.cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl bg-light-bg p-6 md:p-7"
            >
              <h4 className="text-xl font-semibold text-black">
                {card.title}
              </h4>
              <p className="mt-4 text-base leading-7 text-black/80">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}