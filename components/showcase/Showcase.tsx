"use client"
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from "lucide-react";

const Showcase = () => {

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="py-10">
      <div className="container relative">
        <h2 className='font-bold text-2xl mb-6'>Top 10 List</h2>
        <Swiper
          id="showcase-carousel"
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16
            },
          }}
        >
          {
            Array.from({ length: 8 }).map((item, _) => (
              <SwiperSlide>
                <div className="border rounded-xl bg-white pb-5 overflow-hidden">
                  {/* youtube video */}
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player" 
                  />

                  <div className="p-3 flex flex-col gap-10">
                    <h2 className="text-xl font-semibold">Wound</h2>
                    <p className="text-gray-400">BILAL SONSES & ZIYNET SALI</p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>

        <div className="absolute top-[100%] right-[50%] translate-x-[50%] flex gap-4 py-2">
          {/* Custom Navigation Buttons */}
          <button ref={prevRef}>
            <ArrowLeft size={32}/>
          </button>
          <button ref={nextRef}>
            <ArrowRight size={32}/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
