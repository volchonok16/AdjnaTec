import React from 'react';
import {Header} from './components/Header/Header';
import {BrowserRouter} from 'react-router-dom';
import {RootContainer} from './components/RootContainer/RootContainer';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <RootContainer/>
        </BrowserRouter>
    );
}

export default App;
