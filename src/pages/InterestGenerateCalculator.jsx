
import React, { useState } from 'react';
import './InterestGenerateCalculator.css';

const InterestGenerateCalculator = () => {
    const [principal, setPrincipal] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [timeValue, setTimeValue] = useState(0);
    const [timeUnit, setTimeUnit] = useState('months');
    const [ timePeriod, setTimePeriod] = useState({
        years : 0, 
        months : 0,
    })
    const [summary, setSummary] = useState([]);
    const [interest, setInterest] = useState(null);
    const [ startDate, setStartDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split('T')[0]; // Format to YYYY-MM-DD
      });

    const calculateInterest = () => {
        const P = parseFloat(principal);
        const A = parseFloat(totalAmount);
        const T = parseFloat(timeValue);

        if (isNaN(P) || isNaN(A) || isNaN(T) || P <= 0 || A <= 0 || T <= 0) {
            alert("Please enter valid numbers greater than zero");
            return;
        }

        let rate;
        let table = [];
        if (timeUnit === 'years') {
            // Yearly Compounding
            rate = 100 * (Math.pow(A / P, 1 / T) - 1);
        } else {
            // Monthly Compounding
            rate =  12 * 100 * (Math.pow(A / P, 1 / ( T * 12 )) - 1);
            console.log(rate.toFixed(2), 'monthly rate')
            
        }

        let currentAmount = P;
        // const rateOfInterest = timeUnit === 'years' ? rate : rate / 12;
        const rateOfInterest = rate;
        const isMonthly = timeUnit === 'months';

        for (let i = 1; i <= T; i++) {
            const interestAmount = (rateOfInterest / 100) * currentAmount;
            const totalAmount = interestAmount + currentAmount;
            table.push({
                index: i,
                initialAmount: currentAmount.toFixed(2),
                interest: interestAmount.toFixed(2),
                total: totalAmount.toFixed(2),
            });

            currentAmount = totalAmount;
        }

        setSummary(table);
        setInterest({
            totalRateOfInterest: rate.toFixed(2),
        });
    };

    return (
        <div className="container mt-5 pt-5">
            <h3 className="text-center mb-4">Interest Generator Calculator</h3>

            <div className="row justify-content-center">
                <div className="col-md-7 mb-3">
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

                        <div className="mb-3">
                            <label htmlFor=""> Time Period: </label>
                            <div className="row">
                                <div className="col-sm-3">
                                    <input type="number"
                                    className='form-control' 
                                    value={ timePeriod.years}
                                    onChange={(e)=> setTimePeriod({
                                        ...timePeriod,
                                        years : e.target.value,
                                    })}
                                    id = "years" />
                                    <label htmlFor="years"> Years</label>
                                </div>
                                <div className="col-sm-3">
                                    <input type="number"
                                    className='form-control'
                                    id = "months" 
                                    value={ timePeriod.months } 
                                    onChange={(e)=> setTimePeriod({
                                        ...timePeriod,
                                        months : e.target.value
                                    })}/>
                                    <label htmlFor="months"> Months</label>
                                </div>
        
                            </div>
                        </div>

                        <div className="mb-3">
                            <label>Start Date</label>
                            <input
                                type="date"
                                className="form-control"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>

                        <div className="mb-2">
                            <button className="btn btn-primary" onClick={calculateInterest}>Calculate</button>
                        </div>
                    </div>
                </div>
            </div>

            {summary.length > 0 && (
                <div className='mb-5'>
                    <div className="mb-4">
                        <strong className='h5'>
                            {/* Total Interest Rate:  */}
                            {timeUnit === 'years' ? ' Annual' : ' Monthly'} Rate: 
                        </strong>
                        <span className="text-success">
                            &nbsp; {interest.totalRateOfInterest}%
                        </span>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-striped table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Initial Amount</th>
                                    <th>Interest</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {summary.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.index}</td>
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
