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
      this.props.setAlert('Please enter something', 'dark');
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
            placeholder='Enter City Name...'
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {this.props.showClear && (
          <button
            className='btn btn-grey btn-block'
            onClick={this.props.clearSearch}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}
