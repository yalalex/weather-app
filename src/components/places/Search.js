import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({
  searchPlaces,
  clearSearch,
  setAlert,
  showClear,
  lang,
  history
}) => {
  const [text, setText] = useState('');

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
      history.push('/weather-app');
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
      {showClear && (
        <button className='btn btn-grey btn-block' onClick={clearSearch}>
          {lang === 'en' ? 'Clear' : 'Очистить'}
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchPlaces: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired
};

export default Search;
