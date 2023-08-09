import React from 'react';
import {Header} from './components/Header/Header';
import {BrowserRouter} from 'react-router-dom';
import {MainPage} from './pages/MainPage/MainPage';

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <MainPage/>
            {/*<RootContainer/>*/}
            {/*<Footer/>*/}
        </BrowserRouter>
    );
}

export default App;
