import { createContext, useState, type ReactNode } from "react"
import { settingsQuery, SettingsRow } from "@/services/query"
import { useQuery } from "@evolu/react"

export type FocusdoProviderData = {
  focusMode: boolean
  setFocusMode: (state: boolean) => void
  settings: SettingsRow
}

export const FocusdoContext = createContext<FocusdoProviderData>({
  focusMode: false,
  setFocusMode: () => {},
  settings: {
    appColor: null,
  },
})

type FocusdoProviderProps = {
  children: ReactNode
}

const FocusdoProvider = ({ children }: FocusdoProviderProps) => {
  const { rows } = useQuery(settingsQuery)
  const settings = rows[0]

  const [focusMode, setFocusMode] = useState(false)

  const data: FocusdoProviderData = {
    focusMode,
    setFocusMode,
    settings,
  }

  return (
    <FocusdoContext.Provider value={data}>{children}</FocusdoContext.Provider>
  )
}

export default FocusdoProvider
