import apolloClient from '@/config/client';
import { SINGLE_Provider } from '@/config/query';
import ProviderSingle from '@/components/provider-single/providerSingle';

async function getData(slug:any){
  const [Provider] = await Promise.all([
    apolloClient.query({ query: SINGLE_Provider, variables: { id:slug } }),
 ]);
 const ProviderRes = Provider?.data?.singleProvider
  return {
    ProviderRes
  }
}

export default async function SProviders({ params }: any) {
  const { ProviderRes } = await getData(params.slug)    

  return (
    <>
      <ProviderSingle ProviderRes={ProviderRes}/>
    </>
  )
}



