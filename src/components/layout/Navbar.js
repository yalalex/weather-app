import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ units, lang, switchLang, switchUnits }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fas fa-cloud-sun-rain' /> Weather app
      </h1>
      <ul>
        <li>
          <Link to='/weather-app'>{lang === 'en' ? 'Search' : 'Поиск'}</Link>
        </li>
        <li>
          <Link to='/weather-app/about'>
            {lang === 'en' ? 'About' : 'Инфо'}
          </Link>
        </li>
        <li>
          <div className='switch'>
            <div className='select'>
              {units === 'metric' ? '°C' : '°F'}
              <i className='fa fa-angle-down' />
            </div>
            <ul className='select-drop'>
              <li>
                <Link to='#' onClick={switchUnits}>
                  {units === 'metric' ? '°F' : '°C'}
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className='switch'>
            <div className='select'>
              {lang === 'en' ? 'EN' : 'RU'}
              <i className='fa fa-angle-down' />
            </div>
            <ul className='select-drop'>
              <li>
                <Link to='#' onClick={switchLang}>
                  {lang === 'en' ? 'RU' : 'EN'}
                </Link>
              </li>
            </ul>
          </div>
          {/* <Link to='#' onClick={switchLang}>
            {lang === 'en' ? 'RU' : 'EN'}
          </Link> */}
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  units: PropTypes.string.isRequired,
  switchUnits: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired
};

export default Navbar;
