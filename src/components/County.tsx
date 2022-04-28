import { useParams } from 'react-router-dom';

import { iceAgeData } from '../data/ice_age_data';
import { segmentStatus } from '../data/progress_data';
import SegmentList from './SegmentList';

import { 
    matchCounties, 
    formatCountyName 
} from '../utils/countyCheck';

const County = () => {
    let params = useParams();
    const county = params.countyId;
    const hideCompleted = (localStorage.getItem('hideCompleted') === 'true');

    const countySegments = iceAgeData.filter((segment) => {
        return matchCounties(county, formatCountyName(segment.booksection));
    });

    const countySegmentsRemaining = countySegments.filter((segment, index) => {
        if (!segmentStatus[segment.segment].dateCompleted) {
            return true;
        }
    });

    const countyMilesRemaining = countySegmentsRemaining.reduce(
        (previousValue, currentValue) => Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    )

    if (countySegments.length === 0) {
        return <div>County doesn't have any segments</div>
    }

    return (
        <div className='County'>
            <div className='countyHeader'>
                <h2 className='county-name'>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={`https://www.google.com/#q= ${countySegments[0].booksection}+wi+weather`}>
                        {countySegments[0].booksection}
                    </a>
                </h2>
                <div>{`${(countyMilesRemaining).toFixed(1)} miles remaining`}</div>
            </div>
            <SegmentList
                segments={hideCompleted ? countySegmentsRemaining : countySegments}
            />
        </div>
    )
}

export default County;