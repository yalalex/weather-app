import React, { useState } from 'react';
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

const App = () => {
  const [units, setUnits] = useState('metric');
  const [lang, setLang] = useState('en');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState(null);
  const [current, setCurrent] = useState({});
  const [forecastToday, setForecastToday] = useState([]);
  const [forecast16, setForecast16] = useState([]);

  // useEffect(() => {
  //   getWeather();
  // }, place);

  //Search places to get weather for
  const searchPlaces = async text => {
    setLoading(true);
    request
      .get('https://wft-geo-db.p.rapidapi.com/v1/geo/cities')
      .query({ limit: '10' })
      .query({ namePrefix: text })
      .query({ sort: '-population' })
      .query({ languageCode: lang })
      .set('x-rapidapi-host', 'wft-geo-db.p.rapidapi.com')
      .set('x-rapidapi-key', process.env.REACT_APP_RAPIDAPI_KEY)
      .set('Accept', 'application/json')
      .then(res => {
        if (res.body.data.length === 0) {
          const alert =
            lang === 'en'
              ? 'No cities found. Check the spelling and try again'
              : 'Ничего не найдено. Проверьте правильность написания и попробуйте снова';
          showAlert(alert, 'dark');
          setLoading(false);
        } else {
          setPlaces(res.body.data);
          setLoading(false);
        }
        // console.log(places);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //Clear search
  const clearSearch = () => {
    setPlaces([]);
    setLoading(false);
  };

  //Set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  };

  //Select place in search and get weather for it
  const selectPlace = async place => {
    const { city, latitude, longitude } = place;
    setPlace(
      () => {
        return { city, latitude, longitude };
      },
      () => getWeather()
    );
  };

  //Get current weather and 30-hr/16-day forecast
  const getWeather = async () => {
    setLoading(true);
    const { city, latitude, longitude } = place;
    //Get current weather
    const respo = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${
        process.env.REACT_APP_OPENWEATHER_KEY
      }`
    );
    const { timezone, dt, main, wind, weather, sys } = respo.data,
      { temp, pressure, humidity } = main,
      { sunrise, sunset } = sys;
    setCurrent({
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
    });
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
    setForecastToday(today);
    //Get forecast for 16 days
    const un = units === 'metric' ? 'M' : 'I';
    const res = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&units=${un}&key=${
        process.env.REACT_APP_WEATHERBIT_KEY
      }`
    );
    setForecast16(res.data.data);
    setLoading(false);
    // console.log(forecastToday);
    // console.log(forecast16);
    // console.log(current);
    // console.log(place);
  };

  //Switch language
  const switchLang = () => {
    lang === 'en' ? setLang('ru') : setLang('en');
  };

  // Switch units
  const switchUnits = () => {
    units === 'metric' ? setUnits('imperial') : setUnits('metric');
  };

  return (
    <Router>
      <div className='App'>
        <Navbar
          switchUnits={switchUnits}
          switchLang={switchLang}
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
                searchPlaces={searchPlaces}
                clearSearch={clearSearch}
                showClear={
                  places.length > 0 &&
                  window.location.pathname === '/weather-app'
                    ? true
                    : false
                }
                setAlert={showAlert}
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
                  selectPlace={selectPlace}
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
                  getWeather={getWeather}
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
};

export default App;
