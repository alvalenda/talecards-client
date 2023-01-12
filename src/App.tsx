import './App.css'
import Button from './components/shared/Button'
import ThemeProviderReducer from './components/shared/themes/ThemeProviderReducer'
import ThemeButton from './components/shared/ThemeButton'
import { Title } from './components/Title'
import { TalespireProvider } from './contexts/talespire/TalespireContext'

function App() {
  return (
    <TalespireProvider>
      <ThemeProviderReducer>
        <div className="App">
          <Title />
          <Button>Faço Nada</Button>
          <ThemeButton />
        </div>
      </ThemeProviderReducer>
    </TalespireProvider>
  )
}

export default App
