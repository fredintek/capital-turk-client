"use client";
import Image from "next/legacy/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container h-full flex flex-col gap-4 text-[12px] min-[500px]:text-lg">
      <div className="mt-20 mb-5 mx-auto max-w-[600px] w-[90%] h-[150px]">
        <img
          src="/capital-turk-logo.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 items-center justify-center bg-white rounded-full py-2">
          <div className="w-8 h-8 min-[500px]:h-10 min-[500px]:w-10">
            <img
              src="/facebook.svg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <p className="text-blue-500 font-medium">Visit Our Facebook Page</p>
        </div>

        <div className="flex gap-4 items-center justify-center bg-white rounded-full py-2">
          <div className="w-8 h-8 min-[500px]:h-10 min-[500px]:w-10">
            <img
              src="/instagram.svg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <p className="text-purple-500 font-medium">
            Visit Our Instagram Page
          </p>
        </div>

        <div className="flex gap-4 items-center justify-center bg-white rounded-full py-2">
          <div className="w-8 h-8 min-[500px]:h-10 min-[500px]:w-10">
            <img
              src="/whatsapp.svg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <p className="text-green-500 font-medium">
            For Song Requests: 05391011071
          </p>
        </div>

        <audio className="w-full" controls preload="none">
          <source
            src="https://radyo1.radyo-dinle.tc/8210/stream"
            type="audio/mpeg"
          />
        </audio>
      </div>
    </div>
  );
};

export default page;
