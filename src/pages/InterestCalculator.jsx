import React, { useState } from 'react';

function InterestCalculator() {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [timeValue, setTimeValue] = useState('');
    const [timeUnit, setTimeUnit] = useState('years'); // Default to years
    const [interest, setInterest] = useState(null);

    const calculateCompoundInterest = () => {
        const P = parseFloat(principal);
        const R = parseFloat(rate) / 100;
        let T = parseFloat(timeValue);

        if (isNaN(P) || isNaN(R) || isNaN(T)) {
            alert("Please enter valid numbers");
            return;
        }

        // Convert time to years if it's in months
        if (timeUnit === 'months') {
            T = T / 12;
        }

        // Compound interest formula with annual compounding: A = P(1 + r/n)^(nt)
        // For simplicity, using n = 1 (annual compounding)
        const A = P * Math.pow((1 + R), T);
        const compoundInterest = A - P;
        const percentageInterest = (compoundInterest / P) * 100;

        setInterest({
            amount: compoundInterest.toFixed(2),
            percentage: percentageInterest.toFixed(2)
        });
    };

    return (
        <div className="container min-vh-100  d-flex justify-content-center align-items-center">
            <div className="w-50">
                <h2 className="text-center mb-4">Compound Interest Calculator</h2>
                <div className="mb-3">
                    <label htmlFor="principal" className="form-label">Investment Amount (Principal)</label>
                    <input
                        type="number"
                        id="principal"
                        className="form-control"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="rate" className="form-label">Annual Interest Rate (%)</label>
                    <input
                        type="number"
                        id="rate"
                        className="form-control"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="timeValue" className="form-label">Time Period</label>
                    <div className="d-flex">
                        <input
                            type="number"
                            id="timeValue"
                            className="form-control me-2"
                            placeholder="Enter value"
                            value={timeValue}
                            onChange={(e) => setTimeValue(e.target.value)}
                        />
                        <select
                            id="timeUnit"
                            className="form-select"
                            value={timeUnit}
                            onChange={(e) => setTimeUnit(e.target.value)}
                        >
                            <option value="years">Years</option>
                            <option value="months">Months</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={calculateCompoundInterest}>Calculate Interest</button>
                {interest && (
                    <div className="mt-4">
                        <h4>Interest Generated:</h4>
                        <p><strong>Amount:</strong> ₹{interest.amount}</p>
                        <p><strong>Percentage:</strong> {interest.percentage}%</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default InterestCalculator;
