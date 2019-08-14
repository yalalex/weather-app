import React, { Fragment, Component } from 'react';
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
// import Moment from 'react-moment';

export default class App extends Component {
  state = {
    units: 'metric',
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
      .set('x-rapidapi-host', 'wft-geo-db.p.rapidapi.com')
      .set('x-rapidapi-key', process.env.REACT_APP_RAPIDAPI_KEY)
      .set('Accept', 'application/json')
      .then(res => {
        this.setState({ places: res.body.data, loading: false });
        this.getPlaceWeather(this.state.places);
        console.log(this.state.places);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //Get weather for search request
  getPlaceWeather = places => {
    const { units } = this.state;
    places.map(async place => {
      let { latitude, longitude } = place;
      let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${
          process.env.REACT_APP_OPENWEATHER_KEY
        }`
      );
      Object.assign(place, {
        temp: res.data.main.temp.toFixed(),
        sky: res.data.weather[0].description,
        icon: res.data.weather[0].icon
      });
    });
  };

  //Clear search
  clearSearch = () => this.setState({ places: [], loading: false });

  //Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  //Get current weather and 24-hr/16-day forecast
  getForecast = async (name, lat, lon) => {
    const { units } = this.state;
    this.setState({ loading: true });
    const respo = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&APPID=${
        process.env.REACT_APP_OPENWEATHER_KEY
      }`
    );
    this.setState({
      current: {
        name,
        timezone: respo.data.timezone,
        dt: respo.data.dt,
        temp: respo.data.main.temp.toFixed(),
        wind: respo.data.wind.speed,
        pressure: respo.data.main.pressure,
        humidity: respo.data.main.humidity,
        weather: respo.data.weather[0].main,
        sky: respo.data.weather[0].description,
        icon: respo.data.weather[0].icon
      }
    });
    const resp = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&APPID=${
        process.env.REACT_APP_OPENWEATHER_KEY
      }`
    );
    const today = resp.data.list.slice(0, 9);
    this.setState({
      forecastToday: today
    });
    const un = units === 'metric' ? 'M' : 'I';
    const res = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&units=${un}&key=${
        process.env.REACT_APP_WEATHERBIT_KEY
      }`
    );
    this.setState({
      forecast16: res.data.data,
      loading: false,
      place: { name, lat, lon }
    });
    console.log(this.state.forecastToday);
    console.log(this.state.forecast16);
    console.log(this.state.current);
    console.log(this.state.place);
  };

  // Switch units
  switchUnits = () => {
    this.state.units === 'metric'
      ? this.switcher('imperial')
      : this.switcher('metric');
  };

  // Update state after units switch
  switcher = units => {
    const { place } = this.state;
    if (place !== null) {
      this.setState(
        () => {
          return { units };
        },
        () => this.getForecast(place.name, place.lat, place.lon)
      );
      this.clearSearch();
    } else {
      this.setState({ units });
      this.clearSearch();
    }
  };

  render() {
    const {
      places,
      // place,
      loading,
      alert,
      units,
      current,
      forecastToday,
      forecast16,
      loc
    } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar switchUnits={this.switchUnits} units={units} />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/weather-app'
                render={props => (
                  <Fragment>
                    <Search
                      searchPlaces={this.searchPlaces}
                      clearSearch={this.clearSearch}
                      showClear={places.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Places
                      places={places}
                      loading={loading}
                      getForecast={this.getForecast}
                      units={units}
                    />
                  </Fragment>
                )}
              />
              <Route
                exact
                path='/weather-app/current/:name'
                render={props => (
                  <Forecast
                    current={current}
                    forecastToday={forecastToday}
                    forecast16={forecast16}
                    loading={loading}
                    loc={loc}
                  />
                )}
              />
              <Route exact path='/weather-app/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
