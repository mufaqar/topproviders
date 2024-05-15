import Link from 'next/link'
import React from 'react'

const ProvidersCompare = ({ type, providers }: any) => {
     return (
          <>
               <h2 className="sm:text-3xl mt-10 text-2xl font-bold capitalize leading-10">
                    Compare {type} Internet Plans
               </h2>

               <div className="relative overflow-x-auto border  mt-5">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                   {
                                        Th.map((h: string, i: number) => (
                                             <>
                                                  <th key={i} scope="row" className={`px-6 py-6 ${Th.length !== i+1 && 'border-r'} font-medium text-gray-900 whitespace-nowrap dark:text-white`}>
                                                       {h}
                                                  </th>
                                             </>
                                        ))
                                   }

                              </tr>
                         </thead>
                         <tbody>
                              {
                                   providers?.map((provider: any, i: number) => (
                                        <tr key={i} className="odd:bg-white even:bg-gray-100">
                                             <th scope="row" className="px-6 py-6 border-r font-medium text-gray-700 whitespace-nowrap ">
                                                  {provider.title}
                                             </th>
                                             <td className="px-6 py-6 font-medium border-r text-gray-700 whitespace-nowrap">
                                                  ${provider.providersInfo.servicesInfo.internetServices.price} /<sub>month</sub>
                                             </td>
                                             <td className="px-6 py-6 font-medium border-r text-gray-700 whitespace-nowrap flex">
                                                  <div dangerouslySetInnerHTML={{ __html: (provider.providersInfo.servicesInfo.internetServices?.speed)?.replace('-', '<sub> Mbps</sub> - ')}}/><sub className='mt-3 ml-[2px]'>Mbps</sub>
                                             </td>
                                             <td className="px-6 py-6 font-medium border-r text-gray-700 whitespace-nowrap">
                                                  Max Upload
                                             </td>
                                             <td className="px-6 py-6 font-medium border-r text-gray-700 whitespace-nowrap">
                                                 No
                                             </td>
                                             <td className="px-6 py-6 font-medium text-gray-700 whitespace-nowrap">
                                                  <Link href={provider.slug} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Check Availability</Link>
                                             </td>
                                        </tr>
                                   ))
                              }

                         </tbody>
                    </table>
               </div>
               <p className='mt-3 text-gray-500'>Pricing, speeds, offers, and availability vary by service address and are subject to change at any time. Additional fees, taxes, and terms may apply. As of 05/18/2022.</p>
          </>
     )
}

export default ProvidersCompare



const Th: any = [
     "Provider",
     "Starting Price",
     "Max Download",
     "Max Upload",
     "Data Caps",
     "Find Plan",
]