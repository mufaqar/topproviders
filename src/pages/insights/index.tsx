import Campare_Plan from '@/components/campare-plan'
import apolloClient from '@/config/client'
import { SINGLE_Provider } from '@/config/query'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'

function Insight({ ProviderOneD, ProviderTwoD }: any) {
  var featuresOne = ProviderOneD?.providersInfo?.features?.split(', ');

  return (
    <main>
      <section className='py-24 bg-[#6041BB]'>
        <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7 items-center'>
          <div>
            <h1 className="sm:text-5xl text-4xl font-extrabold text-white">
              AT&T vs. Cox Internet: Compare Plans & Fees 2023
            </h1>
          </div>
          <div className='grid grid-cols-3 gap-7 items-center'>
            <div className="flex flex-col justify-center items-center border border-gray-100 rounded-2xl md:h-40 md:w-40 h-20 w-20 -rotate-45 shadow-[0_0_5px_10px_rgba(255,255,255,0.15)] transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10 bg-white">
              <Image src={ProviderOneD.featuredImage?.node?.mediaItemUrl} alt="Feature" width={93} height={50} className='mx-auto rotate-45' />
            </div>
            <p className='sm:text-5xl text-4xl font-extrabold text-white text-center'>
              VS
            </p>
            <div className="flex flex-col justify-center items-center border border-gray-100 rounded-2xl md:h-40 md:w-40 h-20 w-20 -rotate-45 shadow-[0_0_5px_10px_rgba(255,255,255,0.15)] transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10 bg-white">
              <Image src={ProviderTwoD?.featuredImage?.node?.mediaItemUrl} alt="Feature" width={93} height={50} className='mx-auto rotate-45' />
            </div>
          </div>
        </div>
      </section>
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <p className='text-lg font-normal '>
            If you’re down to choosing between AT&T internet and Cox internet, we have a lot of useful data here for you to compare as you make your internet provider choice. AT&T is transitioning to a fiber internet network, which is capable of multi-gig internet speeds, and Cox offers cable internet, with makes speeds up to 1 Gbps accessible and affordable. Continue on for more side-by-side comparison of their services.
          </p>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-7 mt-10'>
            <div className="border border-gray-100 shadow-xl transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10 bg-white p-10 rounded-2xl">
              <Image src={ProviderOneD.featuredImage?.node?.mediaItemUrl} alt="Feature" width={93} height={50} className='mb-8' />
              <ul className='grid gap-2'>
                <div dangerouslySetInnerHTML={{__html: ProviderOneD?.providersInfo?.features}}/>
              </ul>
            </div>
            <div className="border border-gray-100 shadow-xl transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10 bg-white p-10 rounded-2xl">
              <Image src={ProviderTwoD?.featuredImage?.node?.mediaItemUrl} alt="Feature" width={93} height={50} className='mb-8' />
              <div dangerouslySetInnerHTML={{__html: ProviderOneD?.providersInfo?.features}}/>
            </div>
          </div>
        </div>
      </section>
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className="md:text-3xl text-xl font-bold leading-7 mb-10">
            Internet Plans
          </h2>
          <Campare_Plan ProviderOneD={ProviderOneD} ProviderTwoD={ProviderTwoD}/>
        </div>
      </section>
    </main>
  )
}

export default Insight



export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { providerOne, providerTwo } = query;
  const [providersOneRes, providersTwoRes] = await Promise.all([
    apolloClient.query({ query: SINGLE_Provider, variables: { slug: `/providers/${providerOne}` } }),
    apolloClient.query({ query: SINGLE_Provider, variables: { slug: `/providers/${providerTwo}` } }),
  ]);
  const ProviderOneD = providersOneRes.data.singleProvider;
  const ProviderTwoD = providersTwoRes.data.singleProvider;
  return {
    props: {
      ProviderOneD, ProviderTwoD
    },
  };
}