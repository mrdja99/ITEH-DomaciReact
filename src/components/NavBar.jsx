import React from 'react';
import {BsCart} from 'react-icons/bs';
import {MdMovie} from 'react-icons/md';

function NavBar({ movieNumber }) {
  
  return (
    <div className='navBar'> 
        <MdMovie/>
        <a>Video klub</a>
        <div className='cart-items'>
            <BsCart/>
            <p>Iznajmljeno je </p>
            <p className='cart-num'>{movieNumber}</p>
            <p>  filmova</p>
        </div>
    </div>
  )
};

export default NavBar;
