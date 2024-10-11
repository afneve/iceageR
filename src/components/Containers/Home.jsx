import { Link } from "react-router-dom";
import { iceAgeData } from "../../data/ice_age_data";

import {
    selectCompletedSegments,
    selectPartialSegments,
} from "../../utils/getIceAgeData";

import { isTrailCompleted } from "../../utils/getIceAgeData";

const Home = () => {
    const completedSegments = selectCompletedSegments();
    const partialSegments = selectPartialSegments();
    const isTrailComplete = false;
    // const isTrailComplete = isTrailCompleted();

    const totalNumberOfSegments = iceAgeData.length;
    const totalNumberOfCompletedSegments = completedSegments.length;

    const partialSegmentMiles = partialSegments.reduce(
        (previousValue, currentValue) =>
            Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    );

    const totalMilesCompleted = completedSegments.reduce(
        (previousValue, currentValue) =>
            Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    );

    const totalMiles = iceAgeData.reduce(
        (previousValue, currentValue) =>
            Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    );

    return (
        <div className="Home">
            {!isTrailComplete && (
                <div>
                    <h2 className="user-miles-remaining">
                        <strong>{`${(totalMiles - totalMilesCompleted).toFixed(
                            1
                        )} `}</strong>{" "}
                        miles to go
                    </h2>
                    <p>
                        <strong>{`${totalMilesCompleted.toFixed(1)}`}</strong>{" "}
                        of <strong>{`${totalMiles.toFixed(1)}`}</strong> miles
                        completed (
                        <strong>{`${(
                            (totalMilesCompleted / totalMiles.toFixed(1)) *
                            100
                        ).toFixed(1)}%`}</strong>
                        )
                    </p>
                    <p>
                        <strong>{`${
                            totalNumberOfSegments -
                            totalNumberOfCompletedSegments
                        }`}</strong>{" "}
                        segments remaining
                    </p>
                    <p>
                        <strong>{`${partialSegmentMiles.toFixed(1)}`}</strong>{" "}
                        miles of partially completed segments
                    </p>
                </div>
            )}
            {isTrailComplete && (
                // [Review your journey] | [Plan your next adventure]
                <>
                    <div>
                        <h2 className="user-miles-remaining">
                            Trail complete!
                        </h2>
                        <p>
                            <strong>{`${totalMilesCompleted.toFixed(
                                1
                            )}`}</strong>{" "}
                            miles hiked
                        </p>
                        <p>
                            <strong>{`${totalNumberOfCompletedSegments}`}</strong>{" "}
                            segments completed
                        </p>
                        <p>
                            <strong>{`${totalNumberOfCompletedSegments}`}</strong>{" "}
                            days of hiking
                        </p>
                        <p>First segment completed on October 10, 2022</p>
                        <p>Last segment completed on October 10, 2024</p>
                        <p>Photos: Coming soon</p>
                    </div>
                    <Link to="/bonus" className="bonus-hikes-button">
                        Bonus hikes
                    </Link>
                </>
            )}
        </div>
    );
};

export default Home;
