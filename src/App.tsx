import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Button from './components/Button'
import ThemeButton from './components/ThemeButton'
import { Title } from './components/Title'
import { TalespireContext } from './shared/contexts/talespire/TalespireContext'
import type {
  TalespireAction,
  TalespireState,
} from './shared/contexts/talespire/TalespireReducer'
import { themeObject as theme } from './shared/theme/theme.config'

function App() {
  const { darkMode } = useContext<{ darkMode: boolean }>(
    TalespireContext as any
  )
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: darkMode
            ? theme.colors.primaryDark
            : theme.colors.primaryLight,

          secondary: darkMode
            ? theme.colors.secondaryDark
            : theme.colors.secondaryLight,

          background: darkMode
            ? theme.colors.backgroundDark
            : theme.colors.backgroundLight,

          textPrimary: darkMode
            ? theme.colors.textPrimaryDark
            : theme.colors.textPrimaryLight,

          textSecondary: darkMode
            ? theme.colors.textSecondaryDark
            : theme.colors.textSecondaryLight,

          buttonPrimary: darkMode
            ? theme.colors.buttonPrimaryDark
            : theme.colors.buttonPrimaryLight,

          buttonSecondary: darkMode
            ? theme.colors.buttonSecondaryDark
            : theme.colors.buttonSecondaryLight,

          buttonText: theme.colors.buttonText,
          buttonDisabled: theme.colors.buttonDisabled,
          buttonDisabledText: theme.colors.buttonTextDisabled,
        },
        fonts: {
          ...theme.fonts,
        },

        fontSizes: {
          ...theme.fontSizes,
        },
      }}
    >
      <div className="App">
        <Title />
        <Button>Faço Nada</Button>
        <ThemeButton />
      </div>
    </ThemeProvider>
  )
}

export default App
