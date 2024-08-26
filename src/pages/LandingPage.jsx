import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { context } from '../context/contextForSearch';
import { calculators } from '../calculators';

const LandingPage = () => {
    const navigate = useNavigate();
    const { searchTerm } = useContext(context)

    const handleNavigation = (path) => {
        navigate(path);
    };

    const filteredCalculators = calculators.filter(calculator =>
        calculator.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div className="landing-page container ">
            <div>
                <h2 className='mb-4'>
                    Financial Calculators
                </h2>
            </div>
            <div className='grid-container'>
                {
                    filteredCalculators.map((calculator, _) =>{
                        return <Card key={_}  
                        title={ calculator.name} 
                        text={calculator.text} 
                        path = {calculator.path}
                    />
                    })
                }
            </div>
           
        </div>
    );
};

export default LandingPage;
