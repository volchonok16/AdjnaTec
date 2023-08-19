import s from './Header.module.scss';
import logo from '../../assets/image/Header/color_logo.svg'
import burger from '../../assets/image/Header/burger.svg'
import {NavBarLinks, NavBarLinksType} from './NavBarLinks';
import {LinkItem} from '../LinkItem/LinkItem';
import {useNavigate} from 'react-router-dom';
import {RoutPath} from '../../enum';
import {useReducer} from 'react'

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


export const Header = () => {

    const navigate = useNavigate()

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

    const mainPageHandler = () => {
        activeLinkHandler(RoutPath.MainPage)
        navigate(RoutPath.MainPage)
    }

    const currentURL = window.location.pathname

    return (
        <div className={s.headerContainer}>
            <div className={s.logo_container}>
                <img src={logo} alt={'logo-img'} className={s.logo}
                     onClick={mainPageHandler}/>
            </div>
            <div className={s.buttonsBlock}>
                {
                    NavBarLinks.map((item) => {
                        return <LinkItem item={item} currentURL={currentURL}
                                         key={item.path}
                                         onActivateLink={activeLinkHandler}/>
                    })
                }
            </div>
            <img className={s.burger_menu} src={burger} alt={'burger menu'}/>
        </div>
    )
}