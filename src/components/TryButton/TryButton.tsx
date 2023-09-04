import s from './TryButton.module.scss'

export const TryButton = () => {

    const redirectHandler = () => {
        window.open('http://adjnatech.ru:3000', '_blank')
    }

    return (
        <button className={s.button} onClick={redirectHandler}>
            <span className={s.button_text}>Попробовать</span>
        </button>
    )
}