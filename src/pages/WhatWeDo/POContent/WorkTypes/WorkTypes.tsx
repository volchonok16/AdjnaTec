import s from './WorkTypes.module.scss'
import {WorkTypesType} from '../POData';

type WorkTypesPropsType = {
    work: WorkTypesType
}

export const WorkTypes = ({work}: WorkTypesPropsType) => {

    const {title, description} = work;

    return (
        <div className={s.card}>
            <span className={s.card_title}>{title}</span>
            <span className={s.card_info}>{description}</span>
        </div>
    )
}