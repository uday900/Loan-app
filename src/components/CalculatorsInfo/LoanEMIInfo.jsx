import React from 'react';

function LoanEMIInfo() {
  return (
    <div className="container mt-4">
      <h3>What is EMI?</h3>
      <p>
        EMI stands for Equated Monthly Installment. It is the fixed amount of money that a borrower pays to the lender every month until the loan is fully repaid. The EMI amount includes both the principal amount and the interest on the loan.
      </p>

      <h3>Why is EMI Important?</h3>
      <ul>
        <li>
          **Budget Planning:** EMI helps borrowers plan their budget by breaking down the total loan repayment into manageable monthly payments.
        </li>
        <li>
          **Fixed Payment:** With EMI, the payment amount remains fixed, allowing for better financial planning.
        </li>
        <li>
          **Ease of Repayment:** EMI makes it easier to repay loans over an extended period rather than in a lump sum.
        </li>
        <li>
          **Credit Score:** Timely EMI payments help maintain a good credit score, which is crucial for future borrowings.
        </li>
      </ul>

      <h3>How is EMI Calculated?</h3>
      <p>
        The EMI is calculated using the following formula:
      </p>
      <pre style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
        EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1]
      </pre>
      <p>Where:</p>
      <ul>
        <li><strong>P</strong>: Principal Loan Amount</li>
        <li><strong>r</strong>: Monthly Interest Rate (Annual Interest Rate / 12 / 100)</li>
        <li><strong>n</strong>: Number of Monthly Installments (Loan Tenure in Months)</li>
      </ul>

      <h3>Where is EMI Used?</h3>
      <p>
        EMI is commonly used in various types of loans, including:
      </p>
      <ul>
        <li>Home Loans</li>
        <li>Car Loans</li>
        <li>Personal Loans</li>
        <li>Education Loans</li>
        <li>Credit Card Loans</li>
      </ul>

      <h3>Benefits of EMI</h3>
      <ul>
        <li>
          **Affordability:** Allows individuals to purchase expensive items or invest in property without paying the full amount upfront.
        </li>
        <li>
          **Flexibility:** Different loan tenures allow borrowers to choose an EMI amount that suits their financial situation.
        </li>
        <li>
          **Convenience:** Fixed monthly payments make it easier to manage finances and avoid defaulting on loans.
        </li>
      </ul>
    </div>
  );
}

export default LoanEMIInfo;
