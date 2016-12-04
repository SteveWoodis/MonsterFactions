/* global process */

import React from 'react';

const Banner = () => (
  <div className="banner">
    <img className="banner-img" src={process.env.PUBLIC_URL + '/assets/images/fantasy-landscape.jpg'} alt="fantasy landscape"/>
  </div>
);

export default Banner;
