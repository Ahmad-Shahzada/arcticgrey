import React, { useState } from 'react';

const ProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      id: "01",
      title: "Plan",
      description: "AI-driven analytics craft data-driven strategies, analyzing market trends and customer behavior to position your store for success, giving you a competitive edge in planning.",
      img: "/images/process-1.png" // Placeholder for the dark abstract gold texture
    },
    {
      id: "02",
      title: "Design",
      description: "Creating visually stunning and user-centric interfaces that align with your brand identity and provide a seamless shopping experience.",
      img: "/images/process-2.png" // Placeholder for the dark abstract gold texture
    },
    {
      id: "03",
      title: "Develop",
      description: "Building robust, scalable e-commerce solutions using the latest technologies to ensure high performance and security.",
      img: "/images/process-3.png" // Placeholder for the dark abstract gold texture
    },
    {
      id: "04",
      title: "Deploy",
      description: "Launching your store with precision, ensuring all systems are integrated and optimized for a flawless go-live moment.",
      img: "/images/process-4.png" // Placeholder for the dark abstract gold texture
    },
    {
      id: "05",
      title: "A/B Test",
      description: "Continuously refining your store through rigorous testing and data analysis to maximize conversion rates and ROI.",
      img: "/images/process-5.png" // Placeholder for the dark abstract gold texture
    }
  ];

  return (
    <section className="bg-[#FAF9F6] pt-20 pb-28 font-sans">
      <div className="mx-5">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16 text-black">
          Our Proven Process
        </h2>

        <div className="flex flex-col md:flex-row gap-2 h-[500px]">
          {steps.map((step, index) => (
            <div
              key={step.id}
              onMouseEnter={() => setActiveIndex(index)} // Hover trigger yahan add kiya
              className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ease-in-out border border-white/10 ${activeIndex === index ? 'flex-[4]' : 'flex-1'
                }`}
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
                style={{ backgroundImage: `url(${step.img})` }}
              >
                <div className="absolute "></div>
                {/* Vertical lines texture overlay effect */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.1)_95%)] bg-[length:20px_100%]"></div>
              </div>

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col text-white">
                <div className="mb-4">
                  <span className="block text-sm font-bold mb-1">{step.id}</span>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                </div>

                <div className={`mt-auto transition-opacity duration-500 delay-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <p className="text-sm leading-relaxed max-w-md text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;