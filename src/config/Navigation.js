// import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const Navigation = [
    {
        id: 'HomeNav',
        text:  <FontAwesomeIcon icon={faHome} />,
        route: '/',
        component: ''
    },
    {
        id: 'Progress',
        text: 'Progress',
        route: '/progress',
        component: ''
    },
    {
        id: 'Segments',
        text: 'Segments',
        route: '/segments',
        component: ''
    },
    {
        id: 'Stats',
        text: 'Stats',
        route: '/stats',
        component: ''
    },
    {
        id: 'Info',
        text: 'Info',
        route: '/info',
        component: ''
    }
    /*,
    {
        id: 'M',
        text: '',
        route: '',
        component: '',
        icon: faMicrophone
    }
    */
];