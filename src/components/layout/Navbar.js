import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ units, lang, switchLang, switchUnits }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>Weather app</h1>
      <ul>
        <li>
          <Link to='/weather-app'>{lang === 'en' ? 'Home' : 'На главную'}</Link>
        </li>
        <li>
          <Link to='/weather-app/about'>
            {lang === 'en' ? 'About' : 'О нас'}
          </Link>
        </li>
        <li>
          <Link to='#' onClick={switchUnits}>
            {units === 'metric' ? '→°F' : '→°C'}
          </Link>
        </li>
        <li>
          <Link to='#' onClick={switchLang}>
            {lang === 'en' ? '→RU' : '→EN'}
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
