import s from './Footer.module.scss'
import React from 'react';

export const Footer = () => {
    return (
        <div className={s.footer_container}>
            <div className={s.block_1}>
                <span className={s.block_1_text_1}>{`<AdjnaTec/>`}</span>
                <span className={s.block_1_text_2}>Эффективные решения для перезагрузки вашего бизнеса</span>
            </div>
            <div className={s.block_2}>
                <div className={s.line}/>
                <span className={s.block_2_text_1}>@ AdjnaTec 2023</span>
            </div>
        </div>
    )
}