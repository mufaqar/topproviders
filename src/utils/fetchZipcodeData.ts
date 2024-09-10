import apolloClient from "@/config/client";
import { GET_PROVIDERS } from "@/config/query";

export const fetchZipcodeData = async (query: any) => {

  var type = query?.[0] || "";
  var zipcode = query?.[1]?.replace("zipcode-", "");
  
  if(query.length === 2 && query?.[1].includes('zipcode-')){
    try {
      const [providers] = await Promise.all([
        apolloClient.query({ query: GET_PROVIDERS, variables: { terms: type, value: zipcode } }),
      ]);
  
      const allProviders = providers.data.allProviders.nodes;
  
      if (allProviders?.length <= 0) {
        return {
          zipNotFound: true,
        };
      }
  
      return {
        ZipData: allProviders,
        zipcode: zipcode,
        type: type,
        //  zoneData
      };
    } catch (error) {
      // Handle errors here if needed
      console.error('Error fetching data:', error);
      return { error: true };
    }
  }else{
    return {
      zipNotFound: true,
    };
  }

  
};