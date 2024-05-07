import { Avatar, Box, Button, Divider, Typography } from "@mui/material"
import Image from "next/image"
import React, { Fragment } from "react"
import { format } from "date-fns"

const Sidebar = () => {
  return (
    <Fragment>
      <Box sx={{ width: { xs: "100%", md: "30%" }}}>
        <Box sx={{position:'sticky', top:'10px'}}>
          <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid gray", borderRadius: "8px", p: 3}}>
            <Box>
              <Typography variant="h4" color={"white"}>
                Categories{" "}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Button sx={{ justifyContent: "flex-start", p: 2 }}>Home</Button>
              <Divider />
              <Button sx={{ justifyContent: "flex-start", p: 2 }}>Categories</Button>
              <Divider />
              <Button sx={{ justifyContent: "flex-start", p: 2 }}>Blog</Button>
              <Divider />
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", color: "white", border: "1px solid gray", borderRadius: "8px", p: 3, marginTop: 3 }}>
            {data.map(item => (
              <Box sx={{ display: "flex", marginTop: "20px", gap: "20px", flexDirection:{xs:'column', xl:'row'} }}>
                <Box sx={{ width: "100px", height: "100px" }}>
                  <Image src={item.image} alt={item.title} width={100} height={100} style={{ objectFit: "cover", borderRadius: "10px" }} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="body1" color={"white"}>
                    {item.title}
                  </Typography>
                  <Box sx={{ marginTop: "20px", color: "white", display: "flex", gap: "15px" }}>
                    <Avatar alt={item.author.name} src={item.author.image} />
                    <Box>
                      <Typography>{item.author.name}</Typography>
                      <Box>{format(new Date(), "dd, MMM, yyyy")} &#x2022; 10 min read</Box>
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
export default Sidebar
