import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PlaceItem = ({ place, getForecast }) => {
  // state = {
  //   name: '',
  //   sky: '',
  //   temp: '',
  //   icon: ''
  // };

  // async componentDidMount() {
  //   const { place, units } = this.props;
  //   const res = await axios.get(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${
  //       place.latitude
  //     }&lon=${place.longitude}&units=${units}&APPID=${
  //       process.env.REACT_APP_OPENWEATHER_KEY
  //     }`
  //   );
  //   this.setState({
  //     name: res.data.name,
  //     temp: res.data.main.temp.toFixed(),
  //     sky: res.data.weather[0].description,
  //     icon: res.data.weather[0].icon
  //   });
  //   console.log(this.state);
  // }

  console.log(place);
  const {
    city,
    regionCode,
    country,
    latitude,
    longitude,
    temp,
    sky,
    icon
  } = place;
  return (
    <div className='card text-center'>
      <h1>{temp}°</h1>
      <img
        alt={sky}
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        width='100'
      />
      <h3>
        {city}, {regionCode}
      </h3>
      <h4>{country}</h4>
      <div>
        <Link
          to={`/weather-app/current/${city}`}
          className='btn btn-dark btn-sm my-1'
          onClick={() => getForecast(city, latitude, longitude)}
        >
          Select
        </Link>
      </div>
    </div>
  );
};

PlaceItem.propTypes = {
  place: PropTypes.object.isRequired,
  getForecast: PropTypes.func.isRequired
};

export default PlaceItem;
