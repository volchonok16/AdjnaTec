import cn from 'classnames';
import s from './BurgerMenu.module.scss';
import {NavBarLinks, NavBarLinksATP, pathArr} from '../Header/NavBarLinks';
import {LinkItem} from '../LinkItem/LinkItem';
import {ConnectButton} from '../ConnectButton/ConnectButton';
import {useLocation} from 'react-router-dom';
import {LinkItemProduct} from '../LinkItemProduct/LinkItemProduct';
import React, {useState} from 'react';
import {Modal} from '../Modal/Modal';
import {ConnectForm} from '../../pages/MainPage/ConnectForm/ConnectForm';
import {BurgerCrossIcon} from '../Icons/BurgerCrossIcon';
import {YouTubeIcon} from '../Icons/YouTubeIcon';
import {TelegramIcon} from '../Icons/TelegramIcon';
import {VkontakteIcon} from '../Icons/VkontakteIcon';
import {WhatsAppIcon} from '../Icons/WhatsAppIcon';

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

    const [isModalOpen, setIsModalOpen] = useState(false)

    const modalHandler = () => {
        setIsModalOpen(!isModalOpen)
    }

    const isOurProductPage = pathArr.includes(location.pathname)

    const burgerMenuHandler = () => {
        setIsOpen()
    }

    const activeLinkBurgerMenuHandler = (path: string) => {
        setIsOpen()
        activeLinkHandler(path)

    }

    return (
        <div className={cn(s.menu, {
                [s.menu_open]: isOpen
            }
        )}>
            <div className={s.menu_wrapper}>
                <div className={s.menu_container}>
                    <BurgerCrossIcon
                        className={cn(s.burger_open, {
                            [s.burger_open_atp]: isOurProductPage
                        })} onClick={burgerMenuHandler}/>
                    <div className={s.menu_list}>
                        {
                            isOurProductPage ? (
                                NavBarLinksATP.map((item) => {
                                    return <LinkItemProduct item={item}
                                                            currentURL={currentURL}
                                                            key={item.path}
                                                            onActivateLink={activeLinkBurgerMenuHandler}/>
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
                    {
                        isOurProductPage ? (
                            <>
                                <div className={s.icon_wrapper}>
                                    <YouTubeIcon className={s.icon} width={38}
                                                 height={28}/>
                                    <TelegramIcon className={s.icon} width={38}
                                                  height={28}/>
                                    <VkontakteIcon className={s.icon} width={38}
                                                   height={28}/>
                                    <WhatsAppIcon className={s.icon} width={38}
                                                  height={28}/>
                                </div>
                                <ConnectButton onClick={modalHandler} isMainPageBurgerMenu={false}/>
                            </>
                        ) : (
                            <>
                                <span className={s.email_text}>Info@2lmfa.ru</span>
                                <ConnectButton onClick={modalHandler}/>
                            </>
                        )
                    }
                </div>
            </div>
            {
                isModalOpen && (
                    <Modal onCloseModal={modalHandler}>
                        <ConnectForm closeModal={modalHandler}/>
                    </Modal>
                )
            }
        </div>
    )
}