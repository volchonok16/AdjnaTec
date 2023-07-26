import s from './POContent.module.scss'
import po from '../../../assets/image/PO.png';
import {poTypes, workTypes} from './POData';
import {WorkTypes} from './WorkTypes/WorkTypes';
import {POTypes} from './POTypes/POTypes';

export const POContent = () => {
    return (
        <div className={s.container}>
            <img src={po} alt={'po'}/>
            <p className={s.presentation}> Мы выполняем Full Stack разработку программного
                обеспечения. Ведем проект от составления требований до системного
                администрирования и поддержки.Для этого у нас есть: аналитики,
                проектировщики, дизайнеры, Back-end и Front-end программисты, техлиды,
                тестировщики, системные администраторы, менеджеры проектов.Также есть
                специалисты по схемотехнике, готовые спроектировать оборудование,
                необходимое для решения уникальных задач.Готовы организовать встречу
                стехническим директором, чтобы подробно осветить наше видение по подходу к
                разработке вашего проекта с технической стороны.</p>
            <div className={s.containerWork}>
                {
                    workTypes.map((work) => {
                        return (
                            <WorkTypes work={work} key={work.title}/>
                        )
                    })
                }
            </div>
            <span className={s.typeOfPO}>Виды разработки программного обеспечения</span>
            <div className={s.containerPO}>
                {
                    poTypes.map((po) => {
                        return (
                            <POTypes poWork={po} key={po.title}/>
                        )
                    })
                }
            </div>
        </div>
    )
}