import React from 'react'

const ProsAndCons = () => {
     return (
          <>
               {/* pros and cons section  */}
               <div className='grid sm:grid-cols-2 mt-10 gap-5 sm:gap-12'>
                    <div className='bg-gray-200 p-10 rounded-2xl'>
                         <h3 className="sm:text-3xl text-2xl font-medium capitalize leading-10 flex items-center gap-3"><span className='text-blue-600 text-4xl'>+</span> Pros  </h3>
                         <p className='mb-1 text-gray-700'> - Fastest internet speeds available</p>
                         <p className='mb-1 text-gray-700'> - Supports heavy use and multiple users</p>
                    </div>
                    <div className='bg-gray-200 p-10 rounded-2xl'>
                         <h3 className="sm:text-3xl text-2xl font-medium capitalize leading-10 flex items-center gap-3"><span className='text-blue-600 text-4xl'>-</span> Cons  </h3>
                         <p className='mb-1 text-gray-700'> - Higher cost than other internet types</p>
                         <p className='mb-1 text-gray-700'> - Limited availability nationwide</p>
                    </div>
               </div>
          </>
     )
}

export default ProsAndCons