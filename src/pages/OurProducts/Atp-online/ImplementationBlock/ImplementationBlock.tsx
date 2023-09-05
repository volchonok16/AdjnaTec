import s from './ImplementationBlock.module.scss';
import {StepCard} from './StepCard/StepCard';

export type StepCardData = {
    number: string;
    title: string;
    description: string,
    isArrow: boolean
}

const stepData: StepCardData[] = [
    {
        number: '01',
        title: 'Техническое внедрение',
        description: 'Отработанная пошаговая модель технического внедрения комплекса. Выполняется в групповом режиме и индивидуально. Подключение комплекса ко всем необходимым службам предприятия, настройка рабочих мест, загрузка ваших справочников и остатков по складу.',
        isArrow: true
    },
    {
        number: '02',
        title: 'Обучение',
        description: 'У нас крайне простой интерфейс, все сложности «под капотом», научиться работать с комплексом можно за пару часов. Мы проводим вебинары, обучаем, показываем, помогаем решить все вопросы об использовании комплекса, в процесс его установки, настройки, внедрения и эксплуатации.',
        isArrow: true
    },
    {
        number: '03',
        title: 'Сопровождение',
        description: 'Мы обеспечиваем постоянную техническую поддержку и улучшения комплекса. Вам не нужно дорабатывать что-либо за свой счет — обычно это не нужно совсем, но если у Вас есть хорошие предложения, то полезные функции для системы в целом мы делаем в рамках обычной поддержки.',
        isArrow: false
    },
]

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
            <div className={s.steps_wrapper}>
                {
                    stepData.map((step) => {
                        return (
                            <StepCard key={step.number} data={step}/>
                        )
                    })
                }
            </div>
        </div>
    )
}