import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="header">
    <div className="navigation">
      <h1>
        <Link className="logo" to="/"> </Link>
      </h1>
    </div>
  </nav>
);

export default Navbar;
