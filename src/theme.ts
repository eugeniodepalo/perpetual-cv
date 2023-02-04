import { createTheme } from "@mui/material"
import { Roboto_Mono } from "@next/font/google"

const font = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  preload: true,
})

export const theme = createTheme({
  typography: {
    fontFamily: font.style.fontFamily,
    fontSize: 18,
  },
  palette: {
    primary: {
      main: "rgb(245, 245, 245)",
    },
    secondary: {
      main: "rgb(255, 215, 79)",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          "&:hover": {
            color: theme.palette.secondary.main,
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        }),
      },
    },
  },
})
