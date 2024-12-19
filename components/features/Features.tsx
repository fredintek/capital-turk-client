import Image from "next/legacy/image"
import React from 'react'

type Props = {}

const Features = (props: Props) => {
  return (
    <section className='py-10'>
        <div className="container flex gap-4 max-[800px]:flex-col">
            <div className='max-w-[600px] flex-1 flex gap-4 h-[200px]'>
                {/* left */}
                <div className="relative sm:w-[250px] md:w-[200px] w-[300px] h-[200px]">
                    <Image
                        src="/feature-1.svg"
                        alt="Feature Image"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                {/* right */}
                <div className='flex flex-col justify-center gap-6'>
                    <h1 className='font-bold text-xl min-[800px]:text-[22px]'>Uniterrupted broadcasting</h1>
                    <p>Enjoy uninterrupted live broadcast with great and entertaining programs</p>
                </div>
            </div>

            <div className='max-w-[600px] flex-1 flex gap-4 h-[200px]'>
                {/* left */}
                <div className="relative sm:w-[250px] md:w-[200px] w-[300px] h-[200px]">
                    <Image
                        src="/feature-2.svg"
                        alt="Feature Image"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>


                {/* right */}
                <div className='flex flex-col justify-center gap-6'>
                    <h1 className='font-bold text-xl min-[800px]:text-[22px]'>Uniterrupted broadcasting</h1>
                    <p>Enjoy uninterrupted live broadcast with great and entertaining programs</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features