import React, { useEffect } from "react"
import Layout from "../components/layout/layout"
import { Content, Hero, Sidebar } from "../components"
import { Box } from "@mui/material"
import { BlogServices } from "@/services/blog-services"
import { GetServerSideProps } from "next"
import { BlogTypes } from "@/interfaces/blog-interface"
const Home = ({ posts, lastPosts, category }: HomePageProps) => {
  return (
    <>
      <Layout >
        <Hero posts={posts.slice(0, 3)} />
        <Box sx={{ backgroundColor: "#0e1924" }}>
          <Box sx={{ width: { xs: "100%", lg: "80%" }, margin: { xs: "", lg: "auto" }, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "10px", padding: "20px" }}>
            <Sidebar lastPosts={lastPosts} category={category} />
            <Content posts={posts} />
          </Box>
        </Box>
      </Layout>
    </>
  )
}
export default Home

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const posts = await BlogServices.getAllBlogs().then(data => data)
  const lastPosts = await BlogServices.getLastsBlogs().then(data => data)
  const category = await BlogServices.getCategory().then(data => data)
  return {
    props: {
      posts,
      lastPosts,
      category: category,
    },
  }
}
interface HomePageProps {
  posts: BlogTypes[]
  lastPosts: BlogTypes[]
  category: BlogTypes[]
}
