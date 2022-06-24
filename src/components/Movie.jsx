import React from 'react';
import {BsDashLg} from 'react-icons/bs'

function Movie({ film, addToCart }) {
  return (
    <div className='card' style={{ margin: 10}}>
      <img className='card-img-top' src={film.image} alt='Poster filma' width={200} />
      <div className='card-body'>
        <h3 className='card-title'>{film.title}</h3>
        <p className='card-text'>{film.synopsys}</p>
        <p className='card-text'>Starring: {film.actors}</p>
      </div>
      <button className="btn" onClick={addToCart}>Iznajmi</button>
      <button className="btn"><BsDashLg/></button>
    </div>

  )
}

export default Movie;
