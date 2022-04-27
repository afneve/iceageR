import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRestroom, faTint } from '@fortawesome/free-solid-svg-icons';

import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: 'black',
      width: '50%'
    },
  };

Modal.setAppElement('#root');

const ExtraInfo = ({
    potableWater,
    restrooms,
    nohiking
}: {
    potableWater: string,
    restrooms: string,
    nohiking: string
}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalText, setModalText] = useState('');

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleClick = (text: string) => {
        setModalText(text);
        openModal();
    };

    const noHikingLower: string = nohiking ? nohiking.toLowerCase() : '';

    if (noHikingLower.includes('deer') || noHikingLower.includes('hunt') || noHikingLower.includes('gun')) {
        console.log('Hunting');
    }
    else {
        if (noHikingLower) {
            console.log('-----------------NO HUNT');

        }
    }

    return (
        <div className='extra-info'>
            <button onClick={() => handleClick(potableWater)} aria-label='Show water info'>
                <FontAwesomeIcon icon={faTint} color={potableWater ? 'blue' : 'grey'} />
            </button>
            <button onClick={() => handleClick(restrooms)} aria-label='Show restroom info'>
                <FontAwesomeIcon icon={faRestroom} color={restrooms ? 'green' : 'grey'} />
            </button>
            {
                nohiking &&
                <div className='no-hiking'>Hiking Restrictions: {nohiking}</div>

            }
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel='Details'
                style={customStyles}
            >
                {modalText}
            </Modal>
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