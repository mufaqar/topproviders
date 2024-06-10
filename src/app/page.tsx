import SearchForm from "@/components/searchform";
import apolloClient from "@/config/client";
import { AllPosts } from "@/config/query";
import Image from "next/image";
import ServiceBox from '@/components/service-box';
import Link from 'next/link';
import React from 'react'
import { HiOutlineSearchCircle, HiOutlineShoppingCart } from 'react-icons/hi'
import { BiGitCompare } from 'react-icons/bi'
import Blogpost from '@/components/blogpost';
import CompareBox from '@/components/compare-box';
import { FaArrowRightLong, FaUserGraduate } from 'react-icons/fa6';
import { BsSpeedometer } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GiMoneyStack } from 'react-icons/gi';
import { FaHandsHelping } from 'react-icons/fa';
import Get_Lootie from '@/components/lootie'
import StateMap from '@/components/stateMap'
import animationData from '../../public/loti/lotie1.json'



async function getData() {
   const [allposts] = await Promise.all([
      apolloClient.query({ query: AllPosts }),
   ]);
   const BlogPosts = allposts.data.posts.edges;

   return {
      BlogPosts
   }
}

export default async function Home() {

   const { BlogPosts } = await getData()

   return (
      <>
         <section className={`min-h-screen h-full flex items-center`}>
            <div className="container mx-auto px-4 flex md:flex-row flex-col gap-5 items-center">
               <div className="py-10 md:w-[61%] w-full">
                  <h1 className="text-3xl md:text-7xl font-extrabold text-[#262626]">
                     Find <span className='text-[#FECE2F]'>Top</span> <span className='text-[#6746C8]'>Internet</span> & <span className='text-[#6746C8]'>TV  Service <span className='text-[#FECE2F]'> Providers</span> </span>in your area
                  </h1>
                  <div className="mt-8 md:w-[524px]">
                     <SearchForm />
                  </div>
               </div>
               <div className='md:w-[38%] w-full'>
                  <Get_Lootie src={animationData} />
               </div>
            </div>
         </section>

         <section className="py-16 bg-[#F5F6FC]">
            <div className="container mx-auto px-4">
               <div className="mb-10 flex md:flex-row flex-col gap-7 items-center">
                  <div className='md:w-[65%] w-full'>
                     <h2 className='md:text-6xl text-2xl font-bold mb-5'>

                        How does it Work?

                     </h2>
                     <p className='text-lg font-normal text-[#4E4E4E]'>
                     At Top Providers, we do the research, so you don't have to. We've reviewed the top internet and TV service providers and found the best plans and deals. Let us help you find the perfect package to fit your needs and budget. Shop smarter with Top Providers!  </p>
                  </div>
                  <div className='md:w-[45%] w-full'>
                     <Image src="/images/how-work.png" alt="how-work" width={460} height={303} />
                  </div>
               </div>
               <div className='relative grid gap-7 lg:grid-cols-4 md:grid-cols-2 mb-10'>
                  <ServiceBox
                     img={<HiOutlineSearchCircle className="text-6xl text-[#6041BB] mx-auto" />}
                     title="Search "
                     content="Find providers in your area with a quick zip code search."
                     custm_Bg="bg-[#e7e2fe]"
                  />
                  <ServiceBox
                     img={<BiGitCompare className="text-6xl text-[#6041BB] mx-auto" />}
                     title="Compare Top Providers"
                     content="Easily compare dozens of top TV and internet providers, like AT&T and Xfinity, to find the best high-speed options in minutes."
                     custm_Bg="bg-[#fbf1e2]"
                  />
                  <ServiceBox
                     img={<HiOutlineShoppingCart className="text-6xl text-[#6041BB] mx-auto" />}
                     title="Compare Bundle Deals"
                     content="Discover seamless internet and TV bundles with our user-friendly zip code search. Compare the best local deals all in one place."
                     custm_Bg="bg-[#ffdbce]"
                  />
                  <ServiceBox
                     img={<BsSpeedometer className="text-6xl text-[#6041BB] mx-auto" />}
                     title="Calculate Your Speed"
                     content="Optimize your expenses – match your internet speed to your lifestyle with our Internet Speed Quiz. Pay only for what you really need!"
                     custm_Bg="bg-[#e8ebe4]"
                  />
               </div>
            </div>
         </section>

         <section className="py-16">
            <div className="container mx-auto px-4">
               <h2 className='md:text-6xl text-2xl font-bold text-center text-[#262626] mb-10'>
               Why Compare Top Internet and TV Service Providers
               </h2>
               <div className='grid md:grid-cols-3 grid-cols-1 gap-7 items-center'>
                  <div className='grid gap-8'>
                     <CompareBox
                        img={<AiOutlineClockCircle className="text-5xl text-[#6041BB] mx-auto" />}
                        title="Save Time"
                        content="Using our zip code search tool, quickly uncover top providers in your area. Easily filter plans for internet, TV, bundles, and more."
                        custm_Bg="bg-[#e7e2fe]"
                     />
                     <CompareBox
                        img={<FaHandsHelping className="text-5xl text-[#6041BB] mx-auto" />}
                        title="Helpful Tools"
                        content="Discover helpful tips and expert advice in our Resource Center. It's designed to improve your experience and make the most of our services."
                        custm_Bg="bg-[#fbf1e2]"
                     />
                  </div>
                  <div className='grid gap-8'>
                     <Image src="/images/save-money.png" alt="save-money" width={300} height={272} className='mx-auto' />
                     <Image src="/images/helping-tools.png" alt="helping-tools" width={300} height={272} className='mx-auto' />
                  </div>
                  <div className='grid gap-8'>
                     <CompareBox
                        img={<GiMoneyStack className="text-5xl text-[#6041BB] mx-auto" />}
                        title="Save Money"
                        content="Easily compare real-time prices and find the best deals that fit your budget and digital requirements."
                        custm_Bg="bg-[#ffdbce]"
                     />
                     <CompareBox
                        img={<FaUserGraduate className="text-5xl text-[#6041BB] mx-auto" />}
                        title="Get Expert Advice"
                        content="Count on our team of experts, who evaluate providers based on factors like performance and price. We will recommend the best options available in your area."
                        custm_Bg="bg-[#e8ebe4]"
                     />
                  </div>
               </div>
            </div>

         </section>

         <section className="py-16 bg-[#6746C8]">
            <div className="container mx-auto px-4">
               <h2 className='md:text-6xl text-2xl font-bold text-center text-white mb-10'>
                  Find Top Internet Providers by State
               </h2>
               <div className='max-w-[524px] mx-auto mb-3'>
                  <SearchForm />
               </div>
               {/* <Image src="/images/map.png" alt="map" width={867} height={565} className='mx-auto' /> */}
               <StateMap />
            </div>

         </section>

         <section className="py-16">
            <div className="container mx-auto py-16 px-6 flex md:flex-row flex-col items-center gap-10 bg-[#F2F2F2] md:py-10 md:px-16 rounded-tl-[90px] rounded-br-[90px] rounded-tr-[3px] rounded-bl-[3px]">
               <div className='md:w-[44%] w-full'>
                  <h2 className='md:text-6xl text-2xl font-bold text-[#262626] mb-5'>
                     Review <br />Top Providers
                  </h2>
                  <p className='text-lg font-normal text-[#4E4E4E] mb-5'>
                  Let us help you navigate your options. Compare the leading providers in your area and find high-speed choices for internet, TV, or bundled services tailored to your needs.  </p>
                  <Link href="/providers/" className='text-sm font-normal AxiformaRegular bg-[#FECE2F] text-white py-3 px-12 rounded-[3px] '>
                     View All
                  </Link>
               </div>
               <div className='md:w-[56%] w-full grid md:grid-cols-4 grid-cols-2 gap-4 [&>*:nth-child(5)]:md:ml-14 [&>*:nth-child(6)]:md:ml-14 [&>*:nth-child(7)]:md:ml-14 [&>*:nth-child(8)]:md:ml-14'>
                  <Link href="/providers/cox" className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center group">
                     <div>
                        <Image src='/images/logo/Cox.jpg' alt="Feature" width={93} height={50} className='group-hover:scale-105 mx-auto' />
                     </div>
                  </Link>
                  <Link href="/providers/viasat" className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center group">
                     <div>
                        <Image src='/images/logo/Viasat.jpg' alt="Feature" width={93} height={50} className='group-hover:scale-105 mx-auto' />
                     </div>
                  </Link>
                  <Link href="/providers/att" className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center group">
                     <div>
                        <Image src='/images/logo/att.jpg' alt="Feature" width={93} height={50} className='group-hover:scale-105 mx-auto' />
                     </div>
                  </Link>
                  <Link href="/providers/spectrum" className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center group">
                     <div>
                        <Image src='/images/logo/Spectrum.jpg' alt="Feature" width={93} height={50} className='group-hover:scale-105 mx-auto' />
                     </div>
                  </Link>
                  <Link href="/providers/dish" className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center group">
                     <div>
                        <Image src='/images/logo/dish.jpg' alt="Feature" width={93} height={50} className='group-hover:scale-105 mx-auto' />
                     </div>
                  </Link>
                  <Link href="/providers/hughesNet" className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center group">
                     <div>
                        <Image src='/images/logo/HughesNet.jpg' alt="Feature" width={93} height={50} className='group-hover:scale-105 mx-auto' />
                     </div>
                  </Link>
                  <Link href="/providers/frontier" className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center group">
                     <div  >
                        <Image src='/images/logo/froniter.jpg' alt="Feature" width={93} height={50} className='group-hover:scale-105 mx-auto' />
                     </div>
                  </Link>
                  <Link href="/providers/centurylink" className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center group">
                     <div>
                        <Image src='/images/logo/CenturyLink.jpg' alt="Feature" width={93} height={50} className='group-hover:scale-105 mx-auto' />
                     </div>
                  </Link>
                  <Link href="/providers/earthlink" className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center group">
                     <div>
                        <Image src='/images/logo/EarthLink.jpg' alt="Feature" width={93} height={50} className='group-hover:scale-105 mx-auto' />
                     </div>
                  </Link>
                  <Link href="/providers/windstream" className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center group">
                     <div>
                        <Image src='/images/logo/Windstream.jpg' alt="Feature" width={93} height={50} className='group-hover:scale-105 mx-auto' />
                     </div>
                  </Link>
                  <Link href="/providers/wow" className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center group">
                     <div>
                        <Image src='/images/logo/WOW.jpg' alt="Feature" width={93} height={50} className='group-hover:scale-105 mx-auto' />
                     </div>
                  </Link>
                  <Link href="/providers/xfinity" className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center group">
                     <div >
                        <Image src='/images/logo/xfinity.jpg' alt="Feature" width={93} height={50} className='group-hover:scale-105 mx-auto' />
                     </div>
                  </Link>
               </div>
            </div>

         </section>

         <section className="py-16">
            <div className="container mx-auto px-4">
               <div className="mb-10 flex md:flex-row flex-col gap-5 items-center">
                  <div className='md:w-[65%] w-full'>
                     <h2 className='md:text-6xl text-2xl font-bold'>
                        Latest News
                     </h2>
                  </div>
                  <div className='md:w-[45%] w-full'>
                     <Link href="/blog" className='text-xl font-bold text-[#2B3253] flex items-center gap-2 hover:gap-10 transform transition-all duration-300 w-40 md:ml-auto'>
                        View All <FaArrowRightLong className="text-3xl" />
                     </Link>
                  </div>
               </div>
               <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
                  {BlogPosts?.slice(0, 3).map((item: any, idx: number) => {
                     return (
                        <Blogpost key={idx} data={item} />
                     );
                  })}
               </div>
            </div>
         </section>
      </>
   );
}
