import { bonusHikes } from "../../data/bonus_hikes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Bonus = () => {
    return (
        <div className="Bonus">
            <h2>Bonus hikes</h2>
            {bonusHikes.map((hike) => {
                return (
                    hike.segment && (
                        <div className="Segment">
                            <h3 className="Segment-name">
                                <span>
                                    {hike.isComplete && (
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    )}
                                </span>
                                {hike.segment}

                                {hike.newSegment && (
                                    <span className="Segment-tag">
                                        New segment
                                    </span>
                                )}
                            </h3>
                            <div className="Segment-summary">
                                {hike.summary}
                            </div>
                            <div className="Segment-info">
                                <div>{`County: ${hike.booksection}`}</div>
                                <div>{`Distance: ${hike.iceagetraildistance}`}</div>
                                <div>{`Elevation: ${hike.elevation}`}</div>
                                <div>{`Ruggedness: ${hike.ruggedness}`}</div>
                            </div>
                        </div>
                    )
                );
            })}
        </div>
    );
};

export default Bonus;
