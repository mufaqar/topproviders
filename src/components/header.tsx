"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import { LuPhoneCall } from 'react-icons/lu'
import SearchForm from './searchform'
import { FaChevronDown } from 'react-icons/fa6'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [subMenu, setSubMenu] = useState<any>(null)


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



    return (
        <header className="h-auto shadow-sm py-2 !relative">
            <nav className="container mx-auto px-4 flex items-center justify-between ">
                <div className="sm:hidden flex items-center">
                    <button onClick={() => { setOpen(!open) }}>
                        {
                            open ?
                                (<IoMdClose size={24} />)
                                :
                                (<RxHamburgerMenu size={24} />)
                        }
                    </button>
                </div>
                <div className="sm:pl-0 pl-7">
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" width={282} height={58} className='' />
                    </Link>
                </div>
                <div className={`flex items-center ${open ? 'top-[107px] bg-white z-40' : 'top-[-100%]'}`}>
                    <ul className="flex sm:flex-row flex-col sm:items-center md:gap-[3vw] gap-5">

                        <li onMouseEnter={() => handleSubMenu(1)} onMouseLeave={() => setSubMenu(null)} className='flex items-center cursor-pointer group'>
                            <Link href="#" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>Internet & TV</Link>
                            <span className='ml-1'>
                                <FaChevronDown className="text-[#4d4c4f] group-hover:text-[#FECE2F]" />
                            </span>

                            <div className={`${subMenu === 1 ? 'block md:grid' : 'hidden'} pt-12`}>
                                <div id="1" className={`bg-white md:absolute transform -translate-x-1/2 left-1/2 static md:w-[650px] w-full  md:py-8 pt-5  pb-0 md:px-8 px-0 grid gap-5 z-50 md:shadow-[0_0_5px_3px_rgba(0,0,0,0.1)] md:grid-cols-3 `} >
                                    <div className='col-span-2' >
                                        <h2>Internet</h2>
                                        <ul className='grid md:grid-cols-2'>
                                            <li>
                                                <Link href="/" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Internet in my area

                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/spectrum" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Cheap Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/frontier" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Fastest Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/windstream" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    DSL internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/centurylink" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Satellite Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/earthlink" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Fiber Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/hughesnet" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Fixed Wireless Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/viasat" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    5G Internet
                                                </Link>
                                            </li>

                                            Best Internet Deals

                                        </ul>
                                    </div>
                                    <div >
                                        <h2>TV & STREAMING</h2>
                                        <ul>
                                            <li>
                                                <Link href="/">Internet & TV Bundles</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Satellite TV Providers</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Streaming Services</Link>
                                            </li>
                                            <li>
                                                <Link href="/">See All TV Options</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li onMouseEnter={() => handleSubMenu(2)} onMouseLeave={() => setSubMenu(null)} className='flex items-center cursor-pointer group'>
                            <Link href="/providers" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>Providers</Link>
                            <span className='ml-1'>
                                <FaChevronDown className="text-[#4d4c4f] group-hover:text-[#FECE2F]" />
                            </span>
                            <div className={`${subMenu === 2 ? 'block md:grid' : 'hidden'} pt-10 `}>
                                <div id="2" className={`bg-white md:absolute static transform -translate-x-1/2 left-1/2 md:w-[650px] w-full md:py-8 pt-5 pb-0 md:px-8 px-0 grid gap-5 z-50 md:shadow-[0_0_5px_3px_rgba(0,0,0,0.1)] md:grid-cols-3 `} >
                                    <div className='col-span-2' >
                                        <h2>Featured Providers</h2>
                                        <ul className='grid md:grid-cols-2'>
                                            <li>
                                                <Link href="/" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Internet in my area

                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/spectrum" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Cheap Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/frontier" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Fastest Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/windstream" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    DSL internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/centurylink" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Satellite Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/earthlink" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Fiber Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/hughesnet" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Fixed Wireless Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/viasat" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    5G Internet
                                                </Link>
                                            </li>

                                            Best Internet Deals

                                        </ul>
                                    </div>
                                    <div >
                                        <h2>TV & STREAMING</h2>
                                        <ul>
                                            <li>
                                                <Link href="/">Internet & TV Bundles</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Satellite TV Providers</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Streaming Services</Link>
                                            </li>
                                            <li>
                                                <Link href="/">See All TV Options</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li onMouseEnter={() => handleSubMenu(3)} onMouseLeave={() => setSubMenu(null)} className='flex items-center cursor-pointer group'>
                            <Link href="#" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>Locations</Link>
                            <span className='ml-1'>
                                <FaChevronDown className="text-[#4d4c4f] group-hover:text-[#FECE2F]" />
                            </span>
                            <div className={`${subMenu === 3 ? 'block md:grid' : 'hidden'} pt-12 `}>
                                <div className={`bg-white md:absolute static transform -translate-x-1/2 left-1/2 md:w-[650px] w-full md:py-8 pt-5 pb-0 md:px-8 px-0 grid gap-5 z-50 md:shadow-[0_0_5px_3px_rgba(0,0,0,0.1)] md:grid-cols-3  `} >
                                    <div className='col-span-2' >
                                        <h2>TOP STATES</h2>
                                        <ul className='grid md:grid-cols-2'>
                                            <li>
                                                <Link href="/" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Internet in my area

                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/spectrum" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Cheap Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/frontier" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Fastest Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/windstream" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    DSL internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/centurylink" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Satellite Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/earthlink" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Fiber Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/hughesnet" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Fixed Wireless Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/viasat" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    5G Internet
                                                </Link>
                                            </li>

                                            Best Internet Deals

                                        </ul>
                                    </div>
                                    <div >
                                        <h2>TOP CITIES</h2>
                                        <ul>
                                            <li>
                                                <Link href="/">Internet & TV Bundles</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Satellite TV Providers</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Streaming Services</Link>
                                            </li>
                                            <li>
                                                <Link href="/">See All TV Options</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </li>

                        <li onMouseEnter={() => handleSubMenu(4)} onMouseLeave={() => setSubMenu(null)} className='flex items-center cursor-pointer group'>
                            <Link href="#" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>Tools & Resources</Link>
                            <span className='ml-1'>
                                <FaChevronDown className="text-[#4d4c4f] group-hover:text-[#FECE2F]" />
                            </span>
                            <div className={`${subMenu === 4 ? 'block md:grid' : 'hidden'} pt-12 `}>
                                <div className={`bg-white md:absolute static transform -translate-x-1/2 left-1/2 md:w-[650px] w-full md:py-8 pt-5 pb-0 md:px-8 px-0 grid gap-5 z-50 md:shadow-[0_0_5px_3px_rgba(0,0,0,0.1)] md:grid-cols-3 `} >
                                    <div className='col-span-2' >
                                        <h2>TOP STATES</h2>
                                        <ul className='grid md:grid-cols-2'>
                                            <li>
                                                <Link href="/" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Internet in my area

                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/spectrum" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Cheap Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/frontier" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Fastest Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/windstream" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    DSL internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/centurylink" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Satellite Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/earthlink" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Fiber Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/hughesnet" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    Fixed Wireless Internet
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/providers/viasat" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                                    5G Internet
                                                </Link>
                                            </li>

                                            Best Internet Deals

                                        </ul>
                                    </div>
                                    <div >
                                        <h2>TOP CITIES</h2>
                                        <ul>
                                            <li>
                                                <Link href="/">Internet & TV Bundles</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Satellite TV Providers</Link>
                                            </li>
                                            <li>
                                                <Link href="/">Streaming Services</Link>
                                            </li>
                                            <li>
                                                <Link href="/">See All TV Options</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className=" md:block hidden">
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
