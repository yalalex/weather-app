import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const PlaceItem = ({ selectPlace, place, lang, units }) => {
  const [temp, setTemp] = useState('');
  const [sky, setSky] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    getPlaceWeather();
    //eslint-disable-next-line
  }, [units]);

  const getPlaceWeather = async () => {
    const { latitude, longitude } = place;
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${
        process.env.REACT_APP_OPENWEATHER_KEY
      }`
    );
    const { main, weather } = res.data;
    setTemp(main.temp.toFixed());
    setSky(weather[0].description);
    setIcon(weather[0].icon);
  };

  const { city, regionCode, country } = place;
  return (
    <div className='card text-center'>
      <h1>{temp}°</h1>
      <img
        alt={sky}
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        style={{ width: '100px' }}
      />
      <h3>
        {city}, {regionCode}
      </h3>
      <h4>{country}</h4>
      <div>
        <Link
          to={`/weather-app/current/${city}`}
          className='btn btn-dark btn-sm my-1'
          onClick={() => selectPlace(place)}
        >
          {lang === 'en' ? 'Select' : 'Выбрать'}
        </Link>
      </div>
    </div>
  );
};

PlaceItem.propTypes = {
  place: PropTypes.object.isRequired,
  selectPlace: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired
};

export default PlaceItem;
