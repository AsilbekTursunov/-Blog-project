import { Avatar, Box, Typography } from "@mui/material"
import { format } from "date-fns"
import Image from "next/image"
import React from "react"

const Content = () => {
  return (
    <Box sx={{ minHeight: "200vh", width: { xs: "100%", md: "70%" }}}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
        {data.map(item => (
          <Box sx={{ background: "rgb(9, 9, 9, .4)", borderRadius: "10px", p: 3 }}>
            <Box sx={{ position: "relative", width: "100%", height: { xs: "30vh", md: "50vh" } }}>
              <Image src={item.image} fill alt={item.image} style={{ borderRadius: "10px", objectFit: "cover" }} />
            </Box>
            <Box sx={{ marginTop: "20px", color: "white" }}>
              <Typography variant="h4" sx={{fontSize:{xs:'24px', md:'32px', xl:'42px'}}}>{item.title}</Typography>
              <Typography variant="body2" sx={{fontSize:{xs:'14px', md:'18px', xl:'20px', color:'gray'}}}>{item.exerpt}</Typography>
            </Box>
            <Box sx={{ marginTop: "20px", color: "white", display: "flex", gap: "15px" }}>
              <Avatar alt={item.author.name} src={item.author.image} />
              <Box>
                <Typography>{item.author.name}</Typography>
                <Box>{format(new Date(), "dd, MMM, yyyy")} &#x2022; 10 min read</Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
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
export default Content
