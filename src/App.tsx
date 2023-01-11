import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import { Title } from './components/Title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title />
      <Button />
    </div>
  )
}

export default App
