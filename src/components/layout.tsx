"use client"

import { DataProvider } from "@/contexts/data"
import { Data } from "@/data"
import { theme } from "@/theme"
import { CssBaseline, Container, ThemeProvider } from "@mui/material"
import { FunctionComponent, PropsWithChildren } from "react"

interface Props {
  data: Data
}

export const Layout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  data,
}) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <DataProvider value={data}>
          <Container maxWidth="md">{children}</Container>
        </DataProvider>
      </ThemeProvider>
    </>
  )
}
