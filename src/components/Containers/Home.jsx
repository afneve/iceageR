import { iceAgeData } from '../../data/ice_age_data';

import { selectCompletedSegments, selectPartialSegments } from '../../utils/getIceAgeData';


const Home = () => {
    const completedSegments = selectCompletedSegments();
    const partialSegments = selectPartialSegments();

    const totalNumberOfSegments = iceAgeData.length;
    const totalNumberOfCompletedSegments = completedSegments.length;

    const partialSegmentMiles = partialSegments.reduce(
        (previousValue, currentValue) => Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    )

    const totalMilesCompleted = completedSegments.reduce(
        (previousValue, currentValue) => Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    )

    const totalMiles = iceAgeData.reduce(
        (previousValue, currentValue) => Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    )

    return (
        <div className='Home'>
            <div>
                <h2 className='user-miles-remaining'>{`${(totalMiles - totalMilesCompleted).toFixed(1)} miles to go`}</h2>
                <div>{`${totalMilesCompleted} of ${totalMiles.toFixed(1)} miles completed`}</div>
                <div>{`${(totalNumberOfSegments - totalNumberOfCompletedSegments)} segments remaining`}</div>
                <div>{`${partialSegmentMiles} miles of partially completed segments`}</div>
            </div>

        </div>
    )
}

export default Home;