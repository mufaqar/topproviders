import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const CityBox
    = () => {
        return (
            <ul className="grid sm:grid-cols-4 grid-cols-2 gap-5">
                {Cities?.map((item: any, idx: number) => {
                    return <li key={idx} className='bg-[#F5F5F5] rounded-2xl px-4 py-4 text-[#215690] font-[Roboto] hover:drop-shadow-xl hover:shadow-bg-[#f5f5f5] group'>
                        <Link href= {item?.slug} className="">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl group-hover:underline">
                                    {item?.name}
                                </h3>
                                <BsArrowRight strokeWidth="1" className="items-center text-right" />
                            </div>
                            
                        </Link>
                    </li>
                })}
            </ul>
        )
    }

export default CityBox

export const Cities = [
    {
        name: "Los Angeles",
        slug: "/ca/los-angeles"
    },
    {
        name: "New York",
        slug: "/ny/new-york"
    },
    {
        name: "Boston",
        slug: "in/boston"
    },
    {
        name: "Las Vegas",
        slug: "/nv/las-vegas"
    },
    {
        name: "Phoenix",
        slug: "/az/phoenix"
    },
    {
        name: "Atlanta",
        slug: "/tx/atlanta"
    },
    {
        name: "Houston",
        slug: "/ak/houston"
    },
    {
        name: "Denver",
        slug: "/co/dever"
    },
    {
        name: "Orlando",
        slug: "/ok/orlando"
    },
    {
        name: "Chicago",
        slug: "/il/chicago"
    },
    {
        name: "Detroit",
        slug: "/or/detroit"
    },
    {
        name: "Philadelphia",
        slug: "/pa/philadelphia"
    },
]