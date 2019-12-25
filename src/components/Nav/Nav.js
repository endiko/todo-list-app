import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default () => {
  return (
    <ul className='nav-menu__list'>
      <Link className='nav-menu__link' to='/'>
        <li className='nav-menu__item'> Home</li>
      </Link>
      <Link className='nav-menu__link' to='/about'>
        <li className='nav-menu__item'> About</li>
      </Link>
    </ul>
  );
};
