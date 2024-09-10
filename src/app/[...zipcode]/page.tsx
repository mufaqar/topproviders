// 'use client'
import { fetchZipcodeData } from "@/utils/fetchZipcodeData";
import { fetchCityData } from "@/utils/fetchCityData";
import { fetchStateData } from "@/utils/fetchStateData";
import ZipCodeModule from "@/components/zipcode";
import CitiesModule from "@/components/cities";
import StateModule from "@/components/state";
import NotFound from "@/components/NotFound";
import Types from "@/components/types/Types";

async function fetchStateDataAsync(query: any) {
  const stateResult = await fetchStateData(query);
  return {
    StateData: stateResult?.StateData,
    allcities: stateResult?.allcities,
    state: stateResult?.state,
    stateNotFound: stateResult?.stateNotFound,
  };
}

async function fetchCityDataAsync(query: any) {
  const cityResult = await fetchCityData(query);
  return {
    CityData: cityResult?.CityData,
    cityNotFound: cityResult?.cityNotFound,
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

export default async function Providers(props: any) {
  const query = props.params.zipcode;

  const { StateData, allcities, state, stateNotFound } = await fetchStateDataAsync(query);
  const { CityData, cityNotFound } = await fetchCityDataAsync(query);
  const { ZipData, zipcode, type, zipNotFound } = await fetchZipcodeDataAsync(query);

  // Types 
  if( 
    query?.[0] === 'dsl' ||
    query?.[0] === 'cable' ||
    query?.[0] === 'fiber' ||
    query?.[0] === 'fixed-wireless' ||
    query?.[0] === 'satellite' ||
    query?.[0] === 'streaming'
  ){
    return <Types providerType={query?.[0]} service={query?.[0]}/>
  }


  // State Module pages
  if (StateData?.providers?.length > 0 && !stateNotFound) {
    return (
      <>
        <StateModule state={state} allcities={allcities} allProviders={StateData?.providers}  type={query?.[0]}  />
      </>
    );
  }


  // City pages
  if (CityData?.providers?.length > 0 && !cityNotFound) {
    return (
      <>
        <CitiesModule city={allcities} myCity={query?.[2]} allProviders={CityData.providers} CityData={CityData} type={query?.[0]} />
      </>
    );
  }

  // Zipcode pages
  if (!zipNotFound) {
    return (
      <ZipCodeModule
        zipcode={zipcode}
        city="{zoneData[0]?.cities?.nodes[0]?.name}"
        state="{zoneData[0]?.states?.nodes[0]?.name} "
        allProviders={ZipData}
        zones=""
        type={type}
      />
    );
  }

  return <NotFound/>
}
