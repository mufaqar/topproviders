"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa6'
import { Cities, internet, tv, providers, resources, states, tools, Providers_Data } from '@/const/exports'
import apolloClient from '@/config/client'
import { Providers_Services_Types } from '@/config/query'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [subMenu, setSubMenu] = useState<any>(null)
    const [stypes, setStypes] = useState<any>()

    const [dropdown, setDropdown] = useState(null);

    const handleMenu = (id: any) => {
        if (dropdown === id) {
            return setDropdown(null)
        }
        setDropdown(id)
        //setDropdown(!dropdown)
    }

    const handleSubMenu = (id: any) => {
        setSubMenu(id)
    }

    useEffect(()=>{
        (async()=>{
            const [providersServicesTypeRes] = await Promise.all([
                apolloClient.query({ query: Providers_Services_Types }),
            ]);
            const providersServicesType = providersServicesTypeRes?.data?.serviceTypes?.nodes;
            setStypes(providersServicesType)
        })()
    },[])

    return (
        <header className="h-auto shadow-sm py-2 !relative">
            <nav className="container mx-auto px-4 flex items-center justify-between ">
                <div className="">
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" width={240} height={41} className='w-40 md:w-[240px]' />
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => { setOpen(!open) }}>
                        { open ? (<IoMdClose size={24} />) : (<RxHamburgerMenu size={24} />)}
                    </button>
                </div>
                <div className={`flex absolute md:relative items-center ${open ? 'top-[43.5px] left-0 shadow-lg right-0 p-6 w-full !bg-white z-40' : 'top-[-400%]'}`}>
                    <ul className="flex md:flex-row flex-col sm:items-center md:gap-[3vw] gap-5">

                        <li onMouseEnter={() => handleSubMenu(1)} onMouseLeave={() => setSubMenu(null)} className=' items-center cursor-pointer group'>
                            <div className='flex items-center md:py-4'>
                                <Link href="#" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>Internet & TV</Link>
                                <span className='ml-1'>
                                    <FaChevronDown className="text-[#4d4c4f] group-hover:text-[#FECE2F]" />
                                </span>
                            </div>
                            <div className={`${subMenu === 1 ? 'block md:grid' : 'hidden'} mt-4 md:mt-0`}>
                                <div id="1" className={`bg-white md:absolute transform md:-translate-x-1/2 md:left-1/2 relative md:w-[650px] w-full md:py-8 md:pt-5  pb-0 md:px-8 px-0 grid gap-5 z-50 md:shadow-[0_0_5px_3px_rgba(0,0,0,0.1)] grid-cols-2 md:grid-cols-3 `} >
                                    <div className='col-span-2' >
                                        <h2 className='uppercase border-b-2 bottom-1'>Services Type</h2>
                                        <ul className='grid md:grid-cols-2 mt-2'>
                                            {
                                                stypes?.map((s: any, id: number) => (
                                                    <li key={id} onClick={()=>handleSubMenu(0)}>
                                                        <Link href={"/"+s.slug} className='text-sm  tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                            {s.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                    <div >
                                        <h2>TV & STREAMING</h2>
                                        <ul>
                                            {
                                                tv?.map((s: any, id: number) => (
                                                    <li key={id} onClick={()=>handleSubMenu(0)}>
                                                        <Link href={s.slug} className='text-sm  tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                            {s.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li onMouseEnter={() => handleSubMenu(2)} onMouseLeave={() => setSubMenu(null)} className=' items-center cursor-pointer group'>
                            <div className='flex items-center md:py-4'>
                                <Link href="/providers" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>Providers</Link>
                                <span className='ml-1'>
                                    <FaChevronDown className="text-[#4d4c4f] group-hover:text-[#FECE2F]" />
                                </span>
                            </div>
                            <div className={`${subMenu === 2 ? 'block md:grid' : 'hidden'} mt-4 md:mt-0`}>
                                <div id="1" className={`bg-white md:absolute transform md:-translate-x-1/2 md:left-1/2 relative md:w-[650px] w-full md:py-8 md:pt-5  pb-0 md:px-8 px-0 grid gap-5 z-50 md:shadow-[0_0_5px_3px_rgba(0,0,0,0.1)] grid-cols-2 md:grid-cols-2 `} >
                                    <div className='col-span-2' >
                                        <h2 className='font-bold  border-b-2 mb-2 pb-2'>Top Providers</h2>
                                        <ul className='grid md:grid-cols-3'>
                                            {
                                                Providers_Data?.map((s: any, id: number) => (
                                                    <li key={id} onClick={()=>handleSubMenu(0)}>
                                                        <Link href={s.link} className='text-sm tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                            {s.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </li>

                        <li onMouseEnter={() => handleSubMenu(3)} onMouseLeave={() => setSubMenu(null)} className=' items-center cursor-pointer group'>
                            <div className='flex items-center md:py-4'>
                                <Link href="#" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>States</Link>
                                <span className='ml-1'>
                                    <FaChevronDown className="text-[#4d4c4f] group-hover:text-[#FECE2F]" />
                                </span>
                            </div>
                            <div className={`${subMenu === 3 ? 'block md:grid' : 'hidden'} mt-4 md:mt-0`}>
                                <div id="1" className={`bg-white md:absolute transform md:-translate-x-1/2 md:left-1/2 relative md:w-[650px] w-full md:py-8 md:pt-5  pb-0 md:px-8 px-0 grid gap-5 z-50 md:shadow-[0_0_5px_3px_rgba(0,0,0,0.1)] grid-cols-2 md:grid-cols-4 `} >
                                    <div className='col-span-2' >
                                        <h2 className='uppercase border-b-2 bottom-1 pb-2 mb-2'>TOP STATES</h2>
                                        <ul className='grid md:grid-cols-2'>
                                            {
                                                states?.map((s: any, id: number) => (
                                                    <li key={id} onClick={()=>handleSubMenu(0)}>
                                                        <Link href={`/internet${s.slug}`} className='text-sm  tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                            {s.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                    <div className='col-span-2' >
                                        <h2 className='uppercase border-b-2 bottom-1 pb-2 mb-2'>TOP CITIES</h2>
                                        <ul className='grid md:grid-cols-2'>
                                            {
                                                Cities?.map((s: any, id: number) => (
                                                    <li key={id} onClick={()=>handleSubMenu(0)}>
                                                        <Link href={`/internet${s.slug}`} className='text-sm tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                            {s.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li onMouseEnter={() => handleSubMenu(4)} onMouseLeave={() => setSubMenu(null)} className=' items-center cursor-pointer group'>
                            <div className='flex items-center md:py-4'>
                                <Link href="#" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>Tools & Resources</Link>
                                <span className='ml-1'>
                                    <FaChevronDown className="text-[#4d4c4f] group-hover:text-[#FECE2F]" />
                                </span>
                            </div>
                            <div className={`${subMenu === 4 ? 'block md:grid' : 'hidden'} mt-4 md:mt-0`}>
                                <div id="1" className={`bg-white md:absolute transform md:-translate-x-1/2 md:left-1/2 relative md:w-[650px] w-full md:py-8 md:pt-5  pb-0 md:px-8 px-0 grid gap-5 z-50 md:shadow-[0_0_5px_3px_rgba(0,0,0,0.1)] grid-cols-2 md:grid-cols-3 `} >
                                    <div className='col-span-2' >
                                        <h2>Featured Articles</h2>
                                        <ul className='grid md:grid-cols-2'>
                                            {
                                                resources?.map((s: any, id: number) => (
                                                    <li key={id} onClick={()=>handleSubMenu(0)}>
                                                        <Link href={s.slug} className='text-sm tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                            {s.name}
                                                        </Link>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                    <div >
                                        <h2>Resources</h2>
                                        <ul>
                                            <li>
                                                <Link href="/comparison">Compare providers</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>


                    </ul>
                </div>
                <div className=" lg:block hidden">
                    <Link href="/contact-us" className='text-sm whitespace-nowrap font-bold tracking-normal AxiformaRegular bg-[#FECE2F] text-[#4B4B4B] py-3 px-12 rounded-[3px] flex w-fit ml-auto'>
                        Contact Us
                    </Link>
                    {/* <div className='max-w-[270px]'>
                        <SearchForm />
                    </div> */}
                </div>
            </nav>
        </header>
    )
}

export default Header




