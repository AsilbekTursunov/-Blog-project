import { Content, Layout, Sidebar } from "@/components" 
import { BlogTypes } from "@/interfaces/blog-interface"
import { BlogServices } from "@/services/blog-services"
import { Box  } from "@mui/material" 
import { GetServerSideProps } from "next" 
import React from "react"

const CategoryDetailsBlog = ({ blogs, lastPosts, category }: CareforBlogsTypes) => {
  

  return (
    <Layout>
      <Box sx={{ backgroundColor: "#0e1924" }}>
        <Box sx={{ width: { xs: "100%", lg: "80%" }, margin: { xs: "", lg: "auto" }, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "10px", padding: "20px" }}>
          <Sidebar lastPosts={lastPosts} category={category} />
          <Content posts={blogs} />
        </Box>
      </Box>
    </Layout>
  )
}

export default CategoryDetailsBlog

export const getServerSideProps: GetServerSideProps<CategoryBlogs> = async ({ query }) => {
  const blogs = await BlogServices.getCategoryBlogs(query.slug as string).then(data => data)
  const lastPosts = await BlogServices.getLastsBlogs().then(data => data)
  const category = await BlogServices.getCategory().then(data => data)
  return {
    props: {
      blogs,
      lastPosts,
      category: category,
    },
  }
}
interface CategoryBlogs {
  lastPosts: BlogTypes[]
  category: BlogTypes[]
}
interface CareforBlogsTypes extends CategoryBlogs {
  blogs: BlogTypes[]
}
