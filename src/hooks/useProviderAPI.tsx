import apolloClient from "@/config/client";
import { SINGLE_Provider } from "@/config/query";

function getData(slug:any) {
  return new Promise((resolve, reject) => {
    apolloClient
      .query({ query: SINGLE_Provider, variables: { slug } })
      .then((result) => {
        const Provider = result.data.singleProvider;
        resolve({ Provider });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const useProviderAPI = (slug:any) => {
  return getData(slug).then((data:any) => {
    return data.Provider;
  });
};

export default useProviderAPI;
