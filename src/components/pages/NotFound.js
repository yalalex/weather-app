import React, { useContext, Fragment } from 'react';
import WeatherContext from '../../context/weather/weatherContext';

const NotFound = () => {
  const weatherContext = useContext(WeatherContext);
  return weatherContext.lang === 'en' ? (
    <Fragment>
      <h2>Not Found</h2>
      <p className='lead'>The page you are looking for does not exist...</p>
    </Fragment>
  ) : (
    <Fragment>
      <h2>Страница не найдена</h2>
      <p className='lead'>Страница, которую вы ищете, не существует...</p>
    </Fragment>
  );
};

export default NotFound;
