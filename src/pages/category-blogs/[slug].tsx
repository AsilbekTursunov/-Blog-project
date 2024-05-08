import { Content, Layout, Sidebar } from "@/components"
import SEO from "@/components/layout/seo/seo"
import { BlogTypes } from "@/interfaces/blog-interface"
import { BlogServices } from "@/services/blog-services"
import { Box } from "@mui/material"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import React from "react"

const CategoryDetailsBlog = ({ blogs, lastPosts, category }: CareforBlogsTypes) => {
  const router = useRouter()

  return (
    <SEO metaTitle={`${router.query.slug}`}>
      <Layout>
        <Box sx={{ backgroundColor: "#0e1924" }}>
          <Box sx={{ width: { xs: "100%", lg: "80%" }, margin: { xs: "", lg: "auto" }, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "10px", padding: "20px" }}>
            <Sidebar lastPosts={lastPosts} category={category} />
            <Content posts={blogs} />
          </Box>
        </Box>
      </Layout>
    </SEO>
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
