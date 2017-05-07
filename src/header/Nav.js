import React from 'react';

import { NavMenuLink } from './../styled';
import { NavMenu } from './../styled';

function Nav() {
  return (
    <NavMenu>
      <li><NavMenuLink exact to="/">Promise</NavMenuLink></li>
      <li><NavMenuLink to="/thunk">Thunk</NavMenuLink></li>
      <li><NavMenuLink to="/saga">Saga</NavMenuLink></li>
    </NavMenu>
  );
}

export default Nav;
