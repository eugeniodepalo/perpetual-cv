import { createTheme as createMuiTheme } from "@mui/material"
import { NextFont } from "@next/font"

export function createTheme(font: NextFont) {
  return createMuiTheme({
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
            textDecorationColor: theme.palette.text.secondary,
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
}
