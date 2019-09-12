import React, { useContext } from 'react';
import PlaceItem from './PlaceItem';
import Spinner from '../layout/Spinner';
import WeatherContext from '../../context/weather/weatherContext';

const Places = () => {
  const weatherContext = useContext(WeatherContext);

  const { places, loading } = weatherContext;
  if (loading) {
    return <Spinner />;
  } else
    return (
      <div className='listitems'>
        {places.map(place => (
          <PlaceItem key={place.id} place={place} />
        ))}
      </div>
    );
};

export default Places;
