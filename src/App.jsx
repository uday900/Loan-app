import React from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InterestCalculator from './pages/InterestCalculator'
import LoanEmiCalculator from './pages/LoanEmiCalculator'
import Navbar from './components/Navbar'
import InterestGenerateCalculator from './pages/InterestGenerateCalculator'
function App() {
  return <>
    <Navbar/>
    <div>
    
      <Routes>
        <Route path = '/' element = { <LandingPage/> } />
        <Route path = '/loanemicalculator' element = { <LoanEmiCalculator/> } />
        <Route path = '/interestcalculator' element = { <InterestCalculator/> } />
        <Route path='/interestgeneratecalculator' element = { <InterestGenerateCalculator/>} />

        <Route path = '*' element = { <>Page not found</> } />

      </Routes>
    </div>
  
  </>
}

export default App