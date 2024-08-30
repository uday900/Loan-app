import React from 'react';

function CompoundInterestInfo() {
    return (
        <div className="container mt-5">
            <h3 className="text-center">How the Compound Interest Calculator Works</h3>
            <p className="mt-4">
                The Compound Interest Calculator helps you calculate the interest earned on an investment or the interest charged on a loan over time. The calculator considers several factors, including the initial principal, the annual interest rate, the time period, and the frequency of compounding.
            </p>
            <h4 className="mt-3">Key Terms Explained:</h4>
            <ul>
                <li>
                    <strong>Principal (P):</strong> This is the initial amount of money that you invest or borrow. The principal is the starting point for calculating interest.
                </li>
                <li>
                    <strong>Annual Interest Rate (R):</strong> The percentage at which your principal grows annually. It is expressed as a percentage, but the calculator converts it to a decimal for calculation purposes.
                </li>
                <li>
                    <strong>Time Period (T):</strong> The length of time over which the money is invested or borrowed. You can choose to enter the time in either years or months.
                </li>
                <li>
                    <strong>Compounding Frequency (n):</strong> This refers to how often the interest is applied to the principal. Common options include annually, semi-annually (half-yearly), quarterly, and monthly. More frequent compounding results in higher interest accumulation.
                </li>
                <li>
                    <strong>Compound Interest (CI):</strong> The interest calculated on the initial principal, which also includes all the accumulated interest from previous periods.
                </li>
                <li>
                    <strong>Total Amount Returned (A):</strong> This is the final amount after interest is added to the principal. It is calculated using the formula:
                    <pre>A = P(1 + r/n)^(nt)</pre>
                </li>
            </ul>
            <h4 className="mt-3">Example Calculation:</h4>
            <p>
                Suppose you invest ₹10,000 at an annual interest rate of 5% for 5 years, with interest compounded annually. Using the formula, the calculator will determine the total amount returned and the interest earned over this period.
            </p>
            <h4 className="mt-3">Benefits of Compound Interest:</h4>
            <p>
                Compound interest is a powerful concept that allows your investments to grow faster over time, as you earn interest on both the principal and the previously accumulated interest. The more frequently interest is compounded, the more significant the growth.
            </p>
        </div>
    );
}

export default CompoundInterestInfo;
