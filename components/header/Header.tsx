"use client";
import { HeroContent } from "@/utilities/interfaces";
import { AlignJustify, Play, X } from "lucide-react";
import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const menuLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Broadcast Flow",
    href: "/broadcast",
  },
  {
    label: "Communication",
    href: "/communication",
  },
];

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  const heroContent: HeroContent = {
    "/": {
      title: "Address of Quality Music",
      channel: "107.1",
      link: { text: "Listen Online", url: "/radio" },
    },
    "/broadcast": { title: "Broadcast Flow" },
    "/communication": { title: "Communication" },
  };

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <div
      className={`w-full  ${
        activeLink === "/" ? "h-[70vh] md:h-[100vh]" : "h-[50vh]"
      } relative overflow-x-hidden`}
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/capital-turk-background-img.png"
        className={`w-full h-full -z-1 ${
          activeLink === "/" ? "object-cover md:object-fill" : "object-cover"
        }`}
        alt=""
      />
      {/* <Image src="/capital-turk-background-img.png" alt="" layout="fill" /> */}

      {/* NAV CONTENT */}
      <nav className="absolute top-0 left-0 right-0 flex items-center py-4 z-30">
        <div className="container flex justify-between items-end">
          {/* HAMBURGER */}
          <AlignJustify
            onClick={() => setOpenSidebar(!openSidebar)}
            className={`text-red-500 cursor-pointer block md:hidden`}
            size={32}
          />

          {/* LOGO */}
          <Link href={"/"}>
            <img
              src="/capital-turk-logo.png"
              alt="logo"
              className="cursor-pointer w-full h-[60px]"
            />
          </Link>

          {/* Nav Whatsapp */}
          <Link href="http://wa.me/905391011071/" className="md:hidden">
            {/* ICON */}
            <Image
              className=""
              src="/whatsapp.svg"
              alt="whatsapp-icon"
              width={32}
              height={32}
            />
          </Link>

          {/* MENU LINKS */}
          <div className="hidden flex-1 md:flex justify-center items-center gap-4">
            {menuLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`text-lg font-semibold ${
                  activeLink === link.href ? "text-red-500" : "text-white"
                } hover:text-red-400 transition-colors duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* WHATSAPP CONTACT */}
          {/* https://api.whatsapp.com/send?phone=+905300000000&text=Hey%20Capital%20Turk!%20I'm%20interested%20in%20your%20${heroContent[pathname].title}.%20Please%20let%20me%20know%20more.%20Thanks. */}
          <Link
            href="http://wa.me/905391011071/"
            className="hidden md:flex gap-3 items-center bg-white py-2 px-3 rounded-full"
          >
            {/* ICON */}
            <Image
              className=""
              src="/whatsapp.svg"
              alt="whatsapp-icon"
              width={25}
              height={25}
              priority
            />

            {/* NUMBER */}
            <span className="text-[#4caf50] tracking-wide font-semibold">
              05391011071
            </span>
          </Link>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`absolute z-40 md:hidden bg-[#0d0d1f] top-[100%] left-0 w-full h-[350px] flex flex-col opacity-90 ${
            openSidebar ? "translate-x-0" : "translate-x-[100%]"
          } transition-transform duration-300 ease-out`}
        >
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`text-xl font-semibold border-t flex-1 grid place-items-center ${
                activeLink === link.href ? "text-red-500" : "text-white"
              } hover:text-red-400 transition-colors duration-300`}
            >
              {link.label}
            </Link>
          ))}
          {/* <X
            onClick={() => setOpenSidebar(false)}
            className="text-white cursor-pointer absolute right-8 top-8"
            size={25}
          /> */}
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className={`absolute top-[50%] -translate-y-[50%] left-0 w-full`}>
        <div className="container">
          {activeLink === "/" ? (
            <>
              <p className="text-[36px] leading-[40px] md:text-[48px] md:leading-[68px] font-bold text-white max-w-[400px]">
                {heroContent[activeLink]?.title}
                <i className="text-red-500 font-semibold">
                  {" "}
                  {heroContent[activeLink]?.channel}
                </i>
              </p>
              <Link
                href={heroContent[activeLink]?.link?.url || ""}
                className="text-white text-base font-light tracking-wide mt-2 hover:bg-[#be123c] bg-red-500 py-3 px-7 w-fit rounded-full flex gap-2 items-center transition-colors duration-300"
              >
                <Play className="w-3 h-3" />
                <span className="text-sm md:text-base">
                  {heroContent[activeLink]?.link?.text}
                </span>
              </Link>
            </>
          ) : (
            <p className="text-[36px] leading-[40px] md:text-[48px] md:leading-[68px] font-bold text-white max-w-[400px]">
              {heroContent[activeLink]?.title}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
