import { Avatar, Box, Typography } from "@mui/material"
import { format } from "date-fns"
import Image from "next/image"
import React from "react"
import { ContentTypes } from "./content.props"
import { estimatedCalculateTimeToRead } from "@/helper/time-calculate"
import { useRouter } from "next/router"

const Content = ({ posts }: ContentTypes) => {
  const router = useRouter()
  return (
    <Box sx={{ minHeight: "200vh", width: { xs: "100%", md: "70%" } }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
        {posts.map(item => (
          <Box key={item.id} onClick={()=> router.push(`/blog-details/${item.slug}`)} sx={{cursor:'pointer'}}>
            <Box sx={{ background: "rgb(9, 9, 9, .4)", borderRadius: "10px", p: 3 }} key={item.id}>
              <Box sx={{ position: "relative", width: "100%", height: { xs: "200px", md: "300px", lg: "400px" } }}>
                <Image src={item.coverImage.url} fill alt={item.coverImage.url} style={{ borderRadius: "10px", objectFit: "cover" }} />
              </Box>
              <Box sx={{ marginTop: "20px", color: "white" }}>
                <Typography variant="h4" sx={{ fontSize: { xs: "24px", md: "32px", xl: "42px" } }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: "14px", md: "18px", xl: "20px", color: "gray" } }}>
                  {item.excerpt}
                </Typography>
              </Box>
              <Box sx={{ marginTop: "20px", display: "flex", gap: "15px" }}>
                <Avatar alt={item.author.name} src={item.author.picture.url} />
                <Box>
                  <Typography sx={{ color: "white" }}>{item.author.name}</Typography>
                  <Box style={{ color: "gray" }}>
                    {format(item.createdAt, "dd, MMM, yyyy")} &#x2022; {estimatedCalculateTimeToRead(item.description.text)} min read
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
export default Content
