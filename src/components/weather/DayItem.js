import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const DayItem = ({ day, lang }) => {
  const { ts, max_temp, min_temp, wind_spd, pop, pres, rh, weather } = day;
  return (
    <div className='card text-center'>
      <ul>
        <li>
          <h3>
            <Moment locale={lang} unix format='ddd Do'>
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
        <li>
          {lang === 'en' ? 'Precipitation: ' : 'Осадки: '}
          {pop}%
        </li>
        <li>
          {lang === 'en' ? 'Humidity: ' : 'Влажность: '}
          {rh}%
        </li>
        <li>
          {lang === 'en' ? 'Wind: ' : 'Ветер: '}
          {wind_spd.toFixed(1)} {lang === 'en' ? 'm/s: ' : 'м/с'}
        </li>
        <li>
          {lang === 'en' ? 'Pressure: ' : 'Давление: '}
          {pres.toFixed()} {lang === 'en' ? 'mbar: ' : 'мбар'}
        </li>
      </ul>
    </div>
  );
};

DayItem.propTypes = {
  day: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired
};

export default DayItem;
