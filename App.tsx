import React from 'react';
import { StatusBar } from 'react-native';

import { Home } from './src/pages/Home';

// StatusBar
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS_IOS = ['fade', 'slide', 'none'];

const App = () => {
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#121015"
            >

            </StatusBar>

            <Home />

        </>
    )
}

export default App;



