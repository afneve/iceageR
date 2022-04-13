import { useState } from 'react';

import OverallProgress from '../OverallProgress';
import SegmentProgressRows from '../SegmentProgressRows';

import { iceAgeData } from '../../data/ice_age_data';
import { segmentStatus } from '../../data/progress_data';


const Progress = () => {
    const [displaySegments, setDisplaySegments] = useState<'all' | 'completed' | 'uncompleted'>('all');

    const totalNumberOfSegments = iceAgeData.length;
    const filteredSegments = iceAgeData.filter((segment, index) => {
        if (
            (displaySegments === 'all' && segmentStatus[segment.segment])
            ||
            (displaySegments === 'completed' && segmentStatus[segment.segment].dateCompleted)
            ||
            (displaySegments === 'uncompleted' && !segmentStatus[segment.segment].dateCompleted)
        ) {
            return true;
        }
    });

    // setDisplaySegments('all');

    const onChange = (event: any) => {
        setDisplaySegments(event.target.value);
    };

    return (
        <>
            <label>
                <input type='radio' checked={(displaySegments === 'all')} onChange={onChange} value='all' />
                All
            </label>
            <label>
                <input type='radio' checked={(displaySegments === 'completed')} onChange={onChange} value='completed' />
                Completed
            </label>
            <label>
                <input type='radio' checked={(displaySegments === 'uncompleted')} onChange={onChange} value='uncompleted'/>
                Uncompleted
            </label>
            <OverallProgress />
            <div className='progress-info container'>
                <div>Displaying {filteredSegments.length} of {totalNumberOfSegments} segments</div>
                <table>
                    <tbody>
                        <SegmentProgressRows
                            segments={filteredSegments}
                        />
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Progress;
