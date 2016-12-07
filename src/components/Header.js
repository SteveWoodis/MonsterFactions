/* global process */

import React from 'react';
import Nav from './Nav';

const Header = () => (
  <nav className="flex-row space-around" style={{width: '100%'}}>
    <div className="container-fluid">
      <div className="col-xs-12">
        <Nav/>
      </div>
    </div>
  </nav>
);

export default Header;
