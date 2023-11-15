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
    const [subMenu, setSubMenu] = useState(false)
    const [subMenu1, setSubMenu1] = useState(false)
    return (
        <header className="h-auto shadow-sm py-2">
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
                <div className="sm:pl-0 pl-7 sm:w-1/3 w-full">
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" width={282} height={58} className='' />
                    </Link>
                </div>
                <div className={`sm:w-2/3 w-full sm:justify-center sm:static absolute left-0 sm:py-0 py-7 sm:px-0 px-5 flex items-center ${open ? 'top-[107px] bg-white z-40' : 'top-[-100%] '}`}>
                    <ul className="flex sm:flex-row flex-col sm:items-center md:gap-[3vw] gap-5">
                        <li onMouseEnter={() => { setSubMenu(true), setSubMenu1(false) }} onClick={() => { setSubMenu(!subMenu) }} className='flex items-center gap-2 cursor-pointer group'>
                            <Link href="#" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>TV</Link>
                            <span>
                                <FaChevronDown className="text-[#4d4c4f] group-hover:text-[#FECE2F]" />
                            </span>
                            <ul className={`bg-white md:absolute static top-[4rem] md:w-[650px] w-full md:py-8 pt-5 pb-0 md:px-8 px-0 grid gap-5 z-50 md:shadow-[0_0_5px_3px_rgba(0,0,0,0.1)] md:grid-cols-3  ${subMenu ? 'block md:grid' : 'hidden'}`} onMouseLeave={() => setSubMenu(false)}>
                                <li>
                                    <Link href="/providers/spectrum" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                        Spectrum
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/dish" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                        Dish
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/directv" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                        Directv
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/optimum" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                        Optimum
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/cox" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                        Cox
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/xfinity" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                        Xfinity
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li onMouseEnter={() => { setSubMenu1(true), setSubMenu(false) }} onClick={() => { setSubMenu1(!subMenu1) }} className='flex items-center gap-2 cursor-pointer group'>
                            <Link href="#" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>Internet</Link>
                            <span>
                                <FaChevronDown className="text-[#4d4c4f] group-hover:text-[#FECE2F]" />
                            </span>
                            <ul className={`bg-white md:absolute static top-[4rem] md:w-[650px] w-full md:py-8 pt-5 pb-0 md:px-8 px-0 grid gap-5 z-50 md:shadow-[0_0_5px_3px_rgba(0,0,0,0.1)] md:grid-cols-3  ${subMenu1 ? 'block md:grid' : 'hidden'}`} onMouseLeave={() => setSubMenu1(false)}>
                                <li>
                                    <Link href="/providers/att" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                        AT&T
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/spectrum" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                        Spectrum
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/frontier" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                        Frontier
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/windstream" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                        Windstream
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/centurylink" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                        Centurylink
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/earthlink" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                        Earthlink
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/hughesnet" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                        HughesNet
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/viasat" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                        Viasat
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/t-mobile" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>
                                        T-Mobile
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/providers" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>Providers</Link>
                        </li>
                        <li>
                            <Link href="/blog" className='text-sm font-bold tracking-normal text-[#4d4c4f] hover:text-[#FECE2F] AxiformaRegular'>Blog</Link>
                        </li>

                    </ul>
                </div>
                <div className="sm:w-1/3 w-full md:block hidden">
                    <Link href="/contact-us" className='text-sm font-bold tracking-normal AxiformaRegular bg-[#FECE2F] text-[#4B4B4B] py-3 px-12 rounded-[3px] flex w-fit ml-auto'>
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
