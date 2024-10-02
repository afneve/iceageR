// import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfoCircle,
    faHome,
    faPersonHiking,
} from "@fortawesome/free-solid-svg-icons";

export const Navigation = [
    {
        id: "HomeNav",
        text: <FontAwesomeIcon icon={faHome} />,
        route: "/",
        component: "",
    },
    {
        id: "Progress",
        text: "Progress",
        route: "/progress",
        component: "",
    },
    {
        id: "Segments",
        text: "Segments",
        route: "/segments",
        component: "",
    },
    {
        id: "Stats",
        text: "Stats",
        route: "/stats",
        component: "",
    },
    {
        id: "Info",
        text: <FontAwesomeIcon icon={faInfoCircle} />,
        route: "/info",
        component: "",
    },
    {
        id: "Extra",
        text: <FontAwesomeIcon icon={faPersonHiking} />,
        route: "/extra",
        component: "",
        shouldOnlyDisplayWhenTrailCompleted: true,
    },
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
