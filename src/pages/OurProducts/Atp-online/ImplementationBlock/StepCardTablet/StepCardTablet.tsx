import s from './StepCardTablet.module.scss';
import {StepCardData} from '../ImplementationBlock';

type StepCardTabletPropsType = {
    data: StepCardData
}

export const StepCardTablet = ({data}: StepCardTabletPropsType) => {

    const {number, title, description, flexStart} = data;

    const isFlexStart = flexStart ? 'normal' : 'flex-end'

    return (
        <div className={s.step_card_tablet_container} style={{alignItems: isFlexStart}}>
            <div className={s.card_tablet_wrapper}>
                <div className={s.title_wrapper_tablet}>
                    <span className={s.number_tablet}>{number}</span>
                    <span className={s.title_tablet}>{title}</span>
                </div>
                <span className={s.description_tablet}>{description}</span>
            </div>
        </div>
    )
}