import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Handle search logic here
        console.log('Search:', searchTerm);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container d-flex align-items-center">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img src="/path/to/logo.png" alt="Logo" style={{ height: '40px' }} />
                </Link>

                {/* Search Bar */}
                <form className="d-flex ms-3" onSubmit={handleSearchSubmit} style={{ flexGrow: 1 }}>
                    <div className="input-group" style={{ width: '40%' }}>
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            style={{ borderRadius: '0' }}
                        />
                        <button className="btn btn-outline-secondary" type="submit" style={{ borderRadius: '0' }}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </form>

                {/* Signup Button */}
                <Link className="btn btn-primary ms-3" to="/signup">
                    Sign Up
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
