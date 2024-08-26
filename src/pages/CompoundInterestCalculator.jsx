import React, { useState } from 'react';

function CompoundInterestCalculator() {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [timeValue, setTimeValue] = useState('');
    const [timeUnit, setTimeUnit] = useState('years'); // Default to years
    const [compoundingFrequency, setCompoundingFrequency] = useState('annually'); // Default to annually
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

        // Determine the compounding frequency
        let n;
        switch (compoundingFrequency) {
            case 'monthly':
                n = 12;
                break;
            case 'quarterly':
                n = 4;
                break;
            case 'half-yearly':
                n = 2;
                break;
            case 'annually':
            default:
                n = 1;
                break;
        }

        // Compound interest formula: A = P(1 + r/n)^(nt)
        const A = P * Math.pow((1 + R / n), n * T);
        const compoundInterest = A - P;
        const percentageInterest = (compoundInterest / P) * 100;

        setInterest({
            interestGenerated: compoundInterest.toFixed(2),
            interestPercentage: percentageInterest.toFixed(2),
            totalAmountReturned: A.toFixed(2),
        });
    };

    return (
        <div className="container mt-5 pt-5 align-items-center">
            <div className="row justify-content-center">
                <div className="col-md-6">
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
                    <div className="mb-3">
                        <label htmlFor="compoundingFrequency" className="form-label">Compounding Frequency</label>
                        <select
                            id="compoundingFrequency"
                            className="form-select"
                            value={compoundingFrequency}
                            onChange={(e) => setCompoundingFrequency(e.target.value)}
                        >
                            <option value="annually">Annually</option>
                            <option value="half-yearly">Half-Yearly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                    <button className="btn btn-primary" onClick={calculateCompoundInterest}>Calculate Interest</button>
                    
                </div>

                <div className="col-md-4">
                {interest && (
                        <div className="alert alert-info mt-4">
                            <h4>Interest Summary:</h4>
                            <p><strong>Total Amount Returned (A):</strong> ₹{interest.totalAmountReturned}</p>
                            <p><strong>Interest Generated:</strong> ₹{interest.interestGenerated}</p>
                            <p><strong>Percentage Interest:</strong> {interest.interestPercentage}%</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CompoundInterestCalculator;
