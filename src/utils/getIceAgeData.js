import { createSelector } from "reselect";
import { iceAgeData } from "../data/ice_age_data";
import { segmentStatus } from "../data/progress_data";

export const selectPartialSegments = createSelector(
    () => iceAgeData,
    () => segmentStatus,
    (iceAge, segmentInfo) => {
        return iceAge.filter((segment) =>
            segmentInfo[segment.segment].partial ? true : false
        );
    }
);

export const selectCompletedSegments = createSelector(
    () => iceAgeData,
    () => segmentStatus,
    (iceAge, segmentInfo) => {
        return iceAge.filter((segment) =>
            segmentInfo[segment.segment].dateCompleted ? true : false
        );
    }
);

export const selectIncompleteSegments = createSelector(
    () => iceAgeData,
    () => segmentStatus,
    (iceAge, segmentInfo) => {
        return iceAge.filter((segment) =>
            !segmentInfo[segment.segment].dateCompleted ? true : false
        );
    }
);

export const isTrailCompleted = () => {
    const totalMilesCompleted = selectCompletedSegments().reduce(
        (previousValue, currentValue) =>
            Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    );

    const totalMiles = iceAgeData.reduce(
        (previousValue, currentValue) =>
            Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    );

    console.log(totalMilesCompleted);
    console.log(totalMiles);

    return totalMilesCompleted >= totalMiles;
};
