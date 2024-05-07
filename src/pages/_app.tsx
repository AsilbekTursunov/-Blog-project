import * as React from 'react'
import "@/styles/globals.css"
import type { AppProps } from "next/app" 
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter"
import { ThemeProvider } from "styled-components"
import theme from "@/helper/theme"
import Head from "next/head"
import { CssBaseline } from "@mui/material"


function App(props: AppProps) {
  const { Component, pageProps } = props

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
