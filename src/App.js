import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/places/Search';
import Forecast from './components/places/Forecast';
import Places from './components/places/Places';
import About from './components/pages/About';
import './App.css';
import request from 'superagent';
import axios from 'axios';

export default class App extends Component {
  state = {
    units: 'metric',
    loading: false,
    alert: null,
    places: [],
    current: {},
    forecast: []
  };

  //Search places to get weather for
  searchPlaces = text => {
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
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  //Get current weather details and 16-day forecast
  getForecast = async (lat, lon, current) => {
    this.setState({ loading: true });
    const un = this.state.units === 'metric' ? 'M' : 'I';
    const res = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&units=${un}&key=${
        process.env.REACT_APP_WEATHERBIT_KEY
      }`
    );
    this.setState({
      forecast: res.data.data,
      current: current,
      loading: false
    });
    console.log(this.state.forecast);
  };

  //Switch C<->F
  switchUnits = units => {
    units === 'I'
      ? this.setState({ units: 'imperial' })
      : this.setState({ units: 'metric' });
  };

  render() {
    const { places, loading, alert, units, current, forecast } = this.state;
    console.log(this.state.forecast);
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
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
                path='/forecast/:name'
                render={props => (
                  <Forecast
                    {...props}
                    current={current}
                    forecast={forecast}
                    loading={loading}
                  />
                )}
              />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
