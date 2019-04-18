import React from 'react';

import { iceAgeData } from '../data/ice_age_data';

import SegmentList from './SegmentList';

import { matchCounties, formatCountyName } from '../utils/countyCheck';

const Segment = (props) => {
    console.log(props);
    const county = props.match.params.county;

    const countySegments = iceAgeData.filter((segment) => {
        return matchCounties(county, formatCountyName(segment.booksection)); 
    });

    console.log(countySegments);

    if (!countySegments.length === 0) {
      return <div>County doesn't have any segments</div>
    }
    return (
        <React.Fragment>
        <div 
            className="county">
                <h2 className="county-name">
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.google.com/#q= Burnett Counties+wi+weather">
                        {countySegments[0].booksection}
                    </a>
                </h2>
        </div>
        <SegmentList 
            segments={countySegments}
        />
        </React.Fragment>
    )
  }
  
export default Segment;