"use client";
import React, { useEffect } from "react";
import TodayCard from "./TodayCard";
import { useGetAllTodayDataQuery } from "@/redux/api/todayApiSlice";
import LoadingSpinner from "../LoadingSpinner";
import ErrorCard from "../ErrorCard";
import { TodayData } from "@/utilities/interfaces";

type Props = {};

const Today = (props: Props) => {
  const {
    data: allTodayData,
    error: allTodayDataError,
    isLoading: allTodayDataIsLoading,
    isError: allTodayDataIsError,
  } = useGetAllTodayDataQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="font-bold text-2xl mb-6">Today In Capital Turk</h2>

        {/* Loading State */}
        {allTodayDataIsLoading && <LoadingSpinner />}

        {/* Error State */}
        {allTodayDataIsError && <ErrorCard errorData={allTodayDataError} />}

        {/* Success State */}
        {!allTodayDataIsLoading && !allTodayDataIsError && allTodayData && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allTodayData?.map((item: TodayData, index: number) => (
              <TodayCard
                key={item._id}
                time={
                  `${String(new Date(item.time).getHours()).padStart(
                    2,
                    "0"
                  )}:${new Date(item.time).getMinutes()}` || "Unknown Time"
                }
                title={item.title || "Untitled"}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Today;
