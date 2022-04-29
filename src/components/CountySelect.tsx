import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { formatCountyName, removeCounty } from '../utils/countyCheck';

import { iceAgeData } from '../data/ice_age_data';
import { segmentStatus } from '../data/progress_data';


const CountyList = ({ 
    counties 
}: 
{ 
    counties: any
}) => {
    let navigate = useNavigate();
    
    useEffect(() => {
        navigate(`/segments/${formatCountyName(counties[0].countyName)}`, { replace: true });
    }, []);

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

    return (
        <div className='CountySelect'>
                <h3 className='CountySelect-header'>Counties</h3>
                <div className='CountySelect-list'>
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
    );
}

export default CountyList;