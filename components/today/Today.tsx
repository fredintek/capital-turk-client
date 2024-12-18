"use client";
import React from "react";
import TodayCard from "./TodayCard";
import { useGetAllTodayDataQuery } from "@/redux/api/todayApiSlice";

type Props = {};

const Today = (props: Props) => {
  const { data: allTodayData } = useGetAllTodayDataQuery(undefined);

  console.log("All Today Data", allTodayData);

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="font-bold text-2xl mb-6">Today In Capital Turk</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* card */}
          <TodayCard time="06:00" title="Capital Turkish Acoustic" />
          <TodayCard time="06:00" title="Capital Turkish Acoustic" />
          <TodayCard time="06:00" title="Capital Turkish Acoustic" />
          <TodayCard time="06:00" title="Capital Turkish Acoustic" />
          <TodayCard time="06:00" title="Capital Turkish Acoustic" />
          <TodayCard time="06:00" title="Capital Turkish Acoustic" />
        </div>
      </div>
    </section>
  );
};

export default Today;
