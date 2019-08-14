import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const PeriodItem = ({ period, offset }) => {
  const { dt, main, wind, weather } = period,
    time = dt + offset;
  return (
    <div className='card text-center'>
      <ul>
        <li>
          <h3>
            <Moment unix format='LT'>
              {time}
            </Moment>
          </h3>
        </li>
        <li>
          <img
            alt={weather[0].description}
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            width='100'
          />
        </li>
        <li>
          <h2>{main.temp.toFixed()}°</h2>
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
