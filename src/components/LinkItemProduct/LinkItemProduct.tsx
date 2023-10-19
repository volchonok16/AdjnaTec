import {NavLink} from 'react-router-dom'
import {NavBarLinksType} from '../Header/NavBarLinks';
import s from './LinkItemProduct.module.scss'
import cn from 'classnames'
import {Link} from 'react-scroll'

type LinkItemPropsType = {
    item: NavBarLinksType;
    currentURL: string;
    onActivateLink: (path: string) => void;
}

export const LinkItemProduct = ({
                                    item,
                                    onActivateLink,
                                    currentURL
                                }: LinkItemPropsType) => {

    const {path, title, anchor, isLink} = item;

    const handleClick = () => onActivateLink(path);

    return (
        isLink ?
            <NavLink className={s.link} to={path} onClick={handleClick}>
            <span className={cn(s.linkText, {
                [s.linkText_active]: currentURL === path
            })}>{title}</span>
            </NavLink>
            :
            <Link className={s.link} onClick={handleClick} to={anchor} smooth={true}>
                <span className={cn(s.linkText, {
                    [s.linkText_active]: currentURL === path
                })}>{title}</span>
            </Link>
    )
}