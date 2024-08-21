import React, { useState } from 'react';

const NormalCalculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleDelete = () => {
        setInput((prev) => prev.slice(0, -1));
    };

    const handleCalculate = () => {
        try {
            setResult(eval(input)); // Use eval with caution
        } catch (error) {
            setResult('Error');
        }
    };

    const handlePercent = () => {
        try {
            setInput((prev) => `${eval(prev) / 100}`);
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="calculator border p-3">
            <div className="calculator-screen mb-3">
                <input
                    type="text"
                    value={result !== '' ? result : input}
                    // readOnly
                    className="form-control"
                    style={{ textAlign: 'right', fontSize: '1.5rem' }}
                />
            </div>
            <div className="calculator-buttons">
                {/* First Row */}
                <div className="row mb-2">
                    <div className="col">
                        <button className="btn btn-danger w-100" onClick={handleClear}>AC</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-danger w-100" onClick={handleDelete}>DEL</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={handlePercent}>%</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={() => handleClick('/')}>/</button>
                    </div>
                </div>

                {/* Second Row */}
                <div className="row mb-2">
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={() => handleClick('7')}>7</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={() => handleClick('8')}>8</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={() => handleClick('9')}>9</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={() => handleClick('*')}>*</button>
                    </div>
                </div>

                {/* Third Row */}
                <div className="row mb-2">
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={() => handleClick('4')}>4</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={() => handleClick('5')}>5</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={() => handleClick('6')}>6</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={() => handleClick('-')}>-</button>
                    </div>
                </div>

                {/* Fourth Row */}
                <div className="row mb-2">
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={() => handleClick('1')}>1</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={() => handleClick('2')}>2</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={() => handleClick('3')}>3</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={() => handleClick('+')}>+</button>
                    </div>
                </div>

                {/* Fifth Row */}
                <div className="row">
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={() => handleClick('0')}>0</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-light w-100" onClick={() => handleClick('.')}>.</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-success w-100" onClick={handleCalculate}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NormalCalculator;
