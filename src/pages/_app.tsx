import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AuthProvider } from '../context/AuthContext'
import '../styles/globals.scss'

const MyApp = function ({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>Autenticação com JWT</title>
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
