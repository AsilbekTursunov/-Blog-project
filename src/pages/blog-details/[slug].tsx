import { Hero, Layout, Sidebar } from "@/components"
import { estimatedCalculateTimeToRead } from "@/helper/time-calculate"
import { BlogTypes } from "@/interfaces/blog-interface"
import { BlogServices } from "@/services/blog-services"
import { Avatar, Box, Divider, Typography } from "@mui/material"
import { GetServerSideProps } from "next"
import Image from "next/image"
import { useParams } from "next/navigation"
import { format } from "date-fns"
import React, { useEffect } from "react"

const BlogDetails = ({ post, lastPosts, category }: BlogDetails) => {  
  return (
    <Layout>
      <Box sx={{ backgroundColor: "#0e1924" }}>
        <Box sx={{ width: { xs: "100%", lg: "80%" }, margin: { xs: "", lg: "auto" }, display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "10px", padding: "20px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
            <Box sx={{ background: "rgb(9, 9, 9, .4)", borderRadius: "10px", p: 3 }} key={post.id}>
              <Box sx={{ position: "relative", width: "100%", height: { xs: "200px", md: "300px", lg: "400px" } }}>
                <Image src={post.coverImage.url} fill alt={post.coverImage.url} style={{ borderRadius: "10px", objectFit: "cover" }} />
              </Box>
              <Box sx={{ marginTop: "20px", display: "flex", gap: "15px" }}>
                <Avatar alt={post.author.name} src={post.author.picture.url} />
                <Box>
                  <Typography sx={{ color: "white" }}>{post.author.name}</Typography>
                  <Box style={{ color: "gray" }}>
                    {format(new Date(post.createdAt), "dd, MMM, yyyy")} &#x2022; {estimatedCalculateTimeToRead(post.description.text)} min read
                  </Box>
                </Box>
              </Box>
              <Box sx={{ marginTop: "20px", color: "white" }}>
                <Typography variant="h4" sx={{ fontSize: { xs: "24px", md: "32px", xl: "42px" } }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: "14px", md: "18px", xl: "20px", color: "gray" } }}>
                  {post.excerpt}
                </Typography>
              </Box>
              <Divider style={{ marginBottom: "30px", backgroundColor: "#777", marginTop: "20px" }} />
              <Box sx={{ marginTop: "20px", color: "#eee" }}>
                <Typography variant="body2" sx={{ fontSize: { xs: "14px", md: "18px", xl: "20px", color: "gray" } }}>
                  <Box>{post.description.text}</Box>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Sidebar lastPosts={lastPosts} category={category} />
        </Box>
      </Box>
    </Layout>
  )
}

export default BlogDetails

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const post = await BlogServices.getBlogDetails(query.slug as string).then(data => data)
  const lastPosts = await BlogServices.getLastsBlogs().then(data => data)
  const category = await BlogServices.getCategory().then(data => data)
  return {
    props: {
      post,
      lastPosts,
      category: category,
    },
  }
}
interface BlogDetails {
  post: BlogTypes
  lastPosts: BlogTypes[]
  category: BlogTypes[]
}
