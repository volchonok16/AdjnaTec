import s from './AboutUsContent.module.scss';
import team from '../../../assets/image/Team.png'

export const AboutUsContent = () => {
    return (
        <div className={s.container}>
            <div className={s.descriptionBlock}>
                <span className={s.info}>Мы команда экспертов в области разработки программного обеспечения. В работе используем современные технологии и устойчивые тенденции. Разрабатываем комплексные планы, которые оптимизируют бизнес-процессы и повышают эффективность деятельности наших клиентов. Создаем высококачественные и инновационные решения для наших клиентов в различных отраслях. Гарантируем — результаты нашей работы не только отвечают требованиям клиентов, но и превосходят их ожидания.</span>
                <img className={s.about_us_img} src={team} alt={'team'}/>
            </div>
            <div className={s.expertiseBlock}>
            <span className={s.text}>
Наша экспертиза позволяет создавать индивидуальные решения: мы</span>
                <span className={s.text}>используем лучший опыт крупнейших ИТ‑проектов в России</span>
            </div>
        </div>
    )
}