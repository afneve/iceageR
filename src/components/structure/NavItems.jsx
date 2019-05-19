import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
*/

import { Navigation } from '../../config/Navigation';

class NavItems extends Component {
	handleMicrophoneClick = () => {
	};

	render() {
		return (
			Navigation.map((nav, index) => {
				return (
					<NavLink
						id={nav.id}
						key={nav.id}
						to={nav.route}
						className="nav-item"
						activeClassName="selected"
						exact={nav.route === '/' ? true : false}> 
					{nav.text}
					</NavLink>
				);  
			})

			/*
				<NavLink onClick={this.handleMicrophoneClick} id="microphone" to="/microphone" activeClassName="selected" className="nav-item">
					<FontAwesomeIcon icon={faMicrophone} />
				</NavLink>
			*/
		);
	}
}

export default NavItems;