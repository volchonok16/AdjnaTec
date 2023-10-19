import s from './FooterATPOnline.module.scss';
import logo from '../../assets/image/ATP-online/atp_logo.png';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-scroll'
import {Anchor, RoutPath} from '../../enum';

export const FooterATPOnline = () => {
    return (
        <div className={s.footer_atp_container} id={Anchor.CONTACTS}>
            <div className={s.logo_container}>
                <img className={s.logo} src={logo} alt={'logo'}/>
                <span className={s.logo_text}>@ AdjnaTec 2023</span>
            </div>
            <div className={s.link_column_mobile}>
                <span className={s.title}>КОНТАКТЫ</span>
                <div className={s.link_navbar}>
                    <span className={s.link_text}>+7(909) 517 55 57</span>
                    <span className={s.link_text}>info@2lmfa.ru</span>
                </div>
            </div>
            <div className={s.link_container}>
                <div className={s.link_column}>
                    <span className={s.title}>МЕНЮ</span>
                    <div className={s.link_navbar}>
                        <NavLink className={s.link} to={RoutPath.MainPage}>
                            <span className={s.link_text}>Главная</span>
                        </NavLink>
                        <NavLink className={s.link} to={RoutPath.AboutUs}>
                            <span className={s.link_text}>О нас</span>
                        </NavLink>
                        <Link className={s.link_text} to={Anchor.ADVANTAGES}
                              smooth={true}>Преимущества</Link>
                        <Link className={s.link_text} to={Anchor.DOCUMENTS}
                              smooth={true}>Документы</Link>
                        <Link className={s.link_text} to={Anchor.CONTACTS}
                              smooth={true}>Контакты</Link>
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
                        <Link className={s.link_text} to={Anchor.DOCUMENTS} smooth={true}>Функционал
                            ПК АТП-онлайн</Link>
                        <Link
                            className={s.link_text} to={Anchor.DOCUMENTS} smooth={true}>Карта
                            функционала персонала</Link>
                        <Link className={s.link_text} to={Anchor.DOCUMENTS} smooth={true}>Выгода
                            от внедрения</Link>
                        <Link className={s.link_text} to={Anchor.DOCUMENTS} smooth={true}>Инструкция
                            пользователя</Link>
                        <NavLink className={s.link} to={RoutPath.PrivacyPolicy}>
                            <span
                                className={s.link_text}>Политика конфиденциальности</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}