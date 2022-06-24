import React from 'react';
import Movie from './Movie';

const Movies = ({ films }) => {

  return (

    <div className='all-products'>

      {films.map((f) => (
        <Movie film={f} key={f.id}/>
      ))}
      
    </div>
  )
}

export default Movies;
