import React from 'react';
import PropTypes from 'prop-types';

const DayItem = ({ day }) => {
  const {
      valid_date,
      max_temp,
      min_temp,
      wind_spd,
      pop,
      pres,
      rh,
      weather
    } = day,
    date = new Date(valid_date).toLocaleDateString(navigator.language, {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  return (
    <div className='card text-center'>
      <ul>
        <li>
          <strong>{date}</strong>
        </li>
        <li>
          <img alt={weather.description} src={weather.icon} />
        </li>
        <li>
          {max_temp.toFixed()}°/{min_temp.toFixed()}°
        </li>
        <li>Precipitation: {pop}%</li>
        <li>Humidity: {rh}%</li>
        <li>Wind: {wind_spd.toFixed(1)} m/s</li>
        <li>Pressure: {pres.toFixed()} mbar</li>
      </ul>
    </div>
  );
};

DayItem.propTypes = {
  day: PropTypes.object.isRequired
};

export default DayItem;
