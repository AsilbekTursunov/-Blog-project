import Head from "next/head"
import React from "react"
import { SeoPropsTypes } from "./seo.props"

const SEO = ({ children, metaTitle }: SeoPropsTypes) => {
  const title = metaTitle.replace(/\-/g, " ").split(" ")
  const result = title.map(name => {
    return name.charAt(0).toUpperCase() + name.slice(1) + " "
  })

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="description" content="new it and ai techlonogies articles blog" />
        <meta name="keywords" content="IT-blog, ai articles, it articles" />
        <meta name="author" content="Asilbek Tursunov" />
        <title>{result}</title>
        <link rel="shortcut icon" href="/blog-page.svg" type="image/x-icon" />
      </Head>
      {children}
    </>
  )
}

export default SEO
