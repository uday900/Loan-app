import React from 'react'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import LoanEmiCalculator from './pages/LoanEmiCalculator'
import Navbar from './components/Navbar'
import InterestGenerateCalculator from './pages/InterestGenerateCalculator'
import CompoundInterestCalculator from './pages/CompoundInterestCalculator'
import DiscountCalculator from './pages/DiscountCalculator'
function App() {
  return <>
    <Navbar/>
    <div>
    
      <Routes>
        <Route path = '/' element = { <LandingPage/> } />
        <Route path = '/loanemicalculator' element = { <LoanEmiCalculator/> } />
        <Route path = '/compoundinterestcalculator' element = { <CompoundInterestCalculator/> } />
        <Route path='/interestgeneratecalculator' element = { <InterestGenerateCalculator/>} />
        <Route path='/discountcalculator' element = { <DiscountCalculator/>} />


        <Route path = '*' element = { <>Page not found</> } />

      </Routes>
    </div>
  
  </>
}

export default App