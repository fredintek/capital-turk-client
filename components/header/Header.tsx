"use client"
import { HeroContent } from '@/utilities/interfaces'
import { AlignJustify, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'


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
    }
]

const Header = () => {
    const [ openSidebar, setOpenSidebar ] = useState(false)
    const pathname = usePathname()
    const [ activeLink, setActiveLink ] = useState(pathname)

    const heroContent: HeroContent = {
        "/": { title: "Address of Quality Music", height: "h-[100vh]", channel: "107.1", link: { text: "Listen Online", url: "" } },
        "/broadcast": { title: "Broadcast Flow", height: "h-[60vh]", },
        "/communication": { title: "Communication", height: "h-[60vh]", },
    }

    useEffect(() => {
    setActiveLink(pathname)
    }, [pathname])

    console.log("openSidebar", openSidebar)

    return (
    <div className={`w-full ${ heroContent[activeLink]?.height } relative`}>

        {/* BACKGROUND IMAGE */}
        <img src="/capital-turk-background-img.png" className={`w-full h-full -z-1 ${ activeLink === "/" ? "object-fill" : "object-cover" }`} alt="" />

        {/* NAV CONTENT */}
        <nav className='absolute top-0 left-0 right-0 flex items-center py-4 z-30 overflow-x-hidden'>
            <div className="container flex justify-between items-end max-[900px]:items-center">
                {/* LOGO */}
                <img src="/capital-turk-logo.png" alt="logo" />

                {/* MENU LINKS */}
                <div className='flex-1 flex justify-center items-center gap-4 max-[900px]:hidden'>
                    {
                        menuLinks.map((link, index) => (
                            <Link key={index} href={link.href} className={`text-lg font-semibold ${activeLink === link.href ? 'text-red-500' : 'text-white'} hover:text-red-400 transition-colors duration-300`}>
                                {link.label}
                            </Link>
                        ))
                    }
                </div>

                {/* WHATSAPP CONTACT */}
                {/* https://api.whatsapp.com/send?phone=+905300000000&text=Hey%20Capital%20Turk!%20I'm%20interested%20in%20your%20${heroContent[pathname].title}.%20Please%20let%20me%20know%20more.%20Thanks. */}
                <a href="" className='max-[900px]:hidden flex gap-3 items-center bg-white py-2 px-3 rounded-full'>
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
                    <span className='text-[#4caf50] tracking-wide font-semibold'>05391011071</span>
                </a>

                {/* HAMBURGER */}
                <AlignJustify onClick={() => setOpenSidebar(true)} className={`text-white cursor-pointer block min-[901px]:hidden ${ openSidebar ? "hidden" : "" }`} size={25}/>
            </div>

            {/* MOBILE MENU */}
            <div className={`fixed z-40 min-[901px]:hidden bg-white top-0 left-0 w-full h-[50vh] flex flex-col items-center justify-center opacity-70 backdrop-blur-sm gap-8 ${ openSidebar ? "translate-x-0" : "translate-x-[100%]" } transition-transform duration-300 ease-out`}>
                {
                    menuLinks.map((link, index) => (
                        <Link key={index} href={link.href} className={`text-lg font-semibold ${activeLink === link.href ? 'text-red-500' : 'text-black'} hover:text-red-400 transition-colors duration-300`}>
                            {link.label}
                        </Link>
                    ))
                }

                <X onClick={() => setOpenSidebar(false)} className='text-black cursor-pointer absolute right-4 top-8' size={25}/>
            </div>
        </nav>

        {/* HERO CONTENT */}
        <div className='border absolute top-[50%] -translate-y-[50%] left-[8%]'>
            <h1 className='text-white text-5xl font-bold tracking-wide w-[515px] leading-tight'>{heroContent[activeLink]?.title}</h1>
            {
                activeLink === "/" && (
                    <>
                        <p className='text-red-500 text-5xl font-bold tracking-wide mt-2'>{heroContent[activeLink]?.channel}</p>
                        <Link href={heroContent[activeLink]?.link?.url || ""} className='text-white text-base font-light tracking-wide block mt-3 bg-red-500 py-4 px-14 w-fit rounded-full'>
                            {heroContent[activeLink]?.link?.text}
                        </Link>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Header