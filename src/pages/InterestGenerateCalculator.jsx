import React, { useState } from 'react';
import './InterestGenerateCalculator.css'
const InterestGenerateCalculator = () => {
    // State variables
    const [principal, setPrincipal] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [timeValue, setTimeValue] = useState('');
    const [timeUnit, setTimeUnit] = useState('months'); // 'months' or 'years'
    const [monthlySummary, setMonthlySummary] = useState([]);
    const [rate, setRate] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    // Function to handle the calculation
    const calculateInterest = () => {
        const P = parseFloat(principal);
        const A = parseFloat(totalAmount);
        let T = parseFloat(timeValue);

        // Validation
        if (isNaN(P) || isNaN(A) || isNaN(T) || P <= 0 || A <= 0 || T <= 0) {
            alert("Please enter valid numbers greater than zero");
            return;
        }

        // Convert time to years if it's in months
        if (timeUnit === 'months') {
            T = T / 12;
        }

        // Calculate the monthly interest rate
        const growthFactor = A / P;
        const monthlyRate = Math.pow(growthFactor, 1 / (T * 12)) - 1; // Monthly interest rate
        const monthlyRatePercentage = monthlyRate * 100;

        // Generate monthly summary
        const months = Math.round(T * 12);
        const summary = [];
        let currentAmount = P;
        let totalInterestGenerated = 0;

        for (let month = 1; month <= months; month++) {
            const interest = currentAmount * monthlyRate;
            totalInterestGenerated += interest;
            
            summary.push({
                month: month,
                initialAmount: currentAmount.toFixed(2),
                interest: interest.toFixed(2),
                total: totalInterestGenerated.toFixed(2),
            });
            currentAmount += interest;
        }

        setRate(monthlyRatePercentage.toFixed(2));
        setTotalInterest(totalInterestGenerated.toFixed(2));
        setMonthlySummary(summary);
    };

    return (
        <div className="container mt-5 pt-5">
            <h3 className="text-center mb-4">Interest Generator Calculator</h3>

            <div className="row justify-content-center">
                <div className="col-md-7 p-5 shadow mb-5">
                    <div>
                        <div className="mb-3">
                            <label className="form-label">Principal (₹):</label>
                            <input
                                type="number"
                                className="form-control input-box-shadow"
                                value={principal}
                                onChange={(e) => setPrincipal(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Total Amount (₹):</label>
                            <input
                                type="number"
                                className="form-control input-box-shadow"
                                value={totalAmount}
                                onChange={(e) => setTotalAmount(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Time Value:</label>
                            <input
                                type="number"
                                className="form-control input-box-shadow"
                                value={timeValue}
                                onChange={(e) => setTimeValue(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Time Unit:</label>
                            <select
                                className="form-select"
                                value={timeUnit}
                                onChange={(e) => setTimeUnit(e.target.value)}
                            >
                                <option value="months">Months</option>
                                <option value="years">Years</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <button className="btn btn-primary" onClick={calculateInterest}>Calculate</button>
                        </div>
                    </div>
                </div>
            </div>

            {monthlySummary.length > 0 && (
                <div>
                    <div className="mb-4">
                        <strong className='h5'>Total Interest Generated: </strong>
                        <span className="text-success">
                        ₹{totalInterest}
                        </span>
                    </div>
                    <div className="mb-4">
                        <strong className='h5'>Annualized Interest Rate: </strong>
                        <span className="text-success">
                         {(rate * 12).toFixed(2)}%
                        </span>

                         
                    </div>
                    <div className="mb-4">
                    <strong className='h5'>Monthly Interest Rate: </strong>
                        <span className="text-success">
                        {rate}%
                        </span>

                        </div>

                    <div className="table-responsive">
                        <table className="table table-striped table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th>Month</th>
                                    <th>Initial Amount</th>
                                    <th>Interest</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {monthlySummary.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.month}</td>
                                        <td>₹{item.initialAmount}</td>
                                        <td>₹{item.interest}</td>
                                        <td>₹{item.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InterestGenerateCalculator;
