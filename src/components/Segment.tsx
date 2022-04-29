import ExtraInfo from './ExtraInfo';


const Segment = ({
    segment,
    segmentLocationData
}: any) => {
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

    let eastLat = convertCoord(segmentLocationData?.eastLat),
        eastLong = convertCoord(segmentLocationData?.eastLong),
        westLat = convertCoord(segmentLocationData?.westLat),
        westLong = convertCoord(segmentLocationData?.westLong);


    return (
        <div className='Segment'>
            <h3 className='Segment-name'>{segment.segment}</h3>
            {
                segment.gallery &&
                <div className='Segment-gallery'>
                    <a target='_blank' href={segment.gallery} rel='noreferrer'>View images</a>
                </div>
            }
            <div className='Segment-summary'>{segment.summary}</div>
            <div className='Segment-info'>
                <div>{`Distance: ${segment.iceagetraildistance}`}</div>
                <div>{`Elevation: ${segment.elevation}`}</div>
                <div>{`Ruggedness: ${segment.ruggedness}`}</div>

            </div>
            <div className='Segment-map'>
                {
                    westLat &&
                    <div className='Segment-terminus-container'>
                        Western Terminus: <br /><a target='_blank' href={`https://www.google.com/maps/place/${westLat}N${westLong}W`} rel='noreferrer'>{`${segment.westernterminus} (${segmentLocationData.west_gps_id})`}</a>
                    </div>
                }
                {
                    eastLat &&
                    <div className='Segment-terminus-container'>
                        Eastern Terminus: <br /><a target='_blank' href={`https://www.google.com/maps/place/${eastLat}N${eastLong}W`} rel='noreferrer'>{`${segment.easternterminus} (${segmentLocationData.east_gps_id})`}</a>
                    </div>
                }

                {
                    westLat && eastLat &&
                    <a
                        target='_blank'
                        href={`https://www.google.com/maps/dir/${eastLat}N${eastLong}W/${westLat}N${westLong}W`}
                        rel='noreferrer'>End to End</a>
                }
            </div>
            <ExtraInfo
                potableWater={segment.potablewater}
                restrooms={segment.restrooms}
                nohiking={segment.nohiking}
            />
        </div>
    );
}

export default Segment;
