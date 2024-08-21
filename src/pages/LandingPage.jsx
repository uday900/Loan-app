import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const calculators = [
        { name: 'Loan EMI Calculator', path: '/loanemicalculator' },
        { name: 'Interest Calculator', path: '/interestcalculator' }
    ];

    const handleNavigation = (path) => {
        navigate(path);
    };

    const filteredCalculators = calculators.filter(calculator =>
        calculator.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-8">
                    <h1 className="text-center mb-4"> Financial Calculator</h1>

                    {/* Search Bar */}
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for a calculator..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-primary">Search</button>
                    </div>

                    {/* List of Calculators */}
                    <ul className="list-group">
                        {filteredCalculators.length > 0 ? (
                            filteredCalculators.map((calculator, index) => (
                                <li
                                    key={index}
                                    className="list-group-item list-group-item-action"
                                    onClick={() => handleNavigation(calculator.path)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {calculator.name}
                                </li>
                            ))
                        ) : (
                            <li className="list-group-item">No results found</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
