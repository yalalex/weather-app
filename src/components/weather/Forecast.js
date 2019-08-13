import React, { Component, Fragment } from 'react';
import PeriodItem from './PeriodItem';
import DayItem from './DayItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Forecast extends Component {
  static propTypes = {
    forecastToday: PropTypes.array.isRequired,
    forecast16: PropTypes.array.isRequired,
    current: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    loc: PropTypes.string.isRequired
  };

  render() {
    const { current, forecastToday, forecast16, loading, loc } = this.props,
      {
        name,
        timezone,
        weather,
        sky,
        wind,
        temp,
        pressure,
        humidity,
        icon
      } = current,
      time = new Date().toLocaleTimeString(loc, {
        hour: '2-digit',
        minute: '2-digit',
        second: undefined
      });
    if (forecastToday.length === 0) return null;
    else if (loading) {
      return <Spinner />;
    } else
      return (
        <Router>
          <Fragment>
            <div className='card grid-2'>
              <div className='card grid-2' style={{ padding: '0' }}>
                <div className='all-center'>
                  <img
                    alt={sky}
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    width='150'
                  />
                </div>
                <div style={{ margin: 'auto 0' }}>
                  <h1>{temp}°</h1>
                  <h2>{name}</h2>
                  <h3>{time}</h3>
                </div>
              </div>
              <div style={{ padding: '0.7rem 0' }}>
                <ul>
                  <li>
                    <h3>{weather}</h3>
                  </li>
                  <li>Humidity: {humidity}%</li>
                  <li>Wind: {wind.toFixed(1)} m/s</li>
                  <li>Pressure: {pressure.toFixed()} mbar</li>
                </ul>
                <Link
                  to={`/weather-app/${name}/current`}
                  className='btn btn-dark btn-sm my-1'
                >
                  24-hr forecast
                </Link>
                <Link
                  to={`/weather-app/${name}/forecast`}
                  className='btn btn-dark btn-sm my-1'
                >
                  16-day forecast
                </Link>
                {/* <Link
                  to={`/weather-app/${name}/${target}`}
                  className='btn btn-dark btn-sm my-1'
                  onClick={() => {
                    target === 'forecast'
                      ? this.setState({
                          btn: '24-hr forecast',
                          target: 'current'
                        })
                      : this.setState({
                          btn: '16-day forecast',
                          target: 'forecast'
                        });
                  }}
                >
                  {btn}
                </Link> */}
              </div>
            </div>
            <Switch>
              <Route
                exact
                path='/weather-app/:name/current'
                render={props => (
                  <div className='grid-3'>
                    {forecastToday.map(period => (
                      <PeriodItem key={period.dt} period={period} loc={loc} />
                    ))}
                  </div>
                )}
              />
              <Route
                exact
                path='/weather-app/:name/forecast'
                render={props => (
                  <div className='grid-4'>
                    {forecast16.map(day => (
                      <DayItem key={day.ts} day={day} loc={loc} />
                    ))}
                  </div>
                )}
              />
            </Switch>
          </Fragment>
        </Router>
      );
  }
}
