import cn from 'classnames';
import s from './BurgerMenu.module.scss';
import cross from '../../assets/image/Header/cross.svg';
import {NavBarLinks} from '../Header/NavBarLinks';
import {LinkItem} from '../LinkItem/LinkItem';

type BurgerMenuPropsType = {
    isOpen: boolean,
    setIsOpen: VoidFunction
    activeLinkHandler: (path: string) => void
    currentURL: string
}

export const BurgerMenu = ({
                               isOpen,
                               setIsOpen,
                               activeLinkHandler,
                               currentURL
                           }: BurgerMenuPropsType) => {

    const burgerMenuHandler = () => {
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
                    {
                        NavBarLinks.map((item) => {
                            return <LinkItem item={item} currentURL={currentURL}
                                             key={item.path}
                                             onActivateLink={activeLinkHandler}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}