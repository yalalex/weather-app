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
          <strong>{time}</strong>
        </li>
        <li>
          <img alt={weather[0].description} src={weather[0].icon} />
        </li>
        <li>{main.temp.toFixed()}°</li>
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
