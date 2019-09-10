import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const PeriodItem = ({ period, offset, lang }) => {
  const { dt, main, weather } = period,
    time = dt + offset;
  return (
    <div className='card text-center'>
      <ul>
        <li>
          <h3>
            <Moment locale={lang} unix format='ddd LT'>
              {time}
            </Moment>
          </h3>
        </li>
        <li>
          <img
            alt={weather[0].description}
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            style={{ width: '100px' }}
          />
        </li>
        <li>
          <h1>{main.temp.toFixed()}°</h1>
        </li>
      </ul>
    </div>
  );
};

PeriodItem.propTypes = {
  period: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired
};

export default PeriodItem;
