import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WeatherContext from '../../context/weather/weatherContext';
import axios from 'axios';
import PropTypes from 'prop-types';

const PlaceItem = ({ place }) => {
  const weatherContext = useContext(WeatherContext);
  const { lang, units, selectPlace } = weatherContext;

  const [temp, setTemp] = useState('');
  const [sky, setSky] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    getPlaceWeather();
    //eslint-disable-next-line
  }, [units]);

  const getPlaceWeather = async () => {
    const { latitude, longitude } = place;
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${process.env.REACT_APP_OPENWEATHER_KEY}`
    );
    const { main, weather } = res.data;
    setTemp(main.temp.toFixed());
    setSky(weather[0].description);
    setIcon(weather[0].icon);
  };

  const { city, regionCode, country } = place;
  return (
    <div className='placeitem'>
      <h1>{temp}°</h1>

      <img
        alt={sky}
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        style={{ width: '100px' }}
      />
      <div className='all-center'>
        <h3>
          {city}, {regionCode}
        </h3>
        {window.innerWidth > 640 && <h4>{country}</h4>}
        <Link
          to={`/weather-app/current/${city}`}
          className='btn btn-dark btn-sm my-1'
          onClick={() => selectPlace(place)}
        >
          {lang === 'en' ? 'Select' : 'Выбрать'}
        </Link>
      </div>
      {/* <div>
        
      </div> */}
    </div>
  );
};

// const { city, regionCode, country } = place;
// return (
//   <Link
//     to={`/weather-app/current/${city}`}
//     // className='btn btn-dark btn-sm my-1'
//     onClick={() => selectPlace(place)}
//   >
//     <div className='placeitem'>
//       <h1>{temp}°</h1>
//       <img
//         alt={sky}
//         src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
//         style={{ width: '100px' }}
//       />
//       <div className='all-center'>
//         <h3>
//           {city}, {regionCode}
//         </h3>
//       </div>
//       {window.innerWidth > 640 && <h4>{country}</h4>}
//     </div>
//   </Link>
// );
// };

PlaceItem.propTypes = {
  place: PropTypes.object.isRequired
};

export default PlaceItem;
