import "react-multi-carousel/lib/styles.css"
import React, { useCallback, useRef } from "react"
import Carousel from "react-multi-carousel"
import { Avatar, Box, Typography } from "@mui/material"
import Image from "next/image"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Navigation } from "swiper/modules"

// Import Swiper styles

import "swiper/css"
import "swiper/css/navigation"
import { format } from "date-fns"
import { HeroProps } from "./hero.props"
import { estimatedCalculateTimeToRead } from "@/helper/time-calculate"
import { useRouter } from "next/router"
const Hero = ({ posts }: HeroProps) => { 
 const router = useRouter()
  return (
    <Box width={"100%"} sx={{}}>
      <Swiper modules={[Navigation]} className="mySwiper" loop={true}>
        {posts.map(item => (
          <SwiperSlide key={item.title}>
            <Box onClick={()=>router.push(`/blog-details/${item.slug}`)} sx={{cursor:'pointer'}}>
              <Box sx={{ position: "relative", width: "100%", height: { xs: "300px", lg: "600px" } }}>
                <Image src={item.coverImage.url} alt={item.title} fill style={{ objectFit: "cover" }} />
                <Box
                  sx={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgb(0, 0, 0, .5)",
                  }}
                >
                  <Box sx={{ width: { xs: "90%", lg: "80%" }, height: "100%", marginX: "auto", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <Typography sx={{ fontSize: { xs: "24px", md: "32px", xl: "56px" } }} color={"white"}>
                      {item.title}
                    </Typography>
                    <Typography color={"white"} sx={{ fontSize: { xs: "14px", md: "18px", xl: "24px" } }}>
                      {item.excerpt}
                    </Typography>
                    <Box sx={{ marginTop: "20px", color: "white", display: "flex", gap: "15px" }}>
                      <Avatar alt={item.author.name} src={item.author.picture.url} />
                      <Box>
                        <Typography>{item.author.name}</Typography>
                        <Box>
                          {format(new Date(item.createdAt), "dd, MMM, yyyy")} &#x2022; {estimatedCalculateTimeToRead(item.description.text)} min read
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
 
export default Hero
 
