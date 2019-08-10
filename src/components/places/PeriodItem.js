import React from 'react';
import PropTypes from 'prop-types';

const PeriodItem = ({ period }) => {
  const { dt_txt, main, wind, weather } = period,
    time = new Date(dt_txt).toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit'
    });
  return (
    <div className='card text-center'>
      <ul>
        <li>
          <h3>{time}</h3>
        </li>
        <li>
          <strong>{main.temp.toFixed()}°</strong>
        </li>
        <li>
          <strong>{weather[0].main}</strong>
        </li>
        <li>
          <img
            alt={weather[0].description}
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            width='100'
          />
        </li>
        {/* <li>Precipitation: {rain}%</li> */}
        <li>Humidity: {main.humidity}%</li>
        <li>Wind: {wind.speed.toFixed(1)} m/s</li>
        <li>Pressure: {main.pressure.toFixed()} mbar</li>
      </ul>
    </div>
  );
};

PeriodItem.propTypes = {
  period: PropTypes.object.isRequired
};

export default PeriodItem;
