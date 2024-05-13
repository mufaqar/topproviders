'use client'
import Provider_Nav_State from '@/components/provider/provider-nav-state';
import Technology_Box from '@/components/provider/technology-box';
import SearchForm from '@/components/searchform';
import { CityByStateQuery } from '@/config/query';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { ProviderCardState } from '@/components/provider/provider-card-state';
import Inter_Service_State from '@/components/provider/inter-service-state';
import CheepTable_CardProviderState from '@/components/provider/cheeptable-cardProviderState';
import FastTable_CardProviderState from '@/components/provider/fasttable-cardProviderState';
import OverView from '@/components/overview';
import PageHead from '@/components/metas/pagesmeta';
import { getUniqueCities, formatType } from '@/utils'


export default function StateModule({ allcities, state, allProviders , type }: any) {
  const [citiesPageInfo, setCitiesPageInfo] = useState(allcities[0].zones.pageInfo)
  const [allCitiesbyState, setAllCitiesByState] = useState<any>()

  useEffect(() => {
    const unique = getUniqueCities(allcities[0].zones.nodes)
    setAllCitiesByState(unique)
  }, [allcities])

  const [loading, setloading] = useState(false);

  const C_State = state.toUpperCase();

  allProviders = allProviders.filter((item: any) => item?.providers_types?.some((i: any) => i.toLowerCase() === type));
  const servicesTypes = allProviders.map((item: any) => { return (item.providers_service_types) })
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
  const allProvidersFast = [...allProviders];
  const allProvidersCheep = [...allProviders];
  const cheepProviders = allProvidersCheep.sort((a: any, b: any) => {
    if (type === "tv") {
      return a.services_info_tv_services_price - b.services_info_tv_services_price;
    } else if (type === "internet-tv") {
      return a.services_info_internet_tv_bundles_price - b.services_info_internet_tv_bundles_price;
    } else {
      return a.pro_price - b.pro_price;
    }
  });

  const FastProviders = allProvidersFast.sort((a: any, b: any) => {
    const speedA = parseInt(a.services_info_internet_services_speed.split("-")[1], 10);
    const speedB = parseInt(b.services_info_internet_services_speed.split("-")[1], 10);
    return speedB - speedA;
  });

  const totalProviderCount = allProviders?.length || 0;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonthIndex = currentDate.getMonth();
  const currentMonthNumber = currentMonthIndex + 1;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthName = monthNames[currentMonthIndex];

  const handleLoadMoreCities = (endCursor: string, allCitiesbyState: any) => {
    setloading(true)
    const variables = {
      state,
      after: endCursor
    };

    fetch("https://topproviders.mufaqar.com/graphql", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: CityByStateQuery, variables }),
    })
      .then(response => response.json())
      .then(data => {
        const uniqueData = getUniqueCities(data?.data?.states?.nodes[0].zones.nodes)
        // merged cities 
        let mergedCities = [...allCitiesbyState, ...uniqueData];
        setCitiesPageInfo(data?.data?.states?.nodes[0].zones.pageInfo)
        setAllCitiesByState(mergedCities)
        setloading(false)
      })
      .catch(error => {
        console.error('Error:', error);
        setloading(false)
      });
  }

  return (
    <>


      <PageHead title={`Best ${totalProviderCount} ${formatType(type)}  Service Providers in  ${C_State} | For ${currentYear} `} description={`Best ${totalProviderCount} ${formatType(type)} Service Providers in  ${C_State}.  ${allProviders?.slice(0, 8).map((item: any, idx: number) => (
        `${idx + 1} ${item?.title}`)).join(', ')}`} url={`https://topproviders.net/${state}?type=${type}`} curl={`https://topproviders.net/${state}`} />


      <section className="min-h-[40vh]  flex items-center bg-gray-50">
        <div className="container mx-auto px-4">
          <div >
            <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[850px] mx-auto capitalize leading-10">
              {formatType(type)} Service Providers in <br /><span className="text-[#ef9831] uppercase">{state}</span>
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
      <Provider_Nav_State />

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold  capitalize leading-10">
              {formatType(type)} Service Providers in <span className="text-[#ef9831] uppercase">{state}</span>
            </h2>
          </div>
          <div className='grid gap-7'>
            {
              allProviders?.map((item: any, idx: number) => {
                var summaryData = {
                  logo: item?.featured_image,
                  provider: item?.title,
                  type: item.providers_service_types,
                  mobileNo: item.pro_phone,
                  slug: item.slug,
                  pro_offer: item.pro_offer,
                  channels: item.services_info_internet_tv_bundles_summary_channel,
                  speed: type === "internet" ? item.services_info_internet_services_speed :
                    type === "tv" ? item.services_info_tv_services_speed :
                      type === "internet-tv" && item.services_info_internet_tv_bundles_speed,
                  summery: type === "internet" ? item.services_info_internet_services_features :
                    type === "tv" ? item.services_info_tv_services_features :
                      type === "internet-tv" && item.services_info_internet_tv_bundles_features,
                  price: type === "internet" ? item.services_info_internet_services_price :
                    type === "tv" ? item.services_info_tv_services_price :
                      type === "internet-tv" && item.services_info_internet_tv_bundles_price,
                }

                return (
                  <>
                    <ProviderCardState key={idx} count={idx} type={type} item={summaryData} offer={item?.pro_offer} />

                  </>
                )
              })
            }
          </div>
          <div>
            <p className="text-sm font-[Roboto] mt-10">
              *DISCLAIMER: Availability vary by service address. not all offers available in all areas, pricing subject to change at any time. Additional taxes, fees, and terms may apply.
            </p>
          </div>
        </div>
      </section>


      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className=''>
            <h2 className="text-2xl font-bold">
              Overview of  {formatType(type)} Service Providers in <span className="text-[#ef9831] uppercase">{state}</span>
            </h2>

            <OverView uniqueServiceType={uniqueServiceType} type={type} city="" state={state} allProviders={allProviders} />

          </div>
        </div>
      </section>



      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold  capitalize leading-10">
              Cheap  {formatType(type)} Service Providers in <span className="text-[#ef9831] uppercase">{state}</span>
            </h2>
            <p className='text-xl font-[Roboto] mt-5'>Affordability is essential when choosing your {formatType(type)} Service Provider; in an age where staying connected is more crucial than ever, we bring you budget-friendly {formatType(type)} options that don't compromise on quality. Below are the cheap {formatType(type)} Service Providers in {C_State}.</p>
          </div>

          <div className={`md:w-full min-w-fit grid  grid-cols-2 bg-[#215690]`}>
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
                  provider: item?.title,
                  slug: item.slug,
                  price: type === "internet" ? item.services_info_internet_services_price :
                    type === "tv" ? item.services_info_tv_services_price :
                      type === "internet-tv" && item.services_info_internet_tv_bundles_price,
                }
                return (
                  <>
                    <CheepTable_CardProviderState key={idx} count={idx} item={summaryData} />

                  </>
                )
              })
            }
          </div>

        </div>
      </section>


      {type !== 'internet-tv' && type !== 'tv' && (


        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold  capitalize leading-10">

                Fast {formatType(type)} Service Providers In <span className="text-[#ef9831] uppercase">{state}</span>
              </h2>
              <p className='text-xl font-[Roboto] mt-5'>If speed is your top priority consider the following {formatType(type)} Service Providers in {C_State}. These providers offer impressive download speeds that cater to the needs of heavy Internet users, streamers, and online gamers.</p>
            </div>

            <div className={`md:w-full min-w-fit grid  grid-cols-2 bg-[#215690]`}>
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
                    Max Download Speed
                  </h4>
                </div>
              </div>


            </div>
            <div className='grid'>
              {
                FastProviders?.map((item: any, idx: number) => {

                  var summaryData = {
                    provider: item?.title,
                    speed: item.services_info_internet_services_summary_speed,
                    slug: item.slug
                  }

                  return (
                    <>
                      <FastTable_CardProviderState key={idx} count={idx} item={summaryData} />

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
              Summary of  {formatType(type)} Service Providers in <span className="text-[#ef9831] uppercase">{state}</span>
            </h2>
            <div className="w-fit hint mx-auto block md:hidden mt-5" >
              Swipe Left to See All →
            </div>
          </div>
          <div>

            <div className=" w-full lg:max-w-[1200px] mx-auto h-auto mb-6">
              <div className="w-full h-auto shadow-xl border rounded-t-md rounded-b-md flex md:flex-col flex-row items-stretch">
                <div className={`md:w-full min-w-[50px] grid  ${type === 'internet-tv' ? 'md:grid-cols-8' : 'md:grid-cols-7'} grid-cols-1 bg-[#215690] `}>
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
                        slug: item.slug,
                        type: item.providers_service_types,
                        summery: type === "internet" ? item.services_info_internet_services_summary_features :
                          type === "tv" ? item.services_info_tv_services_summary_features :
                            type === "internet-tv" && item.services_info_internet_tv_bundles_summary_features,

                        speed: type === "internet" ? item.services_info_internet_services_summary_speed :
                          type === "tv" ? item.services_info_tv_services_summary_speed :
                            type === "internet-tv" && item.services_info_internet_tv_bundles_summary_speed,
                        channel: item.services_info_internet_tv_bundles_summary_channel,
                        price: type === "internet" ? item.services_info_internet_services_price :
                          type === "tv" ? item.services_info_tv_services_price :
                            type === "internet-tv" && item.services_info_internet_tv_bundles_price,
                      }

                      return (
                        <>
                          <Inter_Service_State data={summaryData} key={idx} type={type} />
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
              Types of  {formatType(type)} Technologies Available in <span className="text-[#ef9831] uppercase">{state}</span>
            </h2>
            <p className='text-base'>
              {C_State} is well-connected with a diverse range of {formatType(type)} connection types to its residents, each with with its own advantages and considerations. These connection types include    {
                uniqueServiceType.map((t: any, i: number) => (
                  <span key={i}> <span dangerouslySetInnerHTML={{ __html: t.name }} /> , </span>
                ))
              }. Understanding these options can help you make an informed decision based on your needs and location.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
            {
              uniqueServiceType.map((t: any, i: number) => (
                <Technology_Box
                  icon={t.name}
                  title={t.name}
                  key={i}
                  content={t.description}
                />
              ))
            }
          </div>
        </div>
      </section>
      {/* <section>
        <div className='container mx-auto px-4 m-10'>
          <div className="mt-20 mb-7">
            <h2 className='text-center text-2xl font-bold'>
              Compare {formatType(type)} Providers by Cities
            </h2>
          </div>
          <div>
            <ul className="grid sm:grid-cols-4 grid-cols-2 gap-5">
              {allCitiesbyState?.map((item: any, id: number) => {
                return <li key={id} className='bg-[#F5F5F5] rounded-2xl px-4 py-4 text-[#215690] font-[Roboto] hover:drop-shadow-xl hover:shadow-bg-[#f5f5f5] group'>
                  <Link href={`${state}/${item.cities.nodes[0].slug}`} className="">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl group-hover:underline">{item.cities.nodes[0].name}</h3>
                      <BsArrowRight strokeWidth="1" className="items-center text-right" />
                    </div>
                  </Link>
                </li>
              })}
            </ul>
          </div>
          <div className='flex justify-center flex-col items-center my-10'>

            {
              citiesPageInfo.hasNextPage && <button onClick={() => handleLoadMoreCities(citiesPageInfo.endCursor, allCitiesbyState)} className='border px-10 py-3 text-[#215790] border-[#215790] hover:bg-[#215790] hover:text-white rounded-xl hover:shadow-xl'>{loading ? 'Loading...' : 'Load More'}</button>
            }
          </div>
        </div>
      </section> */}

    </>
  )
}



