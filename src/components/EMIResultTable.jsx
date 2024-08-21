import React from 'react';

function EMIResultTable({ data }) {
    return (
        <table className="table table-striped mt-4">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>EMI</th>
                    <th>Interest</th>
                    <th>Principal</th>
                    <th>Outstanding</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.Date}</td>
                        <td>{row.EMI}</td>
                        <td>{row.Interest}</td>
                        <td>{row.Principal}</td>
                        <td>{row.Outstanding}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EMIResultTable;
