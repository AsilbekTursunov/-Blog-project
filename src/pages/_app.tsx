import * as React from "react"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter"
import { ThemeProvider } from "styled-components"
import theme from "@/helper/theme"
import Head from "next/head"
import { CssBaseline } from "@mui/material"
import Router, { useRouter } from "next/router"
import nProgress from "nprogress"
function App(props: AppProps) {
  const { Component, pageProps } = props
  const router = useRouter()
  // useLoader.ts
  React.useEffect(() => {
    const startLoading = () => nProgress.start()
    const endLoading = () => nProgress.done()

    Router.events.on("routeChangeStart", startLoading)
    Router.events.on("routeChangeComplete", endLoading)
    Router.events.on("routeChangeError", endLoading)
    return () => {
      Router.events.off("routeChangeStart", startLoading)
      Router.events.off("routeChangeComplete", endLoading)
      Router.events.off("routeChangeError", endLoading)
    }
  }, [router])

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  )
}
export default App
