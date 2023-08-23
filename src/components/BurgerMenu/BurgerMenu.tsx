import cn from 'classnames';
import s from './BurgerMenu.module.scss';
import cross from '../../assets/image/Header/cross.svg';

type BurgerMenuPropsType = {
    isOpen: boolean,
    setIsOpen: VoidFunction
}

export const BurgerMenu = ({isOpen, setIsOpen}: BurgerMenuPropsType) => {

    const burgerMenuHandler = ()=>{
        setIsOpen()
    }

    return (
        <div className={cn(s.menu, {
                [s.menu_open]: isOpen
            }
        )}>
            <div className={s.menu_container}>
                <img className={s.burger_open} src={cross} alt={'cross-menu'}
                     onClick={burgerMenuHandler}/>
                <div className={s.menu_list}>
                    <span>Наши продукты</span>
                    <span>О нас</span>
                    <span>Связатся с нами</span>
                    <span>Делаем</span>
                    <span>Сотрудничество</span>
                </div>
            </div>
        </div>
    )
}