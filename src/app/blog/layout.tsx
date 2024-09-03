import type { Metadata } from "next";
import { openGraph, twitter } from "@/lib/seoMeta";

export const metadata: Metadata = {
  title: "Latest News, Reviews and Guides on Internet and TV Service Providers ",
  description:
    "Top Providers will keep you updated on latest news, reviews and guides on Internet and TV service providers.",
  alternates: {
    canonical: `https://www.topproviders.net/blog`,
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