import s from './TryButton.module.scss'

export const TryButton = () => {
    return (
        <button className={s.button}>
            <span className={s.button_text}>Попробовать</span>
        </button>
    )
}