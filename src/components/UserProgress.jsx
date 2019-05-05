import React, { Component } from 'react';

import { iceAgeData } from '../data/ice_age_data';

import { countyData } from '../data/county_data';
import { segmentStatus } from '../data/progress_data';

import { Categories } from '../config/Categories';

class UserProgress extends Component {
    state = {
        sort: '',
        sortBy: '',
        direction: ''
    };

   handleSort = (key) => {
        this.setState({
            direction: !this.state.direction || this.state.direction === 'eW' ? 'wE' : 'eW',
            sort: !this.state.sort || this.state.sort === 'asc' ? 'desc' : 'asc',
            sortBy: key 
        });
        // this.state.direction === 'eW' ? '(East to West)' : '(West to East)'
    };

   sortRows = () => {
        let sortBy = this.state.sortBy;

       if (!sortBy) {
           return iceAgeData;
       }

       return iceAgeData.sort((a, b) => {
        
            let comparison = 0,
                valA = parseFloat(a[sortBy]),
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
        return (
            <div className="progress-info container">
                <table>
                    <tbody>
                        <tr>
                            {
                            Categories.map((category) => {
                                return (
                                    <th
                                        onClick={() => this.handleSort(category.sortBy)}>
                                        {category.label}
                                    </th>
                                );
                            })
                            }
                        </tr>
                        {
                            this.sortRows().map((segment, index) => {
                                return(
                                    <tr key={index} className={segmentStatus[segment.segment].dateCompleted ? 'completed' : null}>
                                        {
                                            Categories.map((category) => {
                                                return (
                                                    <td>{segment[category.key]}</td>
                                                );
                                            })
                                        }
                                    </tr>
                                );
                            }) 
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserProgress;

/*

            
                <h2 className="user-miles-remaining">396.7 miles to go</h2>
                <div>258.1 of 654.8 miles completed</div>
                <div>66 segments remaining</div>
                <div>19.9 miles of partially completed segments</div>
            </div>

            */