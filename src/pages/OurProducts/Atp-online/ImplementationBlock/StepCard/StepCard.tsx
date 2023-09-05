import s from './StepCard.module.scss'
import arrow from '../../../../../assets/image/ATP-online/green_arrow_svg.svg';
import {StepCardData} from '../ImplementationBlock';

type StepCardPropsType = {
    data: StepCardData,
}

export const StepCard = ({data}: StepCardPropsType) => {

    const {number, title, description, isArrow} = data

    return (
        <div className={s.step_card}>
            <div className={s.step_text_container}>
                <div className={s.title_wrapper}>
                    <span className={s.number_text}>{number}</span>
                    <span className={s.title_text}>{title}</span>
                </div>
                <span className={s.description}>{description}</span>
            </div>
            {
                isArrow && <img className={s.img} src={arrow} alt={'arrow-img'}/>
            }
        </div>
    )
}