"use client"

import { Box, Typography, useTheme } from "@mui/material"
import { FunctionComponent, PropsWithChildren } from "react"

export const Section: FunctionComponent<
  PropsWithChildren<{ title: string }>
> = ({ title, children }) => {
  const theme = useTheme()

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          borderTop: `1px dashed ${theme.palette.primary.dark}`,
          py: 4,
          mt: 4,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  )
}
