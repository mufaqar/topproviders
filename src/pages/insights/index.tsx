import Campare_Plan from '@/components/campare-plan'
import Image from 'next/image'
import React from 'react'

function Insight() {
  return (
    <main>
      <section className='py-24 bg-[#6041BB]'>
        <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7'>
          <div>
            <h1 className="sm:text-5xl text-4xl leading-normal font-extrabold text-white">
              AT&T vs. Cox Internet: Compare Plans & Fees 2023
            </h1>
          </div>
          <div className='grid grid-cols-2 gap-7'>
            <div className="flex flex-col justify-center items-center border border-gray-100 p-3 h-40 rounded-tl-[80px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[80px] shadow-xl transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10 bg-white">
              <Image src='/images/logo/att.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
            </div>
            <div className="flex flex-col justify-center items-center border border-gray-100 p-3 h-40 rounded-tl-[80px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[80px] shadow-xl transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10 bg-white">
              <Image src='/images/logo/Cox.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
            </div>
          </div>
        </div>
      </section>
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className="md:text-3xl text-xl font-bold leading-7 mb-10">
            Internet Plans
          </h2>
          <Campare_Plan />
        </div>
      </section>
    </main>
  )
}

export default Insight