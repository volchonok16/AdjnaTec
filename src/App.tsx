import React from 'react';
import {Header} from './components/Header/Header';
import {BrowserRouter} from 'react-router-dom';
import {RootContainer} from './components/RootContainer/RootContainer';
import {Footer} from './components/Footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <RootContainer/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
