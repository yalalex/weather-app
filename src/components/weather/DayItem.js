import React, { Fragment } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const DayItem = ({ day, lang }) => {
  const { ts, max_temp, min_temp, wind_spd, pop, pres, rh, weather } = day;
  return (
    <Fragment>
      <div className='weatheritem'>
        <h2>
          <Moment locale={lang} unix format='ddd Do'>
            {ts}
          </Moment>
        </h2>
        <img
          alt={weather.description}
          src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`}
          style={{ width: '70px' }}
        />
        <h2>
          {max_temp.toFixed()}°/{min_temp.toFixed()}°
        </h2>
        <div className='day'>
          <div>
            <ul>
              <li>
                <i className='fas fa-umbrella' />
                {pop}%
              </li>
              <li>
                <i className='fas fa-water' />
                {rh}%
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className='fas fa-wind' />
                {wind_spd.toFixed(1)}
                {lang === 'en' ? 'm/s' : 'м/с'}
              </li>
              <li>
                <i className='fas fa-square' />
                {pres.toFixed()}
                {lang === 'en' ? 'mb' : 'мб'}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

DayItem.propTypes = {
  day: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired
};

export default DayItem;
