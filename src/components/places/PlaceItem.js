import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PlaceItem = ({ place, getForecast, lang }) => {
  const {
    city,
    regionCode,
    country,
    latitude,
    longitude,
    temp,
    sky,
    icon
  } = place;
  return (
    <div className='card text-center'>
      <h1>{temp}°</h1>
      <img
        alt={sky}
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        width='100'
      />
      <h3>
        {city}, {regionCode}
      </h3>
      <h4>{country}</h4>
      <div>
        <Link
          to={`/weather-app/current/${city}`}
          className='btn btn-dark btn-sm my-1'
          onClick={() => getForecast(city, latitude, longitude)}
        >
          {lang === 'en' ? 'Select' : 'Выбрать'}
        </Link>
      </div>
    </div>
  );
};

PlaceItem.propTypes = {
  place: PropTypes.object.isRequired,
  getForecast: PropTypes.func.isRequired
};

export default PlaceItem;
