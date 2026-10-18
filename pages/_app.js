import '../styles/globals.css'
import dynamic from 'next/dynamic'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quotes Cafe</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
