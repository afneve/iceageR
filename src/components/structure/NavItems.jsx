import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

import {
  Route,
  NavLink
} from "react-router-dom";

class NavItems extends Component {

  handleMicrophoneClick = () => {
  };

  render() {
    const {
      id,
      text,
      icon,
      route,
      component
    } = this.props;

    return (
      <React.Fragment>
        <NavLink exact id="progress" to="/" activeClassName="selected" className="nav-item">Progress</NavLink>
        <NavLink id="segments" to="/segments/polk-burnett" activeClassName="selected" className="nav-item">Segments</NavLink>
        <NavLink id="info" to="/info" activeClassName="selected" className="nav-item">Info</NavLink>
        {
          /*
            <NavLink onClick={this.handleMicrophoneClick} id="microphone" to="/microphone" activeClassName="selected" className="nav-item">
              <FontAwesomeIcon icon={faMicrophone} />
            </NavLink>
          */
        }

      </React.Fragment>
    );
  }
}

export default NavItems;