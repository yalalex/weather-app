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

export default (state, action) => {
  switch (action.type) {
    case SEARCH_PLACES:
      return {
        ...state,
        places: action.payload,
        loading: false
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        places: []
      };
    case SELECT_PLACE:
      return {
        ...state,
        place: action.payload,
        loading: false
      };
    case GET_CURRENT_WEATHER:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case GET_TODAY_WEATHER:
      return {
        ...state,
        forecastToday: action.payload,
        loading: false
      };
    case GET_FORECAST:
      return {
        ...state,
        forecast16: action.payload,
        loading: false
      };
    case SWITCH_LANG:
      return {
        ...state,
        lang: action.payload
      };
    case SWITCH_UNITS:
      return {
        ...state,
        units: action.payload
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
        loading: false
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
