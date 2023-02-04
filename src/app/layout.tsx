import { data } from "@/data"
import { Layout } from "@/components/layout"
import { Roboto_Mono } from "@next/font/google"

const font = Roboto_Mono({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"],
  display: "block",
})

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Layout data={data} font={font}>
          {children}
        </Layout>
      </body>
    </html>
  )
}
