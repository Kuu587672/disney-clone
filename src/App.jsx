import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home.jsx'
import PlayMovie from './pages/PlayMovie.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play/:id" element={<PlayMovie />} />
    </Routes>
  )
}

export default App
