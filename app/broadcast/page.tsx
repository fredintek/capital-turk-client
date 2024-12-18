"use client";
import React, { useState } from "react";

type Props = {};

const broadcastData = [
  {
    day: "Monday",
    content: [
      { time: "06:00", content: "Morning Vibes" },
      { time: "10:00", content: "Daily News Brief" },
      { time: "15:00", content: "Afternoon Hits" },
    ],
  },
  {
    day: "Tuesday",
    content: [
      { time: "07:00", content: "Wake-Up Tunes" },
      { time: "11:00", content: "Tech Talk" },
      { time: "17:00", content: "Drive Home" },
    ],
  },
  {
    day: "Wednesday",
    content: [
      { time: "08:00", content: "Midweek Motivation" },
      { time: "13:00", content: "Lunch Beats" },
      { time: "20:00", content: "Evening Relaxation" },
    ],
  },
  {
    day: "Thursday",
    content: [
      { time: "06:30", content: "Morning Energy" },
      { time: "12:00", content: "Noon News" },
      { time: "18:00", content: "Throwback Thursday" },
    ],
  },
  {
    day: "Friday",
    content: [
      { time: "07:30", content: "Feel-Good Friday" },
      { time: "14:00", content: "Afternoon Groove" },
      { time: "21:00", content: "Friday Night Party" },
    ],
  },
  {
    day: "Saturday",
    content: [
      { time: "09:00", content: "Weekend Warmup" },
      { time: "16:00", content: "Sports Talk" },
      { time: "22:00", content: "Late-Night Chill" },
    ],
  },
  {
    day: "Sunday",
    content: [
      { time: "08:00", content: "Sunday Morning Jazz" },
      { time: "12:00", content: "Brunch Beats" },
      { time: "19:00", content: "Relax and Reflect" },
    ],
  },
];

const page = (props: Props) => {
  const [activeTab, setActive] = useState<string>(broadcastData[0]["day"]);

  const handleTabClick = (day: string) => {
    setActive(day);
  };

  return (
    <section className="py-10">
      <div className="container">
        {/* header */}
        <div className="broadcast-header flex gap-4 items-center mb-6 overflow-x-auto pb-1">
          {broadcastData?.map((item, idx) => {
            return (
              <button
                key={idx}
                onClick={() => handleTabClick(item.day)}
                className={`py-3 px-6 rounded-full border ${
                  activeTab === item.day
                    ? "bg-red-500 border-red-500 text-white rounded-full"
                    : "bg-white border-white text-black hover:border-red-500 hover:text-red-500"
                } transition-colors duration-500`}
              >
                {item.day}
              </button>
            );
          })}
        </div>

        {/* content */}
        <div className="">
          {broadcastData
            ?.find((item) => item.day === activeTab)
            ?.content?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="border-t py-6 pl-6 flex gap-10 items-center"
                >
                  <p className="text-red-500">{item.time}</p>
                  <p>{item.content}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default page;
