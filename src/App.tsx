import React, {useState} from 'react';
import {Header} from './components/Header/Header';
import {BrowserRouter} from 'react-router-dom';
import {MainPage} from './pages/MainPage/MainPage';
import {BurgerMenu} from './components/BurgerMenu/BurgerMenu';

function App() {

    const [isOpen, setIsOpen] = useState(false)

    const burgerMenuHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <BrowserRouter>
            <Header setIsOpen={burgerMenuHandler}/>
            <BurgerMenu isOpen={isOpen} setIsOpen={burgerMenuHandler}/>
            <MainPage/>
            {/*<RootContainer/>*/}
            {/*<Footer/>*/}
        </BrowserRouter>
    );
}

export default App;
