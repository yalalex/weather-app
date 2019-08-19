import React from 'react';
import PlaceItem from './PlaceItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Places = ({ places, getForecast, loading, lang }) => {
  if (loading) {
    return <Spinner />;
  } else
    return (
      <div className='grid-4'>
        {places.map(place => (
          <PlaceItem
            key={place.id}
            place={place}
            getForecast={getForecast}
            lang={lang}
          />
        ))}
      </div>
    );
};

Places.propTypes = {
  places: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired,
  getForecast: PropTypes.func.isRequired
};

export default Places;
