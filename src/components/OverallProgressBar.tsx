import { segmentStatus } from '../data/progress_data';

const OverallProgressBar = ({
    iceAgeData
}: any) => {
    return (
        <div className='progress-info container'>
            <div className='box'>
            {
                iceAgeData.map((segment:any, index:any) => {
                    if (segmentStatus[segment.segment].dateCompleted) {
                        return (<div className='complete' key={index}></div>);
                    } else {
                        return (<div className='incomplete' key={index}></div>);
                    } 
                })
            }
            </div>
        </div>
    );
}

export default OverallProgressBar;