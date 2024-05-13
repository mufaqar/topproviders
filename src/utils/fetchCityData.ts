import apolloClient from "@/config/client";
import { Get_State_by_Multi_Zipcode } from "./get_states_by_multizipcode";
import { GET_PROVIDERS_CITY } from "@/config/query";

export const fetchCityData = async (query: any) => {
  var type = query?.[0] || "";
  var state = query?.[1]
  var city = query?.[2]

  if (query.length === 3 && !!type && !!state) {

    try {
      const [cityproviders] = await Promise.all([
        apolloClient.query({ query: GET_PROVIDERS_CITY, variables: { city: city } })
      ]);

      const providers_city_data = cityproviders.data.zones.nodes;

      if (providers_city_data?.length <= 0) {
        return {
          cityNotFound: true,
        };
      }

      const providers_data = await Get_State_by_Multi_Zipcode(providers_city_data);

      return {
        CityData: providers_data
      };
    } catch (error) {
      console.error('Error fetching city data:', error);
      return { error: true };
    }
  }else{
    return {
      cityNotFound: true,
    };
  }
};