import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.scss'

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Autenticação com JWT</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
