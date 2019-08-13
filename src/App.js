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

export default class App extends Component {
  state = {
    units: 'metric',
    loc: 'en-GB',
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

  //Get current weather details and 16-day forecast
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
        name: respo.data.name,
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
  };

  // Switch units
  switchUnits = () => {
    this.state.units === 'metric'
      ? this.switcher('imperial', 'en-US')
      : this.switcher('metric', 'en-GB');
  };

  // Update state after units switch
  switcher = (units, loc) => {
    const { place } = this.state;
    if (place !== null) {
      this.setState(
        () => {
          return { units: units, loc: loc };
        },
        () => this.getForecast(place.name, place.lat, place.lon)
      );
    } else {
      this.setState({ units: units, loc: loc });
      this.clearSearch();
    }
  };

  render() {
    const {
      places,
      place,
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
            <Search
              searchPlaces={this.searchPlaces}
              clearSearch={this.clearSearch}
              showClear={places.length > 0 ? true : false}
              setAlert={this.setAlert}
            />
            <Switch>
              <Route
                exact
                path='/weather-app'
                render={props => (
                  <Fragment>
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
                path='/weather-app/:name'
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
