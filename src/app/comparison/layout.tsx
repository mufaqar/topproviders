import type { Metadata } from "next";
import { openGraph, twitter } from "@/lib/seoMeta";

export const metadata: Metadata = {
  title: "Contact Us | Get in touch with Top Providers ",
  description:
    "Get in touch with Top Providers about customer service, ISP listings, advertising opportunities and more.",
  alternates: {
    canonical: `https://www.topproviders.net/contact-us`,
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