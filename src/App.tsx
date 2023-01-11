import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Button from './components/Button'
import { Title } from './components/Title'
import { themeObject } from './shared/theme.config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={themeObject}>
      <div className="App">
        <Title />
        <Button />
      </div>
    </ThemeProvider>
  )
}

export default App
