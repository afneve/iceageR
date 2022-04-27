import { useState } from 'react';

const Toggle = ({
    name,
}) => {
    const darkMode = (localStorage.getItem('darkMode') === 'true');

    const [checked, setChecked] = useState(darkMode ? darkMode : false);


    const onChange = () => {
        const body = document.body;

        if (checked) {
            localStorage.removeItem('darkMode');
            body.classList.remove('darkMode');
            setChecked(false);

        } else {
            localStorage.setItem('darkMode', true)
            body.classList.add('darkMode');
            setChecked(true);

        }
    };

    console.log(checked);

    return (
        <div className='toggle-switch'>
            <label className='' htmlFor={name}>
                Dark Mode:
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
    );
}

export default Toggle