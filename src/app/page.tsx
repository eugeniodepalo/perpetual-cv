"use client"

import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Unstable_Grid2"
import { Button, Card, CardContent, Chip } from "@mui/material"
import Image from "next/image"

import { Section } from "@/components/section"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
import { useData } from "@/hooks/use-data"
import { Header } from "@/components/header"

export default function AppPage() {
  const data = useData()

  return (
    <>
      <Header />
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h4" sx={{ my: 2, fontFamily: "monospace" }}>
            Senior Full-stack Software Engineer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I love intellectual challenges that just won't let me sleep.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I'm currently based in London. Open to both remote and central
            London contracting gigs.
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
                    <Box position="relative" height={80} width="100%">
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
            <Grid container spacing={1}>
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
