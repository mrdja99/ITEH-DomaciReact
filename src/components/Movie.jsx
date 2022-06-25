import React from 'react';
import {BsDashLg} from 'react-icons/bs'

function Movie({ film, addToCart, inCart, removeFromCart }) {
  return (
    <div className='card' style={{ margin: 10}}>
      <img className='card-img-top' src={film.image} alt='Poster filma' width={200} />
      <div className='card-body'>
        <h3 className='card-title'>{film.title}</h3>
        <p className='card-text'>{film.synopsys}</p>
        <p className='card-text'>Starring: {film.actors}</p>
      </div>
      
      {inCart ===1? (<>
          <button className="btn"  onClick={() => addToCart(film.id)}>Iznajmi</button>
      </>
      ):(
      <>
          <button className="btn"  onClick={() => removeFromCart(film.id)}>Izbaci</button>
      </>)}
    </div>

  )
}

export default Movie;
