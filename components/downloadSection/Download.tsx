import Image from "next/image";
import React from "react";

type Props = {};

const Download = (props: Props) => {
  return (
    <section className="py-10">
      <div className="container flex justify-center flex-wrap">
        {/* APP STORE */}
        <div className="w-fit">
          <img src="/appstore.svg" className="cursor-pointer" alt="" />
        </div>

        {/* PLAY STORE */}
        <div className="w-fit">
          <img src="/googleplay.svg" className="cursor-pointer" alt="" />
        </div>

        {/* TUNE IN */}
        <div className="w-fit">
          <img src="/tunein.svg" className="cursor-pointer" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Download;
