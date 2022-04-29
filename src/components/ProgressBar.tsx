import { segmentStatus } from '../data/progress_data';
import { iceAgeData } from '../data/ice_age_data';

const ProgressBar = () => {
    return (
        <div className='ProgressBar'>
            {
                iceAgeData.map((segment, index) => {
                    const segmentClassName = (segmentStatus[segment.segment].dateCompleted) ? 'complete'
                        : (segmentStatus[segment.segment].partial) ? 'partial'
                            : 'incomplete';

                    return (
                        <div className={segmentClassName} key={index}></div>
                    );
                })
            }
        </div>
    );
}

export default ProgressBar;