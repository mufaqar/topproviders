"use client";
import PageBanner from "@/components/pageBanner";
import { GlobalContext } from "@/context/globalContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ComparissionTemp = ({data}:any) => {
  const { ProviderOne, setProviderOne, ProviderTwo, setProviderTwo } = useContext(GlobalContext);

  const [allProviders, setAllProviders] = useState<any>(data)

  var featuresOne =
    ProviderOne?.providersInfo?.servicesInfo?.internetServices?.features?.split(
      ", "
    ) ||
    ProviderOne?.providersInfo?.servicesInfo?.internetTvBundles?.features?.split(
      ", "
    ) ||
    ProviderOne?.providersInfo?.servicesInfo?.tvServices?.features?.split(
      ", "
    );
  var featuresTwo =
    ProviderTwo?.providersInfo?.servicesInfo?.internetServices?.features?.split(
      ", "
    ) ||
    ProviderTwo?.providersInfo?.servicesInfo?.internetTvBundles?.features?.split(
      ", "
    ) ||
    ProviderTwo?.providersInfo?.servicesInfo?.tvServices?.features?.split(
      ", "
    );

    const handleSelectProviderOne = (props:any) => {
      const p1 = JSON?.parse(props.target.value)
      setProviderOne(p1)
      toast.info(`${p1.title} Selected`)
    }
    const handleSelectProviderTwo = (props:any) => {
      const p2 = JSON?.parse(props.target.value)
      setProviderTwo(p2)
      toast.info(`${p2.title} Selected`)
    }

    useEffect(()=>{
      setProviderOne(data?.[0])
      setProviderTwo(data?.[1])
    },[])

  return (
    <>
      <PageBanner title="Comparission" />
      <div className="!overflow-x-auto mb-14 scroll-bar">
        <section
          className={`mt-14 container mx-auto grid grid-cols-3 px-2 md:px-0 min-w-[540px]`}
        >
          <div />
          <div className="flex justify-center items-center border py-10">
            <Image
              src={ProviderOne?.featuredImage?.node?.mediaItemUrl}
              alt=""
              width={150}
              height={120}
            />
          </div>
          <div className="flex justify-center items-center border py-10">
            <Image
              src={ProviderTwo?.featuredImage?.node?.mediaItemUrl}
              alt=""
              width={150}
              height={120}
            />
          </div>
        </section>
        <section
          className={`mb-2 container mx-auto grid grid-cols-3 px-2 md:px-0 min-w-[540px] `}
        >
          <div className="border font-semibold md:text-xl flex items-center">
            <p className="p-3 px-4 flex items-center">Select Providers</p>
          </div>
          <div className="border bg-[#FECE2F] flex items-center pr-2 !border-b-[0px]">
            <select
              id="provider 1"
              onChange={(choice) => handleSelectProviderOne(choice)}
              className="bg-transparent text-gray-900 block w-full p-2.5 border-none focus:outline-none"
            >
              <option selected>{ProviderOne ? ProviderOne.title : 'Choose a Provider'} </option>
              {
                allProviders?.map((item:any,idx:number)=>(
                  <option value={JSON.stringify(item)} key={idx}>{item?.title}</option>
                ))
              }
            </select>
          </div>
          <div className="border bg-[#FECE2F] flex items-center pr-2 !border-b-[0px]">
            <select
              id="provider 2"
              onChange={(choice) => handleSelectProviderTwo(choice)}
              className="bg-transparent text-gray-900 block w-full p-2.5 border-none focus:outline-none"
            >
              <option selected>{ProviderTwo ? ProviderTwo.title : 'Choose a Provider'} </option>
              {
                allProviders?.map((item:any,idx:number)=>(
                  <option value={JSON.stringify(item)} key={idx}>{item?.title}</option>
                ))
              }
            </select>
          </div>
          <div className="border font-semibold md:text-xl flex items-center">
            <p className="p-3 px-4 flex items-center">Features</p>
          </div>
          <div className="border">
            {/* <div dangerouslySetInnerHTML={{__html: ProviderOne?.providersInfo?.features}} /> */}
            <ul className="grid p-3 justify-start">
              {featuresOne?.map((feature: any, idx: number) => (
                <li className="flex gap-2 items-center" key={idx}>
                  <svg
                    className="min-w-[1rem] h-4  text-[#FECE2F] font-extrabold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border ">
            {/* <div dangerouslySetInnerHTML={{__html: ProviderTwo?.providersInfo?.features}} /> */}
            <ul className="grid p-3 justify-start">
              {featuresTwo?.map((feature: any, idx: number) => (
                <li className="flex gap-2 items-center" key={idx}>
                  <svg
                    className="min-w-[1rem] h-4  text-[#FECE2F] font-extrabold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border font-semibold md:text-xl">
            <p className="p-3 px-4 flex items-center">Speed</p>
          </div>
          <div className="border">
            <p className="p-3 px-4 flex items-center">
              {ProviderOne?.providersInfo?.servicesInfo?.internetServices
                ?.speed
                ? `${ProviderOne?.providersInfo?.servicesInfo?.internetServices?.speed} Mbps`
                : "-"}
            </p>
          </div>
          <div className="border">
            <p className="p-3 px-4 flex items-center">
              {ProviderTwo?.providersInfo?.servicesInfo?.internetServices
                ?.speed
                ? `${ProviderTwo?.providersInfo?.servicesInfo?.internetServices?.speed} Mbps`
                : "-"}
            </p>
          </div>
          <div className="border font-semibold md:text-xl">
            <p className="p-3 px-4 flex items-center">Channels</p>
          </div>
          <div className="border">
            <p className="p-3 px-4 flex items-center">
              {ProviderOne?.providersInfo?.servicesInfo?.tvServices?.speed
                ? ProviderOne?.providersInfo?.servicesInfo?.tvServices
                    ?.speed
                : "-"}
            </p>
          </div>
          <div className="border">
            <p className="p-3 px-4 flex items-center">
              {ProviderTwo?.providersInfo?.servicesInfo?.tvServices?.speed
                ? ProviderTwo?.providersInfo?.servicesInfo?.tvServices
                    ?.speed
                : "-"}
            </p>
          </div>
          <div className="border font-semibold md:text-xl">
            <p className="p-3 px-4 flex items-center">Price</p>
          </div>
          <div className="border">
            <p className="p-3 px-4 flex items-center">
              ${ProviderOne?.providersInfo?.proPrice}
            </p>
          </div>
          <div className="border">
            <p className="p-3 px-4 flex items-center">
              ${ProviderTwo?.providersInfo?.proPrice}
            </p>
          </div>
          <div className="border font-semibold md:text-xl">
            <p className="p-3 px-4 flex items-center">More About</p>
          </div>
          <div className="border">
            <p className="p-3 px-4 flex items-center">
             Details Plans
            </p>
          </div>
          <div className="border">
            <p className="p-3 px-4 flex items-center">
            Details Plans
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComparissionTemp;
