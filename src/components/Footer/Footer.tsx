import s from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={s.footerContainer}>
            <div className={s.background}/>
            <div className={s.footerContent}>
                <div className={s.content}>
                    <div className={s.textWrapper}>
                        <span className={s.companyName}>{'<AdjinaTech/>'}</span>
                        <div className={s.info}>
                            <span className={s.text}>Эффективные решения для</span>
                            <span className={s.text}>перезагрузки вашего бизнеса</span>
                        </div>

                    </div>
                    <button className={s.button}>
                        Свяжитесь с нами
                    </button>
                </div>
                <div className={s.greyLine}/>
                <div className={s.titleData}>@ AdjnaTech 2023</div>
            </div>

        </div>
    )
}