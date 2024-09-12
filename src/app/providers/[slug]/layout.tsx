import { openGraph, twitter } from "@/lib/seoMeta";
import { SINGLE_Provider } from "@/config/query";
import apolloClient from "@/config/client";

export async function generateMetadata({ params }: any) {
  const [Provider] = await Promise.all([
    apolloClient.query({
      query: SINGLE_Provider,
      variables: { id: params.slug },
    }),
  ]);
  const ProviderRes = Provider?.data?.singleProvider;

  return {
    title: `${ProviderRes?.title} | Top service provider`,
    // description: `${ProviderRes?.providersInfo?.internetAndPhoneBundlesShort?.slice(0, 150)} ${ProviderRes?.providersInfo?.internetAndPhoneBundlesShort?.length > 150 ? "..." : ""}`,
    alternates: {
      canonical: `https://www.topproviders.net/providers/${ProviderRes?.slug}`,
    },
    twitter: { ...twitter },
    openGraph: { ...openGraph },
  };
}



export default function Layout({ children }: any) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}