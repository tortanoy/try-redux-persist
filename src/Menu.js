import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <ul>
    <li>
      <NavLink to='/' exact>Hello</NavLink>
    </li>
    <li>
      <NavLink to='/bye' exact>Bye</NavLink>
    </li>
  </ul>
);

export default Menu;
