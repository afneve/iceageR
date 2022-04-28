import { NavLink } from 'react-router-dom';

import { countyData } from '../data/county_data';
import { formatCountyName, removeCounty } from '../utils/countyCheck';

import { iceAgeData } from '../data/ice_age_data';
import { segmentStatus } from '../data/progress_data';


const CountyList = ({ 
    counties 
}: 
{ 
    counties: any
}) => {
	const hideCompleted = (localStorage.getItem('hideCompleted') === 'true');
    let countyIdSet = new Set();

    const segmentsNotCompleted = iceAgeData.filter((segment, index) => {
        if (!segmentStatus[segment.segment].dateCompleted) {
            return true;
        }
    });

    for (let i = 0; i < segmentsNotCompleted.length; i++) {
        countyIdSet.add(segmentsNotCompleted[i].countyId);
    }

    return (
        <div id='segments-view'>
            <div id='segment-filter-container'>
                <div className='county-select-header'>Counties</div>
                <div id='segment-filter'>
                    <ul>
                        {counties.map((county : any) => {
                            return (
                                <li 
                                    key={county.countyId} 
                                    className={!countyIdSet.has(county.countyId) ? 'complete' : ''}>
                                    <NavLink
                                        end
                                        to={`/segments/${formatCountyName(county.countyName)}`}
                                        className={({ isActive }) => (isActive ? 'selected' : '')}>
                                        {removeCounty(county.countyName)}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CountyList;