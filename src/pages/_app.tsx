import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import GoogleAnalytics from "@bradgarropy/next-google-analytics"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics measurementId="G-20JM8TWZFP" />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
