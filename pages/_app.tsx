import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  <Head>
    <title>That time I reincarnated as Jürgen and nearly found the pizza, so someone created another level</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
  return <Component {...pageProps} />
}
