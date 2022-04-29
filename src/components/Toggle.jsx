import { useState } from 'react';

import Switch from "react-switch";


const Toggle = ({
    name,
    label
}) => {
    const stateFromStorage = (localStorage.getItem(name) === 'true');

    const [checked, setChecked] = useState(stateFromStorage ? stateFromStorage : false);

    const onChange = () => {
        const body = document.body;

        if (checked) {
            localStorage.removeItem(name);
            body.classList.remove(name);
            setChecked(false);

        } else {
            localStorage.setItem(name, true)
            body.classList.add(name);
            setChecked(true);
        }
    };

    return (
        <div className='Toggle'>
            <label className='' htmlFor={name}>
                <div>{label}:</div>
                <Switch 
                    id={name}
                    onChange={onChange}
                    checked={checked} 
                    onColor='#0C78C5'
                    uncheckedIcon={false}
                    checkedIcon={false}
                />
            </label>
        </div>
    );
}

export default Toggle