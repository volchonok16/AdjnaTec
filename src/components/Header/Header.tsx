import s from './Header.module.scss';
import logo from '../../assets/image/logo.svg'


export const Header = () => {
    return (
        <div className={s.headerContainer}>
            <div className={s.logoContainer}>
                <img src={logo} alt={'logo-img'}/>
            </div>
            <div className={s.navigateContainer}>
                <div className={s.buttonsBlock}>
                    <p>Наши продукты</p>
                    <p>О нас</p>
                    <p>Связатся с нами</p>
                    <p>Делаем</p>
                    <p>Сотрудничество</p>
                </div>
                <span className={s.companyName}>{'<AdjnaTech/>'}</span>
            </div>
        </div>
    )
}