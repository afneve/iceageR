import { useNavigate } from 'react-router-dom';

import { countyData } from '../data/county_data';
import { formatCountyName } from '../utils/countyCheck';

const CountySelectList = () => {
    let navigate = useNavigate();

    const handleChange = (value:number) => {
        navigate(`/segments/${formatCountyName(countyData[value - 1].countyName)}`);
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