import s from './ConnectButton.module.scss'
import arrow from '../../assets/image/MainPage/Arrow 1.svg';
import React from 'react';

export const ConnectButton = () => {
    return (
        <button className={s.button}>
            <img className={s.img} src={arrow} alt={'arrow'}/>
            <span className={s.button_text}>Связаться</span>
        </button>
    )
}