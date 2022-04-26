import { NavLink } from 'react-router-dom';

import { countyData } from '../data/county_data';
import { formatCountyName } from '../utils/countyCheck';

const CountyList = () => {
    return (
        <div id='segments-view'>
            <div id='segment-filter-container'>
                <div id='segment-filter'>
                    <ul>
                        {countyData.map((county) => {
                            return (
                                <li key={county.countyId}>
                                    <NavLink
                                        end
                                        to={`/segments/${formatCountyName(county.countyName)}`}
                                        className={({ isActive }) => (isActive ? 'selected' : '')}>
                                        {county.countyName}
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