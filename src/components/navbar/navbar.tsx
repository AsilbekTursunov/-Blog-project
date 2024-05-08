import * as React from "react"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import MenuItem from "@mui/material/MenuItem"
import Drawer from "@mui/material/Drawer"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { useRouter } from "next/router"

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
}
const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId)
    const offset = 128
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset
      sectionElement.scrollIntoView({ behavior: "smooth" })
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      })
      setOpen(false)
    }
  }

  return (
    <div>
      <AppBar
        position="relative"
        sx={{
          boxShadow: 0,
          bgcolor: "#0e1924",
        }}
      >
        <Toolbar
          variant="regular"
          sx={theme => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            color: "#fff",
            backdropFilter: "blur(24px)",
            maxHeight: 40,
          })}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              ml: "-18px",
              px: 0,
            }}
          >
            <img src={"https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"}  onClick={()=> router.push(`/`)} style={logoStyle} alt="logo of sitemark" />
            <Box sx={{ display: { xs: "none", md: "flex" }, color: "#fff" }}>
              <MenuItem onClick={() => scrollToSection("features")} sx={{ py: "6px", px: "12px" }}>
                <Typography variant="body2" color="#fff">
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("testimonials")} sx={{ py: "6px", px: "12px" }}>
                <Typography variant="body2" color="#fff">
                  Categories
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("highlights")} sx={{ py: "6px", px: "12px" }}>
                <Typography variant="body2" color="#fff">
                  Blog
                </Typography>
              </MenuItem>
            </Box>
          </Box>
          <Box sx={{ display: { sm: "", md: "none" } }}>
            <Button variant="text" color="primary" aria-label="menu" onClick={() => setOpen(prevState => !prevState)} sx={{ minWidth: "30px", p: "4px" }}>
              <MenuIcon />
            </Button>
            <Drawer anchor="left" open={open} onClose={() => setOpen(prevState => !prevState)}>
              <Box sx={{ backgroundColor: "#0e1924", color: "white" }}>
                <Box sx={{ display: "flex", p: 2, justifyContent: "flex-end" }}>
                  <CloseIcon sx={{ width: 20, height: 20 }} onClick={() => setOpen(prevState => !prevState)} />
                </Box>
                <Box
                  sx={{
                    minWidth: "100dvw",
                    height: "100vh",
                    flexGrow: 1,
                  }}
                >
                  <MenuItem onClick={() => scrollToSection("features")} sx={{ justifyContent: "center" }}>
                    <Button> Home</Button>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("testimonials")} sx={{ justifyContent: "center" }}>
                    <Button> Categories</Button>
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("highlights")} sx={{ justifyContent: "center" }}>
                    <Button> Blog</Button>
                  </MenuItem>
                </Box>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
