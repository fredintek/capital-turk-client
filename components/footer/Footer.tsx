"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const menuLinks = [
  {
    label: "Broadcast Flow",
    href: "/broadcast",
  },
  {
    label: "Communication",
    href: "/communication",
  },
];

const socialLinks = [
  {
    label: (
      <Image src={"/facebook.svg"} alt="facebook-icon" width={35} height={35} />
    ),
    href: "#",
  },
  {
    label: (
      <Image
        src={"/instagram.svg"}
        alt="instagram-icon"
        width={35}
        height={35}
      />
    ),
    href: "#",
  },
  {
    label: (
      <Image src={"/youtube.svg"} alt="youtube-icon" width={35} height={35} />
    ),
    href: "#",
  },
];

const Footer = (props: Props) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <footer className="py-10 bg-[#0d0d1f] mt-auto">
      <div className="container flex justify-between items-center max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-6">
        {/* logo */}
        <div className="flex flex-col items-center gap-2">
          <Link href="/">
            <img src="/capital-turk-logo.png" className="block" alt="logo" />
          </Link>
          <p className="text-white text-sm hover:text-red-500 cursor-pointer transition-colors duration-200">
            Capital Radio &copy; 2024
          </p>
        </div>

        {/* menuLinks */}
        <div className="flex-1 flex justify-center items-center gap-4 max-[900px]:hidden">
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

        {/* socials */}
        <div className="flex justify-center items-center gap-4">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href} className={`cursor-pointer`}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
