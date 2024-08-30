import React, { useState } from 'react';
import EMIResultTable from '../components/EMIResultTable';
import LoanEMIInfo from '../components/CalculatorsInfo/LoanEMIInfo';

function LoanEmiCalculator() {
    const [principal, setPrincipal] = useState('');
    const [annualRate, setAnnualRate] = useState('');
    const [EMI, setEMI ] = useState('');
    const [timeValue, setTimeValue] = useState('');
    const [timeUnit, setTimeUnit] = useState('months'); // Default to months
    const [startDate, setStartDate] = useState('');
    const [results, setResults] = useState(null);

    const [variables, setVariables ] = useState({
        isActiveCustomFields : false,
        choosedField : '',
        emiType : '',

    })

    const calculateEMI = () => {
        const p = parseFloat(principal);
        const r = parseFloat(annualRate) / 12 / 100;
        let n = parseInt(timeValue, 10);

        if (timeUnit === 'years') {
            n = n * 12; // Convert years to months
        }

        let emi = 0;
        if (r === 0) {
            emi = p / n;
        } else {
            emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        }

        let outstanding = p;
        const data = [];
        const start = new Date(startDate);
        for (let i = 1; i <= n; i++) {
            const monthlyInterest = outstanding * r;
            const monthlyPrincipal = emi - monthlyInterest;
            outstanding -= monthlyPrincipal;

            // Calculate each month's date (considering 30 days per month)
            const monthDate = new Date(start);
            monthDate.setDate(start.getDate() + i * 30); // Add 30 days per month

            data.push({
                Date: monthDate.toLocaleDateString(),
                EMI: emi.toFixed(2),
                Interest: monthlyInterest.toFixed(2),
                Principal: monthlyPrincipal.toFixed(2),
                Outstanding: outstanding.toFixed(2),
            });
        }

        // Calculate end date (considering 30 days per month)
        const endDate = new Date(start);
        endDate.setDate(start.getDate() + n * 30);

        setResults({
            data,
            totalPrincipalPaid: data.reduce((sum, month) => sum + parseFloat(month.Principal), 0),
            totalInterestPaid: data.reduce((sum, month) => sum + parseFloat(month.Interest), 0),
            endDate: endDate.toLocaleDateString(),
        });
    };

    const printSummary = () => {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Loan EMI Calculator Summary</title>');
        printWindow.document.write('<style>table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid #ddd; padding: 8px; } th { background-color: #f2f2f2; }</style>');
        printWindow.document.write('</head><body >');
        printWindow.document.write('<h2>Loan EMI Calculator Summary</h2>');
        printWindow.document.write('<div><strong>Summary:</strong><br/>');
        printWindow.document.write(`Loan Amount: ₹${principal}<br/>`);
        printWindow.document.write(`Total Interest Paid: ₹${results.totalInterestPaid.toFixed(2)}<br/>`);
        printWindow.document.write(`Total Amount Paid: ₹${(results.totalPrincipalPaid + results.totalInterestPaid).toFixed(2)}<br/>`);
        printWindow.document.write(`End Date: ${results.endDate}<br/>`);
        printWindow.document.write(`Over a Period of ${timeValue} ${timeUnit}</div>`);
        printWindow.document.write('<h3>EMI Details</h3>');
        printWindow.document.write('<table><thead><tr><th>Date</th><th>EMI</th><th>Interest</th><th>Principal</th><th>Outstanding</th></tr></thead><tbody>');
        
        results.data.forEach(row => {
            printWindow.document.write(`<tr><td>${row.Date}</td><td>${row.EMI}</td><td>${row.Interest}</td><td>${row.Principal}</td><td>${row.Outstanding}</td></tr>`);
        });
        
        printWindow.document.write('</tbody></table>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    };

    const handleCustomFormSubmit = (event) => { 
        event.preventDefault();
     }

    return <>
{/* { !variables.isActiveCustomFields ? ( */}
    <div className="container pt-5 mt-5">
    <div>
    <h2 className="text-center">Loan EMI Calculator</h2>
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="form-group">
                <label>Loan Amount</label>
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
                <label>Time Period</label>
                <div className="d-flex">
                    <input
                        type="number"
                        className="form-control me-2"
                        placeholder="Enter value"
                        value={timeValue}
                        onChange={(e) => setTimeValue(e.target.value)}
                    />
                    <select
                        className="form-select"
                        value={timeUnit}
                        onChange={(e) => setTimeUnit(e.target.value)}
                    >
                        <option value="months">Months</option>
                        <option value="years">Years</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label>Start Date</label>
                <input
                    type="date"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>
           <div className="my-4">
           <button className="btn btn-primary me-2" onClick={calculateEMI}>
                Calculate EMI
            </button>
            {/* <button className="btn btn-secondary"
            onClick={()=> {
                setVariables({
                    ...variables,
                    isActiveCustomFields : true
                })
            }}>
                Custome fields
            </button> */}
           </div>
            {results && (
                <>
                    <button className="btn btn-secondary mt-3" onClick={printSummary}>
                        Print Summary
                    </button>
                    <div className="mt-4">
                        <EMIResultTable data={results.data} />
                        <div className="alert alert-info mt-4">
                            <strong>Summary:</strong> <br />
                            Loan Amount: ₹{principal} <br />
                            Total Interest Paid: ₹{results.totalInterestPaid.toFixed(2)} <br />
                            Total Amount Paid: ₹{(results.totalPrincipalPaid + results.totalInterestPaid).toFixed(2)} <br />
                            End Date: {results.endDate} <br />
                            Over a Period of {timeValue} {timeUnit}
                        </div>
                    </div>
                </>
            )}
        </div>
    </div>
    </div>
</div>

<LoanEMIInfo/>

    
    
    </>
}

export default LoanEmiCalculator;
