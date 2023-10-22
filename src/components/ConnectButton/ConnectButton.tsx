import s from './ConnectButton.module.scss'
import arrow from '../../assets/image/MainPage/Arrow 1.svg';
import React from 'react';
import cn from 'classnames';

type ConnectButtonPropsType = {
    onClick?: VoidFunction
    isMainPageForm?: boolean
    isDisabled?: boolean
    isMainPageBurgerMenu?: boolean
}

export const ConnectButton = ({
                                  onClick,
                                  isMainPageForm = false,
                                  isDisabled = false,
                                  isMainPageBurgerMenu = true
                              }: ConnectButtonPropsType) => {
    return (
        <button className={cn(s.button, {
            [s.button_atp_burger_menu]: !isMainPageBurgerMenu,
            [s.button_main_page_form]: isMainPageForm
        })} onClick={onClick} disabled={isDisabled} id={'connect-button'}>
            {isMainPageBurgerMenu && <img className={s.img} src={arrow} alt={'arrow'}/>}
            <span className={s.button_text}>Связаться</span>
        </button>
    )
}