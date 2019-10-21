import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import WeatherContext from '../../context/weather/weatherContext';

const Navbar = () => {
  const weatherContext = useContext(WeatherContext);
  const { units, lang, switchLang, switchUnits } = weatherContext;
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
              <li onClick={() => switchUnits(units)}>
                {units === 'metric' ? '°F' : '°C'}
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
              <li onClick={() => switchLang(lang)}>
                {lang === 'en' ? 'RU' : 'EN'}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
