import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class PlaceItem extends Component {
  state = {
    temp: '',
    sky: '',
    icon: ''
  };

  componentDidMount() {
    this.getPlaceWeather();
  }

  componentDidUpdate(prevProps) {
    prevProps.units !== this.props.units && this.getPlaceWeather();
  }

  getPlaceWeather = async () => {
    const { latitude, longitude } = this.props.place;
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${
        this.props.units
      }&APPID=${process.env.REACT_APP_OPENWEATHER_KEY}`
    );
    const { main, weather } = res.data;
    this.setState({
      temp: main.temp.toFixed(),
      sky: weather[0].description,
      icon: weather[0].icon
    });
  };

  static propTypes = {
    place: PropTypes.object.isRequired,
    selectPlace: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired,
    units: PropTypes.string.isRequired
  };

  render() {
    const { place, lang } = this.props,
      { city, regionCode, country } = place,
      { temp, sky, icon } = this.state;
    return (
      <div className='card text-center'>
        <h1>{temp}°</h1>
        <img
          alt={sky}
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          style={{ width: '100px' }}
        />
        <h3>
          {city}, {regionCode}
        </h3>
        <h4>{country}</h4>
        <div>
          <Link
            to={`/weather-app/current/${city}`}
            className='btn btn-dark btn-sm my-1'
            onClick={() => this.props.selectPlace(place)}
          >
            {lang === 'en' ? 'Select' : 'Выбрать'}
          </Link>
        </div>
      </div>
    );
  }
}
