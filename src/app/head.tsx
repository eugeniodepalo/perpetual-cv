import { data } from "@/data"

export default function AppHead() {
  return (
    <>
      <title>{data.name}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={data.name} />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
