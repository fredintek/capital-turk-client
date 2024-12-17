import React from 'react'
import TodayCard from './TodayCard'

type Props = {}

const Today = (props: Props) => {
  return (
    <section className='py-10'>
        <div className="container">
            <h2 className='font-bold text-2xl mb-6'>Today In Capital Turk</h2>

            <div className='flex flex-wrap gap-4'>


                {/* card */}
                <TodayCard time="06:00" title="Capital Turkish Acoustic"/>
                <TodayCard time="06:00" title="Capital Turkish Acoustic"/>
                <TodayCard time="06:00" title="Capital Turkish Acoustic"/>
                <TodayCard time="06:00" title="Capital Turkish Acoustic"/>
                <TodayCard time="06:00" title="Capital Turkish Acoustic"/>
                <TodayCard time="06:00" title="Capital Turkish Acoustic"/>
            </div>
        </div>
    </section>
  )
}

export default Today