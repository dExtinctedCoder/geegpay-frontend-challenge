import { createContext, useState } from 'react'

interface ThemeContextProviderType {
  children: React.ReactNode
}

interface ThemeContextType {
  theme: string
  setAppTheme: (theme: string) => void
}

export const ThemeContext = createContext({} as ThemeContextType)

function ThemeContextProvider({ children }: ThemeContextProviderType) {
  const themeScheme = 'light' //TODO: default to device theme
  const [theme, setTheme] = useState(themeScheme)

  const setAppTheme = (theme: string) => {
    setTheme(theme)
  }

  const themeContext = {
    theme,
    setAppTheme
  }

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeContextProvider