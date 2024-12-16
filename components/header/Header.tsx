"use client"
import { HeroContent } from '@/utilities/interfaces'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}


const Header = ({}: Props) => {
    const pathname = usePathname()
    const heroContent: HeroContent = {
        "/": { title: "Address of Quality Music", channel: "107.1", link: { text: "Listen Online", url: "" } },
        "/broadcast": { title: "Broadcast Flow", },
        "/communication": { title: "Communication", },
    }

    console.log("PATHNAME: ", pathname)

    return (
    <div className='bg-gray-400 w-full h-[100vh]'>
        <p>HEADER</p>
    </div>
  )
}

export default Header