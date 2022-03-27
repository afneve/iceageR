import React, { useEffect, useState } from 'react';

import { iceAgeData } from '../data/ice_age_data';
/*
import { matchCounties, formatCountyName } from '../utils/countyCheck';

    progressHTML += '<h2 class="user-miles-remaining">' + parseFloat((iceAge.totalTrailDistance - userCompleteMiles).toFixed(2)) + ' miles to go</h2>';

    progressHTML += '<div>' + parseFloat(userCompleteMiles.toFixed(2)) + ' of ' + iceAge.totalTrailDistance + ' miles completed</div>';
    progressHTML += '<div>' + (iceAge.totalSegments - users[i].completedSegments.length) + ' segments remaining</div>';
    progressHTML += '<div>' + parseFloat(userPartialMiles.toFixed(2)) + ' miles of partially completed segments</div>';

                        // LOOP THROUGH USERS COMPLETED SEGMENTS TO SEE IF THEY COMPLETED CURRENT SEGMENT
                    for (var c = 0; c < users[i].completedSegments.length; c++) {
                        if (users[i].completedSegments[c].segmentId == segmentsInCounty[b].segment_id) {
    
                            userCompleteMiles += parseFloat(segmentsInCounty[b].iceagetraildistance);
                            countyCompletedDistance += parseFloat(segmentsInCounty[b].iceagetraildistance);
    
                            segmentCompleteHTML += '<span class="completion-data"> (' + users[i].completedSegments[c].extraInfo + ')</span>';
    
                            userCompleteSegments++;
                            segmentComplete = true;
    
                            break;
                        }
                    }
*/

const OverallProgress = () => {
    const [totalTrailDistance, setTotalTrailDistance] = useState(0);

    useEffect(() => {

    }, []);

    return (
        <div className="progress-info container">
            {/*<h2></h2>*/}
            <p></p>
            <p></p>
            <p></p>
        </div>
    );
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