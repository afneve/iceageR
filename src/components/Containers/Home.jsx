import { iceAgeData } from '../../data/ice_age_data';
import { segmentStatus } from '../../data/progress_data';

const Home = () => {
    const totalNumberOfSegments = iceAgeData.length;
    const segmentsCompleted = iceAgeData.filter((segment, index) => {
        if (segmentStatus[segment.segment].dateCompleted) {
            return true;
        }
    });

    const partialSegments = iceAgeData.filter((segment, index) => {
        if (segmentStatus[segment.segment].partial) {
            return true;
        }
    });

    const partialSegmentMiles = partialSegments.reduce(
        (previousValue, currentValue) => Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    )

    const totalNumberOfCompletedSegments = segmentsCompleted.length;

    const totalMilesCompleted = segmentsCompleted.reduce(
        (previousValue, currentValue) => Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    )

    const totalMiles = iceAgeData.reduce(
        (previousValue, currentValue) => Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    )

    return (
        <div className="Home">
            <div>
                <h2 className="user-miles-remaining">{`${(totalMiles - totalMilesCompleted).toFixed(1)} miles to go`}</h2>
                <div>{`${totalMilesCompleted} of ${totalMiles} miles completed`}</div>
                <div>{`${(totalNumberOfSegments - totalNumberOfCompletedSegments)} segments remaining`}</div>
                <div>{`${partialSegmentMiles} miles of partially completed segments`}</div>
            </div>

        </div>
    )
}

export default Home