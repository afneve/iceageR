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
            {/* <div className='toggle-switch'>
                <label className='' htmlFor={name}>
                    {label}:
                </label>
                <input
                    type='checkbox'
                    className='toggle-switch-checkbox'
                    checked={checked}
                    onChange={e => onChange(e.target.checked)}
                    name={name}
                    id={name}
                />
            </div> */}
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