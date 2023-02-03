import { useContext } from "react"
import { DataContext } from "@/contexts/data"

export const useData = () => {
  const data = useContext(DataContext)

  if (!data) {
    throw new Error("useData must be used within a DataProvider")
  }

  return data
}
