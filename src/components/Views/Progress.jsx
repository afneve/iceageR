import React, { Component } from 'react';

import OverallProgress from '../OverallProgress';
import SegmentProgressRows from '../SegmentProgressRows';

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
