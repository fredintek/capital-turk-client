import React from 'react'

type Props = {
    time: string;
    title: string;
}

const TodayCard = ({ time, title }: Props) => {
  return (
    <div className='bg-white rounded-2xl py-5 px-3 flex flex-col min-w-[285px] max-w-[285px] h-[180px] shadow-shadow-1'>
        {/* time */}
        <p className='bg-red-500 text-white px-6 py-2 rounded-full w-fit'>{time}</p>

        <p className='text-[20px] font-semibold mt-6'>{title}</p>
    </div>
  )
}

export default TodayCard