import s from './POTypes.module.scss';
import {POTypesType} from '../POData';

type POTypesPropsType = {
    poWork: POTypesType
}

export const POTypes = ({poWork}: POTypesPropsType) => {

    const {title, description} = poWork;

    return (
        <div className={s.card}>
            <div className={s.line}/>
            <div className={s.content}>
                <span className={s.title}>{title}</span>
                <span className={s.description}>{description}</span>
            </div>
        </div>
    )
}