"use client"

import { useData } from "@/hooks/use-data"
import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
  Timeline,
} from "@mui/lab"
import { Link, Typography } from "@mui/material"
import NextLink from "next/link"

export function Experience() {
  const data = useData()

  return (
    <Timeline position="alternate">
      {data.experience.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent color="text.secondary">
            {item.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color={index === 0 ? "secondary" : "primary"} />
            <TimelineConnector sx={{ height: 100 }} />
          </TimelineSeparator>
          <TimelineContent>
            {item.url ? (
              <NextLink href={item.url} passHref legacyBehavior>
                <Link
                  color="text.primary"
                  typography="h6"
                  lineHeight={1}
                  target="_blank"
                >
                  {item.company}
                </Link>
              </NextLink>
            ) : (
              <Typography variant="h6" lineHeight={1}>
                {item.company}
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary" mt={2}>
              {item.role}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
