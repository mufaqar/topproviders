import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import { openGraph, twitter } from "@/lib/seoMeta";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalProvider } from "@/context/globalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Find Top Internet and TV Service Providers in your area.",
  description:
    "Discover the perfect Internet and TV Service Providers. Find unbeatable deals on Cable and High-Speed Internet to make your move seamless and enjoyable!",
  alternates: {
    canonical: `https://www.topproviders.net/`,
  },
  twitter: { ...twitter },
  openGraph: { ...openGraph },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <GoogleAnalytics measurementId="G-20JM8TWZFP" />
          <Header />
          {children}
          <Footer />
          <ToastContainer />
        </GlobalProvider>
      </body>
    </html>
  );
}
