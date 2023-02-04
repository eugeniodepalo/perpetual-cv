"use client"

import { GitHub, EmailOutlined } from "@mui/icons-material"
import {
  Toolbar,
  Avatar,
  Typography,
  Box,
  Stack,
  IconButton,
  AppBar,
} from "@mui/material"
import { FunctionComponent } from "react"
import NextLink from "next/link"
import avatar from "@/assets/avatar.webp"
import { useData } from "@/hooks/use-data"
import Image from "next/image"

export const Header: FunctionComponent = () => {
  const data = useData()

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Avatar sx={{ mr: 3, my: 2, height: 60, width: 60 }}>
          <Image alt={data.name} src={avatar.src} fill sizes="60px" />
        </Avatar>
        <Typography
          variant="h5"
          noWrap
          color="inherit"
          fontWeight="bold"
          sx={{ textDecoration: "none" }}
        >
          {data.name}
        </Typography>
        <Box ml="auto">
          <Stack direction="row" spacing={2} alignItems="center">
            <NextLink
              href={`https://github.com/${data.github}`}
              target="_blank"
              aria-label="GitHub"
            >
              <IconButton LinkComponent="div">
                <GitHub fontSize="large" />
              </IconButton>
            </NextLink>
            <NextLink
              href={`mailto:${data.email}`}
              target="_blank"
              aria-label="Email"
            >
              <IconButton LinkComponent="div">
                <EmailOutlined fontSize="large" />
              </IconButton>
            </NextLink>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
