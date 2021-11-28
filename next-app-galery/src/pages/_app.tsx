import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
// import Router from 'next/router'
// import Nprogress from 'nprogress'
import type { AppProps } from 'next/app'


// Router.events.on("routeChangeStart", (url) => {
//    console.log(`Loading: ${url} `)
//    Nprogress.start()
// })

// Router.events.on("routeChangeComplete", () => Nprogress.done())
// Router.events.on("routeChangeError", () => Nprogress.done())

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
     <Component {...pageProps} />
    </>
  )
}
export default MyApp
