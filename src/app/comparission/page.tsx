
import apolloClient from "@/config/client";
import { GET_ALL_PROVIDERS } from "@/config/query";
import React from "react";
import ComparissionTemp from "./comparissionTemp";

async function getData(){
  const [providers] = await Promise.all([
      apolloClient.query({ query: GET_ALL_PROVIDERS }),
  ]);
  const allProviders = providers.data.allProviders.nodes;
  return {
      allProviders
  }
}

const Comparission = async () => {
  const { allProviders } = await getData()    

  return (
    <>
      <ComparissionTemp data={allProviders}/>
    </>
  );
};

export default Comparission;
