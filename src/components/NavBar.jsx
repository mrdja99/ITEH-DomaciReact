import React from 'react';
import {BsCart} from 'react-icons/bs';
import {MdMovie} from 'react-icons/md';

function NavBar() {
  return (
    <div className='navBar'> 
        <MdMovie/>
        <a>Video klub</a>
        <div className='cart-items'>
            <BsCart/>
        </div>
    </div>
  )
};

export default NavBar;
