import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Blogpost({ data }: any) {
    return (
        <div className='relative bg-gradient-to-b from-[#000000] to-[#6746C8] group'>
            <Image src="/images/blog2.png" alt="blog2" width={435} height={377} className='opacity-[.3] group-hover:opacity-70 transition duration-300 ease-in-out' />
            <div className='grid gap-3 p-5 absolute bottom-0'>
                <Link href="#" className='text-lg font-normal text-[#FECE2F]'>
                    News
                </Link>
                <Link href={`/blog/${data?.node.slug}`} className='md:text-2xl text-xl font-bold text-white'>
                    {data?.node.title}
                </Link>
                <Link href="#" className='text-lg font-normal text-[#FECE2F]'>
                    May 6, 2023
                </Link>
            </div>
        </div>
    )
}
