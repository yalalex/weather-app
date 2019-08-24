import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/places/Search';
import Forecast from './components/weather/Forecast';
import Places from './components/places/Places';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import './App.css';
import WeatherState from './context/weather/WeatherState';

const App = () => {
  return (
    <WeatherState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert />
            <Route path='/weather-app' component={Search} />
            <Switch>
              <Route exact path='/weather-app' component={Places} />
              <Route
                exact
                path='/weather-app/current/:name'
                component={Forecast}
              />
              <Route exact path='/weather-app/about' component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </WeatherState>
  );
};

export default App;
