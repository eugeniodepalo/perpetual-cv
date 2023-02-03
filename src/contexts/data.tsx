import { Data } from "@/data"
import { createContext } from "react"

export const DataContext = createContext<Data | null>(null)
export const DataProvider = DataContext.Provider
