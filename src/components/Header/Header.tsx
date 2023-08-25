import s from './Header.module.scss';
import burger from '../../assets/image/Header/burger.svg'
import {NavBarLinks} from './NavBarLinks';
import {LinkItem} from '../LinkItem/LinkItem';
import {useNavigate} from 'react-router-dom';
import {RoutPath} from '../../enum';

type HeaderPropsType = {
    setIsOpen: VoidFunction
    activeLinkHandler: (path: string) => void
    currentURL: string
}

export const Header = ({setIsOpen, activeLinkHandler, currentURL}: HeaderPropsType) => {

    const navigate = useNavigate()

    const mainPageHandler = () => {
        activeLinkHandler(RoutPath.MainPage)
        navigate(RoutPath.MainPage)
    }

    const burgerMenuHandler = () => {
        setIsOpen()
    }

    return (
        <div className={s.headerContainer}>
            <div className={s.logo_container} onClick={mainPageHandler}/>
            {/*<div className={s.logo_container_tablet}>
                <img className={s.logo_tablet} src={logo_tablet} alt={'logo tablet'}/>
            </div>
            <div className={s.logo_container_mobile}>
                <img className={s.logo_mobile} src={logo_mobile} alt={'logo mobile'}/>
            </div>*/}
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
        </div>
    )
}