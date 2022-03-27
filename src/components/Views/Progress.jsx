import React from 'react';

import OverallProgress from '../OverallProgress';
import SegmentProgressRows from '../SegmentProgressRows';

const Progress = () => {

    return (
        <>
            <OverallProgress />
            <div className="progress-info container">
                <table>
                    <tbody>
                        <SegmentProgressRows />
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Progress;
