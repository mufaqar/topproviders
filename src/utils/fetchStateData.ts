import apolloClient from "@/config/client";
import { Get_State_by_Multi_Zipcode } from "./get_states_by_multizipcode";
import { CITES_by_STATE } from "@/config/query";

export const fetchStateData = async (query: any) => {
  var type = query?.[0] || "";
  var state = query?.[1]

  if (query.length === 2 && state.length === 2) {
    const response_city = await fetch(`https://topproviders.mufaqar.com/wp-json/custom/v1/area-zones?state=${state}`);
    const providers_state_data = await response_city.json();
    if (providers_state_data?.data?.status === 404) {
      return {
        stateNotFound: true,
      };
    }

    const providers_data = await Get_State_by_Multi_Zipcode(providers_state_data);

    const [cities]: any = await Promise.all([
      apolloClient.query({ query: CITES_by_STATE, variables: { state: state } }),
    ]);
    var allcities = cities.data.states.nodes;
    if (providers_data?.providers?.length > 0) {
      return {
        StateData: providers_data,
        allcities,
        state: state,
      };
    }
  }else{
    return {
      stateNotFound: true,
    };
  }
}
