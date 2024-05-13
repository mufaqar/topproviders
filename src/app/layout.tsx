import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Top Providers | Find The Top Internet and TV Service Providers",
  description: "Planning a Move? Top Providers can help you find the best Internet and TV Service Provider. Find best deals on Cable and High Speed Internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics measurementId="G-20JM8TWZFP" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
