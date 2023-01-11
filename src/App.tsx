import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Button from './components/Button'
import ThemeButton from './components/ThemeButton'
import { Title } from './components/Title'
import { TalespireContext } from './shared/contexts/talespire/TalespireContext'
import type { TalespireAction } from './shared/contexts/talespire/TalespireReducer'
import { themeObject } from './shared/theme/theme.config'

function App() {
  return (
    <ThemeProvider theme={themeObject}>
      <div className="App">
        <Title />
        <Button>Faço Nada</Button>
        <ThemeButton />
      </div>
    </ThemeProvider>
  )
}

export default App
