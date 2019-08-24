import React, { useContext } from 'react';
import WeatherContext from '../../context/weather/weatherContext';

const Alert = () => {
  const weatherContext = useContext(WeatherContext);

  const { alert } = weatherContext;

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type} text-center`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
