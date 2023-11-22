import Image from 'next/image'
import React from 'react'

const CompareConectionTypes = ({type}:any) => {
  return (
    <>
          <p className='text-lg text-gray-600'>{type} is without a doubt the fastest and most reliable internet connection type. Its speed and bandwidth make it ideal for carrying massive amounts of data from different sources over long distances. It is ideal for households with several users accessing simultaneous streams, gaming online, and working remotely. {type} can be more expensive, depending on the provider, and for now, it has limited availability, especially compared to DSL internet and cable internet.</p>
          <Image src="/images/ConnectionTypes_desktop.svg" className='mt-10' width={1200} height={200} alt=""/>
    </>
  )
}

export default CompareConectionTypes
