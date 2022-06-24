import React from 'react';
import {BsDashLg} from 'react-icons/bs'

function Movie() {
  return (
    <div className='card' style={{ margin: 10}}>
      <img className='card-img-top' src='https:/picsum.photos/200' alt='Poster filma' />
      <div className='card-body'>
        <h3 className='card-title'>Naslov filma</h3>
        <p className='card-text'>Opis radnje filma</p>
      </div>
      <button className="btn">Iznajmi</button>
      <button className="btn"><BsDashLg/></button>
    </div>

  )
}

export default Movie;
