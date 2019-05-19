import React, { Component } from 'react';

import { iceAgeData } from '../data/ice_age_data';

import { countyData } from '../data/county_data';
import { segmentStatus } from '../data/progress_data';

import { Categories } from '../config/Categories';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

class SegmentProgressRows extends Component {
    state = {
        sort: '',
        sortBy: '',
        startFrom: ''
    };

    handleSort = (sortBy) => {
        if (!sortBy) {
            return false;
        }

        this.setState({
            startFrom: sortBy === 'orderId' ? this.state.startFrom !== 'east' ? 'east' : 'west' : '',
            sort: sortBy !== this.state.sortBy || this.state.sort !== 'desc' ? 'desc' : 'asc',
            sortBy: sortBy
        });
    };

    sortRows = () => {
        let sortBy = this.state.sortBy;

        if (!sortBy) {
            return iceAgeData;
        }

        if (sortBy === 'dateCompleted') {
            /*
            return segmentStatus.sort((a, b) => {

                let year = a[sortBy].split('/');
                console.log(year);
                return true;
            });

            */
        }

        return iceAgeData.sort((a, b) => {

            let comparison = 0;

            const valA = parseFloat(a[sortBy]),
                valB = parseFloat(b[sortBy]);

            if (valA > valB) {
                comparison = 1;
            } else if (valA < valB) {
                comparison = -1;
            }
            return (
                (this.state.sort === 'desc') ? (comparison * -1) : comparison
            );
        });
    };

    render() {
        const {
            sort,
            sortBy,
            startFrom
        } = this.state;

        return (
            <React.Fragment>
            <tr>
                {
                    Categories.map((category) => {
                        return (
                            <th
                                key={category.sortBy}
                                onClick={() => this.handleSort(category.sortBy)}>
                                {category.label === 'Segment' ?
                                    `${category.label} ${startFrom === 'east' ? '(East to West)' : '(West to East)'}`
                                    :
                                    <React.Fragment>
                                        {category.label}
                                        <span>
                                            {!!category.sortBy && sortBy === category.sortBy ?
                                                sortBy && sort === 'desc' ? 
                                                    <FontAwesomeIcon icon={faSortDown} /> :
                                                    <FontAwesomeIcon icon={faSortUp} /> 
                                                :
                                                !!category.sortBy && <FontAwesomeIcon icon={faSort} />}
                                        </span>
                                    </React.Fragment>
                                }
                            </th>
                        );
                    })
                }
            </tr>
            {
                this.sortRows().map((segment, index) => {
                    return (
                        <tr key={index}>
                            {
                                Categories.map((category, index) => {
                                    return (
                                        <td key={index}>
                                            <span>
                                                {
                                                    segmentStatus[segment.segment].dateCompleted && category.key === 'segment' && 
                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                }
                                            </span>
                                            {segment[category.key]}
                                        </td>
                                    );
                                })
                            }
                        </tr>
                    );
                })
            }
            </React.Fragment>
        );
    }
}

export default SegmentProgressRows;