import { bonusHikes } from "../../data/bonus_hikes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Bonus = () => {
    return (
        <div className="Bonus">
            <h2>Bonus hikes</h2>
            {bonusHikes.map((hike, index) => {
                return (
                    hike.segment && (
                        <div className="Segment" key={index}>
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
                            <div className="Segment-map">
                                {hike.location && (
                                    <div className="Segment-terminus-container">
                                        Location on map: <br />
                                        <a
                                            target="_blank"
                                            href={hike.location}
                                            rel="noreferrer"
                                        >
                                            Map
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                );
            })}
        </div>
    );
};

export default Bonus;
