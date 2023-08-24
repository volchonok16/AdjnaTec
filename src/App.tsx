import React, {useReducer, useState} from 'react';
import {Header} from './components/Header/Header';
import {BrowserRouter} from 'react-router-dom';
import {BurgerMenu} from './components/BurgerMenu/BurgerMenu';
import {NavBarLinks, NavBarLinksType} from './components/Header/NavBarLinks';
import {Footer} from './components/Footer/Footer';
import {RootContainer} from './components/RootContainer/RootContainer';

function createInitialState(data: NavBarLinksType[]) {
    const initialState: Record<string, boolean> = {};
    data.forEach((link) => {
        initialState[link.path] = false;
    });

    return initialState;
}

function reducer(
    state: Record<string, boolean>,
    action: { type: string; payload: string }
) {
    const newInitialState = {...state};
    switch (action.type) {
        case 'ACTIVATE_LINK':
            Object.keys(newInitialState).forEach(
                (key) => (newInitialState[key] = false)
            );
            newInitialState[action.payload] = true;
            return newInitialState;
        case 'DEACTIVATE_LINK':
            newInitialState[action.payload] = false;
            return newInitialState;
        default:
            return state;
    }
}

function App() {

    const [isOpen, setIsOpen] = useState(false)

    const [state, dispatch] = useReducer(
        reducer,
        createInitialState(NavBarLinks)
    );

    const activeLinkHandler = (path: string) => {
        if (!state[path]) {
            dispatch({type: 'ACTIVATE_LINK', payload: path});
        } else {
            dispatch({type: 'DEACTIVATE_LINK', payload: path});
        }
    };

    const currentURL = window.location.pathname

    const burgerMenuHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <BrowserRouter>
            <Header
                setIsOpen={burgerMenuHandler}
                currentURL={currentURL}
                activeLinkHandler={activeLinkHandler}/>
            <BurgerMenu
                isOpen={isOpen}
                setIsOpen={burgerMenuHandler}
                currentURL={currentURL}
                activeLinkHandler={activeLinkHandler}/>
            <RootContainer/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
