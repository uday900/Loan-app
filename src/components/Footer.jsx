import React from 'react';

function Footer() {
    return (
        <footer className="footer mt-5 py-3 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>
                            Financial Cal Hub provides powerful tools and calculators to help you make informed financial decisions. Whether you're planning investments, loans, or savings, we've got you covered with accurate and easy-to-use calculators.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Home</a></li>
                            <li><a href="/interestgeneratecalculator" className="text-white">Interest Generator</a></li>
                            <li><a href="/discountcalculator" className="text-white">Discount Calculator</a></li>
                            <li><a href="/contact" className="text-white">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>
                            Email: <a href="mailto:info@financialcalhub.com" className="text-white">info@financialcalhub.com</a><br />
                            Address: 123 Financial St, Suite 456, Moneyville, FM 78910
                        </p>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p className="mb-0">&copy; {new Date().getFullYear()} Financial Cal Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
