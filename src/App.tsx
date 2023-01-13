import styled from 'styled-components'
import { ThemeProviderReducer } from './components/shared/themes/ThemeProviderReducer'
import { TalespireProvider } from './contexts/talespire/TalespireContext'
import { Login } from './pages/Login'

const StyledApp = styled.div`
  display: flex;
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  padding: 0;
  place-items: center;
`
function App() {
  return (
    <TalespireProvider>
      <ThemeProviderReducer>
        <StyledApp className="App">
          <Login />
        </StyledApp>
      </ThemeProviderReducer>
    </TalespireProvider>
  )
}

export default App
