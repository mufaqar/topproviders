import { CITES_by_STATE, GET_PROVIDERS, GET_PROVIDERS_CITY, SingleZone } from '@/config/query'
import { Get_State_by_Multi_Zipcode } from '../../utils/get_states_by_multizipcode'
import ZipCodeModule from '@/components/zipcode'
import CitiesModule from '@/components/cities'
import StateModule from '@/components/state'
import apolloClient from '@/config/client'


async function getData(query:any){
  var query_state = query?.[0] || ''
  var query_zipcode = query?.[1]?.replace("zipcode-", '')


  if (query_state?.length <= 3 && query_state !== "tv") {
    // For City Module
    if (query_zipcode && !query?.zipcode?.[1]?.includes('zipcode-')) {
      const [cityproviders] = await Promise.all([
        apolloClient.query({ query: GET_PROVIDERS_CITY, variables: { city: query_zipcode } })
      ]);
      const providers_city_data = cityproviders.data.zones.nodes;
      if (providers_city_data?.length <= 0) {
        return {
          notFound: true,
        };
      }
      const providers_data = await Get_State_by_Multi_Zipcode(providers_city_data);
      return {
          CityData: providers_data
      };
    }

    // For State Module
    try {
      const response_city = await fetch(`https://topproviders.mufaqar.com/wp-json/custom/v1/area-zones?state=${query_state}`);
      const providers_state_data = await response_city.json();  
      if (providers_state_data?.data?.status === 404) {
        return {
          notFound: true,
        };
      }
      const providers_data = await Get_State_by_Multi_Zipcode(providers_state_data);
    
      const [cities]: any = await Promise.all([
        apolloClient.query({ query: CITES_by_STATE, variables: { state: query_state } }),
      ]);
      var allcities = cities.data.states.nodes;
      if (providers_data?.providers?.length > 0) {
       
        return {
            StateData: providers_data,
            allcities,
            state: query_state,
        };
      }
    } catch (error) {
      throw new Error('Failed!');
    }
  }

  // check zone exist 
  const zoneResponse = await apolloClient.query({
    query: SingleZone,
    variables: {
      id: query_zipcode
    },
  });
  const isZone = zoneResponse.data.zone
  if (!isZone) {
    return {
      notFound: true,
    };
  }


  const [providers] = await Promise.all([
    apolloClient.query({ query: GET_PROVIDERS, variables: { terms: query_state, value: query_zipcode } }),
   // apolloClient.query({ query: GET_ZIPCODE, variables: { title: query_zipcode } })
  ]);
  const allProviders = providers.data.allProviders.nodes;
  //const zoneData = zone_data.data.zones.nodes;
  // Redirect To Page Not Found 
  if (allProviders?.length <= 0) {
    return {
      notFound: true,
    };
  }
  return {
      ZipData: allProviders,
      zipcode: query_zipcode,
      type: query_state,
    //  zoneData
  }
}


export default async function Providers(props:any) {
  const query = props.params.zipcode

  const { ZipData, StateData, CityData, zipcode, allcities, state, type } = await getData(query)    
  
  // City pages
  if (CityData?.providers?.length > 0 ) {
    return (
      // <CitiesModule city={allcities} my_city="" allProviders={CityData.providers} CityData={CityData} type="internet" />
      'City'
    )
  }
  // State Module pages 
  if (StateData?.providers?.length > 0 ) {
    return (
      // <StateModule state={state} allcities={allcities} allProviders={StateData?.providers}  type="internet"  />
      'State'
    )
  }
  // Zipcode pages 
  return (
    // <ZipCodeModule zipcode={zipcode} city="{zoneData[0]?.cities?.nodes[0]?.name}" state="{zoneData[0]?.states?.nodes[0]?.name} " allProviders={ZipData} zones="" type={type} />
    'Zipcode'
  );

}



