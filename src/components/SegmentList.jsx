import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRestroom, faTint } from '@fortawesome/free-solid-svg-icons';

class SegmentList extends Component {
    render() {
        return (
            <div className="segment-list">
                {this.props.segments.map((segment) => {
                    return (
                        <div 
                            className="segment" 
                            key={segment.segment}>
                                <h3 className="segment-name">{segment.segment}</h3>
                                <div className="segment-summary">{segment.summary}</div>
                                <div className="segment-info">
                                    <div>{`Distance: ${segment.iceagetraildistance}`}</div>
                                    <div>{`Elevation: ${segment.elevation}`}</div>
                                    <div>{`Ruggedness: ${segment.ruggedness}`}</div>
                                </div>
                                <div className="extra-info">
                                    <div>
                                        {!!segment.potablewater ? 
                                            <span className="true">
                                                <FontAwesomeIcon icon={faTint} color="green" />
                                            </span> :
                                            <FontAwesomeIcon icon={faTint} />
                                        }
                                    </div>
                                    <div>
                                        {!!segment.restrooms ? 
                                            <span className="true">
                                                <FontAwesomeIcon icon={faRestroom} color="green" /> 
                                            </span> :
                                            <FontAwesomeIcon icon={faRestroom} />
                                        }
                                    </div>
                                </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default SegmentList;

/*
<div class="segment" data-index="1">
<div class="average">Distance: 7.6</div>
<div class="difficult">Elevation: 4</div>
<div class="average">Ruggedness: 3</div>
<div>Connecting route distance: 0.2</div>
<div class="atlas">Atlas Map: 1f</div>
<div class="map">
    <div class="terminus-container">
        Western Terminus: <a class="location" target="_blank" href="https://www.google.com/maps/place/45.39965N+92.64955W">Ice Age Trail Western Terminus in Interstate State Park ( BP27 )</a>
    </div>
    <div class="terminus-container">
        Eastern Terminus: <a class="location" target="_blank" href="https://www.google.com/maps/place/45.45001666666667N+92.64881666666666W">River Rd. ( BP18 )</a>
    </div>
    <a class="location" target="_blank" href="https://www.google.com/maps/dir/45.45001666666667N+92.64881666666666W/45.39965N+92.64955W">Beginning to End</a>
    <div class="location-based-info">
        <a class="location" target="_blank" href="https://www.google.com/maps/dir/44.9490261+-89.69986209999999/45.39965N+92.64955W">Directions to West End</a><div class="getDistance" data-lat="45.39965" data-long="92.64955">
    </div>
    </div>
    <div class="location-based-info">
        <a class="location" target="_blank" href="https://www.google.com/maps/dir/44.9490261+-89.69986209999999/45.45001666666667N+92.64881666666666W">Directions to East End</a><div class="getDistance" data-lat="45.45001666666667" data-long="92.64881666666666"></div></div></div></div>

    <div class="extra-info">
        <div data-icon="potablewater" class="yes segment-details"><i class="fas fa-tint"></i></div>
        <div data-icon="restrooms" class="yes segment-details"><i class="fas fa-restroom"></i></div>
    </div>
</div>
*/
