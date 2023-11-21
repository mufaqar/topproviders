import Main from '@/components/main'
import { ProviderBox } from '@/components/provider/provider-box'
import apolloClient from '@/config/client'
import { GET_ALL_PROVIDERS } from '@/config/query'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import Head from 'next/head';
function TVProviders({ allProviders }: any) {

    return (
        <>
            <Head>
                <title>All Providers - Top Providers</title>
                <meta name="description" content="Find Internet & TV Service Providers In Your Area" />
            </Head>



            <section className="">
                <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className='text-3xl font-bold'>
                            Top Internet and TV Service providers
                        </h2>
                    </div>
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
            <section className="">
                <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                    <div className="text-center">
                        <h2 className='text-3xl font-bold'>
                            Why shop for TV on Allconnect?
                        </h2>
                        <p className='text-base my-5'>
                            Explore popular internet and TV providers we partner with to shop, compare and set up services at home.
                        </p>
                    </div>
                    <div className='flex md:flex-row flex-col gap-5 items-center'>
                        <div className='bg-[#F3FAFF] max-w-[240px] w-full p-8 rounded-2xl'>
                            <Image src="/images/search.svg" alt={'search'} width={60} height={54} className='mx-auto' />
                            <h5 className='text-base font-bold text-center mt-3'>
                                Search plans with ease
                            </h5>
                        </div>
                        <div>
                            <FaArrowRightLong className="text-[#0066d4] text-3xl transform md:rotate-0 rotate-90" />
                        </div>
                        <div className='bg-[#F3FAFF] max-w-[240px] w-full p-8 rounded-2xl'>
                            <Image src="/images/product-rec.svg" alt={'product-rec'} width={60} height={54} className='mx-auto' />
                            <h5 className='text-base font-bold text-center mt-3'>
                                Compare all your options
                            </h5>
                        </div>
                        <div>
                            <FaArrowRightLong className="text-[#0066d4] text-3xl transform md:rotate-0 rotate-90" />
                        </div>
                        <div className='bg-[#F3FAFF] max-w-[240px] w-full p-8 rounded-2xl'>
                            <Image src="/images/shopping-cart.svg" alt={'hopping-cart'} width={60} height={54} className='mx-auto' />
                            <h5 className='text-base font-bold text-center mt-3'>
                                Order on our one-stop online shop
                            </h5>
                        </div>
                        <div>
                            <span className='text-sm block w-fit border-2 border-gray-400 rounded-full py-2 px-3 text-gray-500'>
                                or
                            </span>
                        </div>
                        <div className='bg-[#F3FAFF] max-w-[240px] w-full p-8 rounded-2xl'>
                            <Image src="/images/expert.png" alt={'expert'} width={60} height={54} className='mx-auto' />
                            <h5 className='text-base font-bold text-center mt-3'>
                                Speak to an expert to order by phone
                            </h5>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                    <div className="flex md:flex-row flex-col gap-7 md:justify-between justify-center items-center">
                        <h2 className='text-3xl font-bold'>
                            What to read next
                        </h2>
                        <Link href="/blog" className='px-5 py-2 text-base text-center block bg-[#FECE2F] hover:bg-[#6041BB] text-white w-fit'>
                            Read more
                        </Link>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-7 mt-10 pt-10 border-t '>
                        <Link href="/blog">
                            <div className="rounded-lg p-4 lg:p-0 shadow-md">
                                <Image src="/images/blog_post.jpg" alt="technology" className="rounded-tr-lg rounded-tl-lg" width={500} height={360} />
                                <div className="p-4 pl-0">
                                    <h2 className="font-bold text-xl text-gray-800 text-center">Put all speaking her delicate recurred possible.</h2>
                                    <p className="text-gray-700 mt-2 text-center text-sm">
                                        Ari Howard —  6 min read
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/blog">
                            <div className="rounded-lg p-4 lg:p-0 shadow-md">
                                <Image src="/images/blog_post.jpg" alt="technology" className="rounded-tr-lg rounded-tl-lg" width={500} height={360} />
                                <div className="p-4 pl-0">
                                    <h2 className="font-bold text-xl text-gray-800 text-center">Put all speaking her delicate recurred possible.</h2>
                                    <p className="text-gray-700 mt-2 text-center text-sm">
                                        Ari Howard —  5 min read
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="/blog">
                            <div className="rounded-lg p-4 lg:p-0 shadow-md">
                                <Image src="/images/blog_post.jpg" alt="technology" className="rounded-tr-lg rounded-tl-lg" width={500} height={360} />
                                <div className="p-4 pl-0">
                                    <h2 className="font-bold text-xl text-gray-800 text-center">Put all speaking her delicate recurred possible.</h2>
                                    <p className="text-gray-700 mt-2 text-center text-sm">
                                        Ari Howard —  7 min read
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TVProviders


export const getStaticProps: GetStaticProps = async () => {
    const [providers] = await Promise.all([
        apolloClient.query({ query: GET_ALL_PROVIDERS }),
    ]);
    const allProviders = providers.data.allProviders.nodes;
    return {
        props: {
            allProviders
        },
    };
}