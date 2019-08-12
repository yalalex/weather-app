import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ units, switchUnits, clearSearch }) => {
  const un = units === 'metric' ? '°C' : '°F';
  console.log(un);
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
          <Link to='/weather-app' onClick={switchUnits}>
            {un}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
  switchUnits: PropTypes.func.isRequired
};

export default Navbar;
