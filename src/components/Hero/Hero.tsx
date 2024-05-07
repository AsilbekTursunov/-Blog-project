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
const Hero = () => {
  const swiper = useSwiper()
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  return (
    <Box width={"100%"} sx={{}}>
      <Swiper modules={[Navigation]} className="mySwiper" loop={true}>
        {data.map(item => (
          <SwiperSlide >
            <Box key={item.title}>
              <Box sx={{ position: "relative", width: "100%", height: { xs: "40vh", lg: "70vh" } }}>
                <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                <Box
                  sx={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%", 
                    backgroundColor: "rgb(0, 0, 0, .4)",
                  }}
                >
                  <Box sx={{width:{xs:'90%', lg:'80%' }, height:'100%', marginX:'auto',  display: "flex", justifyContent: "center",
                    flexDirection: "column",}}>
                    <Typography sx={{fontSize:{xs:'24px', md:'32px', xl:'56px'}}} color={"white"}>
                      {item.title}
                    </Typography>
                    <Typography  color={"white"} sx={{fontSize:{xs:'14px', md:'18px', xl:'24px'}}}>
                      {item.exerpt}
                    </Typography>
                    <Box  sx={{marginTop:'20px', color:'white', display:'flex', gap:'15px'}}>
                      <Avatar alt={item.author.name} src={item.author.image} />
                      <Box>
                        <Typography>{item.author.name}</Typography>
                        <Box>{format(new Date(), "dd, MMM, yyyy")} &#x2022; 10 min read</Box>
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

const data = [
  {
    image: "https://img.freepik.com/free-vector/superspeed-5g-fifth-generation-wireless-technology-background_1017-21008.jpg?t=st=1714019593~exp=1714023193~hmac=01b9d2fd8315a97a64d5d338870bff64a3d661e6849a486109bc5ea226c74a78&w=1380",
    title: "Premium Vector | Background circuit board neon",
    exerpt: "Premium Vector about Background circuit board neon, and discover more than 164 Million Professional Graphic Resources on Freepik.",
    author: {
      name: "Jonaten Brevain",
      image: "https://i.pinimg.com/564x/2c/15/22/2c15222f332f689b4cf89dd886af7d1d.jpg",
    },
  },
  {
    image: "https://img.freepik.com/free-vector/technology-background-with-circuit-lines-diagram-design_1017-27487.jpg?t=st=1714019631~exp=1714023231~hmac=0dd25cb245f9ef455a6bfdf3beb2cc1ad3ce97dc5e0414d5c248453f4dda53e5&w=1480",
    title: "Data Lakes Are Crucial To Business Analytics and Big Data Processing",
    exerpt: "Premium Vector about Background circuit board neon, and discover more than 164 Million Professional Graphic Resources on Freepik.",
    author: {
      name: "Albert Smith",
      image: "https://i.pinimg.com/564x/25/3a/8d/253a8d237681cbb1ad72a5c4a82b5b65.jpg",
    },
  },
]
export default Hero

{
  /**
<Carousel
        responsive={{
          moble: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
          },
        }}
      >
        {data.map(item => (
          <Box key={item.title} >
            <Box sx={{ position:'relative', width: "100%", height: "70vh" }}>
              <Image src={item.image} alt={item.title} fill style={{objectFit:'cover'}} />
            </Box>
          </Box>
        ))}
      </Carousel>
*/
}
