import s from './Header.module.scss';
import burger from '../../assets/image/Header/burger.svg'
import back_arrow from '../../assets/image/Header/back_arrow.svg'
import {NavBarLinks, NavBarLinksATP} from './NavBarLinks';
import {LinkItem} from '../LinkItem/LinkItem';
import {useLocation, useNavigate} from 'react-router-dom';
import {RoutPath} from '../../enum';
import {LinkItemProduct} from '../LinkItemProduct/LinkItemProduct';

type HeaderPropsType = {
    setIsOpen: VoidFunction
    activeLinkHandler: (path: string) => void
    currentURL: string
}

export const Header = ({setIsOpen, activeLinkHandler, currentURL}: HeaderPropsType) => {

    const navigate = useNavigate()
    const location = useLocation();

    const pathArr = ['/our-products', '/advantages', '/documents', '/contacts']
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
                    <img className={s.back_arrow} src={back_arrow} alt={'back-arrow'}
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
            <img className={s.burger_menu} src={burger} alt={'burger menu'}
                 onClick={burgerMenuHandler}/>
        </div>
    )
}