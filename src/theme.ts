import { createTheme } from "@mui/material"

export const theme = createTheme({
  typography: {
    fontFamily: "monospace",
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
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgb(255, 215, 79)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "rgb(255, 215, 79)",
          },
        },
      },
    },
  },
})
