import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { formatCountyName } from '../utils/countyCheck';
import { County } from '../types/types';

const CountySelectList = ({ 
    counties 
}: 
{ 
    counties: County[]
}) => {
    let navigate = useNavigate();
    
    useEffect(() => {
        navigate(`/segments/${formatCountyName(counties[0].countyName)}`, { replace: true });
    }, []);

    const handleChange = (value:number) => {
        const [selectedCounty] = counties.filter((county: County) => {
            if (county.countyId === value) {
                return true;
            } else { return false }
        });

        navigate(`/segments/${formatCountyName(selectedCounty.countyName)}`);
    }

    return (
        <div className='CountySelectList'>
            <select onChange={event => handleChange(Number(event.target.value))}>
                {counties.map((county : County) => {
                    return (
                        <option value={county.countyId} key={county.countyId}>
                            {county.countyName}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default CountySelectList;