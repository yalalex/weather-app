import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/places/Search';
import Forecast from './components/weather/Forecast';
import Places from './components/places/Places';
import About from './components/pages/About';
import './App.css';
import request from 'superagent';
import axios from 'axios';

export default class App extends Component {
  state = {
    units: 'metric',
    lang: 'en',
    loading: false,
    alert: null,
    places: [],
    place: null,
    current: {},
    forecastToday: [],
    forecast16: []
  };

  //Search places to get weather for
  searchPlaces = async text => {
    this.setState({ loading: true });
    request
      .get('https://wft-geo-db.p.rapidapi.com/v1/geo/cities')
      .query({ limit: '10' })
      .query({ namePrefix: text })
      .query({ sort: '-population' })
      .query({ languageCode: this.state.lang })
      .set('x-rapidapi-host', 'wft-geo-db.p.rapidapi.com')
      .set('x-rapidapi-key', process.env.REACT_APP_RAPIDAPI_KEY)
      .set('Accept', 'application/json')
      .then(res => {
        if (res.body.data.length === 0) {
          const alert =
            this.state.lang === 'en'
              ? 'No cities found. Check the spelling and try again'
              : 'Ничего не найдено. Проверьте правильность написания и попробуйте снова';
          this.setAlert(alert, 'dark');
          this.setState({ loading: false });
        } else {
          this.setState({ places: res.body.data, loading: false });
        }
        console.log(this.state.places);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //Clear search
  clearSearch = () => this.setState({ places: [], loading: false });

  //Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  //Select place in search and get weather for it
  selectPlace = place => {
    const { city, latitude, longitude } = place;
    this.setState(
      () => {
        return { place: { city, latitude, longitude } };
      },
      () => this.getWeather()
    );
  };

  //Get current weather and 30-hr/16-day forecast
  getWeather = async () => {
    const { units, place } = this.state,
      { city, latitude, longitude } = place;
    this.setState({ loading: true });
    const respo = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${
        process.env.REACT_APP_OPENWEATHER_KEY
      }`
    );
    const { timezone, dt, main, wind, weather, sys } = respo.data,
      { temp, pressure, humidity } = main,
      { sunrise, sunset } = sys;
    this.setState({
      current: {
        name: city,
        timezone,
        dt,
        temp: temp.toFixed(),
        wind: wind.speed,
        pressure,
        humidity,
        weather: weather[0].main,
        sky: weather[0].description,
        icon: weather[0].icon,
        sunrise,
        sunset
      }
    });
    const resp = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${
        process.env.REACT_APP_OPENWEATHER_KEY
      }`
    );
    const today = resp.data.list.slice(0, 10);
    today.map(async period => {
      //Change icons according to local time
      if (sunrise + 86400 < period.dt && period.dt < sunset + 86400) {
        period.weather[0].icon = period.weather[0].icon.slice(0, -1) + 'd';
      } else if (sunset < period.dt && period.dt < sunrise + 86400) {
        period.weather[0].icon = period.weather[0].icon.slice(0, -1) + 'n';
      } else if (sunrise < period.dt && period.dt < sunset) {
        period.weather[0].icon = period.weather[0].icon.slice(0, -1) + 'd';
      } else if (sunset - 86400 < period.dt && period.dt < sunrise) {
        period.weather[0].icon = period.weather[0].icon.slice(0, -1) + 'n';
      }
    });
    this.setState({
      forecastToday: today
    });
    const un = units === 'metric' ? 'M' : 'I';
    const res = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&units=${un}&key=${
        process.env.REACT_APP_WEATHERBIT_KEY
      }`
    );
    this.setState({
      forecast16: res.data.data,
      loading: false
    });
    console.log(this.state.forecastToday);
    console.log(this.state.forecast16);
    console.log(this.state.current);
    console.log(this.state.place);
  };

  //Switch language
  switchLang = () => {
    this.state.lang === 'en'
      ? this.setState({ lang: 'ru' })
      : this.setState({ lang: 'en' });
  };

  // Switch units
  switchUnits = () => {
    this.state.units === 'metric'
      ? this.setState({ units: 'imperial' })
      : this.setState({ units: 'metric' });
  };

  render() {
    const {
      places,
      loading,
      alert,
      units,
      lang,
      current,
      forecastToday,
      forecast16
    } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar
            switchUnits={this.switchUnits}
            switchLang={this.switchLang}
            units={units}
            lang={lang}
          />
          <div className='container'>
            <Alert alert={alert} lang={lang} />
            <Route
              path='/weather-app'
              render={props => (
                <Search
                  {...props}
                  searchPlaces={this.searchPlaces}
                  clearSearch={this.clearSearch}
                  showClear={
                    places.length > 0 &&
                    window.location.pathname === '/weather-app'
                      ? true
                      : false
                  }
                  setAlert={this.setAlert}
                  lang={lang}
                />
              )}
            />
            <Switch>
              <Route
                exact
                path='/weather-app'
                render={props => (
                  <Places
                    selectPlace={this.selectPlace}
                    units={units}
                    places={places}
                    loading={loading}
                    lang={lang}
                  />
                )}
              />
              <Route
                exact
                path='/weather-app/current/:name'
                render={props => (
                  <Forecast
                    {...props}
                    getWeather={this.getWeather}
                    current={current}
                    forecastToday={forecastToday}
                    forecast16={forecast16}
                    loading={loading}
                    lang={lang}
                    units={units}
                  />
                )}
              />
              <Route
                exact
                path='/weather-app/about'
                render={props => <About lang={lang} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
