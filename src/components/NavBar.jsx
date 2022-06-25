import React from 'react';
import {BsCart} from 'react-icons/bs';
import {MdMovie} from 'react-icons/md';
import {Link} from 'react-router-dom';

function NavBar({ movieNumber }) {
  
  return (
    <div className='navBar'> 
        <MdMovie/>
        <Link to="/">Video klub</Link>
        <Link to='/iznajmi' className='cart-items'>
            <BsCart/>
        </Link>

        <div className='cart-items'>

            <p>Iznajmljeno je </p>
            <p className='cart-num'>{movieNumber}</p>
            <p>  filmova</p>
        </div>
    </div>

  )
}

export default NavBar;
