import apolloClient from "@/config/client";
import { ProvidersByServiceType } from "@/config/query";
import CheapInternetTemp from "@/templates/cheapInternet/CheapInternet";
import React from "react";

async function getData() {
  const [providesByservice] = await Promise.all([
    apolloClient.query({
      query: ProvidersByServiceType,
      variables: { id: "fiber" },
    }),
  ]);
  const res = providesByservice.data.serviceType?.allProviders?.nodes;

  return {
    allProviders: res,
  };
}

const CheapInternet = async () => {
  const { allProviders } = await getData();

  return (
    <>
     <CheapInternetTemp allProviders={allProviders}/>
    </>
  );
};

export default CheapInternet;
