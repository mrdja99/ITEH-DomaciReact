import React from 'react';
import Movie from './Movie';

const Movies = ({ films, addToCart, removeFromCart }) => {

  return (

    <div className='all-products'>

      {films.map((f) => (
        <Movie film={f} key={f.id} addToCart={addToCart} inCart={1} removeFromCart={removeFromCart}/>
      ))}
      
    </div>
  )
}

export default Movies;
