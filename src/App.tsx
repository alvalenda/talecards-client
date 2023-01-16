import styled from 'styled-components'
import { ThemeProviderReducer } from './components/shared/ThemeProviderReducer'
import { StyledApp } from './components/styles/StyledApp'
import { TalespireProvider } from './contexts/talespire/TalespireContext'
import { GlobalStyle } from './globalStyles'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <TalespireProvider>
      <ThemeProviderReducer>
        <GlobalStyle />
        <StyledApp className="App">
          <LoginPage />
        </StyledApp>
      </ThemeProviderReducer>
    </TalespireProvider>
  )
}

export default App
