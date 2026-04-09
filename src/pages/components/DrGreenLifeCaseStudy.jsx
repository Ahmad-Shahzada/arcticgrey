import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function DrGreenLifeCaseStudy() {
  const slides = [
    {
      image: '/images/scroll-1.webp',
      video: '/vidio/scroll-1.mp4',
      headline: (
        <>
          An iconic{' '}
          <span className="font-bold text-primary-accent">
            Shopify Store
          </span>{' '}
          designed and built for <span className="font-bold">Green Life Organics</span>
        </>
      ),
      testimonial:
        '“Our customers were given the opportunity to embark on an unforgettable journey, forming meaningful connections with beloved characters and creating a truly one-of-a-kind shopping experience.”',
      author: 'Andy Bert',
      role: 'Founder & CEO, Tired Mama',
      avatar: '/images/Green_Life_medium.webp',
      apps: ['/images/shopify-logo-slide_1024x1024.svg', '/images/smartrr_1024x1024.svg'],
    },
    {
      image: '/images/scroll-1.webp',
      video: '/vidio/scroll-1.mp4',
      headline: (
        <>
          A modern{' '}
          <span className="font-bold text-primary-accent">
            E-commerce
          </span>{' '}
          experience for <span className="font-bold">Organic Living</span>
        </>
      ),
      testimonial:
        '“The new design significantly increased our conversion rate and improved user engagement across all devices.”',
      author: 'Sarah Jenkins',
      role: 'Marketing Director',
      avatar: '/images/Green_Life_medium.webp',
      apps: ['/images/shopify-logo-slide_1024x1024.svg'],
    },
  ];

  return (
    <div className="mx-5 bg-white mt-10 rounded-[24px] lg:rounded-[14px] relative group overflow-hidden">
      <div className="w-full bg-white flex items-center justify-center p-6 md:px-12 lg:px-20 font-sans antialiased text-black">
        <div className="w-full relative">
          {/* Custom navigation buttons (desktop only) */}
          <button className="prev-btn absolute left-[-20px] lg:left-[-70px] top-1/2 -translate-y-1/2 z-30 hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-black text-white hover:bg-primary-accent hover:text-black transition-all cursor-pointer shadow-md">
            <ChevronLeft className="h-8 w-8" strokeWidth={1.5} />
          </button>
          <button className="next-btn absolute right-[-20px] lg:right-[-70px] top-1/2 -translate-y-1/2 z-30 hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-black text-white hover:bg-primary-accent hover:text-black transition-all cursor-pointer shadow-md">
            <ChevronRight className="h-8 w-8" strokeWidth={1.5} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '.prev-btn',
              nextEl: '.next-btn',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={50}
            slidesPerView={1}
            className="w-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-20 items-center">
                  {/* LEFT: image + overlapping video */}
                  <div className="relative w-full aspect-[4/3] order-1">
                    <img
                      src={slide.image}
                      alt="Case Study"
                      className="absolute inset-0 w-full h-full object-contain lg:object-left"
                    />
                    <div className="absolute left-[8%] bottom-[5%] w-[40%] md:w-[38%] aspect-square z-20">
                      <div className="relative w-full h-full rounded-[15px] md:rounded-[24px] overflow-hidden shadow-xl border-4 border-white">
                        <video
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                          key={slide.video}
                        >
                          <source src={slide.video} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: text + testimonial */}
                  <div className="flex flex-col items-center lg:items-start text-left gap-8 md:gap-12 pr-0 lg:pr-6 order-2 mb-6 lg:mb-0">
                    <div className="flex flex-col items-start gap-6">
                      {/* Apps used */}
                      <div className="flex flex-wrap items-center justify-start gap-2">
                        <span className="text-black text-base md:text-lg font-medium tracking-tight">
                          Apps we used:
                        </span>
                        <div className="flex items-center gap-2">
                          {slide.apps.map((appImg, i) => (
                            <img
                              key={i}
                              src={appImg}
                              alt="App logo"
                              className="h-[18px] md:h-[20px] px-1 md:px-2 w-auto"
                            />
                          ))}
                        </div>
                      </div>

                      <h1 className="text-3xl md:text-[45px] leading-[1.2] tracking-tight">
                        {slide.headline}
                      </h1>

                      <a
                        href="#"
                        className="group flex items-center gap-3 text-lg font-semibold text-primary-accent transition-colors hover:text-black"
                      >
                        View Case Study
                        <ArrowRight
                          className="h-5 w-5 transition-transform group-hover:translate-x-1"
                          strokeWidth={2.5}
                        />
                      </a>
                    </div>

                    {/* Testimonial block */}
                    <div className="w-full max-w-[550px] bg-light-bg rounded-[20px] p-6 md:p-8 lg:p-10 text-black text-left border border-primary-soft/40">
                      <blockquote className="text-[14px] md:text-[15px] leading-[1.6] font-normal tracking-tight mb-6 md:mb-8 italic text-zinc-800">
                        {slide.testimonial}
                      </blockquote>

                      <div className="flex items-center gap-4 pt-1">
                        <img
                          src={slide.avatar}
                          alt={slide.author}
                          className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border border-zinc-200"
                        />
                        <div className="flex flex-col">
                          <span className="text-lg md:text-[19px] font-bold tracking-tight text-black">
                            {slide.author}
                          </span>
                          <span className="text-sm md:text-[16px] font-normal text-zinc-600">
                            {slide.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}