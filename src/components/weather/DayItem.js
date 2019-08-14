import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const DayItem = ({ day }) => {
  const { ts, max_temp, min_temp, wind_spd, pop, pres, rh, weather } = day;
  return (
    <div className='card text-center'>
      <ul>
        <li>
          <h3>
            <Moment unix format='ddd Do'>
              {ts}
            </Moment>
          </h3>
        </li>
        <li>
          <img
            alt={weather.description}
            src={`https://www.weatherbit.io/static/img/icons/${
              weather.icon
            }.png`}
            width='70'
          />
        </li>
        <li>
          <h2>
            {max_temp.toFixed()}°/{min_temp.toFixed()}°
          </h2>
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
