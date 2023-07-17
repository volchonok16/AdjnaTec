import s from './AboutUsContent.module.scss';
import team from '../../../assets/image/Team.png'

export const AboutUsContent = () => {
    return (
        <div className={s.container}>
            <div className={s.descriptionBlock}>
                <span className={s.info}>Мы команда разработчиков являющаяся экспертами в области создания программного обеспечения на самых современных технологиях. Мы занимаемся разработкой комплексных решений,которые помогают оптимизировать бизнес-процессы и повышать эффективность деятельности наших клиентов. Мы создаем высококачественные и инновационные решения для наших клиентов в различных отраслях. Мы гарантируем, что наши решения не только соответствуют требованиям клиентов, но и превосходят их ожидания.</span>
                <img src={team} alt={'team'}/>
            </div>
            <div className={s.expertiseBlock}>
            <span className={s.text}>
Наша экспертиза позволяет создавать эффективные индивидуальные решения:</span>
                <span className={s.text}> мы используем лучший опыт крупнейших ИТ‑проектов в России</span>
            </div>
            <div className={s.advantageBlock}>
                <span className={s.advantageTitle}>Наши преимущества:</span>
                <div className={s.circleContainer}>
                    <div className={s.circle}>
                        <span className={s.circleText}>Опыт и </span>
                        <span className={s.circleText}>проффесионализм</span>
                    </div>
                    <div className={s.circle}>
                        <span className={s.circleText}>Широкий стэк</span>
                        <span className={s.circleText}>технологий</span>
                    </div>
                    <div className={s.circle}>
                        <span className={s.circleText}>Точный,</span>
                        <span className={s.circleText}>экономичный и</span>
                        <span className={s.circleText}>честный расчет</span>
                    </div>
                    <div className={s.circle}>
                        <span className={s.circleText}>Качество</span>
                        <span className={s.circleText}>и скорость</span>
                    </div>
                    <div className={s.circle}>
                        <span className={s.circleText}>Внедрение и</span>
                        <span className={s.circleText}>сопровождение</span>
                    </div>
                </div>
            </div>
        </div>
    )
}