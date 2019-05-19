import React, { Component } from 'react';

import NavItems from './NavItems';

class Header extends Component {
	render() {
		return (
			<header>
				<nav>
					<NavItems />
				</nav>
			</header>
		);
	}
}

export default Header;
