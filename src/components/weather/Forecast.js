import React, { useState, useEffect, useContext, Fragment } from 'react';
import PeriodItem from './PeriodItem';
import DayItem from './DayItem';
import Spinner from '../layout/Spinner';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import WeatherContext from '../../context/weather/weatherContext';
import Moment from 'react-moment';

const Forecast = () => {
  const weatherContext = useContext(WeatherContext);

  const {
    current,
    forecastToday,
    forecast16,
    getWeather,
    loading,
    units,
    lang
  } = weatherContext;

  const [btn, setBtn] = useState('');
  const [target, setTarget] = useState('');

  useEffect(() => {
    if (lang === 'en') {
      setBtn('16-day forecast');
      setTarget('16-day');
    } else {
      setBtn('Прогноз на 16 дней');
      setTarget('16-day');
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    switchButton();
    //eslint-disable-next-line
  }, [lang, target]);

  useEffect(() => {
    getWeather();
    //eslint-disable-next-line
  }, [units]);

  const switchTarget = target => {
    if (target === '16-day') {
      setTarget('current');
    } else {
      setTarget('16-day');
    }
  };

  const switchButton = () => {
    target === '16-day'
      ? lang === 'en'
        ? setBtn('16-day forecast')
        : setBtn('Прогноз на 16 дней')
      : lang === 'en'
      ? setBtn('30-hr forecast')
      : setBtn('Прогноз на 30 часов');
  };

  const {
      name,
      timezone,
      dt,
      weather,
      sky,
      wind,
      temp,
      pressure,
      humidity,
      icon
    } = current,
    offset = new Date().getTimezoneOffset() * 60 + timezone,
    time = dt + offset;
  if (forecastToday.length === 0) return null;
  else if (loading) {
    return <Spinner />;
  } else
    return (
      <Router>
        <Fragment>
          <div className='card grid-2'>
            <div className='card grid-2'>
              <div className='all-center'>
                <img
                  alt={sky}
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  style={{ width: '150px' }}
                />
              </div>
              <div style={{ margin: 'auto 0' }}>
                <h1>{temp}°</h1>
                <h2>{name}</h2>
                <h3>
                  <Moment locale={lang} unix format='LT'>
                    {time}
                  </Moment>
                </h3>
              </div>
            </div>
            <div style={{ margin: 'auto 0' }}>
              <ul>
                <li>
                  <h3>{lang === 'en' ? weather : 'Текущие условия:'}</h3>
                </li>
                <li>
                  {lang === 'en' ? 'Humidity: ' : 'Влажность: '}
                  {humidity}%
                </li>
                <li>
                  {lang === 'en' ? 'Wind: ' : 'Ветер: '}
                  {wind.toFixed(1)} {lang === 'en' ? 'm/s' : 'м/с'}
                </li>
                <li>
                  {lang === 'en' ? 'Pressure: ' : 'Давление: '}
                  {pressure.toFixed()} {lang === 'en' ? 'mbar' : 'мбар'}
                </li>
              </ul>
              <Link
                to={`/weather-app/${target}/${name}`}
                className='btn btn-dark btn-sm my-1'
                onClick={() => switchTarget(target)}
              >
                {btn}
              </Link>
            </div>
          </div>
          <Switch>
            <Route
              exact
              path='/weather-app/current/:name'
              render={props => (
                <div className='flex'>
                  {forecastToday.map(period => (
                    <PeriodItem
                      key={period.dt}
                      period={period}
                      offset={offset}
                      lang={lang}
                    />
                  ))}
                </div>
              )}
            />
            <Route
              exact
              path='/weather-app/16-day/:name'
              render={props => (
                <div className='grid-4'>
                  {forecast16.map(day => (
                    <DayItem key={day.ts} day={day} lang={lang} />
                  ))}
                </div>
              )}
            />
          </Switch>
        </Fragment>
      </Router>
    );
};

export default Forecast;
