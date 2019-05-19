import React, { Component } from 'react';

import { iceAgeData } from '../../data/ice_age_data';

import SegmentProgressRows from '../SegmentProgressRows';
import OverallProgress from '../OverallProgress';

class Progress extends Component {
    render() {
        return (
            <React.Fragment>
                <OverallProgress />
                <div className="progress-info container">
                    <table>
                        <tbody>
                            <SegmentProgressRows />
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default Progress;
