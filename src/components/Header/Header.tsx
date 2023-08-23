import s from './Header.module.scss';
import burger from '../../assets/image/Header/burger.svg'
/*import cross from '../../assets/image/Header/cross.svg'*/
import {NavBarLinks, NavBarLinksType} from './NavBarLinks';
import {LinkItem} from '../LinkItem/LinkItem';
import {useNavigate} from 'react-router-dom';
import {RoutPath} from '../../enum';
import {useReducer} from 'react'
/*import cn from 'classnames';*/

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

type HeaderPropsType = {
    setIsOpen: VoidFunction
}

export const Header = ({setIsOpen}: HeaderPropsType) => {

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

     const burgerMenuHandler = () => {
         setIsOpen()
     }

    return (
        <div className={s.headerContainer}>
            <div className={s.logo_container} onClick={mainPageHandler}/>
            <div className={s.buttonsBlock}>
                {
                    NavBarLinks.map((item) => {
                        return <LinkItem item={item} currentURL={currentURL}
                                         key={item.path}
                                         onActivateLink={activeLinkHandler}/>
                    })
                }
            </div>
            <img className={s.burger_menu} src={burger} alt={'burger menu'}
                 onClick={burgerMenuHandler}/>
            {/*<div className={cn(s.menu, {
                    [s.menu_open]: isOpen
                }
            )}>
                <img className={s.burger_open} src={cross} alt={'cross-menu'}
                     onClick={burgerMenuHandler}/>
                <div className={s.menu_list}>
                    <span>Наши продукты</span>
                    <span>О нас</span>
                    <span>Связатся с нами</span>
                    <span>Делаем</span>
                    <span>Сотрудничество</span>
                </div>
            </div>*/}
        </div>
    )
}