import Faqs_Sec from '@/components/faqs';
import SearchForm from '@/components/searchform'
import React from 'react'
import Provider_Nav from '../provider/provider-nav'
import { ProviderCard } from '../provider/provider-card'
import Inter_Service from '../provider/inter-service'
import Technology_Box from '../provider/technology-box'
import Image from 'next/image'
import Provider_Nav_City from '../provider/provider-nav-city';
import { ProviderCardState } from '../provider/provider-card-state';
import { MdCable } from 'react-icons/md';
import Inter_Service_State from '../provider/inter-service-state';
import Table_CardProviderState from '../provider/cheeptable-cardProviderState';
import { useRouter } from 'next/router'
import FastTable_CardProviderState from '../provider/fasttable-cardProviderState';
import CheepTable_CardProviderState from '../provider/cheeptable-cardProviderState';
import OverView from '../overview';
import Head from 'next/head';
import PageHead from '../metas/pagesmeta';

export default function Cities_com({ my_city, allProviders }: any) {
  const { query } = useRouter();
  const type = query.type || "internet";

  
  const city_code = query.city;
  const state = query.state;
  let C_State = (state as string).toUpperCase();

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


  const inputString = my_city;
  const parts = inputString.split('-');
  const capitalizedWords: string[] = parts.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1));
  const city = capitalizedWords.join(' ');
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

  const cheepProviders = allProvidersCheep.sort((a: any, b: any) => a.pro_price - b.pro_price);
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

  return (
    <>



        
<PageHead
 title={
  type === "internet"
    ? `Best ${totalProviderCount} ${formatType(type)}  Service Providers in ${city}, ${C_State} ${currentYear}.`
    : type === "tv"
    ? `Best ${totalProviderCount} ${formatType(type)}  Service Providers in ${city}, ${C_State} for ${currentYear}.`
    : `Best ${totalProviderCount} ${formatType(type)}  Service Providers in ${city}, ${C_State}`
}
  description={`Best ${totalProviderCount} ${formatType(type)} Service Providers in ${city}, ${C_State} for ${currentMonthName}, ${currentYear}.  ${allProviders?.slice(0, 4).map((item: any, idx: number) => (
      `${idx + 1} ${item?.title}`)).join(', ')}` }
  url={`https://www.cablemovers.net/${state}`}
/>




      <section className="min-h-[40vh]  flex items-center bg-gray-50">
        <div className="container mx-auto px-4">
          <div >
            <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[850px] mx-auto capitalize leading-10">
              {formatType(type)}  Service Providers in <br /><span className="text-[#ef9831] ">{city}, <span className='uppercase'>{state}</span></span>
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

      <Provider_Nav_City />

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold  capitalize leading-10">
              {formatType(type)} Service Providers in <span className="text-[#ef9831] ">{city}, <span className='uppercase'>{state}</span></span>
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
                  price: type === "internet" ? item.services_info_internet_services_price :
                    type === "tv" ? item.services_info_tv_services_price :
                      type === "internet-tv" && item.services_info_internet_tv_bundles_price,
                  channels: item.services_info_internet_tv_bundles_summary_channel,
                  speed: type === "internet" ? item.services_info_internet_services_speed :
                    type === "tv" ? item.services_info_tv_services_speed :
                      type === "internet-tv" && item.services_info_internet_tv_bundles_speed,
                  summery: type === "internet" ? item.services_info_internet_services_features :
                    type === "tv" ? item.services_info_tv_services_features :
                      type === "internet-tv" && item.services_info_internet_tv_bundles_features,

                }

                return (
                  <>
                    <ProviderCardState key={idx} count={idx} type={type} item={summaryData} offer={item.providersInfo?.proOffer} />

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
              Overview of Internet Service Providers in <span className="text-[#ef9831] ">{city}, <span className='uppercase'>{state}</span></span>
            </h2>

            <OverView uniqueServiceType={uniqueServiceType} type={type} city={city} state={state} allProviders={allProviders} />
          </div>
        </div>
      </section>


      {type !== 'internet-tv' && (
        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold  capitalize leading-10">
                Cheap  {formatType(type)} Service Providers in <span className="text-[#ef9831] ">{city}, <span className='uppercase'>{state}</span></span>
              </h2>
              <p className='text-xl font-[Roboto] mt-5'>Affordability is essential when choosing an  {formatType(type)} service provider. Below are the cheap {type} service providers in {state}.</p>
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

      )}
      {type !== 'internet-tv' && type !== 'tv' && (

        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold  capitalize leading-10">

                Fastest {formatType(type)} Service Providers In <span className="text-[#ef9831] ">{city}, <span className='uppercase'>{state}</span></span>
              </h2>
              <p className='text-xl font-[Roboto] mt-5'>If speed is your top priority consider the following {type} service providers in <span className='uppercase'>{state}</span></p>
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
                    Speeds from
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
                    slug: item.slug,
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
              Summary of Internet service providers in  <span className="text-[#ef9831] ">{city}, <span className='uppercase'>{state}</span></span>
            </h2>
          </div>
          <div>

            <div className=" w-full lg:max-w-[1200px] mx-auto h-auto mb-6">
              <div className="w-full h-auto shadow-xl border rounded-t-md rounded-b-md flex md:flex-col flex-row items-stretch">
                <div className={`md:w-full min-w-[50px] grid ${type === 'internet-tv' ? 'md:grid-cols-8' : 'md:grid-cols-7'} grid-cols-1 bg-[#215690] `}>
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
                          "Download Speeds up to "
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
            <h2 className="text-2xl font-bold mb-2">
              Types of internet Technologies available in  <span className="text-[#ef9831] ">{city}, <span className='uppercase'>{state}</span></span>
            </h2>
            <p className='text-base'>
              As of the time this page was written, likely have several types of internet technologies available to its residents. These technologies include    {
                uniqueServiceType.map((t: any, i: number) => (
                  <span key={i}> <span dangerouslySetInnerHTML={{ __html: t.name }} /> , </span>
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
          <Faqs_Sec city={city} type={type} state={state} zipcode="" allProviders={allProviders} totalProviderCount={totalProviderCount} />
        </div>
      </section>



    </>
  )
}


