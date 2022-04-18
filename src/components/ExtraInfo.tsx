import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRestroom, faTint } from '@fortawesome/free-solid-svg-icons';

const ExtraInfo = ({
    potableWater,
    restrooms,
    nohiking
}: {
    potableWater: boolean,
    restrooms: boolean,
    nohiking: string
}) => {
    const handleClick = () => {
        console.log('click');
    };

    const noHikingLower:string = nohiking ? nohiking.toLowerCase() : '';

    if (noHikingLower.includes('deer') || noHikingLower.includes('hunt') || noHikingLower.includes('gun')) {
        console.log('Hunting');
    }
    else {
        if (noHikingLower){
        console.log('-----------------NO HUNT');

        }
    }

    return (
        <div className='extra-info'>
            <button onClick={handleClick} disabled aria-label='Show water info'>
                <FontAwesomeIcon icon={faTint} color={potableWater ? 'blue' : 'grey'} />
            </button>
            <button onClick={handleClick} disabled aria-label='Show restroom info'>
                <FontAwesomeIcon icon={faRestroom} color={restrooms ? 'green' : 'grey'} />
            </button>
            {
                nohiking &&
                <div className='no-hiking'>Hiking Restrictions: {nohiking}</div>

            }
        </div>

        // <div className='extra-info'>
        //     <div>
        //         {!!segment.potablewater ?
        //             <span className='true'>
        //                 <FontAwesomeIcon icon={faTint} color='green' />
        //             </span> :
        //             <FontAwesomeIcon icon={faTint} />
        //         }
        //     </div>
        //             </span> :
        //             <FontAwesomeIcon icon={faRestroom} />
        //         }
        //     </div>
        // </div>       //     <div>
        //         {!!segment.restrooms ?
        //             <span className='true'>
        //                 <FontAwesomeIcon icon={faRestroom} color='green' />

    );
}

export default ExtraInfo;