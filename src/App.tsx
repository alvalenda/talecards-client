import styled from 'styled-components'
import { ThemeProviderReducer } from './components/shared/styles/theme/ThemeProviderReducer'
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

const StyledApp = styled.div`
  display: flex;
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  padding: 0;
  place-items: center;
`
