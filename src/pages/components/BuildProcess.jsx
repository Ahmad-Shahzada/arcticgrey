import React from 'react';
import {
  FileText,
  Layers,
  Settings,
  Code,
  Hourglass,
  Rocket,
  Search,
} from 'lucide-react';

const BuildProcess = () => {
  const steps = [
    {
      id: 1,
      title: 'Strategic Discovery',
      desc: 'Kick off with a Slack channel and weekly video calls to understand your vision, goals, and needs—like D2C/B2B setups or ERP integrations.',
      icon: <FileText size={24} strokeWidth={1.5} />,
    },
    {
      id: 2,
      title: 'Bespoke Design & Integration',
      desc: 'Create custom UX/UI designs in tools like Figma, aligned with your brand. Integrate ERP, warehouse, or POS systems for smooth data flow.',
      icon: <Layers size={24} strokeWidth={1.5} />,
    },
    {
      id: 3,
      title: 'Advanced Configurations',
      desc: 'Set up payments, shipping, compliance, and apps (e.g., Recharge for subscriptions) to streamline operations.',
      icon: <Settings size={24} strokeWidth={1.5} />,
    },
    {
      id: 4,
      title: 'Custom Development',
      desc: 'Build hybrid solutions or private apps to enhance performance, including AI features for personalization.',
      icon: <Code size={24} strokeWidth={1.5} />,
    },
    {
      id: 5,
      title: 'Rigorous Testing & Optimization',
      desc: 'Test everything (e.g., payments, speed) and optimize for SEO and load times—ensuring zero issues.',
      icon: <Hourglass size={24} strokeWidth={1.5} />,
    },
    {
      id: 6,
      title: 'Dedicated Launch Support (Launch Day+)',
      desc: 'Daily calls and Slack availability for a seamless go-live, with minimal downtime.',
      icon: <Rocket size={24} strokeWidth={1.5} />,
    },
    {
      id: 7,
      title: 'Post-Launch Enhancements (Ongoing)',
      desc: 'Monitor metrics, gather feedback, and iterate with A/B testing for continued growth.',
      icon: <Search size={24} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="mx-5 px-4 md:px-8 lg:px-10 py-10 font-sans text-[#1a1a1a] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        {/* Left Column */}
        <div className="flex flex-col h-full lg:sticky lg:top-12">
          <div className="max-w-md pl-2">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-accent mb-3">
              Build Process
              <span className="inline-block w-8 h-[2px] bg-primary-accent" />
            </span>

            <h2 className="text-4xl font-semibold leading-tight mb-4 tracking-tight">
              How It Works: Step-by-Step Build Process
            </h2>

            <p className="text-gray-500 mb-8 text-lg font-light">
              We make building easy and transparent—here&apos;s our proven process.
            </p>

            <button className="bg-primary-accent text-black px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-light-text transition-all">
              Launch Your Project Today – Easy & Expert
              <span className="text-xl">→</span>
            </button>
          </div>

          {/* Image Mockup */}
          <div className="relative mt-12 bg-zinc-950 rounded-xl overflow-hidden shadow-2xl p-8 flex-grow flex items-center justify-center min-h-[400px]">
            <div className="absolute inset-0 bg-gold-gradient opacity-[0.08] blur-3xl pointer-events-none" />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <img
                src="/images/build_1.webp"
                alt="Project Preview"
                className="w-full h-auto max-h-[600px] object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-8">
          <div className="divide-y divide-zinc-200 border-t border-zinc-200">
            {steps.map((step) => (
              <div key={step.id} className="py-7 flex justify-between items-start group">
                <div className="pr-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-accent transition-colors">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-1 shrink-0 text-primary-accent">
                  {step.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Note */}
          <div className="bg-light-bg p-6 rounded-lg border border-primary-soft/40 mt-auto">
            <p className="text-[14px] leading-relaxed text-[#1a1a1a]">
              <span className="font-bold mr-1">Pricing Note:</span>
              <span className="text-gray-600 font-light">
                Transparent fixed quotes after discovery, starting from bulk hours for
                small tasks to full builds. Complementary services include migrations and
                site speed optimizations.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildProcess;