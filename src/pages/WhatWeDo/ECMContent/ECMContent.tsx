import s from './ECMContent.module.scss';
import ecm from '../../../assets/image/ECM.svg'

const tasks = [
    'Управление документами',
    'Управление образами документов',
    'Управление записями',
    'Управление Web контентом',
    'Документоориентированное взаимодействие',
    'Унификация и централизация информационных потоков и коммуникаций',
    'Создание общего информационного пространства',
    'Повышение качества и оперативности работы',
    'Повышение уровня защищенности данных',
    'Сокращение расходов на бумажные носители',
]

export const ECMContent = () => {
    return (
        <div className={s.container}>
            <div className={s.descriptionBlock}>
                <span className={s.ecmEasy}>Управление корпортивным цифровым контентом системы электронного документооборота</span>
                <img src={ecm} alt={'ecm'}/>
                <span className={s.ecmEasy}>ECM упрощают работу со всеми документами компании</span>
                <span className={s.ecmEasyDescription}>Без них все документы — договоры, акты, счета, приказы, протоколы, уведомления — готовят на бумаге, согласовывают и подписывают вручную. В ECM у каждого документа есть цифровой образ, который можно подписать и отправить по назначению, не выходя из кабинета.</span>
            </div>
            <div className={s.regionBlock}>
                <span
                    className={s.regionTitle}>Области, которые охватывает ECM‑решение:</span>
                <div className={s.circleBlock}>
                    <div className={s.circle}>
                        <span className={s.circleText}>Электронный</span>
                        <span className={s.circleText}>документооборот</span>
                    </div>
                    <div className={s.circle}>
                        <span className={s.circleText}>Веб-сайт</span>
                        <span className={s.circleText}>организации</span>
                    </div>
                    <div className={s.circle}>
                        <span className={s.circleText}>Внутренний портал</span>
                        <span className={s.circleText}>организации</span>
                    </div>
                    <div className={s.circle}>
                        <span className={s.circleText}>Внутренние</span>
                        <span className={s.circleText}>системы</span>
                        <span className={s.circleText}>коммуникаций</span>
                    </div>
                    <div className={s.circle}>
                        <span className={s.circleText}>Хранилища</span>
                        <span className={s.circleText}>контента</span>
                    </div>
                </div>
            </div>
            <div className={s.tasksBlock}>
                <span className={s.tasksTitle}>Решаемые задачи:</span>
                <div className={s.mapBlock}>
                    {
                        tasks.map((task) => {
                            return (
                                <span className={s.task} key={task}>{task}</span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}