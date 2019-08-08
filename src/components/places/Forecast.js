import React, { Fragment } from 'react';
import DayItem from './DayItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Forecast = ({ current, forecast, loading }) => {
  const { name, sky, wind, temp, pressure, humidity, icon } = current,
    time = new Date().toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit'
    });
  if (forecast.length === 0) return null;
  else if (loading) {
    return <Spinner />;
  } else
    return (
      <Fragment>
        <div className='card grid-2'>
          <div className='card grid-2'>
            <div>
              <img alt={sky} src={icon} />
            </div>
            <div>
              <h1>{temp}°</h1>
              <h2>{name}</h2>
              <h3>{time}</h3>
            </div>
          </div>
          <div style={{ padding: '0.7rem 0' }}>
            <ul>
              <li>{sky}</li>
              <li>Humidity: {humidity}%</li>
              <li>Wind: {wind} m/s</li>
              <li>Pressure: {pressure} mbar</li>
            </ul>
          </div>
        </div>
        <div className='grid-4'>
          {forecast.map(day => (
            <DayItem key={day.ts} day={day} />
          ))}
        </div>
      </Fragment>
    );
};

Forecast.propTypes = {
  forecast: PropTypes.array.isRequired,
  current: PropTypes.object.isRequired
};

export default Forecast;
