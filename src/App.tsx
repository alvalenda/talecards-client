import styled from 'styled-components'
import './App.css'
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

  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
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
