import CountyList from '../CountySelect';
import CountySelectList from '../CountySelectList';
import { Outlet } from 'react-router-dom';

import { countyData } from '../../data/county_data';

import { iceAgeData } from '../../data/ice_age_data';
import { segmentStatus } from '../../data/progress_data';


const Segments = () => {
	const hideCompleted = (localStorage.getItem('hideCompleted') === 'true');
	const isMobile = (window.innerWidth < 640);
	let counties = null;

	if (hideCompleted) {
		let countyIdSet = new Set();

		const segmentsNotCompleted = iceAgeData.filter((segment, index) => {
			if (!segmentStatus[segment.segment].dateCompleted) {
				return true;
			}
			return false;
		});

		for (let i = 0; i < segmentsNotCompleted.length; i++) {
			countyIdSet.add(segmentsNotCompleted[i].countyId);
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