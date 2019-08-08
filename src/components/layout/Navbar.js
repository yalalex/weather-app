import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to='/weather-app'>Home</Link>
        </li>
        <li>
          <Link to='/weather-app/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Weather app'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
  // icon: PropTypes.string.isRequired
};

export default Navbar;
