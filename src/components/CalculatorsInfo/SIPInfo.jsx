import React from 'react';

function SIPInfo() {
  return (
    <div className="container mt-4">
      <h3>What is SIP?</h3>
      <p>
        A Systematic Investment Plan (SIP) is a method of investing in mutual funds. It allows investors to invest a fixed amount of money at regular intervals (monthly, quarterly, etc.), rather than making a lump-sum investment. SIPs help in averaging the cost of investment and compounding returns over time.
      </p>

      <h3>Why Invest in SIP?</h3>
      <ul>
        <li>Disciplined Savings: SIP helps inculcate a habit of regular savings and investing.</li>
        <li>Rupee Cost Averaging: SIP averages out the cost of investment by purchasing more units when prices are low and fewer units when prices are high.</li>
        <li>Power of Compounding: The longer you stay invested, the more you benefit from the compounding effect.</li>
        <li>Convenience: SIPs are convenient and flexible, allowing you to start with a small amount and increase your investment over time.</li>
      </ul>

      <h3>How is SIP Calculated?</h3>
      <p>
        The future value of an SIP is calculated using the formula:
      </p>
      <pre style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
        FV = P * [((1 + r)^n - 1) / r] * (1 + r)
      </pre>
      <p>Where:</p>
      <ul>
        <li><strong>FV</strong>: Future Value of the SIP</li>
        <li><strong>P</strong>: Monthly Investment Amount</li>
        <li><strong>r</strong>: Monthly Rate of Return (Annual Rate of Return / 12 / 100)</li>
        <li><strong>n</strong>: Number of Months</li>
      </ul>

      <h3>Where is SIP Applicable?</h3>
      <p>
        SIPs are primarily applicable in mutual fund investments. They can also be used in other financial instruments where regular investments are beneficial.
      </p>

      <h3>Usage of SIP</h3>
      <p>
        SIPs are used by investors who want to invest small amounts of money regularly rather than making a one-time investment. This approach is particularly useful for individuals who want to start investing but have limited funds.
      </p>
    </div>
  );
}

export default SIPInfo;
