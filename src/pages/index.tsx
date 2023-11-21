import CityBox from '@/components/city-box';
import SearchForm from '@/components/searchform';
import ServiceBox from '@/components/service-box';
import Why_ChooseUs from '@/components/why-choose-us';
import Link from 'next/link';
import React from 'react'
import { HiOutlineSearchCircle, HiOutlineShoppingCart } from 'react-icons/hi'
import { BiGitCompare } from 'react-icons/bi'
import Image from 'next/image';
import { LuPhoneCall } from 'react-icons/lu'
import { AllPosts } from '@/config/query';
import { GetServerSideProps } from 'next';
import apolloClient from '@/config/client';
import Blogpost from '@/components/blogpost';
import PageHead from '@/components/metas/pagesmeta';
import CompareBox from '@/components/compare-box';
import { FaArrowRightLong, FaUserGraduate } from 'react-icons/fa6';
import { BsSpeedometer } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { GiMoneyStack } from 'react-icons/gi';
import { FaHandsHelping } from 'react-icons/fa';
import Get_Lootie from '@/components/lootie'
import animationData from "../../public/loti/lotie1.json";
import StateMap from '@/components/stateMap'


export default function Home({ BlogPosts }: any) {
   return (
      <>
         <PageHead title="Top Providers | Find The Top Internet and TV Service Providers" description="Planning a Move? Top Providers can help you find the best Internet and TV Service Provider. Find best deals on Cable and High Speed Internet." url="https://www.topproviders.net" />
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
                  {/* <Image src="/images/main-bg.png" alt="Feature Image" width={636} height={486} className='' /> */}
               </div>
            </div>
         </section>

         <section className="py-16 bg-[#F5F6FC]">
            <div className="container mx-auto px-4">
               <div className="mb-10 flex md:flex-row flex-col gap-7 items-center">
                  <div className='md:w-[65%] w-full'>
                     <h2 className='md:text-6xl text-2xl font-bold mb-5'>
                        How it Works?
                     </h2>
                     <p className='text-lg font-normal text-[#4E4E4E]'>
                        Here At Top Providers, We Research And Review Leading Providers And Have Found The Most Popular Plans And Deals On Every Major Internet And Tv Service Provider To Help You Shop Smartly.
                     </p>
                  </div>
                  <div className='md:w-[45%] w-full'>
                     <Image src="/images/how-work.png" alt="how-work" width={460} height={303} />
                  </div>
               </div>
               <div className='relative grid gap-7 lg:grid-cols-4 md:grid-cols-2 mb-10'>
                  <ServiceBox
                     img={<HiOutlineSearchCircle className="text-6xl text-[#6041BB] mx-auto" />}
                     title="Search "
                     content="Find providers in your area with a simple zip code search."
                     custm_Bg="bg-[#e7e2fe]"
                  />
                  <ServiceBox
                     img={<BiGitCompare className="text-6xl text-[#6041BB] mx-auto" />}
                     title="Compare Top Providers"
                     content="Compare dozens of top TV and internet providers like AT&T and Xfinity to find the best high speed options in minutes."
                     custm_Bg="bg-[#fbf1e2]"
                  />
                  <ServiceBox
                     img={<HiOutlineShoppingCart className="text-6xl text-[#6041BB] mx-auto" />}
                     title="Compare Bundle Deals"
                     content="Bundle internet and TV with our user-friendly zip search. Compare the best deals available near you in one place."
                     custm_Bg="bg-[#ffdbce]"
                  />
                  <ServiceBox
                     img={<BsSpeedometer className="text-6xl text-[#6041BB] mx-auto" />}
                     title="Calculate Your Speed"
                     content="Don’t pay for more than you need! Use our Internet Speed Quiz to determine the best internet speed for your lifestyle."
                     custm_Bg="bg-[#e8ebe4]"
                  />
               </div>
            </div>
         </section>

         <section className="py-16">
            <div className="container mx-auto px-4">
               <h2 className='md:text-6xl text-2xl font-bold text-center text-[#262626] mb-10'>
                  Why Compare with Top Providers
               </h2>
               <div className='grid md:grid-cols-3 grid-cols-1 gap-7 items-center'>
                  <div className='grid gap-8'>
                     <CompareBox
                        img={<AiOutlineClockCircle className="text-5xl text-[#6041BB] mx-auto" />}
                        title="Save Time"
                        content="Discover top providers near you in seconds by using our zip search tool. Filter plans based on internet, TV, bundles, and more."
                        custm_Bg="bg-[#e7e2fe]"
                     />
                     <CompareBox
                        img={<FaHandsHelping className="text-5xl text-[#6041BB] mx-auto" />}
                        title="Helpful Tools"
                        content="Our Resource Center offers helpful insights and advice from subject matter experts to help you get the most out of your services."
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
                        content="Compare prices in real-time and find the best deals available to fit your budget and digital needs."
                        custm_Bg="bg-[#ffdbce]"
                     />
                     <CompareBox
                        img={<FaUserGraduate className="text-5xl text-[#6041BB] mx-auto" />}
                        title="Get Expert Advice"
                        content="Our team of experts reviews providers on various criteria like performance and price to recommend the best options near you."
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
                     Let us help you sift through the noise by comparing the top providers near you. Find high-speed options for internet, TV, or bundles that meet your needs.
                  </p>
                  <Link href="#" className='text-sm font-normal AxiformaRegular bg-[#FECE2F] text-white py-3 px-12 rounded-[3px] '>
                     View All
                  </Link>
               </div>
               <div className='md:w-[56%] w-full grid md:grid-cols-4 grid-cols-2 gap-4 [&>*:nth-child(5)]:md:ml-14 [&>*:nth-child(6)]:md:ml-14 [&>*:nth-child(7)]:md:ml-14 [&>*:nth-child(8)]:md:ml-14'>
                  <div className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center">
                     <Link href="/providers/cox" >
                        <Image src='/images/logo/Cox.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
                     </Link>
                  </div>
                  <div className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center">
                     <Link href="/providers/viasat" >
                        <Image src='/images/logo/Viasat.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
                     </Link>
                  </div>
                  <div className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center">
                     <Link href="/providers/att" >
                        <Image src='/images/logo/att.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
                     </Link>
                  </div>
                  <div className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center">
                     <Link href="/providers/spectrum" >
                        <Image src='/images/logo/Spectrum.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
                     </Link>
                  </div>
                  <div className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center">
                     <Link href="/providers/dish" >
                        <Image src='/images/logo/dish.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
                     </Link>
                  </div>
                  <div className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center">
                     <Link href="/providers/hughesNet" >
                        <Image src='/images/logo/HughesNet.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
                     </Link>
                  </div>
                  <div className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center">
                     <Link href="/providers/frontier" >
                        <Image src='/images/logo/froniter.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
                     </Link>
                  </div>
                  <div className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center">
                     <Link href="/providers/centurylink" >
                        <Image src='/images/logo/CenturyLink.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
                     </Link>
                  </div>
                  <div className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center">
                     <Link href="/providers/earthlink" >
                        <Image src='/images/logo/EarthLink.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
                     </Link>
                  </div>
                  <div className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center">
                     <Link href="/providers/windstream" >
                        <Image src='/images/logo/Windstream.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
                     </Link>
                  </div>
                  <div className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center">
                     <Link href="/providers/wow" >
                        <Image src='/images/logo/WOW.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
                     </Link>
                  </div>
                  <div className="w-[130px] mx-auto h-[130px] bg-white rounded-full flex items-center justify-center">
                     <Link href="/providers/xfinity" >
                        <Image src='/images/logo/xfinity.jpg' alt="Feature" width={93} height={50} className='mx-auto' />
                     </Link>
                  </div>
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
                     <Link href="/blog" className='text-xl font-bold text-[#2B3253] flex items-center gap-2 hover:gap-10 transform transition-all duration-300 w-36 md:ml-auto'>
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

export const getServerSideProps: GetServerSideProps = async () => {
   const [allposts] = await Promise.all([
      apolloClient.query({ query: AllPosts }),
   ]);
   const BlogPosts = allposts.data.posts.edges;
   return {
      props: {
         BlogPosts
      },
   };
}
