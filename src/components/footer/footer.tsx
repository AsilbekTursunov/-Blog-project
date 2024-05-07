import * as React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

import FacebookIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/X"

const logoStyle = {
  width: "140px",
  height: "auto",
}

function Copyright() {
  return (
    <Typography variant="body2" color="white" mt={1}>
      {"Copyright © "}
      <Link href="https://github.com/AsilbekTursunov">Asilbek&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  )
}

const Footer = () => {
  return (
    <Box>
      <Box sx={{ display: "flex",  bgcolor: "#0e1924", justifyContent: "space-between", pt: { xs: 1, sm: 2 }, px: 2, borderTop: "1px solid", borderColor: "divider", pb: 2 }}>
        <div>
          {" "}
          <Copyright />{" "}
        </div>
        <Stack direction="row" justifyContent="left" spacing={1} useFlexGap sx={{ color: "text.secondary" }}>
          <IconButton color="inherit" href="https://github.com/mui" aria-label="GitHub" sx={{ alignSelf: "center", color:'white' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com/MaterialUI" aria-label="X" sx={{ alignSelf: "center", color:'white' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com/company/mui/" aria-label="LinkedIn" sx={{ alignSelf: "center", color:'white' }}>
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  )
}
export default Footer
