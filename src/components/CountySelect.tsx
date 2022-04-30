import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { formatCountyName, removeCounty } from '../utils/countyCheck';

import { selectIncompleteSegments } from '../utils/getIceAgeData';
import { County } from '../types/types';



const CountyList = ({ 
    counties 
}: 
{ 
    counties: County[]
}) => {
    let navigate = useNavigate();
    let countyIdSet = new Set();
    const incompleteSegments = selectIncompleteSegments(undefined);

    
    useEffect(() => {
        navigate(`/segments/${formatCountyName(counties[0].countyName)}`, { replace: true });
    }, []);


    for (let i = 0; i < incompleteSegments.length; i++) {
        countyIdSet.add(incompleteSegments[i].countyId);
    }

    return (
        <div className='CountySelect'>
                <h3 className='CountySelect-header'>Counties</h3>
                <div className='CountySelect-list'>
                    <ul>
                        {counties.map((county : County) => {
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