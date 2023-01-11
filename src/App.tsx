import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Button from './components/Button'
import { Title } from './components/Title'
import { themeObject } from './shared/theme.config'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  const handleDarkMode = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <ThemeProvider theme={themeObject}>
      <div className="App">
        <Title />

        <Button handleClick={handleDarkMode}>Toggle Dark Mode</Button>
        <Button>Faço Nada</Button>
      </div>
    </ThemeProvider>
  )
}

export default App
