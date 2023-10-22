import s from './Header.module.scss';
import {NavBarLinks, NavBarLinksATP, pathArr} from './NavBarLinks';
import {LinkItem} from '../LinkItem/LinkItem';
import {useLocation, useNavigate} from 'react-router-dom';
import {RoutPath} from '../../enum';
import {LinkItemProduct} from '../LinkItemProduct/LinkItemProduct';
import {HeaderBackArrowIcon} from '../Icons/HeaderBackArrowIcon';
import {BurgerIcon} from '../Icons/BurgerIcon';
import cn from 'classnames';

type HeaderPropsType = {
    setIsOpen: VoidFunction
    activeLinkHandler: (path: string) => void
    currentURL: string
}

export const Header = ({setIsOpen, activeLinkHandler, currentURL}: HeaderPropsType) => {

    const navigate = useNavigate()
    const location = useLocation();

    const isOurProductPage = pathArr.includes(location.pathname)

    const mainPageHandler = () => {
        activeLinkHandler(RoutPath.MainPage)
        navigate(RoutPath.MainPage)
    }

    const burgerMenuHandler = () => {
        setIsOpen()
    }

    return (
        <div className={s.headerContainer}>
            {
                isOurProductPage ? (
                    <HeaderBackArrowIcon className={s.back_arrow}
                                         onClick={mainPageHandler}/>
                ) : (
                    <div className={s.logo_container} onClick={mainPageHandler}/>
                )
            }
            <div className={s.buttonsBlock}>
                {
                    isOurProductPage ? (
                            NavBarLinksATP.map((item) => {
                                return <LinkItemProduct item={item} currentURL={currentURL}
                                                        key={item.path}
                                                        onActivateLink={activeLinkHandler}/>
                            }))
                        : (
                            NavBarLinks.map((item) => {
                                return <LinkItem item={item} currentURL={currentURL}
                                                 key={item.path}
                                                 onActivateLink={activeLinkHandler}/>
                            }))
                }
            </div>
            <BurgerIcon className={cn(s.burger_menu, {
                [s.burger_menu_atp]: isOurProductPage
            })} onClick={burgerMenuHandler}/>
        </div>
    )
}