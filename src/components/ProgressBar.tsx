import { segmentStatus } from "../data/progress_data";
import { iceAgeData } from "../data/ice_age_data";

const ProgressBar = () => {
    const totalMiles = iceAgeData.reduce(
        (previousValue, currentValue) =>
            Number(previousValue) + Number(currentValue.iceagetraildistance),
        0
    );

    let totalPer = 0;

    return (
        <div>
            <div className="ProgressBar">
                {iceAgeData.map((segment:any, index) => {
                    const segmentClassName = segmentStatus[segment.segment]
                        .dateCompleted
                        ? "complete"
                        : segmentStatus[segment.segment].partial
                        ? "partial"
                        : "incomplete";

                    return <div className={segmentClassName} key={index} title={segment.segment}></div>;
                })}
            </div>
            <div className="ProgressBar ProgressBar-two">
                {iceAgeData.map((segment:any, index) => {
                    const segmentClassName = segmentStatus[segment.segment]
                        .dateCompleted
                        ? "complete"
                        : segmentStatus[segment.segment].partial
                        ? "partial"
                        : "incomplete";

                        console.log(segment)

                    const segmentWidth =
                        Number(((Number(segment.iceagetraildistance) / totalMiles) * 100).toFixed(3));
                    
                        totalPer += segmentWidth;

                        console.log(totalPer);

                    return (
                        <div
                            className={segmentClassName}
                            key={index}
                            style={{ width: segmentWidth + "%" }}
                            title={segment.segment}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProgressBar;
