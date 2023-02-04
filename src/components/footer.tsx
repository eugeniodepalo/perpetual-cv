"use client"

import { Box, Link, Typography } from "@mui/material"
import { FunctionComponent } from "react"
import NextLink from "next/link"
import { useData } from "@/hooks/use-data"

export const Footer: FunctionComponent = () => {
  const data = useData()

  return (
    <Box pt={4} pb={6} textAlign="center">
      <Typography variant="body2" color="text.secondary" mb={2} component="div">
        Like the format of this CV? Fork it on{" "}
        <NextLink
          href="https://github.com/eugeniodepalo/perpetual-cv"
          passHref
          legacyBehavior
        >
          <Link>GitHub</Link>
        </NextLink>
      </Typography>
      <Typography color="text.secondary" variant="body2">
        Made with ❤️ by {data.name}
      </Typography>
    </Box>
  )
}
