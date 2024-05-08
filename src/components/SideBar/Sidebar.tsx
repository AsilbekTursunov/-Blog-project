import { Avatar, Box, Button, Divider, Typography } from "@mui/material"
import Image from "next/image"
import React, { Fragment } from "react"
import { format } from "date-fns"
import { SiderBarProps } from "./siderbar.props"
import Link from "next/link" 
import { useRouter } from "next/router"

const Sidebar = ({ lastPosts, category }: SiderBarProps) => {
  const router = useRouter() 
  
  return (
    <Fragment>
      <Box sx={{ width: { xs: "100%", md: "30%" } }}>
        <Box sx={{ position: "sticky", top: "10px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid gray", borderRadius: "8px", p: 3 }}>
            <Box>
              <Typography variant="h5" color={"white"}>
                Categories{" "}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {category.map(item => (
                <Box key={item.slug} onClick={()=>router.push(`/category-blogs/${item.slug}`)}>
                  <Button  sx={{ justifyContent: "flex-start", textTransform: "capitalize", fontSize: "1rem", p: 2 }}>{item.title}</Button>
                  <Divider />
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", color: "white", border: "1px solid gray", borderRadius: "8px", p: 3, marginTop: 3 }}>
            <Typography variant="h5">Lastest Blogs</Typography>
            {lastPosts.map(item => (
              <Box onClick={()=> router.push(`/blog-details/${item.slug}`)}  sx={{ cursor:'pointer', display: "flex", marginTop: "20px", gap: "20px", flexDirection: { xs: "column", xl: "row" } }} key={item.id}>
                <Box sx={{ width: "100px", height: "100px" }}>
                  <Image src={item.coverImage.url} alt={item.title} width={100} height={100} style={{ objectFit: "cover", borderRadius: "10px" }} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="body1" color={"white"}>
                    {item.title}
                  </Typography>
                  <Box sx={{ marginTop: "20px", display: "flex", gap: "15px" }}>
                    <Avatar alt={item.author.name} src={item.author.picture.url} />
                    <Box>
                      <Typography sx={{ color: "white" }}>{item.author.name}</Typography>
                      <Box sx={{ color: "gray", fontSize: "12px" }}>{format(new Date(item.createdAt), "dd, MMM, yyyy")}</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}

export default Sidebar
