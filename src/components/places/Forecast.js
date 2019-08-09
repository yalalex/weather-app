import React, { Component, Fragment } from 'react';
import PeriodItem from './PeriodItem';
import DayItem from './DayItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Forecast extends Component {
  state = {
    btn: '16-day forecast',
    target: 'forecast'
  };

  static propTypes = {
    forecastToday: PropTypes.array.isRequired,
    forecast16: PropTypes.array.isRequired,
    current: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
  };

  render() {
    const { current, forecastToday, forecast16, loading } = this.props;
    const { name, sky, wind, temp, pressure, humidity, icon } = current,
      time = new Date().toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
      });
    // if (forecastToday.length === 0) return null;
    // else
    const { btn, target } = this.state;
    if (loading) {
      return <Spinner />;
    } else
      return (
        <Router>
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
                  <li>Wind: {wind.toFixed(1)} m/s</li>
                  <li>Pressure: {pressure.toFixed()} mbar</li>
                </ul>
                <Link
                  to={`/weather-app/${target}/${name}`}
                  className='btn btn-dark btn-sm my-1'
                  onClick={() => {
                    target === 'forecast'
                      ? this.setState({ btn: 'Today', target: 'current' })
                      : this.setState({
                          btn: '16-day forecast',
                          target: 'forecast'
                        });
                  }}
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
                  <div className='grid-3'>
                    {forecastToday.map(period => (
                      <PeriodItem key={period.dt} period={period} />
                    ))}
                  </div>
                )}
              />
              <Route
                exact
                path='/weather-app/forecast/:name'
                render={props => (
                  <div className='grid-4'>
                    {forecast16.map(day => (
                      <DayItem key={day.ts} day={day} />
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
