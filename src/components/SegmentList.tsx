import ExtraInfo from './ExtraInfo';
import { locationData } from '../data/segment_location_data';


interface SegmentDetails {
    [key: string]: string | number
}

interface SegmentListProps {
    segments: SegmentDetails[];
}

const SegmentList = ({
    segments
}: SegmentListProps) => {

    const convertCoord = (coord: any) => {
        if (!coord) {
            return ''
        }
        let degree = 0,
            min = 0;

        if (coord !== '') {
            coord = coord.split(' ');
            degree = parseFloat(coord[0]);
            min = parseFloat(coord[1]);

            return degree + (min / 60);
        }
    }


    return (
        <div className='segment-list'>
            {segments.map((segment: any) => {

                const [segmentLocationData] = locationData.filter((location) => {
                    // console.log(segment.orderId);
                    console.log(location.segment_id);
                    console.log(segment.orderId)
                    if (Number(location.segment_id) === segment.orderId) {
                        return true;
                    }
                    return false;
                })

                let eastLat = convertCoord(segmentLocationData?.eastLat),
                    eastLong = convertCoord(segmentLocationData?.eastLong),
                    westLat = convertCoord(segmentLocationData?.westLat),
                    westLong = convertCoord(segmentLocationData?.westLong);

                return (
                    <div
                        className='segment'
                        key={segment.segment}>
                        <h3 className='segment-name'>{segment.segment}</h3>
                        {
                            segment.gallery &&
                            <div className='galleryTest'>
                                <a target='_blank' href={segment.gallery} rel='noreferrer'>View images</a>
                            </div>
                        }
                        <div className='segment-summary'>{segment.summary}</div>
                        <div className='segment-info'>
                            <div>{`Distance: ${segment.iceagetraildistance}`}</div>
                            <div>{`Elevation: ${segment.elevation}`}</div>
                            <div>{`Ruggedness: ${segment.ruggedness}`}</div>

                        </div>
                        <div className='map'>

                            {/* if (westLat !== '') {
                            segmentHTML +=g + 'W" >' + segmentsInCounty[q].westernterminus + ' ( ' + segment_id_location_data[j].west_gps_id + ' )</a></div>';
                        }
                        if (eastLat !== '') {
                            segmentHTML += '<div class="terminus-container">Eastern Terminus: <a class="location" target="_blank" href="https://www.google.com/maps/place/' + eastLat + 'N+' + eastLong + 'W" >' + segmentsInCounty[q].easternterminus + ' ( ' + segment_id_location_data[j].east_gps_id + ' )</a></div>';
                        }
                        if (eastLat !== '' && westLat !== '') {
                            segmentHTML += '<a class="location" target="_blank" href="https://www.google.com/maps/dir/' + eastLat + 'N+' + eastLong + 'W/' + westLat + 'N+' + westLong + 'W">Beginning to End</a>';
                        } */}
                            {
                                westLat &&
                                <div className="terminus-container">
                                    Western Terminus: <br /><a className="location" target="_blank" href={`https://www.google.com/maps/place/${westLat}N${westLong}W`} rel="noreferrer">{`${segment.westernterminus} (${segmentLocationData.west_gps_id})`}</a>
                                </div>
                            }
                                                        {
                                eastLat &&
                                <div className="terminus-container">
                                    Eastern Terminus: <br /><a className="location" target="_blank" href={`https://www.google.com/maps/place/${eastLat}N${eastLong}W`} rel="noreferrer">{`${segment.easternterminus} (${segmentLocationData.east_gps_id})`}</a>
                                </div>
                            }

                            {
                                westLat && eastLat &&
                                <a 
                                    className="location"
                                    target="_blank" 
                                    href={`https://www.google.com/maps/dir/${eastLat}N${eastLong}W/${westLat}N${westLong}W`}
                                    rel="noreferrer">End to End</a>
                            }
                        </div>
                        <ExtraInfo
                            potableWater={segment.potablewater}
                            restrooms={segment.restrooms}
                            nohiking={segment.nohiking}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default SegmentList;

/*
if (segment_id_location_data[j].segment_id == segmentsInCounty[q].segment_id) {
                        var eastLat = iceAge.convertCoord(segment_id_location_data[j].eastLat),
                            eastLong = iceAge.convertCoord(segment_id_location_data[j].eastLong),
                            westLat = iceAge.convertCoord(segment_id_location_data[j].westLat),
                            westLong = iceAge.convertCoord(segment_id_location_data[j].westLong);

                        segmentHTML += '<div class="map">';
                        if (westLat !== '') {
                            segmentHTML += '<div class="terminus-container">Western Terminus: <a class="location" target="_blank" href="https://www.google.com/maps/place/' + westLat + 'N+' + westLong + 'W" >' + segmentsInCounty[q].westernterminus + ' ( ' + segment_id_location_data[j].west_gps_id + ' )</a></div>';
                        }
                        if (eastLat !== '') {
                            segmentHTML += '<div class="terminus-container">Eastern Terminus: <a class="location" target="_blank" href="https://www.google.com/maps/place/' + eastLat + 'N+' + eastLong + 'W" >' + segmentsInCounty[q].easternterminus + ' ( ' + segment_id_location_data[j].east_gps_id + ' )</a></div>';
                        }
                        if (eastLat !== '' && westLat !== '') {
                            segmentHTML += '<a class="location" target="_blank" href="https://www.google.com/maps/dir/' + eastLat + 'N+' + eastLong + 'W/' + westLat + 'N+' + westLong + 'W">Beginning to End</a>';
                        }

                        if (iceAge.position !== '') {
                            if (westLat !== '') {
                                segmentHTML += '<div class="location-based-info">';
                                segmentHTML += '<a class="location" target="_blank" href="https://www.google.com/maps/dir/' + iceAge.position.coords.latitude + '+' + iceAge.position.coords.longitude + '/' + westLat + 'N+' + westLong + 'W">Directions to West End</a>';
                                segmentHTML += '<div class="getDistance" data-lat="' + westLat + '" data-long="' + westLong + '"></div>';
                                if (iceAge.secondaryPosition !== '') {
                                    segmentHTML += '<div class="secondary-location">'
                                    segmentHTML += '<a class="location" target="_blank" href="https://www.google.com/maps/dir/' + iceAge.secondaryPosition.latitude + '+' + iceAge.secondaryPosition.longitude + '/' + westLat + 'N+' + westLong + 'W">Secondary Directions to West End</a>';
                                    segmentHTML += '<div class="getSecondaryDistance" data-lat="' + westLat + '" data-long="' + westLong + '"></div>';
                                    segmentHTML += '</div>';
                                }
                                segmentHTML += '</div>';
                            }

                            if (eastLat !== '') {
                                segmentHTML += '<div class="location-based-info">';
                                segmentHTML += '<a class="location" target="_blank" href="https://www.google.com/maps/dir/' + iceAge.position.coords.latitude + '+' + iceAge.position.coords.longitude + '/' + eastLat + 'N+' + eastLong + 'W">Directions to East End</a>';
                                segmentHTML += '<div class="getDistance" data-lat="' + eastLat + '" data-long="' + eastLong + '"></div>';
                                if (iceAge.secondaryPosition !== '') {
                                    segmentHTML += '<div class="secondary-location">'
                                    segmentHTML += '<a class="location" target="_blank" href="https://www.google.com/maps/dir/' + iceAge.secondaryPosition.latitude + '+' + iceAge.secondaryPosition.longitude + '/' + eastLat + 'N+' + eastLong + 'W">Secondary Directions to East End</a>';
                                    segmentHTML += '<div class="getSecondaryDistance" data-lat="' + eastLat + '" data-long="' + eastLong + '"></div>';
                                    segmentHTML += '</div>';
                                }
                                segmentHTML += '</div>';
                            }

                        }

                        segmentHTML += '</div>';
                    }
















<div class='segment' data-index='1'>
<div class='average'>Distance: 7.6</div>
<div class='difficult'>Elevation: 4</div>
<div class='average'>Ruggedness: 3</div>
<div>Connecting route distance: 0.2</div>
<div class='atlas'>Atlas Map: 1f</div>
<div class='map'>
    <div class='terminus-container'>
        Western Terminus: <a class='location' target='_blank' href='https://www.google.com/maps/place/45.39965N+92.64955W'>Ice Age Trail Western Terminus in Interstate State Park ( BP27 )</a>
    </div>
    <div class='terminus-container'>
        Eastern Terminus: <a class='location' target='_blank' href='https://www.google.com/maps/place/45.45001666666667N+92.64881666666666W'>River Rd. ( BP18 )</a>
    </div>
    <a class='location' target='_blank' href='https://www.google.com/maps/dir/45.45001666666667N+92.64881666666666W/45.39965N+92.64955W'>Beginning to End</a>
    <div class='location-based-info'>
        <a class='location' target='_blank' href='https://www.google.com/maps/dir/44.9490261+-89.69986209999999/45.39965N+92.64955W'>Directions to West End</a><div class='getDistance' data-lat='45.39965' data-long='92.64955'>
    </div>
    </div>
    <div class='location-based-info'>
        <a class='location' target='_blank' href='https://www.google.com/maps/dir/44.9490261+-89.69986209999999/45.45001666666667N+92.64881666666666W'>Directions to East End</a><div class='getDistance' data-lat='45.45001666666667' data-long='92.64881666666666'></div></div></div></div>

    <div class='extra-info'>
        <div data-icon='potablewater' class='yes segment-details'><i class='fas fa-tint'></i></div>
        <div data-icon='restrooms' class='yes segment-details'><i class='fas fa-restroom'></i></div>
    </div>
</div>
*/
