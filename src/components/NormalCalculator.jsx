import React, { useState } from 'react';
import './NormalCalculator.css'
import Draggable from 'react-draggable';
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

    const handleCalculate = (event) => {
        event.preventDefault()
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
        <Draggable>
            <div className="calculator border p-3"
                style={{cursor : "move",
                    zIndex : "100"
                }}
            >
           <form action="" onSubmit={handleCalculate}>
           <div className="calculator-screen mb-3">
                <input
                    type="text"
                    value={result !== '' ? result : input}
                    onChange={(e)=> setInput(e.target.value)}
                    // onKeyDown={handleKeyDown}
                    placeholder="0"
                    className="form-control"
                    style={{ textAlign: 'right', fontSize: '1.5rem' }}
                />
            </div>
            <table className="table table-borderless">
                <tbody>
                    {/* First Row */}
                    <tr>
                        <td>
                            <button className="btn btn-danger w-100" onClick={handleClear}>AC</button>
                        </td>
                        <td>
                            <button className="btn btn-danger w-100" onClick={handleDelete}>DEL</button>
                        </td>
                        <td>
                            <button className="btn btn-light w-100" onClick={handlePercent}>%</button>
                        </td>
                        <td>
                            <button className="btn btn-light w-100" onClick={() => handleClick('/')}>/</button>
                        </td>
                    </tr>

                    {/* Second Row */}
                    <tr>
                        <td>
                            <button className="btn btn-light w-100" onClick={() => handleClick('7')}>7</button>
                        </td>
                        <td>
                            <button className="btn btn-light w-100" onClick={() => handleClick('8')}>8</button>
                        </td>
                        <td>
                            <button className="btn btn-light w-100" onClick={() => handleClick('9')}>9</button>
                        </td>
                        <td>
                            <button className="btn btn-light w-100" onClick={() => handleClick('*')}>*</button>
                        </td>
                    </tr>

                    {/* Third Row */}
                    <tr>
                        <td>
                            <button className="btn btn-light w-100" onClick={() => handleClick('4')}>4</button>
                        </td>
                        <td>
                            <button className="btn btn-light w-100" onClick={() => handleClick('5')}>5</button>
                        </td>
                        <td>
                            <button className="btn btn-light w-100" onClick={() => handleClick('6')}>6</button>
                        </td>
                        <td>
                            <button className="btn btn-light w-100" onClick={() => handleClick('-')}>-</button>
                        </td>
                    </tr>

                    {/* Fourth Row */}
                    <tr>
                        <td>
                            <button className="btn btn-light w-100" onClick={() => handleClick('1')}>1</button>
                        </td>
                        <td>
                            <button className="btn btn-light w-100" onClick={() => handleClick('2')}>2</button>
                        </td>
                        <td>
                            <button className="btn btn-light w-100" onClick={() => handleClick('3')}>3</button>
                        </td>
                        <td>
                            <button className="btn btn-light w-100" onClick={() => handleClick('+')}>+</button>
                        </td>
                    </tr>

                    {/* Fifth Row */}
                    <tr>
                        <td colSpan="2">
                            <button className="btn btn-light w-100" onClick={() => handleClick('0')}>0</button>
                        </td>
                        <td>
                            <button className="btn btn-light w-100" onClick={() => handleClick('.')}>.</button>
                        </td>
                        <td rowSpan="2">
                            <button className="btn btn-success w-100 h-100"
                            type='submit' >=</button>
                        </td>
                    </tr>
                </tbody>
            </table>
           </form>
        </div>
        </Draggable>
    );
};

export default NormalCalculator;
