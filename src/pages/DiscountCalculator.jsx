import React, { useState } from 'react';
// import './DiscountCalculator.css'; // Make sure to include Bootstrap CSS

const DiscountCalculator = () => {
    const [originalPrice, setOriginalPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [discountAmount, setDiscountAmount] = useState('');
    const [finalPrice, setFinalPrice] = useState('');

    // Function to calculate the discount values based on available inputs
    const calculateDiscount = () => {
        const P = parseFloat(originalPrice);
        const Dp = parseFloat(discountPercentage);
        const Da = parseFloat(discountAmount);
        const Fp = parseFloat(finalPrice);

        // Validate input
        if (isNaN(P) && isNaN(Dp) && isNaN(Da) && isNaN(Fp)) {
            alert("Please enter at least two values.");
            return;
        }

        if (!isNaN(P) && !isNaN(Dp)) {
            // Calculate discount amount and final price from original price and discount percentage
            const discount = (P * Dp) / 100;
            setDiscountAmount(discount.toFixed(2));
            setFinalPrice((P - discount).toFixed(2));
        } else if (!isNaN(P) && !isNaN(Da)) {
            // Calculate discount percentage and final price from original price and discount amount
            const discountPercentage = (Da / P) * 100;
            setDiscountPercentage(discountPercentage.toFixed(2));
            setFinalPrice((P - Da).toFixed(2));
        } else if (!isNaN(Dp) && !isNaN(Da)) {
            // Calculate original price and final price from discount percentage and discount amount
            const originalPrice = Da / (Dp / 100);
            setOriginalPrice(originalPrice.toFixed(2));
            setFinalPrice((originalPrice - Da).toFixed(2));
        } else if (!isNaN(Dp) && !isNaN(Fp)) {
            // Calculate original price and discount amount from discount percentage and final price
            const originalPrice = Fp / (1 - (Dp / 100));
            const discountAmount = originalPrice - Fp;
            setOriginalPrice(originalPrice.toFixed(2));
            setDiscountAmount(discountAmount.toFixed(2));
        } else if (!isNaN(Fp) && !isNaN(Da)) {
            // Calculate original price and discount percentage from final price and discount amount
            const originalPrice = Fp + Da;
            const discountPercentage = (Da / originalPrice) * 100;
            setOriginalPrice(originalPrice.toFixed(2));
            setDiscountPercentage(discountPercentage.toFixed(2));
        }else if ( !isNaN(P) && !isNaN(Fp)){
            const discountPrice = P - Fp;
            const discountPercentage = (discountPrice / P) * 100;
            setDiscountPercentage(discountPercentage.toFixed(2));
            setDiscountAmount(discountPrice.toFixed(2))
        } else {
            alert("Please enter two values to perform the calculation.");
        }
    };
    const resetFields = () => {
        setOriginalPrice('');
        setDiscountAmount('');
        setDiscountPercentage('');
        setFinalPrice('');
    };
    return (
        <div className="container mt-5 pt-5">
            <h3 className="text-center mb-4">Discount Calculator</h3>

            <div className="row">
                {/* Input Fields */}
                <div className="col-md-6 mb-3">
                    <div className="card p-4">
                        <h5 className="card-title">Input Fields</h5>
                        <div className="mb-3">
                            <label className="form-label">Original Price (₹):</label>
                            <input
                                type="number"
                                className="form-control"
                                value={originalPrice}
                                onChange={(e) => setOriginalPrice(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Discount Percentage (%):</label>
                            <input
                                type="number"
                                className="form-control"
                                value={discountPercentage}
                                onChange={(e) => setDiscountPercentage(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Discount Amount (₹):</label>
                            <input
                                type="number"
                                className="form-control"
                                value={discountAmount}
                                onChange={(e) => setDiscountAmount(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Final Price (₹):</label>
                            <input
                                type="number"
                                className="form-control"
                                value={finalPrice}
                                onChange={(e) => setFinalPrice(e.target.value)}
                            />
                        </div>

                        <div className="mb-2">
                            <button className="btn btn-primary" onClick={calculateDiscount}>Calculate</button>

                            <button className="btn btn-secondary ms-2" onClick={resetFields}>Reset</button>

                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div className="col-md-6 mb-3">
                    <div className="card p-4">
                        <h5 className="card-title">Summary</h5>
                        {originalPrice || discountPercentage || discountAmount || finalPrice ? (
                            <ul className="list-group">
                                <li className="list-group-item"><strong>Original Price:</strong> ₹{originalPrice}</li>
                                <li className="list-group-item"><strong>Discount Percentage:</strong> {discountPercentage}%</li>
                                <li className="list-group-item"><strong>Discount Amount:</strong> ₹{discountAmount}</li>
                                <li className="list-group-item"><strong>Final Price:</strong> ₹{finalPrice}</li>
                            </ul>
                        ) : (
                            <p className="text-muted">Enter values to see the summary here.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountCalculator;
