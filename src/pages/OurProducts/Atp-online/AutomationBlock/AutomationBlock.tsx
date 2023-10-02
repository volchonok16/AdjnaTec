import s from './AutomationBlock.module.scss'
import automation from '../../../../assets/image/ATP-online/avtomatization.png'
import {TryButton} from '../../../../components/TryButton/TryButton';

export const AutomationBlock = () => {
    return (
        <div className={s.automation_block_container}>
            <div className={s.text_1_tablet_wrapper}>
                <div className={s.text_container}>
                    <span className={s.text_1}>
                    <span className={s.text_1_blue}>Наш девиз</span>: — «Все, что может делать машина,</span>
                    <span className={s.text_1}> <span
                        className={s.text_1_blue}>должна делать машина</span>, а не человек».
                    </span>
                </div>
            </div>
            <img className={s.img} src={automation} alt={'automation-img'}/>
            <div className={s.right_block}>
                <div className={s.text_block}>
                    <span className={s.text_1}>
                        <span className={s.text_1_blue}>Наш девиз</span>: — «Все, что может делать машина, <span
                        className={s.text_1_blue}>должна делать машина</span>, а не человек».
                    </span>
                    <span className={s.text_2}>
                        В связи с высокой степенью автоматизации процедур, алгоритмов перепроверки данных, Атп-Онлайн исключается человеческий фактор из управления.
                    </span>
                </div>
                <TryButton/>
            </div>
            <div className={s.tablet_content_container}>
                <img className={s.img_tablet} src={automation} alt={'automation-img'}/>
                <div className={s.right_block_tablet}>
                    <span className={s.text_2_tablet}>
                        В связи с высокой степенью автоматизации процедур, алгоритмов перепроверки данных, Атп-Онлайн исключается человеческий фактор из управления.
                    </span>
                    <TryButton/>
                </div>
            </div>

        </div>
    )
}