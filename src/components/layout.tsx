"use client"

import { DataProvider } from "@/contexts/data"
import { Data } from "@/data"
import { createTheme } from "@/theme"
import { CssBaseline, Container, ThemeProvider } from "@mui/material"
import { NextFont } from "@next/font"
import { FunctionComponent, PropsWithChildren } from "react"

interface Props {
  data: Data
  font: NextFont
}

export const Layout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  data,
  font,
}) => {
  return (
    <ThemeProvider theme={createTheme(font)}>
      <CssBaseline />
      <DataProvider value={data}>
        <Container maxWidth="lg" disableGutters>
          {children}
        </Container>
      </DataProvider>
    </ThemeProvider>
  )
}
