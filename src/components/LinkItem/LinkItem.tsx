import {Link} from 'react-router-dom'
import {NavBarLinksType} from '../Header/NavBarLinks';
import s from './LinkItem.module.scss'
import cn from 'classnames'

type LinkItemPropsType = {
    item: NavBarLinksType;
    currentURL:string;
    onActivateLink: (path: string) => void;
}

export const LinkItem = ({item, onActivateLink, currentURL}: LinkItemPropsType) => {

    const {path, title} = item;

    const handleClick = () => onActivateLink(path);

    return (
        <Link className={s.link} to={path} onClick={handleClick}>
            <span className={cn(s.linkText, {
                [s.linkText_active]: currentURL===path
            })}>{title}</span>
        </Link>
    )
}