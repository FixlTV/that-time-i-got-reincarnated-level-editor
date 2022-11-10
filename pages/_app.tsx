import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>That time I reincarnated as Jürgen and nearly found the pizza, so someone created another level</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
                <link rel="manifest" href="/images/site.webmanifest" />
                <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#2a8379" />
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <meta name="msapplication-TileColor" content="#1e1e1e" />
                <meta name="msapplication-config" content="/images/browserconfig.xml" />
                <meta name="theme-color" content="#1e1e1e" />

                <meta content="Jürgen Level Editor" property="og:title" />
                <meta content='Offizieller Level Editor für "That time I got reincarnated as Jürgen and ran all over the world just to order a pizza"' property="og:description" />
                <meta content="https://juergen.vercel.app/" property="og:url" />
                <meta content="https://juergen.vercel.app/images/juergen-xxl.png" property="og:image" />
                <meta content="#2A8379" data-react-helmet="true" name="theme-color" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
