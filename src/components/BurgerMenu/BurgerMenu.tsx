import cn from 'classnames';
import s from './BurgerMenu.module.scss';
import cross from '../../assets/image/Header/cross.svg';
import {NavBarLinks, NavBarLinksATP} from '../Header/NavBarLinks';
import {LinkItem} from '../LinkItem/LinkItem';
import {ConnectButton} from '../ConnectButton/ConnectButton';
import {useLocation} from 'react-router-dom';
import {LinkItemProduct} from '../LinkItemProduct/LinkItemProduct';

type BurgerMenuPropsType = {
    isOpen: boolean,
    setIsOpen: VoidFunction
    activeLinkHandler: (path: string) => void
    currentURL: string
}

export const BurgerMenu = ({
                               isOpen,
                               setIsOpen,
                               activeLinkHandler,
                               currentURL
                           }: BurgerMenuPropsType) => {

    const location = useLocation();

    const pathArr = ['/our-products', '/advantages', '/documents', '/contacts']
    const isOurProductPage = pathArr.includes(location.pathname)

    const burgerMenuHandler = () => {
        setIsOpen()
    }

    const activeLinkBurgerMenuHandler = (path: string) => {
        activeLinkHandler(path)
        burgerMenuHandler()
    }

    return (
        <div className={cn(s.menu, {
                [s.menu_open]: isOpen
            }
        )}>
            <div className={s.menu_wrapper}>
                <div className={s.menu_container}>
                    <img className={s.burger_open} src={cross} alt={'cross-menu'}
                         onClick={burgerMenuHandler}/>
                    <div className={s.menu_list}>
                        {
                            isOurProductPage ? (
                                NavBarLinksATP.map((item) => {
                                    return <LinkItemProduct item={item}
                                                            currentURL={currentURL}
                                                            key={item.path}
                                                            onActivateLink={activeLinkHandler}/>
                                })
                            ) : (
                                NavBarLinks.map((item) => {
                                    return <LinkItem item={item} currentURL={currentURL}
                                                     key={item.path}
                                                     onActivateLink={activeLinkBurgerMenuHandler}/>
                                }))
                        }
                    </div>
                </div>
                <div className={s.connect_container}>
                    <span className={s.email_text}>Info@2lmfa.ru</span>
                    <ConnectButton/>
                </div>
            </div>
        </div>
    )
}