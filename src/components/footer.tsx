import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cities, NavLinks, Providers_Data, Services_data } from '@/const/exports'
import { BiLogoTwitter, BiLogoLinkedinSquare, BiLogoYoutube, BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='bg-[#6041BB] pt-20 pb-4 md:rounded-tr-[90px] md:rounded-tl-[90px] rounded-tr-[50px] rounded-tl-[50px]'>
      <div className='container mx-auto px-4 grid md:grid-cols-5 grid-cols-1 gap-5'>
        <div className='col-span-2'>
          <Link href="/" className='inline-block'>
            <Image src="/images/logo-white.png" alt="logo-white" height={55} width={265} />
          </Link>

          <p className='text-white text-base '>Simplify choices with Topproviders.net! Streamlined solutions for internet and TV services. Unbiased reviews empower informed decisions. Connect with confidence</p>

          <ul className='flex gap-5 mt-5'>
            <li>
              <Link href="https://www.facebook.com/topproviders.net">
                <BiLogoFacebook className='text-white hover:text-[#6041BB] h-10 w-10 p-2 border border-white rounded-lg bg-transparent hover:bg-white' />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@top-providers">
                <BiLogoYoutube className='text-white hover:text-[#6041BB] h-10 w-10 p-2 border border-white rounded-lg bg-transparent hover:bg-white' />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/top.providers/">
                <BiLogoInstagram className='text-white hover:text-[#6041BB] h-10 w-10 p-2 border border-white rounded-lg bg-transparent hover:bg-white' />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/top-providers">
                <BiLogoLinkedinSquare className='text-white hover:text-[#6041BB] h-10 w-10 p-2 border border-white rounded-lg bg-transparent hover:bg-white' />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/cablemovers">
                <BiLogoTwitter className='text-white hover:text-[#6041BB] h-10 w-10 p-2 border border-white rounded-lg bg-transparent hover:bg-white' />
              </Link>
            </li>
          </ul>
        </div>

        <div className='col-span-1'>
          <h6 className='text-lg font-normal text-white mb-5 AxiformaBold'>
           TOP PROVIDERS
          </h6>
          <ul className='grid  grid-cols-1 gap-1'>
            {Providers_Data?.slice(0,6).map((item: any, idx: number) => {
              return <li key={idx}>
                <Link href={item?.link} className='text-sm font-medium capitalize text-white AxiformaRegular hover:text-white'>
                  {item?.name}
                </Link>
              </li>
            })}
          </ul>
        </div>
        <div className='col-span-1'>
          <h6 className='text-lg font-normal text-white mb-5 AxiformaBold'>
           TOP CITES
          </h6>
          <ul className='grid  grid-cols-1 gap-1'>
            {Cities?.slice(0,6).map((item: any, idx: number) => {
              return <li key={idx}>
                <Link href={item?.slug} className='text-sm font-medium capitalize text-white AxiformaRegular hover:text-white'>
                  {item?.name}
                </Link>
              </li>
            })}
          </ul>
        </div>
        <div>
          <h6 className='text-lg font-normal text-white mb-5 AxiformaBold'>
            ABOUT US
          </h6>
          <ul className='grid gap-3'>
            {NavLinks?.map((item: any, idx: number) => {
              return <li key={idx}>
                <Link href={item?.link} className='text-sm font-medium capitalize text-white AxiformaRegular hover:text-white'>
                  {item?.name}
                </Link>
              </li>
            })}
          </ul>
        </div>
      </div>
      <div className='px-4 mt-16 pt-4 border-t border-white/20'>
        <div className='container mx-auto flex md:flex-row flex-col-reverse items-center justify-between'>
          <p className='text-sm font-normal text-white AxiformaRegular'>
            Copyright © 2023-2024 topproviders.net. All rights reserved.
          </p>
          <ul className='flex items-center md:gap-5 gap-2 text-white'>
            
          
            <li>
              <Link href="/terms-and-conditions" className='text-sm font-medium capitalize text-white AxiformaRegular hover:text-white'>
                Terms & Conditions
              </Link>
            </li>
            <li>-</li>
            <li>
              <Link href="/privacy-policy" className='text-sm font-medium capitalize text-white AxiformaRegular hover:text-white'>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer