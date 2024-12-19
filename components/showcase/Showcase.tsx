"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useGetAllShowcaseDataQuery } from "@/redux/api/showcaseApiSlice";
import LoadingSpinner from "../LoadingSpinner";
import ErrorCard from "../ErrorCard";
import { ShowcaseData } from "@/utilities/interfaces";

const Showcase = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const {
    data: allShowcaseData,
    error: allShowcaseDataError,
    isLoading: allShowcaseDataIsLoading,
    isError: allShowcaseDataIsError,
  } = useGetAllShowcaseDataQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  return (
    <section className="py-10">
      <div className="container relative">
        <h2 className="font-bold text-2xl mb-6">Top 10 List</h2>

        {/* Loading State */}
        {allShowcaseDataIsLoading && <LoadingSpinner />}

        {/* Error State */}
        {allShowcaseDataIsError && (
          <ErrorCard errorData={allShowcaseDataError} />
        )}

        {/* Success State */}
        {!allShowcaseDataIsLoading &&
          !allShowcaseDataIsError &&
          allShowcaseData && (
            <>
              <Swiper
                id="showcase-carousel"
                spaceBetween={50}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper !pb-2"
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  if (
                    swiper.params.navigation &&
                    typeof swiper.params.navigation !== "boolean"
                  ) {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                  },
                }}
              >
                {allShowcaseData?.map((item: ShowcaseData, idx: number) => (
                  <SwiperSlide key={item?._id}>
                    <div className="border rounded-xl bg-white pb-5 overflow-hidden shadow-shadow-2">
                      {/* youtube video */}
                      <iframe
                        width="100%"
                        height="200"
                        src={`https://www.youtube.com/embed/${item?.videoLink
                          ?.split("?v=")
                          .pop()}`}
                      />

                      <div className="p-3 flex flex-col gap-10">
                        <h2 className="text-xl font-semibold">{item?.title}</h2>
                        <p className="text-gray-400">{item?.content}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute top-[100%] right-[50%] translate-x-[50%] flex gap-4 py-2">
                {/* Custom Navigation Buttons */}
                <button ref={prevRef}>
                  <ArrowLeft size={32} />
                </button>
                <button ref={nextRef}>
                  <ArrowRight size={32} />
                </button>
              </div>
            </>
          )}
      </div>
    </section>
  );
};

export default Showcase;
