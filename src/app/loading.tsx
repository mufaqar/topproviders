import Loader from '@/components/provider/Loader'
import React from 'react'

const loading = () => {
  return (
    <div className='bg-white flex justify-center items-center flex-col'>
        <Loader/>
    </div>
  )
}

export default loading