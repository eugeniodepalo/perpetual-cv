"use client"

import { Card, CardContent, Typography, Button, Box, Chip } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { FunctionComponent } from "react"
import { Experience } from "./experience"
import { Footer } from "./footer"
import { Header } from "./header"
import { Section } from "./section"
import Image from "next/image"
import { useData } from "@/hooks/use-data"

export const Page: FunctionComponent = () => {
  const data = useData()

  return (
    <>
      <Header />
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{ my: 2, fontFamily: "monospace" }}>
            {data.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {data.description1}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {data.description2}
          </Typography>
          <Section title="My Clients">
            <Grid container spacing={2}>
              {data.clients.map((client, index) => (
                <Grid md={3} key={index}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    href={client.url}
                    target="_blank"
                  >
                    <Box position="relative" height={80} width="100%" m={2}>
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="16vw"
                      />
                    </Box>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Section>
          <Section title="My Skills">
            <Grid container spacing={2}>
              {data.skills.map((skill, index) => (
                <Grid width="auto" key={index}>
                  <Chip label={skill} />
                </Grid>
              ))}
            </Grid>
          </Section>
          <Section title="My Experience">
            <Experience />
          </Section>
        </CardContent>
      </Card>
      <Footer />
    </>
  )
}
