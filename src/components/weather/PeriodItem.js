import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const PeriodItem = ({ period, offset, lang }) => {
  const { dt, main, wind, weather } = period,
    time = dt + offset;
  return (
    <div className='card text-center'>
      <ul>
        <li>
          <h3>
            <Moment locale={lang} unix format='LT'>
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
        <li>
          {lang === 'en' ? 'Humidity: ' : 'Влажность: '}
          {main.humidity}%
        </li>
        <li>
          {lang === 'en' ? 'Wind: ' : 'Ветер: '}
          {wind.speed.toFixed(1)} {lang === 'en' ? 'm/s: ' : 'м/с'}
        </li>
        <li>
          {lang === 'en' ? 'Pressure: ' : 'Давление: '}
          {main.pressure.toFixed()} {lang === 'en' ? 'mbar: ' : 'мбар'}
        </li>
      </ul>
    </div>
  );
};

PeriodItem.propTypes = {
  period: PropTypes.object.isRequired
};

export default PeriodItem;
