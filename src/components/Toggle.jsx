import { useState } from 'react';

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
            <div className='toggle-switch'>
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
            </div>
        </div>
    );
}

export default Toggle