"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import { LuPhoneCall } from 'react-icons/lu'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [subMenu, setSubMenu] = useState(false)
    const [subMenu1, setSubMenu1] = useState(false)
    return (
        <header className="h-auto shadow-md py-5 font-[Roboto]">
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
                        <Image src="/logo.png" alt="Logo" width={155} height={34} className='' />
                    </Link>
                </div>
                <div className={`sm:w-2/3 w-full sm:justify-end sm:static absolute left-0 sm:py-0 py-7 sm:px-0 px-5 flex items-center ${open ? 'top-[107px] bg-white z-40' : 'top-[-100%] '}`}>
                    <ul className="flex sm:flex-row flex-col sm:items-center md:gap-[3vw] gap-5">
                        <li onMouseEnter={() => { setSubMenu(true), setSubMenu1(false) }} onClick={() => { setSubMenu(!subMenu) }}>
                            <Link href="#" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>TV</Link>
                            <ul className={`bg-white md:absolute static top-[4.6rem] md:w-40 w-full md:py-4 pt-5 pb-0 md:px-4 px-0 grid gap-5 z-50 md:shadow-xl  ${subMenu ? 'block' : 'hidden'}`} onMouseLeave={() => setSubMenu(false)}>
                                <li>
                                    <Link href="/providers/spectrum" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Spectrum
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/dish" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        DISH
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/directv" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        DIRECTV
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/optimum" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Optimum
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/cox" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Cox
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/xfinity" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Xfinity
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li onMouseEnter={() => { setSubMenu1(true), setSubMenu(false) }} onClick={() => { setSubMenu1(!subMenu1) }}>
                            <Link href="#" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>Internet</Link>
                            <ul className={`bg-white md:absolute static top-[4.6rem] md:w-40 w-full md:py-4 pt-5 pb-0 md:px-4 px-0 grid gap-5 z-50 md:shadow-xl  ${subMenu1 ? 'block' : 'hidden'}`} onMouseLeave={() => setSubMenu1(false)}>
                                <li>
                                    <Link href="/providers/att" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        AT&T
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/spectrum" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Spectrum
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/frontier" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Frontier
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/windstream" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Windstream
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/centurylink" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Centurylink
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/earthlink" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Earthlink
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/hughesnet" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        HughesNet
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/viasat" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        Viasat
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/providers/t-mobile" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>
                                        T-Mobile
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/providers" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>Providers</Link>
                        </li>
                        <li>
                            <Link href="/blog" className='text-base font-normal text-[#215690] hover:text-[#ef9831] font-[Roboto]'>Blog</Link>
                        </li>
                        <Link href="tel:833-592-0098" className="items-center gap-2 text-[#ef9831] font-[Roboto] flex justify-end">
                            <LuPhoneCall size={18} />
                            <span className="text-base font-normal">833-592-0098</span>
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
