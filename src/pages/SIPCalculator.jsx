import React, { useState } from 'react';
import SIPInfo from '../components/CalculatorsInfo/SIPInfo';

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [years, setYears] = useState('');
  const [futureValue, setFutureValue] = useState(null);
  const [totalInvestment, setTotalInvestment] = useState(null);
  const [estimatedReturns, setEstimatedReturns] = useState(null);

  const calculateSIP = (e) => {
    e.preventDefault();

    const monthlyRate = annualRate / 12 / 100;
    const numberOfMonths = years * 12;

    const totalInvestment = monthlyInvestment * numberOfMonths;
    const futureValue =
      monthlyInvestment *
      (((1 + monthlyRate) ** numberOfMonths - 1) / monthlyRate) *
      (1 + monthlyRate);
    const estimatedReturns = futureValue - totalInvestment;

    setTotalInvestment(totalInvestment.toFixed(2));
    setFutureValue(futureValue.toFixed(2));
    setEstimatedReturns(estimatedReturns.toFixed(2));
  };

  const resetFields = () => {
    setMonthlyInvestment('');
    setAnnualRate('');
    setYears('');
    setFutureValue(null);
    setTotalInvestment(null);
    setEstimatedReturns(null);
  };

  return <>
  
  <div className="container mt-5 pt-5">
      <h3 className="text-center mb-4">SIP Calculator</h3>

      <div className="row">
        {/* Input Fields */}
        <div className="col-md-6 mb-3">
          <div className="card p-4">
            <h5 className="card-title">Input Fields</h5>
            <div className="mb-3">
              <label className="form-label">Monthly Investment (₹):</label>
              <input
                type="number"
                className="form-control"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Annual Interest Rate (%):</label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                value={annualRate}
                onChange={(e) => setAnnualRate(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Investment Duration (Years):</label>
              <input
                type="number"
                className="form-control"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                required
              />
            </div>

            <div className="mb-2">
              <button className="btn btn-primary" onClick={calculateSIP}>Calculate</button>

              <button className="btn btn-secondary ms-2" onClick={resetFields}>Reset</button>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="col-md-6 mb-3">
          <div className="card p-4">
            <h5 className="card-title">Summary</h5>
            {futureValue !== null ? (
              <ul className="list-group">
                <li className="list-group-item"><strong>Total Investment Amount:</strong> ₹{totalInvestment}</li>
                <li className="list-group-item"><strong>Estimated Returns:</strong> ₹{estimatedReturns}</li>
                <li className="list-group-item"><strong>Total Amount (Future Value):</strong> ₹{futureValue}</li>
                <li className="list-group-item"><strong>Rate of Interest:</strong> {annualRate}% p.a.</li>
              </ul>
            ) : (
              <p className="text-muted">Enter values to see the summary here.</p>
            )}
          </div>
        </div>
      </div>
    </div>
    
    <SIPInfo/>
    </>
}

export default SIPCalculator;
