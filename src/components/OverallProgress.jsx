import React, { Component } from 'react';

/*
import { iceAgeData } from '../data/ice_age_data';

import { matchCounties, formatCountyName } from '../utils/countyCheck';
*/

class OverallProgress extends Component {
    render() {
        return (
            <div className="progress-info container">
                {/*<h2></h2>*/}
                <p></p>
                <p></p>
                <p></p>
            </div>
        );
    }
}

export default OverallProgress;

/*
    <h2 className="user-miles-remaining">396.7 miles to go</h2>
    <div>258.1 of 654.8 miles completed</div>
    <div>66 segments remaining</div>
    <div>19.9 miles of partially completed segments</div>
</div>

progressHTML += '<h2 class="Progress">' + parseFloat((iceAge.totalTrailDistance - userCompleteMiles).toFixed(2)) + ' miles to go</h2>';

progressHTML += '<div>' + parseFloat(userCompleteMiles.toFixed(2)) + ' of ' + iceAge.totalTrailDistance + ' miles completed</div>';
progressHTML += '<div>' + (iceAge.totalSegments - users[i].completedSegments.length) + ' segments remaining</div>';
progressHTML += '<div>' + parseFloat(userPartialMiles.toFixed(2)) + ' miles of partially completed segments</div>';

*/