import { useState } from 'react';

import SegmentProgressRows from '../SegmentProgressRows';

import { iceAgeData } from '../../data/ice_age_data';
import { segmentStatus } from '../../data/progress_data';

type DisplayState = 'all' | 'completed' | 'uncompleted';


const Progress = () => {
    const [displaySegments, setDisplaySegments] = useState<DisplayState>('all');

    const hideCompleted = (localStorage.getItem('hideCompleted') === 'true');

    const totalNumberOfSegments = iceAgeData.length;
    const filteredSegments = iceAgeData.filter((segment, index) => {
        if (hideCompleted) {
            return (!segmentStatus[segment.segment].dateCompleted) ? true : false;
        } else if (
            (displaySegments === 'all' && segmentStatus[segment.segment])
            ||
            (displaySegments === 'completed' && segmentStatus[segment.segment].dateCompleted && !hideCompleted)
            ||
            (displaySegments === 'uncompleted' && !segmentStatus[segment.segment].dateCompleted)
        ) {
            return true;
        } else {
            return false;
        }
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setDisplaySegments(value as DisplayState);
    };

    return (
        <div className='Progress'>
            <div className='Progress-filterInfo'>
                <div className='Progress-filterInfo-filters Progress-filterInfo-row'>
                    {
                        !hideCompleted &&
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
                                <input type='radio' checked={(displaySegments === 'uncompleted')} onChange={onChange} value='uncompleted' />
                                Uncompleted
                            </label>
                        </>
                    }
                </div>
                <div className='Progress-filterInfo-row'>Displaying {filteredSegments.length} of {totalNumberOfSegments} segments</div>
            </div>

            <div className='Progress-info container'>
                <table>
                    <tbody>
                        <SegmentProgressRows
                            segments={filteredSegments}
                        />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Progress;
