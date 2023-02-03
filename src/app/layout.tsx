import { Roboto } from "@next/font/google"
import { data } from "@/data"
import { Layout } from "@/components/layout"

const font = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  preload: true,
})

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={font.className}>
        <Layout data={data}>{children}</Layout>
      </body>
    </html>
  )
}
