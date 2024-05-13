import { ProviderBox } from '@/components/provider/provider-box'
import SearchForm from '@/components/searchform'
import apolloClient from '@/config/client'
import { GET_ALL_PROVIDERS } from '@/config/query'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PageHead from '@/components/metas/pagesmeta'
import Get_Lootie from '@/components/lootie'
import animationData from '../../../public/loti/lotie2.json'

async function getData(){
    const [providers] = await Promise.all([
        apolloClient.query({ query: GET_ALL_PROVIDERS }),
    ]);
    const allProviders = providers.data.allProviders.nodes;
    return {
        allProviders
    }
}

async function Providers() {
    const { allProviders } = await getData()    
    return (
        <>

            <PageHead title="Top Internet and TV Service Providers We Work With | Top Providers" description="Top Providers partners with top internet and TV service providers and offers one stop shop so you can Search, compare and order all at one site." url="https://www.topproviders.net/providers" />
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
                    <h2 className='md:text-6xl text-2xl font-bold text-center mb-5'>
                        Featured Top Providers
                    </h2>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4 text-center">
                        <Link href="/providers/att" className="flex flex-col justify-center items-center border border-gray-100 p-3 h-56 rounded-tl-[80px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[80px] shadow-xl transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10 bg-white">
                            <Image src='/images/logo/att.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                            <h2 className="mt-4 text-lg  text-center">
                                AT&T

                            </h2>
                        </Link>
                        <Link href="/providers/spectrum" className="flex flex-col justify-center items-center border border-gray-100 p-3 h-56 rounded-tl-[80px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[80px] shadow-xl transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10 bg-white">
                            <Image src='/images/logo/Spectrum.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                            <h2 className="mt-4 text-lg  text-center">
                                SPECTRUM
                            </h2>
                        </Link>
                        <Link href="/providers/earthlink" className="flex flex-col justify-center items-center border border-gray-100 p-3 h-56 rounded-tl-[80px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[80px] shadow-xl transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10 bg-white">
                            <Image src='/images/logo/EarthLink.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                            <h2 className="mt-4 text-lg  text-center">
                                EARTHLINK
                            </h2>
                        </Link>
                        <Link href="/providers/hughesnet" className="flex flex-col justify-center items-center border border-gray-100 p-3 h-56 rounded-tl-[80px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[80px] shadow-xl transition hover:border-[#6041BB]/10 hover:shadow-[#6041BB]/10 bg-white">
                            <Image src='/images/logo/HughesNet.jpg' alt="Feature" width={140} height={50} className='mx-auto' />
                            <h2 className="mt-4 text-lg  text-center">
                                HUGHESNET
                            </h2>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className='md:text-6xl text-2xl font-bold text-center mb-5'>
                        Top Internet and TV Service providers
                    </h2>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4 text-center">
                        {
                            allProviders.map((item: any, idx: number) => {
                                return (
                                    <>
                                        <ProviderBox key={idx} item={item} />

                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Providers