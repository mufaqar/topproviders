'use client'
import { useParams } from 'next/navigation'
import apolloClient from '@/config/client'
import { SINGLE_Provider } from '@/config/query'
import { GetStaticProps, GetServerSideProps } from 'next'
import Image from 'next/image'
import SearchForm from '@/components/searchform'
import Link from 'next/link'
import parse from 'html-react-parser';
import React, { useState } from 'react'
import Faqs_Provider from '@/components/faqs_provider'
import PlanBox from '@/components/pricing/planBox'
import IconBox from '@/components/provider/icon-box'
import { GrChannel, GrInstallOption } from 'react-icons/gr'
import { GoDeviceMobile } from 'react-icons/go'
import FeatureBox from '@/components/pricing/featureBox'
import TV_Plan from '@/components/pricing/tv_plan'
import InternetPhonePlanBox from '@/components/pricing/internetPhonePlanBox'
import InternetTVPlanBox from '@/components/pricing/internetTVPlanBox'
import InternetTVPhonePlanBox from '@/components/pricing/internetTVPhonePlanBox'
import { BiPhone } from 'react-icons/bi'

import Head from 'next/head';
import PageHead from '@/components/metas/pagesmeta'
export default function SProviders({ Provider, city, state }: any) {
  const provider_name = Provider?.title;
  const provider_slug = Provider?.slug;
  const pro_phone = Provider?.providersInfo?.proPhone;
  const [nav, setNav] = useState(false);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonthIndex = currentDate.getMonth();
  const currentMonthNumber = currentMonthIndex + 1;
  const [fixedSticky, setFixedSticky] = useState<any>(false)

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthName = monthNames[currentMonthIndex];
  const changeBackground = () => {
    if (window.scrollY >= 880) {
      setNav(true);
      setFixedSticky(true)
    }
    else {
      fixedSticky ? setNav(true) : setNav(false)
    }
  }
  if (typeof window !== "undefined") {

    window.addEventListener('scroll', changeBackground);

  }

  return (
    <>
      <PageHead title={`${provider_name} Plans and Pricing for ${currentMonthName}, ${currentYear} | Top Providers`} description={`${provider_name} Plans and Pricing for ${currentMonthName}, ${currentYear}.`} url={`https://www.topproviders.net/providers/${Provider?.slug}`} />

      <section className='relative'>
        <div className="container mx-auto px-4 flex md:flex-row flex-col gap-7 items-center">
          <div className='md:w-1/2 w-full py-10'>
            <Link href={`/providers/${provider_slug}`} >  <Image src={Provider?.featuredImage?.node.mediaItemUrl} alt="Feature Image" width={140} height={50} /></Link>
            <h1 className="text-3xl md:text-5xl md:leading-tight font-bold text-black">
              <span className='text-[#ef9831]'>{provider_name} </span>Plans and Pricing for {currentMonthName}, {currentYear}
            </h1>

            <div className='features text-black mb-5'>
              {parse(`${Provider?.providersInfo?.features}`)}
            </div>
            <h5 className='text-xl font-bold text-black'>
              Price Starting At
            </h5>
            <h2 className="md:text-4xl text-3xl font-extrabold text-black my-4 flex items-start">
              <span className='md:text-3xl text-base'>$</span>
              {Provider?.providersInfo?.proPrice}<span className='grid'> <span className='md:text-3xl text-base'><sub>/mo</sub></span></span>
            </h2>
            <Link href={`tel:${pro_phone}`} className="bg-[#ef9831] rounded-3xl md:text-4xl text-base font-bold text-white w-fit px-3 py-1.5 flex items-center gap-3 mb-4">
              <BiPhone /> {pro_phone}
            </Link>
          </div>
          <div className='md:w-1/2 w-full md:block hidden'>
            <Image src={Provider?.providersInfo?.bannerImage?.mediaItemUrl} alt="Feature Image" width={1200} height={1626} className='object-cover w-full h-full' />
          </div>
        </div>
      </section>

      <section className={`bg-[#215690] px-4 grid md:grid-cols-2 gap-7 items-center md:divide-x-2 divide-gray-300 py-5 shadow-sm border-y border-zinc-400/20 z-50  ${nav ? 'md:fixed bottom-0 left-0 right-0' : 'sticky'
        }`}>
        <div className='md:text-center text-center md:max-w-xs ml-auto md:mr-0 mx-auto flex md:flex-col flex-row gap-2'>
          <h3 className="md:text-2xl text-lg font-extrabold text-white">
            Call to order {provider_name}
          </h3>
          <Link href={`tel:${pro_phone}`} className='md:ml-8 bg-[#ef9831] hover:bg-white hover:text-[#215690] text-white md:text-xl text-base text-center inline-block w-fit font-medium font-[Roboto] md:px-10 px-5 py-1.5 rounded-3xl'>
            {pro_phone}
          </Link>
        </div>
        <div className='[&>div:nth-child(1)]:mt-0 max-w-xs slug_cta'>
          <h3 className="md:text-2xl text-lg font-extrabold text-center text-white mb-2">
            Check Availability
          </h3>
          <SearchForm />
        </div>
      </section>

      {Provider?.providersInfo?.internetPlans &&

        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold">
                {provider_name} Internet Plans</h2>
            </div>
            <div>
              <PlanBox Plans={Provider?.providersInfo?.internetPlans} pro_phone={pro_phone} />
            </div>
            <div>
              <p className="text-sm font-[Roboto] mt-10">
                {Provider?.providersInfo?.internetPlansShort} </p>
            </div>
          </div>
        </section>
      }

      {Provider?.providersInfo?.tvPlans &&

        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold">
                {provider_name} TV Plans
              </h2>
            </div>
            <div>
              <TV_Plan Plans={Provider?.providersInfo?.tvPlans} pro_phone={pro_phone} />
            </div>
            <div>
              <p className="text-sm font-[Roboto] mt-10">
                {Provider?.providersInfo?.tvPlansShort}  </p>
            </div>
          </div>
        </section>
      }
      {Provider?.providersInfo?.internetAndPhoneBundles &&
        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold">
                {provider_name}  Internet and Phone Bundles
              </h2>
            </div>
            <div>
              <InternetPhonePlanBox Plans={Provider?.providersInfo?.internetAndPhoneBundles} pro_phone={pro_phone} />
            </div>
            <div>
              <p className="text-sm font-[Roboto] mt-10">
                {Provider?.providersInfo?.internetTvPhoneBundlesShort} </p>
            </div>
          </div>
        </section>
      }

      {Provider?.providersInfo?.internetAndMobileBundles &&
        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold">
                {provider_name}  Internet and Mobile Bundles
              </h2>
            </div>
            <div>
              <InternetPhonePlanBox Plans={Provider?.providersInfo?.internetAndMobileBundles} pro_phone={pro_phone} />
            </div>
            <div>
              <p className="text-sm font-[Roboto] mt-10">
                {Provider?.providersInfo?.internetTvPhoneBundlesShort} </p>
            </div>
          </div>
        </section>
      }




      {Provider?.providersInfo?.internetAndTvBundles &&
        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold">
                {provider_name}  Internet And TV Bundles
              </h2>
            </div>
            <div>
              <InternetTVPlanBox Plans={Provider?.providersInfo?.internetAndTvBundles} pro_phone={pro_phone} />
            </div>
            <div>
              <p className="text-sm font-[Roboto] mt-10">
                {Provider?.providersInfo?.internetAndTvBundlesShort}  </p>
            </div>
          </div>
        </section>
      }

      {Provider?.providersInfo?.internetTvPhoneBundles &&
        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold">
                {provider_name} Internet, TV & Phone Bundles
              </h2>
            </div>
            <div>
              <InternetTVPhonePlanBox Plans={Provider?.providersInfo?.internetTvPhoneBundles} pro_phone={pro_phone} />
            </div>
            <div>
              <p className="text-sm font-[Roboto] mt-10">
                {Provider?.providersInfo?.internetAndPhoneBundlesShort}  </p>
            </div>
          </div>
        </section>
      }


      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              Switch to {provider_name} And Get Benefits You’ll Love
            </h2>
          </div>
          <FeatureBox Plans={Provider?.providersInfo?.featuresBlock} />
        </div>
      </section>
      <section className="mt-16">
        <div className="container mx-auto px-4">
          <div className=''>
            {Provider?.providersInfo?.block.map((item: any, index: number) => (
              <div key={index}>


                <h2 className='block_heading'>{parse(`${item.heading} `)} </h2>
                <div className='block_content'>{parse(`${item.content} `)}</div> </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-8">
        <div className="container mx-auto px-4">

          <div className='grid md:grid-cols-2 grid-cols-1'>
            <div className='bg-gray-200 p-8 pros'>
              <h2 className="text-2xl font-bold mb-4">
                Pros
              </h2>
              {parse(`
                ${Provider?.providersInfo?.pros}
              `)}
            </div>
            <div className='bg-gray-100 p-8 cons'>
              <h2 className="text-2xl font-bold mb-4">
                Cons
              </h2>
              {parse(`
                ${Provider?.providersInfo?.cons}
              `)}
            </div>
          </div>
        </div>
      </section>

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              {provider_name} FAQ’s
            </h2>
          </div>
          <div className='grid gap-10'>
            <Faqs_Provider faqS={Provider?.providersInfo?.faqS} />
          </div>
        </div>
      </section>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug } = query;
  const [providers] = await Promise.all([
    apolloClient.query({ query: SINGLE_Provider, variables: { slug } }),
  ]);
  const Provider = providers.data.singleProvider;
  return {
    props: {
      Provider
    },
  };
}


