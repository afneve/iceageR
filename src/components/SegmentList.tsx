import Segment from './Segment';
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
    return (
        <div className='SegmentList'>
            {segments.map((segment: any) => {

                const [segmentLocationData] = locationData.filter((location) => {
                    if (Number(location.segment_id) === segment.orderId) {
                        return true;
                    }
                    return false;
                })

                return (
                    <Segment 
                        segment={segment}
                        segmentLocationData={segmentLocationData}
                        key={segment.segment}
                    />
                );
            })}
        </div>
    );
}

export default SegmentList;
