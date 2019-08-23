import React from 'react';
import PlaceItem from './PlaceItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Places = ({ places, selectPlace, loading, lang, units }) => {
  if (loading) {
    return <Spinner />;
  } else
    return (
      <div className='grid-4'>
        {places.map(place => (
          <PlaceItem
            key={place.id}
            place={place}
            selectPlace={selectPlace}
            units={units}
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
  units: PropTypes.string.isRequired,
  selectPlace: PropTypes.func.isRequired
};

export default Places;
