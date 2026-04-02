import { useState } from 'react'
import './App.css'
import MainPage from './pages/MainPage'
import StartPage from './pages/StartPage'

function App() {
  const [screen, setScreen] = useState('start')

  if (screen === 'start') {
    return <StartPage onEnter={() => setScreen('main')} />
  }

  return <MainPage onRestart={() => setScreen('start')} />
}

export default App
