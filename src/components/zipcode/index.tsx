import React from 'react'
import SearchForm from '../searchform'
import Provider_Nav from '../provider/provider-nav'
import { ProviderCard } from '../provider/provider-card'
import Inter_Service from '../provider/inter-service'
import Technology_Box from '../provider/technology-box'
import Nearby_City from '../provider/nearby-city'
import Faqs_Sec from '../faqs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CiStreamOn } from 'react-icons/ci'
import { MdCable, MdSatelliteAlt } from 'react-icons/md'
import Table_CardProvider from '../provider/cheeptable-cardProvider'
import { typeFromAST } from 'graphql'
import Cheep_Table_CardProvider from '../provider/cheeptable-cardProvider'
import Fast_Table_CardProvider from '../provider/fasttable-cardProvider'
import OverView from '../overview'
import Head from 'next/head';
import PageHead from '../metas/pagesmeta'
import Faqs_Zip from '../faqs_zip'

function Zip_Code_Com({ zipcode, city, state, allProviders, zones }: any) {


    const { query } = useRouter();
    const city_code = query.city;
    const state_code = query.state;
    var type = query?.type;
    var types = query?.type;

    function formatType(type: any) {
        if (type === "internet") {
            return "Internet";
        } else if (type === "tv") {
            return "TV";
        } else if (type === "internet-tv") {
            return "Internet and TV";
        } else {
            // Handle other cases if needed
            return type; // Return the original value if no match is found
        }
    }


    const servicesTypes = allProviders.map((item: any) => { return (item.serviceTypes.nodes) })

    const newServicesTypes = servicesTypes.map((st: any) => st.map((serviceType: any) => ({ name: serviceType.name, description: serviceType.description })));


    const uniqueServiceType: any = [];
    const seenNames = new Set();
    newServicesTypes.forEach((st: any) => {
        st.forEach((serviceType: any) => {
            if (!seenNames.has(serviceType.name)) {
                uniqueServiceType.push(serviceType);
                seenNames.add(serviceType.name);
            }
        });
    });

    const countServiceType = uniqueServiceType?.length || 0;

    const totalProviderCount = allProviders?.length || 0;
    const allProvidersFast = [...allProviders];
    const allProvidersCheep = [...allProviders];
    const cheepProviders = allProvidersCheep.sort((a: any, b: any) => a.providersInfo.proPrice - b.providersInfo.proPrice);
    const FastProviders = allProvidersFast.sort((fa: any, fb: any) => {
        const speedA = parseInt(fa.providersInfo?.servicesInfo?.internetServices?.speed?.split("-")[1], 10);
        const speedB = parseInt(fb.providersInfo?.servicesInfo?.internetServices?.speed?.split("-")[1], 10);
        return speedB - speedA;
    });

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonthIndex = currentDate.getMonth();
    const currentMonthNumber = currentMonthIndex + 1;

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentMonthName = monthNames[currentMonthIndex];


    return (
        <>

        <PageHead title={`Best ${totalProviderCount} ${formatType(type)} Service Providers in ${zipcode}, ${city} , ${state} `} description={`Best ${totalProviderCount} ${formatType(type)} Service Providers in ${zipcode}, ${city}, ${state} for ${currentMonthName}, ${currentYear}.  ${allProviders?.slice(0, 4).map((item: any, idx: number) => (
                `${idx + 1} ${item?.title}`)).join(', ')}`} url={`https://www.cablemovers.net/${state_code}/${city_code}?zipcode=${zipcode}&type=${type}`} />

            <section className="min-h-[40vh]  flex items-center bg-gray-50">
                <div className="container mx-auto px-4">
                    <div>
                        <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[850px] mx-auto capitalize leading-10">
                            {formatType(type)}  Service Providers in  <br /><span className="text-[#ef9831]">{zipcode}</span>
                        </h1>
                        <p className="text-xl text-center font-[Roboto] my-5">
                            Enter your zip so we can find the best providers in your area:
                        </p>
                        <div className='grid justify-center'>
                            <SearchForm />
                        </div>
                    </div>
                </div>
            </section>
            <Provider_Nav />
            <section className="my-16">
                <div className="container mx-auto px-4">
                    <div className='mb-10'>
                        <h2 className="text-2xl font-bold  capitalize leading-10">
                            {formatType(type)}  Service Providers in <span className="text-[#ef9831]">{zipcode}</span>
                        </h2>
                    </div>
                    <div className='grid gap-7'>

                        {
                            allProviders?.map((item: any, idx: number) => {
                                var summaryData = {
                                    logo: item?.featuredImage?.node?.mediaItemUrl,
                                    provider: item?.title,
                                    type: item.serviceTypes.nodes,
                                    summery: type === "internet" ? item.providersInfo?.servicesInfo.internetServices :
                                        type === "tv" ? item.providersInfo?.servicesInfo?.tvServices :
                                            type === "internet-tv" && item.providersInfo?.servicesInfo?.internetTvBundles,
                                    mobileNo: item.providersInfo?.proPhone,
                                    slug: item.slug,
                                    price: type === "internet" ? item.providersInfo?.servicesInfo.internetServices.price :
                                        type === "tv" ? item.providersInfo?.servicesInfo?.tvServices.price :
                                            type === "internet-tv" && item.providersInfo?.servicesInfo?.internetTvBundles.price,
                                }

                                return (
                                    <>
                                        <ProviderCard count={idx} type={types} item={summaryData} zone={zones} offer={item.providersInfo?.proOffer} />
                                    </>
                                )
                            })
                        }
                    </div>
                    <div>
                        <p className="text-sm font-[Roboto] mt-10">
                            *DISCLAIMER: Availability and displayed speeds vary by service address and not available in all areas, pricing subject to change at any time.
                        </p>
                    </div>
                </div>
            </section>

            <section className="my-16">
                <div className="container mx-auto px-4">
                    <div className=''>
                        <h2 className="text-2xl font-bold">
                            Overview of {formatType(type)}  Service Providers in <span className="text-[#ef9831]">{zipcode}</span>
                        </h2>
                        <OverView uniqueServiceType={uniqueServiceType} type={type} city={zipcode} state={state} allProviders={allProviders} />
                    </div>
                </div>
            </section>

            {type !== 'internet-tv' && (
                <section className="my-16">
                    <div className="container mx-auto px-4">
                        <div className='mb-10'>
                            <h2 className="text-2xl font-bold  capitalize leading-10">
                                Cheap {formatType(type)}  Service Providers in <span className="text-[#ef9831]">{zipcode}</span>
                            </h2>
                            <p className='text-xl font-[Roboto] mt-5'>Affordability is essential when choosing an {formatType(type)}  service provider; in an age where staying connected is more crucial than ever, we bring you budget-friendly options that don't compromise on quality. Below are the cheap {formatType(type)}  service providers in {zipcode}.</p>
                        </div>

                        <div className={`md:w-full min-w-fit grid grid-cols-2 bg-[#215690]`}>
                            <div className="border-r grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                                <div>
                                    <h4 className="md:text-base text-xs text-center text-white">
                                        Provider
                                    </h4>
                                </div>
                            </div>
                            <div className="grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                                <div>
                                    <h4 className="md:text-base text-xs text-center text-white mb-2">
                                        Pricing starts from
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='grid'>
                            {
                                cheepProviders?.map((item: any, idx: number) => {
                                    var summaryData = {
                                        logo: item?.featuredImage?.node?.mediaItemUrl,
                                        provider: item?.title,
                                        type: item.serviceTypes.nodes,
                                        summery: type === "internet" ? item.providersInfo?.servicesInfo.internetServices :
                                            type === "tv" ? item.providersInfo?.servicesInfo?.tvServices :
                                                type === "internet-tv" && item.providersInfo?.servicesInfo?.internetTvBundles,

                                        mobileNo: item.providersInfo?.proPhone,
                                        slug: item.slug,
                                        price: type === "internet" ? item.providersInfo?.servicesInfo.internetServices.price :
                                            type === "tv" ? item.providersInfo?.servicesInfo?.tvServices.price :
                                                type === "internet-tv" && item.providersInfo?.servicesInfo?.internetTvBundles.price,
                                    }

                                    return (
                                        <>
                                            <Cheep_Table_CardProvider key={idx} type={types} item={summaryData} zone={zones} offer={item.providersInfo?.proOffer} />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            )}

            {type !== 'internet-tv' && type !== 'tv' && (
                <section className="my-16">
                    <div className="container mx-auto px-4">
                        <div className='mb-10'>
                            <h2 className="text-2xl font-bold  capitalize leading-10">
                                Fast  {formatType(type)}  Service Providers in <span className="text-[#ef9831]">{zipcode}</span>
                            </h2>
                            <p className='text-xl font-[Roboto] mt-5'>If speed is your top priority consider the following {formatType(type)}  service providers in  {zipcode}.</p>
                        </div>

                        <div className={`md:w-full min-w-fit grid  grid-cols-2 bg-[#215690] ${type === 'internet-tv' ? ' md:grid-cols-2' : ' md:grid-cols-2'} `}>
                            <div className="border-r grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                                <div>
                                    <h4 className="md:text-base text-xs text-center text-white">
                                        Provider
                                    </h4>
                                </div>
                            </div>
                            <div className="grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                                <div>
                                    <h4 className="md:text-base text-xs text-center text-white">
                                        {type === "tv" ? (
                                            "Channels"
                                        ) : type === "internet-tv" ? (
                                            "Max Download Speed "
                                        ) : (
                                            "Max Download Speed "
                                        )}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='grid'>
                            {
                                FastProviders?.map((item: any, idx: number) => {
                                    var summaryData = {
                                        logo: item?.featuredImage?.node?.mediaItemUrl,
                                        provider: item?.title,
                                        type: item.serviceTypes.nodes,
                                        summery: type === "internet" ? item.providersInfo?.servicesInfo.internetServices :
                                            type === "tv" ? item.providersInfo?.servicesInfo?.tvServices :
                                                type === "internet-tv" && item.providersInfo?.servicesInfo?.internetTvBundles,

                                        mobileNo: item.providersInfo?.proPhone,
                                        slug: item.slug,
                                        price: type === "internet" ? item.providersInfo?.servicesInfo.internetServices.price :
                                            type === "tv" ? item.providersInfo?.servicesInfo?.tvServices.price :
                                                type === "internet-tv" && item.providersInfo?.servicesInfo?.internetTvBundles.price,
                                    }

                                    return (
                                        <>
                                            <Fast_Table_CardProvider key={idx} type={types} item={summaryData} zone={zones} offer={item.providersInfo?.proOffer} />
                                        </>
                                    )
                                })
                            }
                        </div>

                    </div>
                </section>

            )}

            <section className="my-16">
                <div className="container mx-auto px-4">
                    <div className='mb-10'>
                        <h2 className="text-2xl font-bold">
                            Summary of {formatType(type)}  service providers in <span className="text-[#ef9831]">{zipcode}</span>
                        </h2>
                    </div>
                    <div>

                        <div className=" w-full lg:max-w-[1200px] mx-auto h-auto mb-6">
                            <div className="w-full h-auto shadow-xl border rounded-t-md rounded-b-md flex md:flex-col flex-row items-stretch">
                                <div className={`md:w-full min-w-[50px] grid ${type === 'tv' ? 'md:grid-cols-7' : 'md:grid-cols-8'} grid-cols-1 bg-[#215690] `}>
                                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                                        <div>
                                            <h4 className="md:text-base text-xs text-center text-white">
                                                Provider
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                                        <div>
                                            <h4 className="md:text-base text-xs text-center text-white">
                                                Connection Type
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                                        <div>
                                            <h4 className="md:text-base text-xs text-center text-white mb-2">
                                                {type === "tv" ? (
                                                    "Channels"
                                                ) : (
                                                    "Max Download Speed "
                                                )}
                                            </h4>
                                        </div>
                                    </div>

                                    {type === "internet-tv" &&
                                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                                            <div>
                                                <h4 className="md:text-base text-xs text-center text-white mb-2">
                                                    Channels
                                                </h4>
                                            </div>
                                        </div>}

                                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto md:col-span-3 h-[120px] items-center">
                                        <div>
                                            <h4 className="md:text-base text-xs text-center text-white mb-2">
                                                Features
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                                        <div>
                                            <h4 className="md:text-base text-xs text-center text-white mb-2">
                                                Pricing starts from
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex md:flex-col flex-row w-full md:overflow-hidden overflow-x-scroll'>
                                    {
                                        allProviders?.map((item: any, idx: number) => {
                                            var summaryData = {
                                                provider: item?.title,
                                                slug: item?.slug,
                                                type: item.serviceTypes.nodes,
                                                summery: type === "internet" ? item.providersInfo?.servicesInfo.internetServices :
                                                    type === "tv" ? item.providersInfo?.servicesInfo?.tvServices :
                                                        type === "internet-tv" && item.providersInfo?.servicesInfo?.internetTvBundles,
                                                price: type === "internet" ? item.providersInfo?.servicesInfo.internetServices.price :
                                                    type === "tv" ? item.providersInfo?.servicesInfo?.tvServices.price :
                                                        type === "internet-tv" && item.providersInfo?.servicesInfo?.internetTvBundles.price,
                                            }
                                            return (
                                                <>
                                                    <Inter_Service data={summaryData} key={idx} type={type} />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-16">
                <div className="container mx-auto px-4">
                    <div className='mb-10'>
                        <h2 className="text-2xl font-bold">
                            Types of {formatType(type)}  Technologies available in <span className="text-[#ef9831]">{zipcode}</span>
                        </h2>
                        <p className='text-base'>
                            As of the time this page was written, {zipcode} likely have several types of {formatType(type)}  technologies available to its residents. These technologies include
                            {
                                uniqueServiceType.map((t: any, i: number) => (
                                    <span key={i}> {t.name} {i < uniqueServiceType.length - 1 && ', '} </span>

                                ))
                            }
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
                        {
                            uniqueServiceType.map((t: any, i: number) => (
                                <Technology_Box
                                    icon={<MdCable />}
                                    title={t.name}
                                    key={i}
                                    content={t.description}

                                />
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="my-16">
                <div className="container mx-auto px-4 grid gap-10">
                    <Faqs_Zip city={city} state={state} zipcode={zipcode} type={type} allProviders={allProviders} totalProviderCount={totalProviderCount} countServiceType={countServiceType} />
                </div>
            </section>
        </>
    )
}

export default Zip_Code_Com
