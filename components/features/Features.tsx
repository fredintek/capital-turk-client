import Image from "next/legacy/image";
import React from "react";

type Props = {};

const Features = (props: Props) => {
  return (
    <section className="py-10">
      <div className="container flex flex-col items-center md:flex-row md:items-start gap-4">
        <div className="flex flex-col items-center flex-1 max-w-[600px] md:flex-row md:items-center gap-4 h-[200px]">
          {/* left */}
          <img src="/feature-1.svg" className="h-[150px] w-fit" alt="" />

          {/* right */}
          <div className="flex flex-col items-center md:items-start justify-center gap-2">
            <h1 className="text-xl font-bold text-center md:text-start">
              Uniterrupted broadcasting
            </h1>
            <p className="text-sm text-center md:text-start">
              Enjoy uninterrupted live broadcast with great and entertaining
              programs
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center flex-1 max-w-[600px] md:flex-row md:items-center gap-4 h-[200px]">
          {/* left */}
          <img src="/feature-2.svg" className="h-[150px] w-fit" alt="" />

          {/* right */}
          <div className="flex flex-col items-center md:items-start justify-center gap-2">
            <h1 className="text-xl font-bold text-center md:text-start">
              Uniterrupted broadcasting
            </h1>
            <p className="text-sm text-center md:text-start">
              Enjoy uninterrupted live broadcast with great and entertaining
              programs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
