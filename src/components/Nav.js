/* global process */

import React, {Component} from 'react';
import {Link} from 'react-router';
import {Popover, Menu, MenuItem} from 'material-ui';

class Nav extends Component {
  constructor () {
    super();

    this.state = {
      factionsDropdownOpen: false,
      factionsAnchorElement: null
    };
  }

  handleTouchTap (event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      factionsDropdownOpen: true,
      factionsAnchorElement: event.currentTarget,
    });
  }

  handleRequestClose () {
    this.setState({
      factionsDropdownOpen: false
    });
  }

  render() {
    return (
      <ul className="nav navbar-nav">
        <li>
          <img
            src={process.env.PUBLIC_URL + '/assets/images/monsterfactions-symbol-mini.jpg'}
            alt="monster factions symbol"/>
        </li>
        <li className="spacer">
          <Link to="/" className="spacer-font">Home</Link>
        </li>
        <li className="spacer">
          <a className="spacer-font" onTouchTap={this.handleTouchTap.bind(this)}>Factions</a>
          <Popover
            open={this.state.factionsDropdownOpen}
            anchorEl={this.state.factionsAnchorElement}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose.bind(this)}>
            <Menu>
              <MenuItem><Link to="/factions/werewolves" className="spacer-font">Werewolves</Link></MenuItem>
              <MenuItem><Link to="/factions/vampires" className="spacer-font">Vampires</Link></MenuItem>
              <MenuItem><Link to="/factions/zombies" className="spacer-font">Zombies</Link></MenuItem>
            </Menu>
          </Popover>
        </li>
        <li className="spacer">
          <Link to="/store" className="spacer-font">Monster Gear</Link>
        </li>
        <li className="spacer">
          <Link to="/chat" className="spacer-font">Monster Chat</Link>
        </li>
        <li className="spacer">
          <Link to="/gallery" className="spacer-font">Monster Gallery</Link>
        </li>
        <li className="spacer">
          <Link to="/contact" className="spacer-font">Contact</Link>
        </li>
        <li className="spacer">
          <Link to="/login" className="spacer-font">Login</Link>
        </li>
        <li>
          <img src={process.env.PUBLIC_URL + '/assets/images/monsterfactions-banner-mini.jpg'} alt="monster factions banner"/>
        </li>
      </ul>
    );
  }
}

export default Nav;
