import Image from "next/legacy/image";
import React from "react";

type Props = {};

const Download = (props: Props) => {
  return (
    <section className="py-10">
      <div className="container flex justify-center flex-wrap">
        {/* APP STORE */}
        <img
          src="/appstore.svg"
          className="cursor-pointer h-[140px] w-fit"
          alt=""
        />

        {/* PLAY STORE */}
        <img
          src="/googleplay.svg"
          className="cursor-pointer h-[140px] w-fit"
          alt=""
        />

        {/* TUNE IN */}
        <img
          src="/tunein.svg"
          className="cursor-pointer h-[140px] w-fit"
          alt=""
        />
      </div>
    </section>
  );
};

export default Download;
