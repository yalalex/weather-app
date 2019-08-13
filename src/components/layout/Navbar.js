import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ units, switchUnits }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>Weather app</h1>
      <ul>
        <li>
          <Link to='/weather-app'>Home</Link>
        </li>
        <li>
          <Link to='/weather-app/about'>About</Link>
        </li>
        <li>
          <Link to='#' onClick={switchUnits}>
            {units === 'metric' ? '→°F' : '→°C'}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  units: PropTypes.string.isRequired,
  switchUnits: PropTypes.func.isRequired
};

export default Navbar;
