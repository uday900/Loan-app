import React from 'react';

const EMIResultTable = ({ data }) => {
  return (
    <div className="table-responsive mt-4">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Month</th>
            <th>EMI</th>
            <th>Interest</th>
            <th>Principal</th>
            <th>Outstanding</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>₹{row.EMI}</td>
              <td>₹{row.Interest}</td>
              <td>₹{row.Principal}</td>
              <td>₹{row.Outstanding}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EMIResultTable;
