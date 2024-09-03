import type { Metadata } from "next";
import { openGraph, twitter } from "@/lib/seoMeta";

export const metadata: Metadata = {
  title: "Do Not Sell My Information | Top Providers ",
  description:
    "Do Not Sell My Information | Top Providers.",
  alternates: {
    canonical: `https://www.topproviders.net/do-not-sell-my-information`,
  },
  twitter: { ...twitter },
  openGraph: { ...openGraph },
};

export default function Layout({ children }: any) {
  return (
    <>

      <main>{children}</main>

    </>
  )
}