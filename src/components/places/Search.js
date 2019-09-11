import React, { useState, useEffect, useContext } from 'react';
import WeatherContext from '../../context/weather/weatherContext';

const Search = ({ history }) => {
  const weatherContext = useContext(WeatherContext);

  const { searchPlaces, clearSearch, setAlert, lang, places } = weatherContext;

  const [text, setText] = useState('');

  useEffect(() => {
    history.push('/weather-app');
    //eslint-disable-next-line
  }, [places]);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      const alert =
        lang === 'en'
          ? 'Please enter something'
          : 'Пожалуйста, введите что-нибудь';
      setAlert(alert, 'dark');
    } else {
      searchPlaces(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          value={text}
          placeholder={
            lang === 'en'
              ? 'Enter City Name...'
              : 'Введите название города на русском языке...'
          }
          onChange={onChange}
        />
        <input
          type='submit'
          value={lang === 'en' ? 'Search' : 'Поиск'}
          className='btn btn-dark btn-block'
        />
      </form>
      {places.length > 0 && window.location.pathname === '/weather-app' && (
        <button className='btn btn-grey btn-block my-1' onClick={clearSearch}>
          {lang === 'en' ? 'Clear' : 'Очистить'}
        </button>
      )}
    </div>
  );
};

export default Search;
