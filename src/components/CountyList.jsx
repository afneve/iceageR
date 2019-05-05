import React, { Component } from 'react';

import { countyData } from '../data/county_data';

import { formatCountyName } from '../utils/countyCheck';

import {
    NavLink
} from "react-router-dom";

class CountyList extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="segments-view">
                    <div id="segment-filter-container">
                        <div id="segment-filter">
                            <ul>
                                {countyData.map((county) => {
                                    return (
                                        <li key={county.countyId}>
                                            <NavLink
                                                exact
                                                to={`/segments/${formatCountyName(county.countyName)}`}
                                                activeClassName='selected'>
                                                {county.countyName}
                                            </NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CountyList;