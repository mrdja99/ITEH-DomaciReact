import React from 'react';
import Movie from './Movie';

const Movies = ({ films, addToCart }) => {

  return (

    <div className='all-products'>

      {films.map((f) => (
        <Movie film={f} key={f.id} addToCart={addToCart}/>
      ))}
      
    </div>
  )
}

export default Movies;
