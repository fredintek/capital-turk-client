"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

type Props = {};

const Fun = (props: Props) => {
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="font-bold text-2xl mb-6">Don't Miss The Fun</h2>
        <Swiper
          id="showcase-carousel"
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper !pb-6"
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
          }}
        >
          {Array.from({ length: 8 }).map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <SwiperSlide className="" key={idx}>
                <div
                  className={`flex-1 flex gap-4 rounded-xl ${
                    isEven ? "bg-[#f9d3d6]" : "bg-[#eccee2]"
                  } h-[300px] p-4 relative overflow-hidden`}
                >
                  {/* left */}
                  <div className="relative z-20 h-full flex flex-col justify-center gap-6">
                    <p className="bg-white py-3 px-4 rounded-full flex justify-center items-center gap-2">
                      <span>07:00</span>
                      <span>Weekdays</span>
                    </p>
                    <p className="max-w-[200px] font-semibold text-xl">
                      Morning Show With Rana
                    </p>
                    <p className="max-w-[180px]">
                      With you every weekday morning on Capital Turk!
                    </p>
                  </div>

                  {/* right */}
                  <div className="absolute right-0 top-0 bottom-0 w-[230px]">
                    <Image
                      src={isEven ? "/pinkback.svg" : "/purpback.svg"}
                      alt=""
                      className="w-full h-full"
                      layout="fill"
                      objectFit="cover"
                    />

                    <div className="absolute bottom-0 left-3 w-[170px] h-[90%]">
                      <Image
                        src="/fun-1.png"
                        alt=""
                        className="w-full h-full"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Fun;
