import ExtraInfo from "./ExtraInfo";
import { LocationData } from "../types/types";
import { segmentStatus } from "../data/progress_data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Segment = ({
    segment,
    segmentLocationData,
}: {
    segment: any;
    segmentLocationData: LocationData;
}) => {
    const convertCoord = (coord: string) => {
        let degree = 0,
            min = 0,
            coordinate = null;

        if (!coord) {
            return "";
        }

        coordinate = coord.split(" ");
        degree = parseFloat(coordinate[0]);
        min = parseFloat(coordinate[1]);

        return degree + min / 60;
    };

    let eastLat = convertCoord(segmentLocationData?.eastLat),
        eastLong = convertCoord(segmentLocationData?.eastLong),
        westLat = convertCoord(segmentLocationData?.westLat),
        westLong = convertCoord(segmentLocationData?.westLong);

    const isCompleted = segmentStatus[segment.segment].dateCompleted && true;
    const isPartial = segmentStatus[segment.segment].partial && true;
    const notes = segmentStatus[segment.segment].notes;

    return (
        <div className="Segment">
            <h3 className="Segment-name">
                <span>
                    {isCompleted ? (
                        <FontAwesomeIcon icon={faCheckCircle} />
                    ) : isPartial ? (
                        <span className="partial-warn">&#9888;</span>
                    ) : (
                        ""
                    )}
                </span>
                {segment.segment}
            </h3>
            <div className="Segment-summary">{segment.summary}</div>
            <div className="Segment-info">
                <div>{`Distance: ${segment.iceagetraildistance}`}</div>
                <div>{`Elevation: ${segment.elevation}`}</div>
                <div>{`Ruggedness: ${segment.ruggedness}`}</div>
            </div>
            <div className="Segment-map">
                {westLat && (
                    <div className="Segment-terminus-container">
                        Western Terminus: <br />
                        <a
                            target="_blank"
                            href={`https://www.google.com/maps/place/${westLat}N${westLong}W`}
                            rel="noreferrer"
                        >{`${segment.westernterminus} (${segmentLocationData.west_gps_id})`}</a>
                    </div>
                )}
                {eastLat && (
                    <div className="Segment-terminus-container">
                        Eastern Terminus: <br />
                        <a
                            target="_blank"
                            href={`https://www.google.com/maps/place/${eastLat}N${eastLong}W`}
                            rel="noreferrer"
                        >{`${segment.easternterminus} (${segmentLocationData.east_gps_id})`}</a>
                    </div>
                )}

                {westLat && eastLat && (
                    <a
                        target="_blank"
                        href={`https://www.google.com/maps/dir/${eastLat}N${eastLong}W/${westLat}N${westLong}W`}
                        rel="noreferrer"
                    >
                        End to End
                    </a>
                )}
            </div>
            <ExtraInfo
                potableWater={segment.potablewater}
                restrooms={segment.restrooms}
                nohiking={segment.nohiking}
                isPartial={isPartial}
                notes={notes}
                gallery={segment.gallery}
            />
        </div>
    );
};

export default Segment;
