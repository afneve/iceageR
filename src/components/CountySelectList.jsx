import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

import { countyData } from '../data/county_data';

import { formatCountyName } from '../utils/countyCheck';

class CountyList extends Component {
    render() {
        return (
            <>
                <select>
                    {countyData.map((county) => {
                        return (
                            <option value={county.countyId} key={county.countyId}>
                                <NavLink
                                    exact
                                    to={`/segments/${formatCountyName(county.countyName)}`}
                                    activeClassName='selected'>
                                    {county.countyName}
                                </NavLink>
                            </option>
                        );
                    })}
                </select>
            </>
        );
    }
}

export default CountyList;