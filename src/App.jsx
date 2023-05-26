import React, { useRef, useState } from 'react';
import ControlForm from './components/ControlForm';
import Hover from './components/Hover';
import useHover from './hooks/useHover';

const App = () => {

    return (
        <div>
            <ControlForm/>
            <Hover/>
        </div>
    );
};

export default App;