import { Metadata } from "next";
import React from "react";
import { openGraph, twitter } from "@/lib/seoMeta";
import { fetchStateData } from "@/utils/fetchStateData";

import { fetchCityData } from "@/utils/fetchCityData";
import { fetchZipcodeData } from "@/utils/fetchZipcodeData";
import { genMetaDescription } from "@/utils/genMetaDescription";

export async function generateMetadata({ params }: any) {
    
  // SEO meta for states
  if (params?.zipcode.length === 2 && params?.zipcode?.[1].length === 2) {
    const stateResult: any = await fetchStateData(params?.zipcode);
    const type = params?.zipcode?.[0];
    const state = params?.zipcode?.[1];

    return {
      title: `Top ${stateResult?.StateData?.providers?.length} ${type} service provider in ${state}`,
      description: genMetaDescription({
        providers : stateResult?.StateData?.providers, 
        state: state,
        type,
      }),
      alternates: {
        canonical: `https://www.topproviders.net/${type}/${state}`,
      },
      twitter: { ...twitter },
      openGraph: { ...openGraph },
    };
  }

  // SEO meta for City
  if (params?.zipcode.length === 3) {
    const cityResult: any = await fetchCityData(params?.zipcode);
    const type = params?.zipcode?.[0];
    const state = params?.zipcode?.[1];
    const city = params?.zipcode?.[2];

    return {
      title: `Top ${cityResult?.CityData?.providers.length} ${type} Service Provider in ${city}`,
      description: genMetaDescription({
        providers : cityResult?.CityData?.providers, 
        city,
        state,
        type,
      }),
      alternates: {
        canonical: `https://www.topproviders.net/${type}/${state}/${city}`,
      },
      twitter: { ...twitter },
      openGraph: { ...openGraph },
    };
  }

  // SEO meta for Zipcode
  if (
    params?.zipcode.length === 2 &&
    params?.zipcode?.[1].includes("zipcode-")
  ) {
    const zipcodeResult = await fetchZipcodeData(params?.zipcode);
    const type = params?.zipcode?.[0];
    const zipcode = params?.zipcode?.[1].replace("zipcode-", "");

    return {
      title: `Top ${zipcodeResult?.ZipData?.length} ${type} service provider in ${zipcode}`,
      description: genMetaDescription({
        providers : zipcodeResult?.ZipData, 
        type,
        zipcode: zipcode.replace("zipcode-", "")
      }),
      alternates: {
        canonical: `https://www.topproviders.net/${type}/zipcode-${zipcode}`,
      },
      twitter: { ...twitter },
      openGraph: { ...openGraph },
    };
  }
}

const ZipLayout = ({ children }: any) => {
  return <>{children}</>;
};

export default ZipLayout;
