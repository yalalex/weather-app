import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchPlaces: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      const alert =
        this.props.lang === 'en'
          ? 'Please enter something'
          : 'Пожалуйста, введите что-нибудь';
      this.props.setAlert(alert, 'dark');
    } else {
      this.props.searchPlaces(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            value={this.state.text}
            placeholder={
              this.props.lang === 'en'
                ? 'Enter City Name...'
                : 'Введите название города...'
            }
            onChange={this.onChange}
          />
          <input
            type='submit'
            value={this.props.lang === 'en' ? 'Search' : 'Поиск'}
            className='btn btn-dark btn-block'
          />
        </form>
        {this.props.showClear && (
          <button
            className='btn btn-grey btn-block'
            onClick={this.props.clearSearch}
          >
            {this.props.lang === 'en' ? 'Clear' : 'Очистить'}
          </button>
        )}
      </div>
    );
  }
}
