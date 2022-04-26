import NavItems from './NavItems';
import OverallProgressBar from '../OverallProgressBar';

import { iceAgeData } from '../../data/ice_age_data';



const Header = () => {
	return (
		<header>
			<nav>
				<NavItems />
			</nav>
			<OverallProgressBar 
                iceAgeData={iceAgeData}
            />
		</header>
	);
}

export default Header;
