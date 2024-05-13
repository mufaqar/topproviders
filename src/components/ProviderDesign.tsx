import useInternetHandler from '@/hooks/useInternetHandler'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CiStar } from "react-icons/ci";

const ProviderDesign = ({ tProvider, icon, title }: any) => {
  const { createData } = useInternetHandler()
  const summaryData = createData(tProvider)
  var features = summaryData?.summery?.split(', ');

  return (
    <div className='rounded-2xl overflow-hidden shadow-xl'>
      <div className=''>
        <div className='bg-blue-100 p-4 text-2xl flex items-center gap-2 font-medium'>
          <div className='bg-[#EF9831] p-1 rounded-lg text-4xl text-white'>{icon}</div> 
          {title}
          </div>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-5 p-4'>
        <div className='flex justify-center items-center flex-col'>
          <Link href={`/providers/${summaryData.slug}`} target="_blank" >    <Image src={summaryData.logo} alt="Feature Image" width={250} height={100} /></Link>
        </div>
        <ul className="grid items-center justify-center pt-2">
          {
            features?.map((feature: any, idx: number) => (
              <li className="flex gap-2 items-center mb-1" key={idx}>
                <svg className="min-w-[1rem] h-4  text-[#ef9831] font-extrabold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" ></path>
                </svg>
                <span className="text-sm">
                  {feature}
                </span>
              </li>
            ))
          }
        </ul>
        <div className='flex flex-col items-center justify-center'>
          <h5 className="text-center md:text-base text-xs font-bold">Speed from</h5>
          <div className="flex text-lg text-gray-700"><div dangerouslySetInnerHTML={{ __html: (summaryData?.speed)?.replace('-', '<sub> Mbps</sub> - ') }} /><sub className='mt-4 ml-[2px]'>Mbps</sub></div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h5 className="text-center md:text-base text-xs font-bold">Pricing starts from</h5>
          <p className="text-center md:text-xs text-xs">
            <span className="font-extrabold text-[#215690] text-xl"> ${summaryData?.price} </span> /month
          </p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Link href={`/${summaryData.slug}`} className='p-3 bg-[#EF9831] text-white font-medium px-7 rounded-md hover:scale-105'>Check Availability</Link>
        </div>
      </div>
    </div>
  )
}

export default ProviderDesign