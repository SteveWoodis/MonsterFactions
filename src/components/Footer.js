/* global process */

import React from 'react';

const Footer = () => (
  <div className="flex-footer">
    <div className="footer-links">
      <div className="footer-links-left">
        <div className="footer-site-map">Site Map</div>
        <div className="footer-feedback">Feedback</div>
        <div className="footer-policies">Guidelines/Policies</div>
      </div>
      <div className="footer-spacer"/>
      <div className="footer-links-right">
        <div className="facebook"><img src={process.env.PUBLIC_URL + '../assets/images/facebook.png'} alt="facebook"/></div>
        <div className="twitter"><img src={process.env.PUBLIC_URL + '../assets/images/twitter.png'} alt="twitter"/></div>
        <div className="pinterest"><img src={process.env.PUBLIC_URL + '../assets/images/pinterest.png'} alt="pinterest"/></div>
      </div>
    </div>
    <div className="footer-logo">
      <img src={process.env.PUBLIC_URL + '../assets/images/monsterfactions-banner-footer.jpg'} alt="monster factions banner in footer"/>
    </div>
    <div className="footer-copyright">
      <p>Copyright 2016 by intellectual Reserve, Inc All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
