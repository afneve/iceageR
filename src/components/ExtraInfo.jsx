import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRestroom, faTint } from '@fortawesome/free-solid-svg-icons';

const ExtraInfo = ({
    potableWater,
    restrooms
}) => {
    return (
        <div className="extra-info">
            <div data-icon="potablewater" className={`segment-details ${potableWater ? 'yes' : 'no'}`}>
                {
                    potableWater ? <FontAwesomeIcon icon={faTint} color="green" /> : <FontAwesomeIcon icon={faTint} />
                }
            </div>
            <div data-icon="restrooms" className={`segment-details ${restrooms ? 'yes' : 'no'}`}>
                {
                    restrooms ? <FontAwesomeIcon icon={faRestroom} color="green" /> : <FontAwesomeIcon icon={faRestroom} />
                }
            </div>
        </div>

        // <div className="extra-info">
        //     <div>
        //         {!!segment.potablewater ?
        //             <span className="true">
        //                 <FontAwesomeIcon icon={faTint} color="green" />
        //             </span> :
        //             <FontAwesomeIcon icon={faTint} />
        //         }
        //     </div>
        //     <div>
        //         {!!segment.restrooms ?
        //             <span className="true">
        //                 <FontAwesomeIcon icon={faRestroom} color="green" />
        //             </span> :
        //             <FontAwesomeIcon icon={faRestroom} />
        //         }
        //     </div>
        // </div>
    );
}

export default ExtraInfo;