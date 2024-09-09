import { Metadata } from "next";
import React from "react";
import { openGraph, twitter } from "@/lib/seoMeta";
import { fetchStateData } from "@/utils/fetchStateData";
import { fetchCityData } from "@/utils/fetchCityData";
import { fetchZipcodeData } from "@/utils/fetchZipcodeData";

export async function generateMetadata({ params }: any) {
    
  // SEO meta for states
  if (params?.zipcode.length === 2 && params?.zipcode?.[1].length === 2) {
    const stateResult: any = await fetchStateData(params?.zipcode);
    const type = params?.zipcode?.[0];
    const state = params?.zipcode?.[1];

    return {
      title: `${state}`,
      description: `...`,
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
      title: `${city}`,
      description: `...`,
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
      title: `${zipcode}`,
      description: `...`,
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
