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
    forecast15,
    getWeather,
    place,
    loading,
    units,
    lang
  } = weatherContext;

  const [btn, setBtn] = useState('');
  const [target, setTarget] = useState('');

  useEffect(() => {
    if (lang === 'en') {
      setBtn('15-day forecast');
      setTarget('15-day');
    } else {
      setBtn('Прогноз на 15 дней');
      setTarget('15-day');
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    switchButton();
    //eslint-disable-next-line
  }, [lang, target]);

  useEffect(() => {
    getWeather(place, units);
    //eslint-disable-next-line
  }, [units]);

  const switchTarget = target => {
    if (target === '15-day') {
      setTarget('current');
    } else {
      setTarget('15-day');
    }
  };

  const switchButton = () => {
    target === '15-day'
      ? lang === 'en'
        ? setBtn('15-day forecast')
        : setBtn('Прогноз на 15 дней')
      : lang === 'en'
      ? setBtn('48-hr forecast')
      : setBtn('Прогноз на 48 часов');
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
  if (loading || forecast15.length === 0) {
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
                <h1>{temp.toFixed()}°</h1>
                <h3>
                  {forecast15[0].max_temp.toFixed()}°/
                  {forecast15[0].min_temp.toFixed()}°
                </h3>
                <h2>{name}</h2>
                <h4>
                  <Moment locale={lang} unix format='LT'>
                    {time}
                  </Moment>
                </h4>
              </div>
            </div>
            <div style={{ margin: 'auto 0' }}>
              <ul>
                <li>
                  <h3>{lang === 'en' ? weather : 'Текущие условия:'}</h3>
                </li>
                <li>
                  <i className='fas fa-water' />{' '}
                  {lang === 'en' ? 'Humidity: ' : 'Влажность: '}
                  {humidity}%
                </li>
                <li>
                  <i className='fas fa-wind' />{' '}
                  {lang === 'en' ? 'Wind: ' : 'Ветер: '}
                  {wind.toFixed(1)}{' '}
                  {lang === 'en'
                    ? units === 'metric'
                      ? 'm/s'
                      : 'mph'
                    : units === 'metric'
                    ? 'м/c'
                    : 'м/ч'}
                </li>
                <li>
                  <i className='fas fa-square' />{' '}
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
                <div className='listitems'>
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
              path='/weather-app/15-day/:name'
              render={props => (
                <div className='listitems'>
                  {forecast15.map(day => (
                    <DayItem key={day.ts} day={day} lang={lang} units={units} />
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
