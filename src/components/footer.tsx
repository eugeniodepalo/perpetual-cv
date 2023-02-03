"use client"

import { Box, Link, Typography } from "@mui/material"
import { FunctionComponent } from "react"
import NextLink from "next/link"

export const Footer: FunctionComponent = () => {
  return (
    <Box
      sx={{
        pt: 4,
        pb: 6,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary" mb={2} component="div">
        Like the format of this CV? Fork it on{" "}
        <NextLink
          href="https://github.com/eugeniodepalo/perpetual-cv"
          passHref
          legacyBehavior
        >
          <Link color="primary.dark">GitHub</Link>
        </NextLink>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Made with ❤️ by Eugenio Depalo
      </Typography>
    </Box>
  )
}
