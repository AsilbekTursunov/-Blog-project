import React from "react"
import Layout from "../components/layout/layout"
import { Content, Hero, Sidebar } from "../components"
import { Box } from "@mui/material"
const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Box sx={{  backgroundColor: "#0e1924" }}>
          <Box sx={{width: { xs: "100%", lg: "80%" }, margin: { xs: "", lg: "auto" }, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "10px", padding: "20px" }}>
            <Sidebar />
            <Content />
          </Box>
        </Box>
      </Layout>
    </>
  )
}
export default Home
