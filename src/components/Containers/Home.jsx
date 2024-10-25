import { Link } from "react-router-dom";
import { iceAgeData } from "../../data/ice_age_data";
import { segmentStatus } from "../../data/progress_data";

import {
    selectCompletedSegments,
    selectPartialSegments,
} from "../../utils/getIceAgeData";

import { isTrailCompleted } from "../../utils/getIceAgeData";

const Home = () => {
    const completedSegments = selectCompletedSegments();
    const partialSegments = selectPartialSegments();
    const isTrailComplete = isTrailCompleted();

    const totalNumberOfSegments = iceAgeData.length;
    const totalNumberOfCompletedSegments = completedSegments.length;

    const partialSegmentMiles = partialSegments.reduce(
        (previousValue, currentValue) =>
            Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    );

    let totalMilesCompleted = completedSegments.reduce(
        (previousValue, currentValue) =>
            Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    );

    const segmentStatusData = Object.values(segmentStatus);

    totalMilesCompleted += segmentStatusData
        .filter((segment) => segment.partialMiles)
        .reduce((previousValue, currentValue) => {
            return Number(previousValue) + Number(currentValue.partialMiles);
        }, 0);

    const totalMiles = iceAgeData.reduce(
        (previousValue, currentValue) =>
            Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    );

    const uniqueHikingDays = countUniqueHikingDays(segmentStatus);

    const { earliestHike, latestHike } =
        findEarliestAndLatestDates(segmentStatus);

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
                    {/* <p>
                        <strong>{`${partialSegmentMiles.toFixed(1)}`}</strong>{" "}
                        miles of partially completed segments
                    </p> */}
                </div>
            )}
            {isTrailComplete && (
                // [Review your journey] | [Plan your next adventure]
                <>
                    <div className="complete">
                        <h2 className="user-miles-remaining">
                            Trail complete!
                        </h2>
                        <div className="test-stats">
                            <div className="test-stats-section">
                                <div className="big-stat">
                                    <strong>{`${totalMilesCompleted.toFixed(
                                        1
                                    )}`}</strong>
                                </div>
                                <div>
                                    <p> miles hiked</p>
                                </div>
                            </div>
                            <div className="test-stats-section">
                                <div className="big-stat">
                                    <strong>{`${totalNumberOfCompletedSegments}`}</strong>
                                </div>
                                <div>
                                    <p>segments completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="test-stats">
                            <div className="test-stats-section">
                                <div className="big-stat">
                                    <strong>{`${uniqueHikingDays}`}</strong>
                                </div>
                                <div>
                                    <p>days of hiking</p>
                                </div>
                            </div>
                            <div className="test-stats-section">
                                <div className="big-stat">
                                    <strong>{earliestHike}</strong>
                                </div>
                                <div>
                                    <p>First segment completed</p>
                                </div>
                            </div>
                            <div className="test-stats-section">
                                <div className="big-stat">
                                    <strong>{latestHike}</strong>
                                </div>
                                <div>
                                    <p>Last segment completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/bonus" className="bonus-hikes-button">
                        Bonus hikes
                    </Link>
                </>
            )}
        </div>
    );
};

function countUniqueHikingDays(hikes) {
    const uniqueDates = new Set();

    Object.values(hikes).forEach((hike) => {
        uniqueDates.add(hike.dateCompleted);
    });

    return uniqueDates.size;
}

function findEarliestAndLatestDates(hikes) {
    const dates = Object.values(hikes).map(
        (hike) => new Date(hike.dateCompleted)
    );

    const earliestHike = new Date(Math.min(...dates));
    const latestHike = new Date(Math.max(...dates));

    return {
        earliestHike: earliestHike.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
        latestHike: latestHike.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
    };
}

export default Home;
