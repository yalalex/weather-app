import React, { useReducer } from 'react';
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
    forecast15: []
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  //Set alert
  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };

  //Search places to get weather for
  const searchPlaces = async text => {
    setLoading();
    const config = {
      headers: {
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
      }
    };
    const res = await axios.get(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=10&namePrefix=${text}&sort=-population&languageCode=${state.lang}`,
      config
    );
    if (res.data.data.length === 0) {
      const alert =
        state.lang === 'en'
          ? 'No cities found. Check the spelling and try again'
          : 'Ничего не найдено. Проверьте правильность написания и попробуйте снова';
      dispatch({ type: SET_ALERT, payload: alert });
      setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
    } else {
      dispatch({ type: SEARCH_PLACES, payload: res.data.data });
    }
  };

  //Select place in search and get weather for it
  const selectPlace = place => {
    dispatch({ type: SELECT_PLACE, payload: place });
  };

  //Get current weather and 48-hr/15-day forecast
  const getWeather = async (place, units) => {
    setLoading();
    const { city, latitude, longitude } = place;
    //Get current weather
    const respo = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${process.env.REACT_APP_OPENWEATHER_KEY}`
    );
    const { timezone, dt, main, wind, weather, sys } = respo.data,
      { temp, pressure, humidity } = main,
      { sunrise, sunset } = sys;
    const current = {
      name: city,
      timezone,
      dt,
      temp,
      wind: wind.speed,
      pressure,
      humidity,
      weather: weather[0].main,
      sky: weather[0].description,
      icon: weather[0].icon,
      sunrise,
      sunset
    };
    if (current.temp.toFixed() === '-0') current.temp = 0;
    dispatch({ type: GET_CURRENT_WEATHER, payload: current });
    //Get forecast for 48 hours
    const resp = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${process.env.REACT_APP_OPENWEATHER_KEY}`
    );
    const today = resp.data.list.slice(0, 15);
    today.map(period => {
      if (period.main.temp.toFixed() === '-0') period.main.temp = 0;
      //Change icons according to local time in requested place
      if (sunrise + 86400 < period.dt && period.dt < sunset + 86400) {
        period.weather[0].icon = period.weather[0].icon.slice(0, -1) + 'd';
      } else if (sunset < period.dt && period.dt < sunrise + 86400) {
        period.weather[0].icon = period.weather[0].icon.slice(0, -1) + 'n';
      } else if (sunrise < period.dt && period.dt < sunset) {
        period.weather[0].icon = period.weather[0].icon.slice(0, -1) + 'd';
      } else if (sunset - 86400 < period.dt && period.dt < sunrise) {
        period.weather[0].icon = period.weather[0].icon.slice(0, -1) + 'n';
      }
      return period;
    });
    dispatch({ type: GET_TODAY_WEATHER, payload: today });
    //Get forecast for 15 days
    const un = units === 'metric' ? 'M' : 'I';
    const res = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&units=${un}&key=${process.env.REACT_APP_WEATHERBIT_KEY}`
    );
    const forecast15 = res.data.data.slice(1, 16);
    forecast15.map(day => {
      if (day.max_temp.toFixed() === '-0') day.max_temp = 0;
      if (day.min_temp.toFixed() === '-0') day.min_temp = 0;
      return day;
    });
    dispatch({ type: GET_FORECAST, payload: forecast15 });
  };

  //Switch language
  const switchLang = lang => dispatch({ type: SWITCH_LANG, payload: lang });

  // Switch units
  const switchUnits = units => dispatch({ type: SWITCH_UNITS, payload: units });

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
        forecast15: state.forecast15,
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
