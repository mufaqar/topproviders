import React from "react";
import { openGraph, twitter } from "@/lib/seoMeta";
import { fetchStateData } from "@/utils/fetchStateData";

import { fetchCityData } from "@/utils/fetchCityData";
import { fetchZipcodeData } from "@/utils/fetchZipcodeData";
import { genFullMetaDescription, genMetaDescription } from "@/utils/genMetaDescription";
import Script from "next/script";

export async function generateMetadata({ params }: any) {
  // SEO meta for states
  if (params?.zipcode.length === 2 && params?.zipcode?.[1].length === 2) {
    const stateResult: any = await fetchStateData(params?.zipcode);
    const type = params?.zipcode?.[0];
    const state = params?.zipcode?.[1];

    return {
      title: `Top ${stateResult?.StateData?.providers?.length} ${type} service provider in ${state}`,
      description: genMetaDescription({
        providers: stateResult?.StateData?.providers,
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
        providers: cityResult?.CityData?.providers,
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
        providers: zipcodeResult?.ZipData,
        type,
        zipcode: zipcode.replace("zipcode-", ""),
      }),
      alternates: {
        canonical: `https://www.topproviders.net/${type}/zipcode-${zipcode}`,
      },
      twitter: { ...twitter },
      openGraph: { ...openGraph },
    };
  }
}



async function fetchCityDataAsync(query: any) {
  const cityResult = await fetchCityData(query);
  return {
    CityData: cityResult?.CityData,
    cityNotFound: cityResult?.cityNotFound,
  };
}

async function fetchStateDataAsync(query: any) {
  const stateResult = await fetchStateData(query);
  return {
    StateData: stateResult?.StateData,
    allcities: stateResult?.allcities,
    state: stateResult?.state,
    stateNotFound: stateResult?.stateNotFound,
  };
}

async function fetchZipcodeDataAsync(query: any) {
  const zipcodeResult = await fetchZipcodeData(query);
  return {
    ZipData: zipcodeResult.ZipData,
    zipcode: zipcodeResult.zipcode,
    type: zipcodeResult.type,
    zipNotFound: zipcodeResult.zipNotFound,
  };
}


const ZipLayout = async (props:any) => {
  const query = props?.params?.zipcode
  const { CityData, cityNotFound } = await fetchCityDataAsync(query);
  const { StateData, allcities, state, stateNotFound } = await fetchStateDataAsync(query);
  const { ZipData, zipcode, type, zipNotFound } = await fetchZipcodeDataAsync(query);
  
  const images = CityData?.providers?.map((item:any)=>item?.featured_image)
  const stateImages = StateData?.providers?.map((item:any)=>item?.featured_image)
  const zipImages = ZipData?.map((item:any)=>item?.featuredImage).map((i:any)=>i.node?.mediaItemUrl)

  const scriptContent = `
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "InternetServiceProvider",
        "name": "${query?.[0]} servise providers in ${query?.[1]}, ${query?.[2]}",
        "image": ${images},
        "description": "Discover the perfect Internet and TV Service Providers. Find unbeatable deals on Cable and High-Speed Internet to make your move seamless and enjoyable!",
        "url": "https://www.topproviders.net/${query?.[0]}/${query?.[1]}/${query?.[2]}",
        "brand": {
          "@type": "Brand",
          "name": "Top Providers",
          "logo": "https://www.topproviders.net/_next/image?url=%2Flogo.png&w=256&q=75"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "bestRating": "5",
          "ratingCount": "120"
        }
      }
    </script>
  `;

  const stateScriptContent = `
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "InternetServiceProvider",
        "name": "${query?.[0]} servise providers in ${query?.[1]}",
        "image": ${stateImages},
        "description": ${
          genFullMetaDescription({
            providers: StateData?.providers,
            state: query?.[1],
            type: query?.[0],
          })
        },
        "url": "https://www.topproviders.net/${query?.[0]}/${query?.[1]}",
        "brand": {
          "@type": "Brand",
          "name": "Top Providers",
          "logo": "https://www.topproviders.net/_next/image?url=%2Flogo.png&w=256&q=75"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "bestRating": "5",
          "ratingCount": "120"
        }
      }
    </script>
  `;

  const zipcodeScriptContent = `
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "InternetServiceProvider",
        "name": "${query?.[0]} servise providers in zipcode ${query?.[1].replace("zipcode-", "")}",
        "image": ${zipImages},
        "description": ${
          genFullMetaDescription({
            providers: ZipData,
            type: query?.[0],
            zipcode: query?.[1].replace("zipcode-", ""),
          })
        },
        "url": "https://www.topproviders.net/${query?.[0]}/${query?.[1]}",
        "brand": {
          "@type": "Brand",
          "name": "Top Providers",
          "logo": "https://www.topproviders.net/_next/image?url=%2Flogo.png&w=256&q=75"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "bestRating": "5",
          "ratingCount": "120"
        }
      }
    </script>
  `;


  const currenScript = CityData ? scriptContent : StateData ? stateScriptContent : ZipData && zipcodeScriptContent


  return (
    <>
      <head>
        <Script dangerouslySetInnerHTML={{ __html: currenScript }} />
      </head>
      {props?.children}
    </>
  );
};

export default ZipLayout;
