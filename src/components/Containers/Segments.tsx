import CountyList from '../CountySelect';
import CountySelectList from '../CountySelectList';
import { Outlet } from 'react-router-dom';

import { countyData } from '../../data/county_data';
import { selectIncompleteSegments } from '../../utils/getIceAgeData';



const Segments = () => {
	const hideCompleted = (localStorage.getItem('hideCompleted') === 'true');
	const isMobile = (window.innerWidth < 640);
	let counties = null;

	if (hideCompleted) {
		let countyIdSet = new Set();

		const incompleteSegments = selectIncompleteSegments(undefined);

		for (let i = 0; i < incompleteSegments.length; i++) {
			countyIdSet.add(incompleteSegments[i].countyId);
		}

		counties = countyData.filter(county => {
			if (countyIdSet.has(county.countyId)) {
				return true;
			}

			return false;
		});
	} else {
		counties = [...countyData];
	}

	return (
		<div className='Segments'>
			{
				isMobile ? 
				<CountySelectList counties={counties} />
				:
				<CountyList counties={counties} />

			}
			<Outlet />
		</div>
	);
}

export default Segments;