import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { TalespireContext } from '@/contexts/talespire/TalespireContext'

type Props = {
  children: React.ReactNode
}

export function ThemeProviderReducer({ children }: Props) {
  const { darkMode } = useContext<{ darkMode: boolean }>(
    TalespireContext as any
  )

  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: darkMode ? '#fff' : '#242424',
          secondary: darkMode ? '#afbec4' : '#445a63',

          background: darkMode ? '#242424' : '#fff',
          backgroundVar: darkMode ? '#374850' : '#d0d8dc',

          buttonPrimary: darkMode ? '#fff' : '#242424',
          buttonSecondary: darkMode ? '#afbec4' : '#445a63',

          interactive: darkMode ? '#026ebe' : '#026ebe',
          inlineError: darkMode ? '#fff' : '#c00300',

          buttonText: '#fff',
          buttonDisabled: '#ccc',
          disabledText: '#fff',
        },
        fonts: {
          primary: 'Inter, sans-serif',
        },

        fontSizes: {
          xsmall: '0.9em',
          small: '1.2em',
          medium: '1.6em',
          large: '2.4em',
          xlarge: '3.2em',
        },
      }}
    >
      {children}
    </ThemeProvider>
  )
}
