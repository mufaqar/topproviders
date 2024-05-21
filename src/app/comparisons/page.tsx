// import Main from '@/components/main'
// import { ProviderBox } from '@/components/provider/provider-box'
// import apolloClient from '@/config/client'
// import { GET_ALL_PROVIDERS } from '@/config/query'
// import { GetStaticProps } from 'next'
// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useState } from 'react'
// import { FaArrowRightLong } from 'react-icons/fa6'
// import Head from 'next/head';
// import Compare_Form from '@/components/compare-form'
// import { AiOutlinePlus } from 'react-icons/ai'

// function Comparsons({ allProviders }: any) {
//     const [open, setOpen] = useState<any>(1);
//     const handleFaq = (id: any) => {
//         if (open === id) {
//             return setOpen(null)
//         }
//         setOpen(id)
//     }
//     return (
//         <main>
//             <section className='py-24 bg-[#6041BB]'>
//                 <div className='container mx-auto px-4'>
//                     <h1 className="sm:text-5xl text-4xl leading-normal font-extrabold text-white text-center">
//                         Compare Internet Providers
//                     </h1>
//                     <p className='text-lg font-medium text-white text-center mt-2'>
//                         Use the dropdown here to select providers to compare
//                     </p>
//                     <div className='max-w-screen-sm mx-auto mt-10'>
//                         <Compare_Form />
//                     </div>
//                 </div>
//             </section>

//             <section className="py-16 ">
//                 <div className='container mx-auto px-4 !max-w-[1024px]'>
//                     <h2 className="md:text-3xl text-xl font-bold leading-7 mb-10">
//                         All Comparisons
//                     </h2>
//                     <div className='grid gap-7'>
//                         {[0, 1, 2, 3, 4].map(({ item, idx }: any) => {
//                             return (
//                                 <Link href="#" key={idx} className='flex md:flex-row flex-col justify-center items-center border border-gray-100 shadow-xl transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10 bg-white rounded-xl'>
//                                     <Image src="/images/att-vs-cox.png" alt='att-vs-cox' width={720} height={480} className='md:w-1/3 w-full md:rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none rounded-tl-xl rounded-tr-xl' />
//                                     <div className='md:w-2/3 w-full p-5'>
//                                         <h4 className='text-xl font-semibold'>
//                                             AT&T vs. Cox Internet: Compare Plans & Fees 2023
//                                         </h4>
//                                         <p className='text-base font-normal'>
//                                             Making a choice between AT&T vs Cox internet plans? Our provider comparison gives you side-by-side looks to help you mak …
//                                         </p>
//                                     </div>
//                                 </Link>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </section>
//             <section className='py-16'>
//                 <div className='container mx-auto px-4'>
//                     <div className='grid gap-7'>
//                         <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
//                             <div className="">
//                                 <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(1)}>
//                                     <p className="text-lg font-semibold " >
//                                         How do I compare internet providers that are in my area?
//                                     </p>
//                                     <span className="text-lightBlue">

//                                         <AiOutlinePlus size={24}
//                                             className={`${open === 1 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

//                                     </span>
//                                 </div>
//                             </div>
//                             <div className={`${open === 1 ? 'flex' : 'hidden'} `}>
//                                 <p className="text-base font-medium mt-5" >
//                                     TopProviders makes it easy to compare top internet providers to help you find the best solution to fit your lifestyle. Simply select one of the providers in the “Provider 1” drop-down above. Then, select another provider in the second drop-down. Click “Compare” to see a detailed comparison between the two selected providers.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
//                             <div className="">
//                                 <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(2)}>
//                                     <p className="text-lg font-semibold " >
//                                         How do I compare internet providers that are in my area?
//                                     </p>
//                                     <span className="text-lightBlue">

//                                         <AiOutlinePlus size={24}
//                                             className={`${open === 2 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

//                                     </span>
//                                 </div>
//                             </div>
//                             <div className={`${open === 2 ? 'flex' : 'hidden'} `}>
//                                 <p className="text-base font-medium mt-5" >
//                                     TopProviders makes it easy to compare top internet providers to help you find the best solution to fit your lifestyle. Simply select one of the providers in the “Provider 1” drop-down above. Then, select another provider in the second drop-down. Click “Compare” to see a detailed comparison between the two selected providers.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
//                             <div className="">
//                                 <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(3)}>
//                                     <p className="text-lg font-semibold " >
//                                         How do I compare internet providers that are in my area?
//                                     </p>
//                                     <span className="text-lightBlue">

//                                         <AiOutlinePlus size={24}
//                                             className={`${open === 3 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

//                                     </span>
//                                 </div>
//                             </div>
//                             <div className={`${open === 3 ? 'flex' : 'hidden'} `}>
//                                 <p className="text-base font-medium mt-5" >
//                                     TopProviders makes it easy to compare top internet providers to help you find the best solution to fit your lifestyle. Simply select one of the providers in the “Provider 1” drop-down above. Then, select another provider in the second drop-down. Click “Compare” to see a detailed comparison between the two selected providers.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
//                             <div className="">
//                                 <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(4)}>
//                                     <p className="text-lg font-semibold " >
//                                         How do I compare internet providers that are in my area?
//                                     </p>
//                                     <span className="text-lightBlue">

//                                         <AiOutlinePlus size={24}
//                                             className={`${open === 4 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

//                                     </span>
//                                 </div>
//                             </div>
//                             <div className={`${open === 4 ? 'flex' : 'hidden'} `}>
//                                 <p className="text-base font-medium mt-5" >
//                                     TopProviders makes it easy to compare top internet providers to help you find the best solution to fit your lifestyle. Simply select one of the providers in the “Provider 1” drop-down above. Then, select another provider in the second drop-down. Click “Compare” to see a detailed comparison between the two selected providers.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
//                             <div className="">
//                                 <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(5)}>
//                                     <p className="text-lg font-semibold " >
//                                         How do I compare internet providers that are in my area?
//                                     </p>
//                                     <span className="text-lightBlue">

//                                         <AiOutlinePlus size={24}
//                                             className={`${open === 5 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

//                                     </span>
//                                 </div>
//                             </div>
//                             <div className={`${open === 5 ? 'flex' : 'hidden'} `}>
//                                 <p className="text-base font-medium mt-5" >
//                                     TopProviders makes it easy to compare top internet providers to help you find the best solution to fit your lifestyle. Simply select one of the providers in the “Provider 1” drop-down above. Then, select another provider in the second drop-down. Click “Compare” to see a detailed comparison between the two selected providers.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     )
// }

// export default Comparsons


import React from 'react'

function Comapirpage() {
  return (
    <div>Comapirpage</div>
  )
}

export default Comapirpage