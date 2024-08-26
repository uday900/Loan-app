import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NormalCalculator from '../components/NormalCalculator';
import Card from '../components/Card';
import { context } from '../context/contextForSearch';

const LandingPage = () => {
    const navigate = useNavigate();
    const { searchTerm } = useContext(context)
    // console.log(cals)
    // const [searchTerm, setSearchTerm] = useState('');
    // console.log(searchTerm)
    // 
    const calculators = [
        {
            name: 'Loan EMI Calculator',
            text: 'Calculate your loan EMIs and view your repayment schedule. Plan your budget with ease.',
            path: '/loanemicalculator'
        },
        // {
        //     name: 'Home Loan Calculator',
        //     text: 'Estimate your home loan EMIs and repayment options. Get ready for your home purchase.',
        //     path: '/homeloancalculator'
        // },
        {
            name: 'Interest Calculator',
            text: 'Compute interest on savings or investments. Includes both simple and compound interest calculations.',
            path: '/interestcalculator'
        },
        {
            name: 'Interest Generate Calculator',
            text: 'Calculate generated interest on your savings or investments. Includes simple and compound options.',
            path: '/interestgeneratecalculator'
        }
    ];
    

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
