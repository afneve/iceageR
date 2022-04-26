import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { countyData } from '../data/county_data';
import { formatCountyName } from '../utils/countyCheck';

const CountySelectList = () => {
    let navigate = useNavigate();

    useEffect(() => {
        navigate(`/segments/${formatCountyName(countyData[0].countyName)}`);
    }, []);

    const handleChange = (value:number) => {
        const [selectedCounty] = countyData.filter(county => {
            if (county.countyId === value) {
                return true;
            } else { return false }
        });

        navigate(`/segments/${formatCountyName(selectedCounty.countyName)}`);
    }

    return (
        <div className='mobile-select'>
            <select onChange={event => handleChange(Number(event.target.value))}>
                {countyData.map((county) => {
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