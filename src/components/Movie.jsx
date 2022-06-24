import React from 'react';
import {BsDashLg} from 'react-icons/bs'

function Movie({ film }) {
  return (
    <div className='card' style={{ margin: 10}}>
      <img className='card-img-top' src='https:/picsum.photos/200' alt='Poster filma' />
      <div className='card-body'>
        <h3 className='card-title'>{film.title}</h3>
        <p className='card-text'>{film.synopsys}</p>
        <p className='card-text'>Starring: {film.actors}</p>
      </div>
      <button className="btn">Iznajmi</button>
      <button className="btn"><BsDashLg/></button>
    </div>

  )
}

export default Movie;
