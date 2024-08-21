import React from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InterestCalculator from './pages/InterestCalculator'
import LoanEmiCalculator from './pages/LoanEmiCalculator'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        

        <Route path = '/' element = { <LandingPage/> } />
        <Route path = '/loanemicalculator' element = { <LoanEmiCalculator/> } />
        <Route path = '/interestcalculator' element = { <InterestCalculator/> } />

        <Route path = '*' element = { <>Page not found</> } />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App