import type { Metadata } from "next";
import { openGraph, twitter } from "@/lib/seoMeta";

export const metadata: Metadata = {
  title: "About Top Providers | compare and order Internet and TV service providers",
  description:
    "Here at Top Providers, we make it easy to search, compare and order Internet and TV service providers.",
  alternates: {
    canonical: `https://www.topproviders.net/about-us`,
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