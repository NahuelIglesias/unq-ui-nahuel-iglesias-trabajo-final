import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar(){
    return (
        <nav className="gameNavbar">
            <Link to="/" className="navbarButton">Back to mode selection</Link>
        </nav>
    )
}

export default Navbar;