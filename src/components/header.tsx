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
import avatar from "@/assets/avatar.png"
import { useData } from "@/hooks/use-data"

export const Header: FunctionComponent = () => {
  const data = useData()

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Avatar
          alt={data.name}
          src={avatar.src}
          sx={{ mr: 3, my: 2, height: 60, width: 60 }}
        />
        <Typography
          variant="h5"
          noWrap
          sx={{
            color: "inherit",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          {data.name}
        </Typography>
        <Box ml="auto">
          <Stack direction="row" spacing={2} alignItems="center">
            <NextLink
              href={`https://github.com/${data.github}`}
              target="_blank"
            >
              <IconButton>
                <GitHub fontSize="large" />
              </IconButton>
            </NextLink>
            <NextLink href={`mailto:${data.email}`}>
              <IconButton>
                <EmailOutlined fontSize="large" />
              </IconButton>
            </NextLink>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
