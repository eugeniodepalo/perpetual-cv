import { data } from "@/data"
import { Layout } from "@/components/layout"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Layout data={data}>{children}</Layout>
      </body>
    </html>
  )
}
