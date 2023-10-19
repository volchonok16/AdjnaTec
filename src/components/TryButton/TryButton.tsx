import s from './TryButton.module.scss'
import {RedirectURL} from '../../enum';

export const TryButton = () => {

    const redirectHandler = () => {
        window.open(RedirectURL.ATPOnline, '_blank')
    }

    return (
        <button className={s.button} onClick={redirectHandler}>
            <span className={s.button_text}>Попробовать</span>
        </button>
    )
}