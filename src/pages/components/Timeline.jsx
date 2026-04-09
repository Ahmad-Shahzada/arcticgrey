import React from 'react';

const Timeline = () => {
  const years = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029];
  const currentYear = 2025;

  return (
    <div className="w-full bg-black py-8 ml-12 flex flex-col items-center justify-center font-sans">
      <div className="relative w-full max-w-7xl">
        
        {/* Years Labels */}
        <div className="flex justify-between mb-8">
          {years.map((year) => (
            <div key={year} className="text-white text-sm md:text-base font-medium w-0 flex justify-center overflow-visible">
              <span className="whitespace-nowrap">{year}</span>
            </div>
          ))}
        </div>

        {/* The Main Line with Gradient Fading */}
        <div className="relative h-[2px] w-full flex items-center">
          {/* Background Fade Line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

          {/* Tick Marks and Vertical Indicators */}
          <div className="absolute inset-0 flex justify-between items-center">
            {years.map((year) => (
              <div key={year} className="relative flex flex-col items-center">
                {year === currentYear ? (
                  // Active Year Indicator (2025) - Stronger and Taller
                  <div className="h-8 w-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                ) : (
                  // Regular Year Ticks
                  <div className="h-4 w-[1px] bg-white/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Labels: Historical & Projected */}
        <div className="relative w-full mt-6 h-10 flex text-white/90 text-sm font-medium">
          {/* Historical Label (Centered between 2021-2024) */}
          <div className="absolute left-[15%] transform -translate-x-1/2">
            Historical
          </div>

          {/* Projected Label (Centered between 2026-2029) */}
          <div className="absolute left-[83%] transform -translate-x-1/2">
            Projected
          </div>
        </div>

      </div>
    </div>
  );
};

export default Timeline;