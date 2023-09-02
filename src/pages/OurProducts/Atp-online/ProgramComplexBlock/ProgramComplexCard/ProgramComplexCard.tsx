import s from './ProgramComplexCard.module.scss';

type ProgramComplexCardPropsType = {
    number: number
}

export const ProgramComplexCard = ({number}: ProgramComplexCardPropsType) => {
    return (
        <div className={s.program_complex_card_container}>
            <span className={s.number}>
                /{number}
            </span>
        </div>
    )
}