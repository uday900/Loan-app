import React, { useState } from 'react';
import EMIResultTable from '../components/EMIResultTable';

function LoanEmiCalculator() {
  const [principal, setPrincipal] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [results, setResults] = useState(null);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(annualRate) / 12 / 100;
    const n = parseInt(timePeriod, 10);

    let emi = 0;
    if (r === 0) {
      emi = p / n;
    } else {
      emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }

    let outstanding = p;
    const data = [];
    for (let i = 1; i <= n; i++) {
      const monthlyInterest = outstanding * r;
      const monthlyPrincipal = emi - monthlyInterest;
      outstanding -= monthlyPrincipal;

      data.push({
        EMI: emi.toFixed(2),
        Interest: monthlyInterest.toFixed(2),
        Principal: monthlyPrincipal.toFixed(2),
        Outstanding: outstanding.toFixed(2),
      });
    }

    setResults({
      data,
      totalPrincipalPaid: data.reduce((sum, month) => sum + parseFloat(month.Principal), 0),
      totalInterestPaid: data.reduce((sum, month) => sum + parseFloat(month.Interest), 0),
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Loan EMI Calculator</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-group">
            <label>Principal Amount</label>
            <input
              type="number"
              className="form-control"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Annual Interest Rate (%)</label>
            <input
              type="number"
              className="form-control"
              value={annualRate}
              onChange={(e) => setAnnualRate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Time Period (in months)</label>
            <input
              type="number"
              className="form-control"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mt-3" onClick={calculateEMI}>
            Calculate EMI
          </button>
        </div>
      </div>
      {results && (
        <>
          <EMIResultTable data={results.data} />
          <div className="alert alert-info mt-4">
            <strong>Summary:</strong> <br />
            Loan Amount: ₹{principal} <br />
            Total Interest Paid: ₹{results.totalInterestPaid.toFixed(2)} <br />
            Total Amount Paid: ₹{(results.totalPrincipalPaid + results.totalInterestPaid).toFixed(2)} <br />
            Over a Period of {timePeriod} months
          </div>
        </>
      )}
    </div>
  );
}

export default LoanEmiCalculator;
