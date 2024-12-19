"use client";
import Image from "next/legacy/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { useGetAllFunDataQuery } from "@/redux/api/funApiSlice";
import LoadingSpinner from "../LoadingSpinner";
import ErrorCard from "../ErrorCard";
import { FunData } from "@/utilities/interfaces";

type Props = {};

const Fun = (props: Props) => {
  const {
    data: allFunData,
    error: allFunDataError,
    isLoading: allFunDataIsLoading,
    isError: allFunDataIsError,
  } = useGetAllFunDataQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="font-bold text-2xl mb-6">Don't Miss The Fun</h2>

        {/* Loading State */}
        {allFunDataIsLoading && <LoadingSpinner />}

        {/* Error State */}
        {allFunDataIsError && <ErrorCard errorData={allFunDataError} />}

        {/* Success State */}
        {!allFunDataIsLoading && !allFunDataIsError && allFunData && (
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
            {allFunData?.map((item: FunData, idx: number) => {
              const isEven = idx % 2 === 0;
              return (
                <SwiperSlide className="" key={item?._id}>
                  <div
                    className={`flex-1 flex gap-4 rounded-xl ${
                      isEven ? "bg-[#f9d3d6]" : "bg-[#eccee2]"
                    } shadow-shadow-2 h-[300px] p-4 relative overflow-hidden`}
                  >
                    {/* left */}
                    <div className="relative z-20 h-full flex flex-col justify-center gap-6">
                      <p className="bg-white py-3 px-4 rounded-full flex justify-center items-center gap-2">
                        <span>{`${String(
                          new Date(item.time).getHours()
                        ).padStart(2, "0")}:${new Date(
                          item.time
                        ).getMinutes()}`}</span>
                        <span>Weekdays</span>
                      </p>
                      <p className="text-black max-w-[200px] font-semibold text-xl">
                        {item?.title}
                      </p>
                      <p className="text-black max-w-[180px]">
                        {item?.content}
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

                      <div className="absolute top-[50%] -translate-y-[50%] left-3 w-[200px] h-[200px]">
                        <Image
                          src={item?.image?.url}
                          alt=""
                          className="w-full h-full rounded-full"
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
        )}
      </div>
    </section>
  );
};

export default Fun;
