import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Campare_Plan() {
    return (
        <div className='w-full md:overflow-hidden overflow-x-scroll'>
            <div className='flex flex-row md:w-full w-fit bg-[#eceff2] p-5'>
                <div className='w-full min-w-[180px]'>
                    <h4 className='text-2xl'>
                        Our Picks
                    </h4>
                </div>
                <div className='w-full min-w-[180px]'>
                    <Image src='/images/logo/att.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
                </div>
                <div className='w-full min-w-[180px]'>
                    <Image src='/images/logo/Cox.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
                </div>
            </div>
            <div className='divide-y md:w-full w-fit'>
                <div className='flex flex-row md:w-full w-fit p-5'>
                    <div className='w-full min-w-[180px]'>
                        <h4 className='text-base'>
                            Starting Price
                        </h4>
                    </div>
                    <div className='w-full min-w-[180px]'>
                        <p className='text-base font-normal text-center'>
                            $55/mo. – $80/mo.
                        </p>
                    </div>
                    <div className='w-full min-w-[180px]'>
                        <p className='text-base font-normal text-center'>
                            $49.99/mo.
                        </p>
                    </div>
                </div>
                <div className='flex flex-row md:w-full w-fit p-5'>
                    <div className='w-full min-w-[180px]'>
                        <h4 className='text-base'>
                            Max Download
                        </h4>
                    </div>
                    <div className='w-full min-w-[180px]'>
                        <p className='text-base font-normal text-center'>
                            300 Mbps – 940 Mbps
                        </p>
                    </div>
                    <div className='w-full min-w-[180px]'>
                        <p className='text-base font-normal text-center'>
                            1000 Mbps
                        </p>
                    </div>
                </div>
                <div className='flex flex-row md:w-full w-fit p-5'>
                    <div className='w-full min-w-[180px]'>
                        <h4 className='text-base'>
                            Data Caps
                        </h4>
                    </div>
                    <div className='w-full min-w-[180px]'>
                        <p className='text-base font-normal text-center'>
                            No
                        </p>
                    </div>
                    <div className='w-full min-w-[180px]'>
                        <p className='text-base font-normal text-center'>
                            Yes
                        </p>
                    </div>
                </div>
                <div className='flex flex-row md:w-full w-fit p-5'>
                    <div className='w-full min-w-[180px]'>
                        <h4 className='text-base'>
                            Equipment Fee
                        </h4>
                    </div>
                    <div className='w-full min-w-[180px]'>
                        <p className='text-base font-normal text-center'>
                            $10/mo.
                        </p>
                    </div>
                    <div className='w-full min-w-[180px]'>
                        <p className='text-base font-normal text-center'>
                            $6.99/mo.
                        </p>
                    </div>
                </div>
                <div className='flex flex-row md:w-full w-fit p-5'>
                    <div className='w-full min-w-[180px]'>

                    </div>
                    <div className='w-full min-w-[180px]'>
                        <Link href="#" className="text-sm text-white font-[Roboto] uppercase md:px-5 px-2.5 py-2.5 bg-[#FECE2F] hover:bg-[#6041BB] block w-fit mx-auto">
                            Check Availability
                        </Link>
                    </div>
                    <div className='w-full min-w-[180px]'>
                        <Link href="#" className="text-sm text-white font-[Roboto] uppercase md:px-5 px-2.5 py-2.5 bg-[#FECE2F] hover:bg-[#6041BB] block w-fit mx-auto">
                            Check Availability
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Campare_Plan