import React, { useContext } from 'react';
import PlaceItem from './PlaceItem';
import Spinner from '../layout/Spinner';
import WeatherContext from '../../context/weather/weatherContext';

const Places = () => {
  const weatherContext = useContext(WeatherContext);

  const { places, selectPlace, loading, lang, units } = weatherContext;
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

export default Places;
