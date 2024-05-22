'use client'
import ProviderDesign from "@/components/ProviderDesign";
import ProvidersCompare from "@/components/compare/providers-compare";
import CompareConectionTypes from "@/components/compareConectionTypes";
import ProsAndCons from "@/components/pros-and-cons/pros-and-cons";
import { ProviderCardState } from "@/components/provider/provider-card-state";
import { InternetPageDiffPath } from "@/const/exports";
import useInternetHandler from "@/hooks/useInternetHandler";
import React from "react";
import { CiStar } from "react-icons/ci";

const CheapInternetTemp = ({ allProviders }: any) => {
  const { year, type, createData, topProvider } = useInternetHandler();
  const t: any = topProvider(allProviders);

  let component = InternetPageDiffPath.find(
    (path: any) => path.slug === type
  )?.component;
  if (component) {
    return component;
  }

  return (
    <section className="container mx-auto px-3 my-20">
      <h1 className="sm:text-5xl text-2xl font-bold capitalize leading-10">
        Best {type} Internet Providers{" "}
        <span className="text-[#ef9831] uppercase">{year}</span>
      </h1>
      <div className="grid gap-6 mt-10">
        {allProviders?.map((item: any, idx: number) => {
          const summaryData = createData(item);
          return (
            <>
              <ProviderCardState
                key={idx}
                count={idx}
                type={type}
                item={summaryData}
                offer={item.providersInfo?.proOffer}
              />
            </>
          );
        })}
      </div>
      <h2 className="sm:text-3xl mt-10 text-2xl font-bold capitalize leading-10">
        What is {type} Internet?
      </h2>
      <p className="mt-3">
        {type} internet transfers data through glass, fiber-optic cables, which
        makes it capable of moving information at the speed of light. {type}{" "}
        offers the fastest internet speeds and supports the most device
        connectivity among connection types. However, {type} has limited
        availability compared to DSL and cable internet, but providers continue
        to invest in {type} internet.
      </p>
      <h2 className="sm:text-3xl mt-10 text-2xl font-bold capitalize leading-10">
        Is {type} Internet right for me?
      </h2>
      <p className="mt-3">
        {type} internet is the most superior connection type in terms of speed
        and capacity. It’s one shortfall is lack of availability. However,
        providers continue to expand their networks. With faster speeds to
        support multiple connected devices and heavy usage, {type} offers
        reliable internet access without common headaches such as dead spots,
        buffering, and ISP throttling. However, due to its higher cost and
        limited availability, it isn’t for everyone.
      </p>
      <ProsAndCons />
      <ProvidersCompare type={type} providers={allProviders} />
      <h2 className="sm:text-3xl mt-10 mb-7 text-2xl font-bold capitalize leading-10">
        Our Top {type} Picks
      </h2>
      <ProviderDesign
        tProvider={t}
        icon={<CiStar />}
        title="Highest speed stability"
      />
      <p className="mt-7 text-lg text-gray-600">
        {t?.title} internet plans offer services in all 50 states and offer
        fiber speeds up to{" "}
        {t?.providersInfo?.servicesInfo?.internetServices?.summarySpeed} Mpbs.
        Internet plans are designed to provide the right products you need for
        your lifestyle at competitive prices.
      </p>
      <h2 className="sm:text-3xl mt-10 mb-7 text-2xl font-bold capitalize leading-10">
        Fiber Internet Compared to Other Connection Types
      </h2>
      <CompareConectionTypes type={type} />
      <div className="mt-12 bg-gray-100 p-12 rounded-2xl">
        <h2 className="sm:text-3xl mb-3 text-2xl font-bold capitalize leading-10">
          How We Evaluate
        </h2>
        <p className=" text-lg text-gray-600">
          Between hidden fees and price hikes, finding the right internet plan
          can feel overwhelming. To help with your search, our team of internet
          experts evaluates ISPs on categories including performance,
          affordability, and customer satisfaction to provide you with the best
          options near you.
        </p>
      </div>
    </section>
  );
};

export default CheapInternetTemp;
