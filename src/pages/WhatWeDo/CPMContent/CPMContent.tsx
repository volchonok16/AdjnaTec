import s from './CPMContent.module.scss'
import cpm from '../../../assets/image/CPM.png';

export const CPMContent = () => {
    return (
        <div className={s.container}>
            <div className={s.resourceBlock}>
                <img src={cpm} alt={'cpm'}/>
                <span className={s.resourceText}>
                    Ресурсы в любой компании всегда ограничены, поэтому рассматривается
  не только задача достижения целей (результативность), но и совокупный
 экономический эффект (эффективность). Это требует создания и
  систематического применения соответствующих моделей.Основными
 моделями, применяемыми в CPM, являются:
                </span>
            </div>
            <div className={s.ideaBlock}>
                <span className={s.ideaTitle}>Основная идея CPM – это организация непрерывного цикла управления на трех уровнях</span>
                <div className={s.descriptionBlock}>
                <span className={s.text}>Подход CPM декларирует объединение всех ресурсов компании для достижения стратегических целей.
Это означает совместную работу финансовой, маркетинговой, производственной, ИТ и других вертикалей над
 формулированием и исполнением стратегии. Ресурсы в любой компании всегда ограничены, поэтому рассматривается
не только задача достижения целей (результативность), но и совокупный экономический эффект (эффективность).
 Это требует создания и систематического применения соответствующих моделей. Основными моделями, применяемыми
 в CPM, являются: </span>
                </div>
                <div className={s.circleBlock}>
                    <div className={s.circle}>
                        <span className={s.circleText}>Модель</span>
                        <span className={s.circleText}>стратегии</span>
                    </div>
                    <div className={s.circle}>
                        <span className={s.circleText}>Модель</span>
                        <span className={s.circleText}>процессов</span>
                    </div>
                    <div className={s.circle}>
                        <span className={s.circleText}>Финансовая</span>
                        <span className={s.circleText}>модель</span>
                    </div>
                </div>
            </div>
        </div>
    )
}