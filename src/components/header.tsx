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

export const Header: FunctionComponent = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Avatar
          alt="Eugenio Depalo"
          src={avatar.src}
          sx={{ mr: 3, my: 2, height: 60, width: 60 }}
        />
        <Typography
          variant="h5"
          noWrap
          sx={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Eugenio Depalo
        </Typography>

        <Box ml="auto">
          <Stack direction="row" spacing={2} alignItems="center">
            <NextLink href="https://github.com/eugeniodepalo" target="_blank">
              <IconButton>
                <GitHub fontSize="large" />
              </IconButton>
            </NextLink>
            <NextLink href="mailto:eugeniodepalo@gmail.com">
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
