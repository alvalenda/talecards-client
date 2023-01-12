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
import { themeObject } from './shared/theme/theme.config'

function App() {
  const { darkMode } = useContext<{ darkMode: boolean }>(
    TalespireContext as any
  )
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: darkMode
            ? themeObject.colors.primaryDark
            : themeObject.colors.primaryLight,

          secondary: darkMode
            ? themeObject.colors.secondaryDark
            : themeObject.colors.secondaryLight,

          background: darkMode
            ? themeObject.colors.backgroundDark
            : themeObject.colors.backgroundLight,

          textPrimary: darkMode
            ? themeObject.colors.textPrimaryDark
            : themeObject.colors.textPrimaryLight,

          textSecondary: darkMode
            ? themeObject.colors.textSecondaryDark
            : themeObject.colors.textSecondaryLight,

          buttonPrimary: darkMode
            ? themeObject.colors.buttonPrimaryDark
            : themeObject.colors.buttonPrimaryLight,

          buttonSecondary: darkMode
            ? themeObject.colors.buttonSecondaryDark
            : themeObject.colors.buttonSecondaryLight,

          buttonPrimaryText: darkMode
            ? themeObject.colors.buttonTextPrimaryDark
            : themeObject.colors.buttonTextPrimaryLight,

          buttonSecondaryText: darkMode
            ? themeObject.colors.buttonTextSecondaryDark
            : themeObject.colors.buttonTextSecondaryLight,

          buttonDisabled: themeObject.colors.buttonDisabled,
          buttonDisabledText: themeObject.colors.buttonDisabledText,
        },
        fonts: {
          ...themeObject.fonts,
        },

        fontSizes: {
          ...themeObject.fontSizes,
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
