import React from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        

        <Route path = '/' element = { <LandingPage/> } />

        <Route path = '*' element = { <>Page not found</> } />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App