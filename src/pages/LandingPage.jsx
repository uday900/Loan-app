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
                text: 'Easily calculate your loan EMIs and repayment schedule. Get a clear breakdown of your monthly payments and plan your finances better.',
                path: '/loanemicalculator'
            },
            {
                name: 'Home Loan Calculator',
                text: 'Calculate your home loan EMIs and understand your repayment options. Plan your dream home purchase with confidence using our calculator.',
                path: '/homeloancalculator'
            },
            {
                name: 'Interest Calculator',
                text: 'Determine the interest earned on your savings or investments. Calculate simple and compound interest over different periods and rates.',
                path: '/interestcalculator'
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
                <h1 className='mb-4'>
                    Financial Calculators
                </h1>
            </div>
            <div className='grid-container'>
                {/* <Card bgColor="bg-light" title="Primary card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
                <Card bgColor="bg-light" title="Secondary card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
                <Card bgColor="bg-light" title="Success card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." /> */}
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
