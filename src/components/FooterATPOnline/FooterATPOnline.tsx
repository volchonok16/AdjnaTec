import s from './FooterATPOnline.module.scss';
import logo from '../../assets/image/ATP-online/atp_logo.png';
import {Link} from 'react-router-dom';
import {RoutPath} from '../../enum';

export const FooterATPOnline = () => {
    return (
        <div className={s.footer_atp_container}>
            <div className={s.logo_container}>
                <img className={s.logo} src={logo} alt={'logo'}/>
                <span className={s.logo_text}>@ AdjnaTech 2023</span>
            </div>
            <div className={s.link_container}>
                <div className={s.link_column}>
                    <span className={s.title}>МЕНЮ</span>
                    <div className={s.link_navbar}>
                        <Link className={s.link} to={RoutPath.MainPage}>
                            <span className={s.link_text}>Главная</span>
                        </Link>
                        <Link className={s.link} to={RoutPath.AboutUs}>
                            <span className={s.link_text}>О нас</span>
                        </Link>
                        <span className={s.link_text}>Преимущества</span>
                        <span className={s.link_text}>Документы</span>
                        <span className={s.link_text}>Контакты</span>
                        <span className={s.link_text}>Сотрудничество</span>
                    </div>
                </div>
                <div className={s.link_column}>
                    <span className={s.title}>КОНТАКТЫ</span>
                    <div className={s.link_navbar}>
                        <span className={s.link_text}>+7(909) 517 55 57</span>
                        <span className={s.link_text}>info@2lmfa.ru</span>
                    </div>
                </div>
                <div className={s.link_column}>
                    <span className={s.title}>ДОКУМЕНТЫ</span>
                    <div className={s.link_navbar}>
                        <span className={s.link_text}>Функционал ПК АТП-онлайн</span>
                        <span
                            className={s.link_text}>Карта функционала персонала</span>
                        <span className={s.link_text}>Выгода от внедрения</span>
                        <span className={s.link_text}>Инструкция пользователя</span>
                        <Link className={s.link} to={RoutPath.PrivacyPolicy}>
                            <span
                                className={s.link_text}>Политика конфиденциальности</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}