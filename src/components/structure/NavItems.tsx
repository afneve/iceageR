import { NavLink } from "react-router-dom";

/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
*/

import { isTrailCompleted } from "../../utils/getIceAgeData";

import { Navigation } from "../../config/Navigation";

const NavItems = () => {
    // const handleMicrophoneClick = () => {};

    const isTrailComplete: any = isTrailCompleted();

    console.log(isTrailComplete);

    return (
        <>
            {Navigation.filter(
                (nav) =>
                    !nav.shouldOnlyDisplayWhenTrailCompleted ||
                    (nav.shouldOnlyDisplayWhenTrailCompleted && isTrailComplete)
            ).map((nav, index) => {
                return (
                    <NavLink
                        id={nav.id}
                        key={nav.id}
                        to={nav.route}
                        className={({ isActive }) =>
                            "nav-item" + (isActive ? " selected" : "")
                        }
                        //exact={nav.route === '/' ? true : false}>
                    >
                        {nav.text}
                    </NavLink>
                );
            })}
        </>

        /*
			<NavLink onClick={this.handleMicrophoneClick} id='microphone' to='/microphone' activeclassname='selected' className='nav-item'>
				<FontAwesomeIcon icon={faMicrophone} />
			</NavLink>
		*/
    );
};

export default NavItems;
