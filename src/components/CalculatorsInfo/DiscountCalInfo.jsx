import React from 'react';

function DiscountCalculatorInfo() {
    return (
        <div className="container mt-5">
            <h3 className="text-center">How the Discount Calculator Works</h3>
            <p className="mt-4">
                The Discount Calculator helps you determine the final price of an item after applying a discount. It takes into account the original price of the item, the discount percentage, and calculates the amount saved as well as the price you need to pay after the discount is applied.
            </p>
            <h4 className="mt-3">Key Terms Explained:</h4>
            <ul>
                <li>
                    <strong>Original Price:</strong> This is the price of the item before any discounts are applied. It's the starting point for calculating the discount.
                </li>
                <li>
                    <strong>Discount Percentage (%):</strong> The percentage of the original price that will be deducted as a discount. The discount percentage is applied to the original price to calculate the discount amount.
                </li>
                <li>
                    <strong>Discount Amount:</strong> The amount of money that will be subtracted from the original price. It is calculated by multiplying the original price by the discount percentage.
                </li>
                <li>
                    <strong>Final Price:</strong> The price you pay after the discount is applied. It is calculated by subtracting the discount amount from the original price.
                </li>
            </ul>
            <h4 className="mt-3">Example Calculation:</h4>
            <p>
                Suppose an item has an original price of ₹2,000, and a discount of 20% is applied. The calculator will determine the discount amount and subtract it from the original price to give you the final price.
            </p>
            <p>
                <strong>Calculation:</strong>
                <br />
                Discount Amount = 20% of ₹2,000 = ₹400
                <br />
                Final Price = ₹2,000 - ₹400 = ₹1,600
            </p>
            <h4 className="mt-3">Why Use a Discount Calculator?</h4>
            <p>
                A discount calculator is a handy tool to quickly determine how much you can save on a purchase and the final price you'll pay after applying a discount. It ensures that you're getting the best deal possible and helps with budgeting and financial planning.
            </p>
        </div>
    );
}

export default DiscountCalculatorInfo;
