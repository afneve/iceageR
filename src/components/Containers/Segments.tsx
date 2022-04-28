import CountyList from '../CountySelect';
import CountySelectList from '../CountySelectList';
import { Outlet } from 'react-router-dom';

import { countyData } from '../../data/county_data';

import { iceAgeData } from '../../data/ice_age_data';
import { segmentStatus } from '../../data/progress_data';

const Segments = () => {
	const hideCompleted = (localStorage.getItem('hideCompleted') === 'true');
	let counties = null;

	if (hideCompleted) {
		let countyIdSet = new Set();

		const segmentsNotCompleted = iceAgeData.filter((segment, index) => {
			if (!segmentStatus[segment.segment].dateCompleted) {
				return true;
			}
		});

		for (let i = 0; i < segmentsNotCompleted.length; i++) {
			countyIdSet.add(segmentsNotCompleted[i].countyId);
		}

		counties = countyData.filter(county => {
			if (countyIdSet.has(county.countyId)) {
				return true;
			}
		});
	} else {
		counties = [...countyData];
	}

	return (
		<div className='Segments'>
			<CountyList counties={counties} />
			<CountySelectList counties={counties} />

			<Outlet />
		</div>
	);
}

export default Segments;

/*
async function asyncFunc2() {
  console.log("in Async function 2");

   return new Promise((resolve, reject) => {
  setTimeout(() => {
	resolve('foo');
  }, 5000);
});
}
async function asyncFunc1() {
  console.log("in Async function 1");
  const test = await asyncFunc2();
	console.log(test);
  console.log('After an await');
}
console.log("starting sync code");
asyncFunc1().then(() => {
  console.log("Received answer from async code");
});
console.log("finishing main thread");
VM574:16 starting sync code
VM574:11 in Async function 1
VM574:2 in Async function 2
VM574:20 finishing main thread
undefined
VM574:13 foo
VM574:14 After an await
VM574:18 Received answer from async code


*/