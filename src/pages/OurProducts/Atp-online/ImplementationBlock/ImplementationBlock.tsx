import s from './ImplementationBlock.module.scss';

export const ImplementationBlock = () => {
    return (
        <div className={s.implementation_block_container}>
            <div className={s.text_wrapper}>
                <div className={s.text_1_wrapper}>
                 <span className={s.text_1}><span
                     className={s.text_1_blue}>ВНЕДРЕНИЕ</span> КОМПЛЕКСА В ЖИЗНЬ ПРЕДПРИЯТИЯ ИМЕЕТ <span
                     className={s.text_1_blue}>КРИТИЧЕСКИ ВАЖНОЕ ЗНАЧЕНИЕ</span></span>
                </div>
                <div className={s.text_2_wrapper}>
                    <span className={s.text_2}>Около 50% результативности работы зависит именно от внедрения. Самый лучший, золотой и трижды космический инструмент не будет работать, если им не пользоваться. То, как его будут использовать в ежедневной работе — это полностью вопрос внедрения!</span>
                </div>
            </div>
        </div>
    )
}