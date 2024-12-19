"use client";
import ErrorCard from "@/components/ErrorCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useGetAllBroadcastDataQuery } from "@/redux/api/broadcastApiSlice";
import { BroadcastContentItem, BroadcastData } from "@/utilities/interfaces";
import React, { useEffect, useState } from "react";

type Props = {};

const page = (props: Props) => {
  const {
    data: allBroadcastData,
    error: allBroadcastDataError,
    isLoading: allBroadcastDataIsLoading,
    isError: allBroadcastDataIsError,
    refetch: allBroadcastDataRefetch,
  } = useGetAllBroadcastDataQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const [activeTab, setActive] = useState<string>("");

  const handleTabClick = (day: string) => {
    setActive(day);
    allBroadcastDataRefetch();
  };

  useEffect(() => {
    setActive(allBroadcastData![0]?.day || "Monday");
    allBroadcastDataRefetch();
  }, []);

  return (
    <section className="py-10">
      <div className="container">
        {/* Loading State */}
        {allBroadcastDataIsLoading && <LoadingSpinner />}

        {/* Error State */}
        {allBroadcastDataIsError && (
          <ErrorCard errorData={allBroadcastDataError} />
        )}

        {/* Success State */}
        {!allBroadcastDataIsLoading &&
          !allBroadcastDataIsError &&
          allBroadcastData && (
            <>
              {/* header */}
              <div className="broadcast-header flex gap-4 items-center mb-6 overflow-x-auto pb-1">
                {allBroadcastData?.map((item: BroadcastData, idx: number) => {
                  return (
                    <button
                      key={item?._id}
                      onClick={() => handleTabClick(item?.day)}
                      className={`py-3 px-6 rounded-full border ${
                        activeTab === item?.day
                          ? "bg-red-500 border-red-500 text-white rounded-full"
                          : "bg-white border-white text-black hover:border-red-500 hover:text-red-500"
                      } transition-colors duration-500`}
                    >
                      {item?.day}
                    </button>
                  );
                })}
              </div>

              {/* content */}
              <div className="">
                {allBroadcastData
                  ?.find((item: BroadcastData) => item?.day === activeTab)
                  ?.content?.map((item: BroadcastContentItem, idx: number) => {
                    return (
                      <div
                        key={item?._id}
                        className="border-t py-6 pl-6 flex gap-10 items-center"
                      >
                        <p className="text-red-500">
                          {`${String(new Date(item.time).getHours()).padStart(
                            2,
                            "0"
                          )}:${new Date(item.time).getMinutes()}` ||
                            "Unknown Time"}
                        </p>
                        <p>{item?.text}</p>
                      </div>
                    );
                  })}
              </div>
            </>
          )}
      </div>
    </section>
  );
};

export default page;
