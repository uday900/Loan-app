import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../context/contextForSearch';
import logo from '../assets/file.png'

function Navbar() {
  const { searchTerm, setSearchTerm } = useContext(context)

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Handle search logic here
        // console.log('Search:', searchTerm);
    };

    return <>
 <nav class="navbar navbar-expand-lg fixed-top bg-light navbar-light">
  <div class="container">
    <a class="navbar-brand" href="/"
      ><img
        id="logo"
        // src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
        src= ''
        alt="Logo"
        draggable="false"
        height="30"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto align-items-center">
        <li className="nav-item d-flex align-items-center">

            <form className='search-box border p-1 px-3'
            onSubmit={handleSearchSubmit}>
                <i className="fa fa-search"></i>

                <input type="text" 
                    placeholder='what are you looking at...'
                    className=' p-2 mx-2'
                    onChange={handleSearchChange}
                />
            </form>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-2" href="#!"><i class="fas fa-bell pe-2"></i>Alerts</a>
        </li>
      
        <li class="nav-item ms-3">
          <a class="btn btn-black btn-rounded" href="#!">Sign in</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
}

export default Navbar;
