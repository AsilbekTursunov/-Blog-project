import { Roboto } from "next/font/google"
import { createTheme } from "@mui/material/styles"

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
})

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode:'dark'
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  }, 
})

export default theme
