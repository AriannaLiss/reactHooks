import React from 'react';
import useInput from '../hooks/useInput'

const ControlForm = () => {
    const username = useInput('');
    const password = useInput('');
    return (
        <div>
            <input {...username} type="text" placeholder='Username'/>
            <input {...password} type="password" placeholder='Password'/>
            <button onClick={() => console.log(username.value, password.value)}>Click</button>
        </div>
    );
};

export default ControlForm;