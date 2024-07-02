"use client"
import PageBanner from "@/components/pageBanner";
import { GlobalContext } from "@/context/globalContext";
import Image from "next/image";
import React, { useContext } from "react";

const Comparission = () => {
  const {comparesList, setCompareList} = useContext(GlobalContext)

  console.log("🚀 ~ Comparission ~ comparesList:", comparesList)
  var featuresOne = comparesList[0]?.providersInfo?.servicesInfo?.internetServices?.features?.split(", ") || comparesList[0]?.providersInfo?.servicesInfo?.internetTvBundles?.features?.split(", ") || comparesList[0]?.providersInfo?.servicesInfo?.tvServices?.features?.split(", ");
  var featuresTwo = comparesList[1]?.providersInfo?.servicesInfo?.internetServices?.features?.split(", ") || comparesList[1]?.providersInfo?.servicesInfo?.internetTvBundles?.features?.split(", ") || comparesList[1]?.providersInfo?.servicesInfo?.tvServices?.features?.split(", ");

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
              src={comparesList[0]?.featuredImage?.node?.mediaItemUrl}
              alt=""
              width={150}
              height={120}
            />
          </div>
          <div className="flex justify-center items-center border py-10">
            <Image
              src={comparesList[1]?.featuredImage?.node?.mediaItemUrl}
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
            <p className="p-3 px-4 flex items-center">Name</p>
          </div>
          <div className="border bg-[#FECE2F] flex items-center !border-b-[0px]">
            <p className="p-3 px-4 flex items-center">
              {comparesList[0]?.title}
            </p>
          </div>
          <div className="border bg-[#FECE2F] flex items-center !border-b-[0px]">
            <p className="p-3 px-4">{comparesList[1]?.title}</p>
          </div>
          <div className="border font-semibold md:text-xl flex items-center">
            <p className="p-3 px-4 flex items-center">Features</p>
          </div>
          <div className="border">
            {/* <div dangerouslySetInnerHTML={{__html: comparesList[0]?.providersInfo?.features}} /> */}
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
            {/* <div dangerouslySetInnerHTML={{__html: comparesList[1]?.providersInfo?.features}} /> */}
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
              {comparesList[0]?.providersInfo?.servicesInfo?.internetServices?.speed ?  `${comparesList[0]?.providersInfo?.servicesInfo?.internetServices?.speed} Mbps` : '-'}
            </p>
          </div>
          <div className="border">
            <p className="p-3 px-4 flex items-center">
              {comparesList[1]?.providersInfo?.servicesInfo?.internetServices?.speed ?  `${comparesList[1]?.providersInfo?.servicesInfo?.internetServices?.speed} Mbps` : '-'}
            </p>
          </div>
          <div className="border font-semibold md:text-xl">
            <p className="p-3 px-4 flex items-center">Channels</p>
          </div>
          <div className="border">
            <p className="p-3 px-4 flex items-center">
              {comparesList[0]?.providersInfo?.servicesInfo?.tvServices?.speed ? comparesList[0]?.providersInfo?.servicesInfo?.tvServices?.speed : '-'}
            </p>
          </div>
          <div className="border">
            <p className="p-3 px-4 flex items-center">
              {comparesList[1]?.providersInfo?.servicesInfo?.tvServices?.speed ? comparesList[1]?.providersInfo?.servicesInfo?.tvServices?.speed : '-'}
            </p>
          </div>
          <div className="border font-semibold md:text-xl">
            <p className="p-3 px-4 flex items-center">Price</p>
          </div>
          <div className="border">
            <p className="p-3 px-4 flex items-center">
              ${comparesList[0]?.providersInfo?.proPrice}
            </p>
          </div>
          <div className="border">
            <p className="p-3 px-4 flex items-center">
              ${comparesList[1]?.providersInfo?.proPrice}
            </p>
          </div>
          <div className="border font-semibold md:text-xl">
            <p className="p-3 px-4 flex items-center">Phone Number</p>
          </div>
          <div className="border">
            <p className="p-3 px-4 flex items-center">
              {comparesList[0]?.providersInfo?.proPhone}
            </p>
          </div>
          <div className="border">
            <p className="p-3 px-4 flex items-center">
              {comparesList[1]?.providersInfo?.proPhone}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Comparission;

const comparesList = [
  {
    title: "Hugson",
    featuredImage:
      "https://topproviders.mufaqar.com/wp-content/uploads/2023/11/HughesNet.jpg",
    features:
      "Free WiFi, Free professional installation, Price won't change for 2 years",
    price: "20",
    proSpeed: "20 MB - 100 MB",
    channel: 200,
    phone: "833-592-0098",
  },
  {
    title: "title",
    featuredImage:
      "https://topproviders.mufaqar.com/wp-content/uploads/2023/11/HughesNet.jpg",
    features:
      "Free WiFi, Free professional installation, Price won't change for 2 years",
    price: "24",
    proSpeed: "40MB - 150MB",
    channel: 100,
    phone: "833-592-0098",
  },
];
