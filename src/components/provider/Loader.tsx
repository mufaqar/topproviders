import React from 'react'
import Get_Lootie from '../lootie'
import animationData from "../../../public/loti/signal.json"
import animationData2 from "../../../public/loti/signal2.json"

const Loader = () => {
  return (
    <div className='fixed z-50 inset-0 !w-full bg-white/70 flex items-center flex-col justify-center'>
        <div className='w-40'>
        <Get_Lootie src={animationData2} />
        </div>
    </div>
  )
}

export default Loader