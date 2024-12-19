"use client";
import ErrorCard from "@/components/ErrorCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useGetAllBroadcastDataQuery } from "@/redux/api/broadcastApiSlice";
import { BroadcastContentItem, BroadcastData } from "@/utilities/interfaces";
import React, { useState } from "react";

type Props = {};

const broadcastData = [
  {
    day: "Monday",
    content: [
      { time: "1970-01-21T11:39:58.171+00:00", text: "Morning Vibes" },
      { time: "1970-01-21T15:39:58.171+00:00", text: "Daily News Brief" },
      { time: "1970-01-21T12:39:58.171+00:00", text: "Afternoon Hits" },
    ],
  },
  {
    day: "Tuesday",
    content: [
      { time: "1970-01-21T20:39:58.171+00:00", text: "Wake-Up Tunes" },
      { time: "1970-01-21T21:39:58.171+00:00", text: "Tech Talk" },
      { time: "1970-01-21T17:39:58.171+00:00", text: "Drive Home" },
    ],
  },
  {
    day: "Wednesday",
    content: [
      { time: "1970-01-21T16:39:58.171+00:00", text: "Midweek Motivation" },
      { time: "1970-01-21T13:39:58.171+00:00", text: "Lunch Beats" },
      { time: "1970-01-21T09:39:58.171+00:00", text: "Evening Relaxation" },
    ],
  },
  {
    day: "Thursday",
    content: [
      { time: "1970-01-21T22:39:58.171+00:00", text: "Morning Energy" },
      { time: "1970-01-21T23:39:58.171+00:00", text: "Noon News" },
      { time: "1970-01-21T19:39:58.171+00:00", text: "Throwback Thursday" },
    ],
  },
  {
    day: "Friday",
    content: [
      { time: "1970-01-21T01:39:58.171+00:00", text: "Feel-Good Friday" },
      { time: "1970-01-21T02:39:58.171+00:00", text: "Afternoon Groove" },
      { time: "1970-01-21T03:39:58.171+00:00", text: "Friday Night Party" },
    ],
  },
  {
    day: "Saturday",
    content: [
      { time: "1970-01-21T04:39:58.171+00:00", text: "Weekend Warmup" },
      { time: "1970-01-21T05:39:58.171+00:00", text: "Sports Talk" },
      { time: "1970-01-21T06:39:58.171+00:00", text: "Late-Night Chill" },
    ],
  },
  {
    day: "Sunday",
    content: [
      { time: "1970-01-21T07:39:58.171+00:00", text: "Sunday Morning Jazz" },
      { time: "1970-01-21T08:39:58.171+00:00", text: "Brunch Beats" },
      { time: "1970-01-21T10:39:58.171+00:00", text: "Relax and Reflect" },
    ],
  },
];

const page = (props: Props) => {
  const [activeTab, setActive] = useState<string>(broadcastData[0]["day"]);

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

  const handleTabClick = (day: string) => {
    setActive(day);
    allBroadcastDataRefetch();
  };

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
