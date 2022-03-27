import React from 'react';

import { iceAgeData } from '../data/ice_age_data';

import SegmentList from './SegmentList';

import { 
    matchCounties, 
    formatCountyName 
} from '../utils/countyCheck';

const Segment = ({
    match
}) => {
    const county = match.params.county;

    const countySegments = iceAgeData.filter((segment) => {
        return matchCounties(county, formatCountyName(segment.booksection));
    });

    if (!countySegments.length === 0) {
        return <div>County doesn't have any segments</div>
    }

    return (
        <>
            <div className="county">
                <h2 className="county-name">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://www.google.com/#q= ${countySegments[0].booksection}+wi+weather`}>
                        {countySegments[0].booksection}
                    </a>
                </h2>
            </div>
            <SegmentList
                segments={countySegments}
            />
        </>
    )
}

export default Segment;