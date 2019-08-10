import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import request from 'superagent';

export default class PlaceItem extends Component {
  state = {
    name: '',
    sky: '',
    wind: '',
    temp: '',
    pressure: '',
    humidity: '',
    icon: ''
  };

  static propTypes = {
    place: PropTypes.object.isRequired,
    units: PropTypes.string.isRequired,
    getForecast: PropTypes.func.isRequired
  };

  async componentDidMount() {
    const { place, units } = this.props;
    request
      .get('https://community-open-weather-map.p.rapidapi.com/weather')
      .query({ lat: place.latitude })
      .query({ lon: place.longitude })
      .query({ units: units })
      .set('x-rapidapi-host', 'community-open-weather-map.p.rapidapi.com')
      .set('x-rapidapi-key', process.env.REACT_APP_RAPIDAPI_KEY)
      .set('Accept', 'application/json')
      .then(res => {
        this.setState({
          name: res.body.name,
          temp: res.body.main.temp.toFixed(),
          wind: res.body.wind.speed,
          pressure: res.body.main.pressure,
          humidity: res.body.main.humidity,
          weather: res.body.weather[0].main,
          sky: res.body.weather[0].description,
          icon: res.body.weather[0].icon
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { place, getForecast } = this.props,
      { temp, sky, icon } = this.state;
    // {const un = units === 'metric' ? '°C' : '°F'}
    return (
      <div className='card text-center'>
        <h1>{temp}°</h1>
        <img
          alt={sky}
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          width='100'
        />
        <h3>
          {place.city}, {place.regionCode}
        </h3>
        <h4>{place.country}</h4>
        <div>
          <Link
            to={`/weather-app/current/${this.state.name}`}
            className='btn btn-dark btn-sm my-1'
            onClick={() =>
              getForecast(place.latitude, place.longitude, this.state)
            }
          >
            Select
          </Link>
        </div>
      </div>
    );
  }
}
