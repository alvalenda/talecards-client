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

  if (darkMode) {
    return (
      <ThemeProvider
        theme={{
          colors: {
            primary: '#fff',
            secondary: '#afbec4',

            background: '#242424',
            backgroundVar: '#374850',

            buttonPrimary: '#fff',
            buttonSecondary: '#242424',

            interactive: '#026ebe',
            inlineError: '#fff',

            buttonText: '#fff',
            buttonDisabled: '#ccc',
            disabledText: '#fff',
          },
          fonts: {
            primary: 'Roboto, sans-serif',
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

  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: '#242424',
          secondary: '#445a63',

          background: '#fff',
          backgroundVar: '#d0d8dc',

          buttonPrimary: '#242424',
          buttonSecondary: '#fff',

          interactive: '#026ebe',
          inlineError: '#c00300',

          buttonText: '#fff',
          buttonDisabled: '#ccc',
          disabledText: '#fff',
        },
        fonts: {
          primary: 'Roboto, sans-serif',
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

// complexidade de lógica: 12
