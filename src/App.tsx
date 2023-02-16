import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainContent } from './components/MainContent'
import { OptionsBar } from './components/OptionsBar'
import { ThemeProviderReducer } from './components/shared/ThemeProviderReducer'
import { Sidebar } from './components/SideBar'
import { TalecardsProvider } from './contexts/talecards/TalecardsContext'
import { GlobalStyle } from './globalStyles'
import { AboutPage } from './pages/AboutPage'
import { LoginPage } from './pages/LoginPage'
import styled from 'styled-components'

function App() {
  return (
    <TalecardsProvider>
      <ThemeProviderReducer>
        <GlobalStyle />
        <BrowserRouter>
          {/* <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<LoginPage />} /> */}

          <AppContainer className="app-container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<MainContent section="home" />} />
              <Route
                path="/section1"
                element={<MainContent section="section1" />}
              />
              <Route
                path="/section2"
                element={<MainContent section="section2" />}
              />
              <Route
                path="/section3"
                element={<MainContent section="section3" />}
              />
            </Routes>
            <OptionsBar />
          </AppContainer>
          {/* </Routes> */}
        </BrowserRouter>
      </ThemeProviderReducer>
    </TalecardsProvider>
  )
}

export default App

const AppContainer = styled.div`
  display: flex;
`
