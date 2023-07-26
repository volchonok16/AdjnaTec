import s from './MainPage.module.scss'
import CPM from '../../assets/image/CPM_main.png';
import CRM from '../../assets/image/CRM_main.png';
import ECM from '../../assets/image/ECM_main.png';
import PO from '../../assets/image/PO_main.png';

export const MainPage = () => {
    return (
        <div className={s.container}>
            <div className={s.productBlock}>
                <div className={s.titleWrapper}>
                    <span className={s.text1}>Эффективные решения для перезагрузки вашего бизнеса </span>
                    <span className={s.text2}>движущая  сила ваших перемен</span>
                </div>
                <div className={s.cardWrapper}>
                    <div className={s.background}/>
                    <div className={s.content}>
                        <div className={s.autoPlan}>
                            <span className={s.autoPlanText}>Автоплан</span>
                        </div>
                        <div className={s.atp_online}>
                            <span className={s.atp_text1}>Атп-онлайн</span>
                            <span className={s.atp_text2}>Учет и управление автотранспортным предприятием</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.advertBlock}>
                <span className={s.companyName}>{'<AdjnaTech/>'}</span>
            </div>
            <div className={s.workTypeBlock}>
                <span className={s.text1}>Наша  команда разработчиков аналитиков и дизайнеров имеет опыт разработки и внедрения систем контроля и автоматизации бизнесс процессов на предприятиях.Мы создадим для вас надежную систему автоматизации которая позволит ускорить работу избежать ошибок связанных с человеческим фактором и оптимировать затраты. </span>
                <span className={s.text2}>Направления деятельности</span>
                <span className={s.text3}>
Наша экспертиза позволяет создавать эффективные индивидуальные решения: мы используем лучший опыт крупнейших ИТ‑проектов в России</span>
                <div className={s.imgBlock}>
                    <img src={PO} className={s.PO_img} alt={'PO'}/>
                    <img src={ECM} className={s.ECM_img} alt={'ECM'}/>
                    <img src={CRM} className={s.CRM_img} alt={'CRM'}/>
                    <img src={CPM} className={s.CPM_img} alt={'CPM'}/>
                </div>
            </div>
        </div>
    )
}