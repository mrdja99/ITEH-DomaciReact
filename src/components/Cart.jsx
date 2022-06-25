import React from 'react';
import Movie from './Movie'

const Cart = ({ films }) => {
  return (
    <div className='all-products'>
        {films.map((f) => (
        <Movie film={f} key={f.id} inCart={0}/>
      ))}
    </div>
  )
}

export default Cart;
