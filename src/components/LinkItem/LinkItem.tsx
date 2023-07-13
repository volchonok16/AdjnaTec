import {Link} from 'react-router-dom'
import {NavBarLinksType} from '../Header/NavBarLinks';
import {useActiveLink} from '../../hooks/useActiveLink';
import {useEffect} from 'react';
import s from './LinkItem.module.scss'
import cn from 'classnames'

type LinkItemPropsType = {
    item: NavBarLinksType;
    activeLink: Record<string, boolean>;
    onActivateLink: (path: string) => void;
}

export const LinkItem = ({item, activeLink, onActivateLink}: LinkItemPropsType) => {

    const {path, title} = item;
    const isActiveLink = activeLink[path];
    const isActivePath = useActiveLink(path);

    useEffect(() => {
        if (!isActivePath) {
            return;
        }
        onActivateLink(path);
    }, []);

    const handleClick = () => onActivateLink(path);

    return (
        <Link className={s.link} to={path} onClick={handleClick}>
            <span className={cn(s.linkText, {
                [s.linkText_active]: isActiveLink || isActivePath
            })}>{title}</span>
        </Link>
    )
}