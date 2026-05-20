import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "How long does it take to build a Shopify app?",
    answer:
      "Timelines vary based on complexity. Smaller private apps can take a few weeks, while large-scale public apps may extend to a few months, including testing and the official Shopify App Store review."
  },
  {
    question: "Do I own the app source code once it’s complete?",
    answer:
      "Yes, once the project is completed and all agreed terms are fulfilled, the final source code can be handed over to you."
  },
  {
    question: "Can you help us maintain and update our app post-launch?",
    answer:
      "Yes, we can provide ongoing support, bug fixes, feature updates, and performance improvements after launch."
  },
  {
    question: "How do you ensure the security of our data and our customers' data?",
    answer:
      "We follow secure development practices, validate inputs, protect APIs, manage permissions carefully, and apply platform-specific security standards."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-light-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-4">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-black md:text-5xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-[20px] bg-white px-6 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] md:px-10"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <span className="pr-4 text-lg font-medium leading-[1.4] text-black md:text-2xl">
                    {item.question}
                  </span>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
                    {isOpen ? (
                      <Minus size={18} strokeWidth={2} className="text-black" />
                    ) : (
                      <Plus size={18} strokeWidth={2} className="text-black" />
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "mt-5 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[940px] text-base leading-8 text-black/75 md:text-[15px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}