
import React, { useEffect, useState } from 'react';
import './InterestGenerateCalculator.css';
import RateOfInterestInfo from '../components/CalculatorsInfo/RateOfInterestCalInfo';

const InterestGenerateCalculator = () => {
    const [principal, setPrincipal] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [timeUnit, setTimeUnit] = useState('years');
    const [ timePeriod, setTimePeriod] = useState({
        years : '', 
        months : '',
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
        let T = parseFloat(timePeriod.years);
        // let T = parseFloat(timePeriod.years) + (parseFloat(timePeriod.months) / 12);


        if (isNaN(P) || isNaN(A) || isNaN(T) || P <= 0 || A <= 0 || T <= 0) {
            alert("Please enter valid numbers greater than zero");
            return;
        }

        let rate = 100 * (Math.pow(A / P, 1 / T) - 1);
        let table = [];
        let currentAmount = P;
        let date = new Date(startDate);
        
        // monthly Compounding
        if (timeUnit === 'months') {
            T = T * 12;
            rate =  12 * 100 * (Math.pow(A / P, 1 / ( T )) - 1);

            // console.log("monthly rate ", rate)
            rate = rate / 12;
            const monthsList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let monthIndex = date.getMonth();

            let day = date.getDate(); // Use the start date's day

            for (let i = 1; i <= T ; i++) {  
                const interestAmount = (rate / 100) * currentAmount;
                const totalAmount = interestAmount + currentAmount;
                const formattedDate = `${day}-${monthsList[monthIndex]}-${date.getFullYear()}`;

                table.push({
                    sno : i,
                    period: formattedDate,
                    initialAmount: currentAmount.toFixed(2),
                    interest: interestAmount.toFixed(2),
                    total: totalAmount.toFixed(2),
                });
    
                monthIndex = (monthIndex + 1 ) % 12;

                currentAmount = totalAmount;
            }
        } else{
            let year = date.getFullYear()
            for (let i = 1; i <= T ; i++) {  
                const interestAmount = (rate / 100) * currentAmount;
                const totalAmount = interestAmount + currentAmount;
                table.push({
                    sno : i,
                    period: year,
                    initialAmount: currentAmount.toFixed(2),
                    interest: interestAmount.toFixed(2),
                    total: totalAmount.toFixed(2),
                });

                year += 1
                currentAmount = totalAmount;
            }
        }
        

        setSummary(table);
        setInterest({
            totalRateOfInterest: rate.toFixed(2),
        });
    };
    
     const handleTimeUnitChange = (event) => {
        const newTimeUnit = event.target.value;
        setTimeUnit(newTimeUnit);
        // console.log(newTimeUnit, timeUnit,'.......')
        // calculateInterest(); // Trigger calculation when time unit changes
    }
    useEffect(() => {
        // Trigger calculation when time unit, principal, totalAmount, or timePeriod changes
        if (principal && totalAmount && (timePeriod.years || timePeriod.months)) {
            calculateInterest();
        }
    }, [timeUnit, principal, totalAmount, timePeriod]);

    
    

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
                            <label className = 'form-label' htmlFor=""> Time Period: </label>
                            <div className="row">
                                <div className="col-sm-3">
                                    <input type="number"
                                    className='form-control' 
                                    value={ timePeriod.years}
                                    placeholder='0'
                                    onChange={(e)=> setTimePeriod({
                                        ...timePeriod,
                                        years : e.target.value,
                                    })}
                                    id = "years" />
                                    <label htmlFor="years"> Years</label>
                                </div>
                                {/* <div className="col-sm-3">
                                    <input type="number"
                                    className='form-control'
                                    id = "months" 
                                    placeholder='0'
                                    value={ timePeriod.months } 
                                    onChange={(e)=> setTimePeriod({
                                        ...timePeriod,
                                        months : e.target.value
                                    })}/>
                                    <label htmlFor="months"> Months</label>
                                </div> */}
        
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
                        <div className=" d-flex ">
                        
                        <strong className='h5'>
                            {/* Total Interest Rate:  */}
                            {timeUnit === 'years' ? ' Annual' : ' Monthly'} Rate: 
                        </strong>
                        <span className="text-success">
                            &nbsp; {interest.totalRateOfInterest}%
                        </span>

                        <div className="mx-5">
                            {/* <label className="form-label">Time Unit:</label> */}
                            <select
                                className="form-select"
                                value={timeUnit}
                                onChange={(e) => {
                                    handleTimeUnitChange(e);
                                }}>

                                <option value="months">Months</option>
                                <option value="years">Years</option>
                            </select>
                        </div>

                        </div>
                        
                    </div>

                    {/* display summary in table form */}
                    <div className="table-responsive">
                        <table className="table table-striped table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>{ timeUnit== 'years' ? 'Years' : 'Months' }</th>
                                    <th>Initial Amount</th>
                                    <th>Interest</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {summary.map((item, i) => (
                                    <tr key={i}>
                                        <td> { item.sno} </td>
                                        <td>{item.period}</td>
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
        
        
        <RateOfInterestInfo/>
        
        </div>
    );
};

export default InterestGenerateCalculator;
