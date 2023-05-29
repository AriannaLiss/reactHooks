import React, { useState } from 'react';
import useDebounce from './hooks/useDebounce';
import { get } from './utils/functions';

const App = () => {

    const [value, setValue] = useState('')
    const debouncedCallback = useDebounce(search, 500)

    function search(query){
        get('https://jsonplaceholder.typicode.com/todos?query='+query)
        .then(json=>console.log(json))
    }

    const onChange = e => {
        setValue(e.target.value);
        debouncedCallback(e.target.value)
    }

    return (
        <div>
            <input id='search' value={value} onChange={onChange} type='text'/>
        </div>
    );
};

export default App;