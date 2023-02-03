import { createTheme } from "@mui/material"

const primaryColor = "rgb(245, 245, 245)"
const secondaryColor = "rgb(255, 215, 79)"

export const theme = createTheme({
  typography: {
    fontFamily: "monospace",
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
