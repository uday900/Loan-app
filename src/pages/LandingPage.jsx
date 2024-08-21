import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NormalCalculator from '../components/NormalCalculator';

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
            <div className="row gap-5">
                {/* Left Side: Search and List of Calculators */}
                <div className="col-md-6 col-sm-12">
                    <h1 className="text-center mb-4">Financial Calculator</h1>

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

                {/* Right Side: Normal Calculator */}
                <div className="col-md-4 col-sm-12">
                    <div className="p-3">
                        {/* <h2>Normal Calculator</h2> */}
                        {/* You can place your calculator component or code here */}
                        <p>
                            <NormalCalculator/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
