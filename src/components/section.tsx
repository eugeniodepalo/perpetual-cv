"use client"

import { Typography, useTheme } from "@mui/material"
import { FunctionComponent, PropsWithChildren } from "react"

export const Section: FunctionComponent<
  PropsWithChildren<{ title: string }>
> = ({ title, children }) => {
  const theme = useTheme()

  return (
    <>
      <Typography
        variant="h5"
        borderTop={`1px dashed ${theme.palette.primary.dark}`}
        py={4}
        mt={4}
      >
        {title}
      </Typography>
      {children}
    </>
  )
}
