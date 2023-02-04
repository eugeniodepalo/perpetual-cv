import { createTheme } from "@mui/material"
import { Roboto_Mono } from "@next/font/google"

const font = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
})

const primaryColor = "rgb(245, 245, 245)"
const secondaryColor = "rgb(255, 215, 79)"

export const theme = createTheme({
  typography: {
    fontFamily: font.style.fontFamily,
    fontSize: 18,
  },
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: secondaryColor,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: secondaryColor,
          },
        },
      },
    },
  },
})
