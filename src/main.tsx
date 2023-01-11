import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TalespireProvider } from './shared/contexts/talespire/TalespireContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TalespireProvider>
      <App />
    </TalespireProvider>
  </React.StrictMode>
)
