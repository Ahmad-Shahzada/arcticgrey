import React, { useState, useEffect, useRef } from 'react';

const testimonialData = [
  {
    id: 1,
    brandLogo: "/images/blogo1.webp",
    videoPoster: "/public/vidio/vidio-1.mp4",  // Fixed path: removed /public prefix
    stat: "34%",
    statLabel: "Sales Increase in 6 Months",
    quote: "Arctic Gray has been instrumental in enhancing user experience, increasing conversion rates, and providing essential backend development support that has propelled our business growth.",
    author: "Jen Apple",
    authorTitle: "Jen Apple, Director of E-commerce at Lids"
  },
  {
    id: 2,
    brandLogo: "/images/blogo2.webp",
    videoPoster: "/public/vidio/vidio-2.mp4",  // Add your second video here
    stat: "22%",
    statLabel: "Increase in Retention",
    quote: "The team's attention to detail and ability to scale our Shopify operations was truly impressive. They are a core part of our digital strategy.",
    author: "Marcus Aurelius",
    authorTitle: "Marcus Aurelius, Head of Tech at Everlast"
  }
];

const brands = [
  "OLAPLEX", "SMURFS", "hiya", "EVERLAST", "PEANUTS", "SHARK TANK",
  "HARVARD", "VERGARA", "FORME", "IPSY", "SESAME STREET", "State Liberty",
  "CASHMERE", "Lids", "BARK BOX", "hiya", "EVERLAST", "PEANUTS", "hiya", "EVERLAST", "PEANUTS",
];

const BrandsAndTestimonials = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const data = testimonialData[index];

  // Pause video when testimonial changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [index]);

  // Toggle video play/pause
  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(e => console.log('Video play failed:', e));
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonialData.length);
  };

  return (
    <div className="bg-[#fbf7ed] min-h-screen flex items-center justify-center px-1 py-10 font-sans">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 overflow-hidden">

        {/* ================= LEFT SIDE: TESTIMONIAL ================= */}
        {/* Added responsive padding and centered it on mobile */}
        <div className="px-4 md:px-8 lg:px-4 relative z-10 w-full">

          {/* Video Thumbnail Area */}
          {/* h-[300px] on mobile to h-[450px] on desktop */}
          <div
            className="relative h-[300px] sm:h-[400px] lg:h-[450px] w-full rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl"
            onClick={toggleVideo}
          >
            <video
              ref={videoRef}
              src={data.videoPoster}
              poster={data.videoPoster}
              className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
              preload="metadata"
              muted
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Play/Pause Overlay */}
            <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300 bg-black/10">
              <div className={`w-16 h-16 md:w-20 md:h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${isPlaying ? 'scale-75 opacity-0' : 'scale-100 opacity-100'}`}>
                {!isPlaying ? (
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A.7.7 0 005 3.41V16.59a.7.7 0 001.3.569l10.5-6.59a.7.7 0 000-1.138L6.3 2.841z" />
                  </svg>
                ) : (
                  <div className="flex gap-1.5">
                    <div className="w-2 h-8 bg-black rounded-full" />
                    <div className="w-2 h-8 bg-black rounded-full" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* White Card */}
          {/* mt-[-40px] on mobile to prevent blocking the play button, mt-[-60px] on desktop */}
          <div className="relative mt-[-40px] lg:mt-[-60px] px-2 sm:px-6 lg:px-2">
            <div className="bg-white rounded-[1.5rem] lg:rounded-[1rem] overflow-hidden">

              {/* Top Section: Logo & Stats */}
              {/* Changed to flex-col on very small screens, flex-row on larger */}
              <div className="flex flex-col sm:flex-row items-stretch">
                <div className="bg-white px-6 py-6 lg:px-10 lg:py-8 rounded-br-[2.5rem] flex items-center justify-center min-w-[150px] lg:min-w-[200px]">
                  <img src={data.brandLogo} alt="Brand Logo" className="h-8 lg:h-10 w-24 lg:w-28 object-contain" />
                </div>

                <div className="flex-1 flex items-center px-4 pb-4 sm:pb-0">
                  <div className="bg-[#fdf9ef] flex items-center gap-3 px-4 py-3 lg:px-6 lg:py-4 rounded-2xl border border-[#e5e0d0] w-full sm:ml-4">
                    <span className="text-black font-black text-xl lg:text-2xl leading-none">
                      {data.stat} <span className="text-lg">↑</span>
                    </span>
                    <span className="text-black/70 text-[10px] lg:text-[12px] font-bold uppercase tracking-tight leading-tight">
                      {data.statLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote Area */}
              <div className="p-6 md:p-8 lg:p-12">
                <p className="text-[#1a1a1a] text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-6 lg:mb-10">
                  "{data.quote}"
                </p>

                <div className="w-full h-[1px] bg-black/10 mb-6 lg:mb-8" />

                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <h4 className="text-black font-black text-lg lg:text-xl mb-1">{data.author}</h4>
                    <p className="text-black/40 text-[13px] lg:text-[15px] font-bold italic tracking-wide">
                      {data.authorTitle}
                    </p>
                  </div>

                  <button
                    onClick={handleNext}
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-black rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shrink-0"
                  >
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE: BRAND GRID ================= */}
        <div className="bg-white rounded-[2rem] lg:rounded-2xl px-6 py-12 md:px-12 lg:px-24 lg:mr-4 flex flex-col justify-center">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-black tracking-tighter font-medium leading-[1.1] mb-10 lg:mb-20 text-center">
              Trusted by the Worlds <br className="hidden md:block" /> Most Innovative Brands
            </h2>

            {/* Brand Scroller - Adjusted height for mobile */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10" />

              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-8 animate-infinite-scroll">
                {[...brands, ...brands, ...brands].map((brand, i) => (
                  <div key={i} className="flex items-center justify-center h-12 md:h-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    <span className="text-base md:text-lg lg:text-xl font-black text-center text-black uppercase tracking-tighter">
                      {brand}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
    @keyframes infinite-scroll {
      from { transform: translateY(0); }
      to { transform: translateY(-33.33%); }
    }
    .animate-infinite-scroll {
      animation: infinite-scroll 30s linear infinite;
    }
    .animate-infinite-scroll:hover {
      animation-play-state: paused;
    }
  `}</style>
    </div>
  );
};

export default BrandsAndTestimonials;
