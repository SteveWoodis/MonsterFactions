/* global process */

import React from 'react';

const Banner = () => (
  <div className="showall-banner">
    <p className="showall"><strong>SHOW ALL FACTIONS</strong></p>
    <div className="flex-row space-around">
      <div className="werewolf">
        <a href="/#/werewolf-landing"><img src={process.env.PUBLIC_URL + '/assets/images/werewolf-artwork1a.jpg'} alt="werewolf"/></a>
      </div>
      <div className="vampire">
        <a href="/#/vampire-landing"><img src={process.env.PUBLIC_URL + '/assets/images/vampire-pic.jpg'} alt="vampire"/></a>
      </div>
      <div className="zombie">
        <a href="/#/zombie-landing"><img src={process.env.PUBLIC_URL + '/assets/images/zombie-pic2a.jpg'} alt="zombie"/></a>
      </div>
      <div className="symbol">
        <a href=""><img src={process.env.PUBLIC_URL + '/assets/images/monsterfactions-symbol.jpg'} alt="monster factions symbol"/></a>
      </div>
    </div>
  </div>
);

export default Banner;
