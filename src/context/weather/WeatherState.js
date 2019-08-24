import React, { useReducer } from 'react';
import request from 'superagent';
import axios from 'axios';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';
import {
  SEARCH_PLACES,
  SELECT_PLACE,
  CLEAR_SEARCH,
  SET_ALERT,
  REMOVE_ALERT,
  GET_CURRENT_WEATHER,
  GET_TODAY_WEATHER,
  GET_FORECAST,
  SWITCH_LANG,
  SWITCH_UNITS,
  SET_LOADING
} from '../types';

const WeatherState = props => {
  const initialState = {
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

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  //Search places to get weather for
  const searchPlaces = async text => {
    setLoading();
    request
      .get('https://wft-geo-db.p.rapidapi.com/v1/geo/cities')
      .query({ limit: '10' })
      .query({ namePrefix: text })
      .query({ sort: '-population' })
      .query({ languageCode: state.lang })
      .set('x-rapidapi-host', 'wft-geo-db.p.rapidapi.com')
      .set('x-rapidapi-key', process.env.REACT_APP_RAPIDAPI_KEY)
      .set('Accept', 'application/json')
      .then(res => {
        if (res.body.data.length === 0) {
          const alert =
            state.lang === 'en'
              ? 'No cities found. Check the spelling and try again'
              : 'Ничего не найдено. Проверьте правильность написания и попробуйте снова';
          setAlert(alert, 'dark');
          // dispatch({ type: SET_ALERT, payload: { msg: alert, type: 'dark' } });
          // setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
        } else {
          dispatch({ type: SEARCH_PLACES, payload: res.body.data });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  //Set alert
  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };

  //Select place in search and get weather for it
  const selectPlace = async place => {
    const { city, latitude, longitude } = place;
    dispatch({ type: SELECT_PLACE, payload: { city, latitude, longitude } });
  };

  //Get current weather and 30-hr/16-day forecast
  const getWeather = async () => {
    setLoading();
    const { units } = state,
      { city, latitude, longitude } = state.place;
    //Get current weather
    const respo = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${
        process.env.REACT_APP_OPENWEATHER_KEY
      }`
    );
    const { timezone, dt, main, wind, weather, sys } = respo.data,
      { temp, pressure, humidity } = main,
      { sunrise, sunset } = sys;
    const current = {
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
    };
    dispatch({ type: GET_CURRENT_WEATHER, payload: current });
    //Get forecast for 30 hours
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
    dispatch({ type: GET_TODAY_WEATHER, payload: today });
    //Get forecast for 16 days
    const un = units === 'metric' ? 'M' : 'I';
    const res = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&units=${un}&key=${
        process.env.REACT_APP_WEATHERBIT_KEY
      }`
    );
    dispatch({ type: GET_FORECAST, payload: res.data.data });
  };

  //Switch language
  const switchLang = () => {
    state.lang === 'en'
      ? dispatch({ type: SWITCH_LANG, payload: 'ru' })
      : dispatch({ type: SWITCH_LANG, payload: 'en' });
  };

  // Switch units
  const switchUnits = () => {
    state.units === 'metric'
      ? dispatch({ type: SWITCH_UNITS, payload: 'imperial' })
      : dispatch({ type: SWITCH_UNITS, payload: 'metric' });
  };

  //Clear search
  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  //Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <WeatherContext.Provider
      value={{
        units: state.units,
        lang: state.lang,
        loading: state.loading,
        alert: state.alert,
        places: state.places,
        place: state.place,
        current: state.current,
        forecastToday: state.forecastToday,
        forecast16: state.forecast16,
        searchPlaces,
        clearSearch,
        setAlert,
        selectPlace,
        getWeather,
        switchUnits,
        switchLang
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
