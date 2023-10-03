import s from './ProgramComplexBlock.module.scss'
import {ProgramComplexCard} from './ProgramComplexCard/ProgramComplexCard';

type CardType = {
    number: number
    title: string[],
    description: string
}

const cardData: Record<string, CardType> = {
    1: {
        number: 1,
        title: ['Журнал механика по', 'выпуску транспорта'],
        description: 'Позволяет фиксировать выезд и заезд транспорта, замечания к его техническому состоянию'
    },
    2: {
        number: 2,
        title: ['Журнал ремонта', 'транспорта'],
        description: 'Организация и оперативный контроль ремонта транспорта, регламентных ТО, учет шин и аккумуляторов, позволяет вовремя заказывать необходимые запчасти'
    },
    3: {
        number: 3,
        title: ['Обработка', 'путевых листов'],
        description: 'Контроль эксплуатации транспорта, расходов на него, контрольные и управленческие отчеты, печать актов выполненных работ и многое другое.'
    },
    4: {
        number: 4,
        title: ['Табель'],
        description: 'Контрольные и управленческие отчеты по персоналу во всех возможных разрезах. Применяются в том числе для начисления заработной платы водителям'
    },
    5: {
        number: 5,
        title: ['Склад'],
        description: 'Приход-расход ТМЦ, распределение со склада, контролирование расхода запчастей. Позволяет выполнять бухгалтерские проводки на основе данных склада'
    },
    6: {
        number: 6,
        title: ['Разнарядка'],
        description: 'Позволяет простейшим образом создавать план выпуска техники и печатать путевые листы.'
    },
    7: {
        number: 7,
        title: ['Заявочный', 'модуль'],
        description: 'Устанавливается на стороне ваших постоянных клиентов, позволяет автоматизировать создание заявок, которые тут же будут отражаться в модуле Разнарядка.'
    },
    8: {
        number: 8,
        title: ['Управленческий', 'модуль'],
        description: 'Позволяет собрать в одном месте всю информацию, упростить формирование отчетов, отслеживать всю оперативную обстановку на предприятии из любого места,где есть интернет'
    },
    9: {
        number: 9,
        title: ['Модуль', 'водителя'],
        description: 'Позволяет водителю отмечать статус на рейсе (погрузка, опоздание, ожидание клиента и т. д.), отправлять фотографии и сообщения в чат диспетчера и обратно.'
    }
}

export const ProgramComplexBlock = () => {

    const redirectHandler = () => {
        window.open('http://adjnatech.ru:3000', '_blank')
    }

    return (
        <div className={s.program_complex_block_container}>
            <div className={s.row_container}>
                <div className={s.text_card}>
<span className={s.title_text}>
ПРОГРАММНЫЙ КОМПЛЕКС СОСТОИТ ИЗ 9 <span className={s.title_text_blue}>ВЗАИМОСВЯЗАН-НЫХ МОДУЛЕЙ</span>
</span>
                </div>
                <ProgramComplexCard
                    fontSize={'min(29px, calc(15px + 14 * ((100vw - 1024px) / 896)))'}
                    number={cardData[1].number}
                    titles={cardData[1].title}
                    description={cardData[1].description}/>
                <ProgramComplexCard
                    number={cardData[2].number}
                    titles={cardData[2].title}
                    description={cardData[2].description}/>
                <ProgramComplexCard
                    number={cardData[3].number}
                    titles={cardData[3].title}
                    description={cardData[3].description}/>
            </div>
            <div className={s.row_container}>
                <ProgramComplexCard
                    number={cardData[4].number}
                    titles={cardData[4].title}
                    description={cardData[4].description}/>
                <div className={s.text_card}>
<span className={s.description_text}>
    Эти модули обеспечивают взаимодействие, контроль и управление всеми службами АТП, максимально возможная автоматизация
и полное исключение человеческого фактора
из управления
</span>
                </div>
                <ProgramComplexCard
                    number={cardData[5].number}
                    titles={cardData[5].title}
                    description={cardData[5].description}/>
                <ProgramComplexCard
                    number={cardData[6].number}
                    titles={cardData[6].title}
                    description={cardData[6].description}/>
            </div>
            <div className={s.row_container}>
                <ProgramComplexCard
                    number={cardData[7].number}
                    titles={cardData[7].title}
                    description={cardData[7].description}/>
                <ProgramComplexCard
                    number={cardData[8].number}
                    titles={cardData[8].title}
                    description={cardData[8].description}/>
                <ProgramComplexCard
                    number={cardData[9].number}
                    titles={cardData[9].title}
                    description={cardData[9].description}/>
                <button className={s.button} onClick={redirectHandler}>
                    <span className={s.button_text}>Попробовать</span>
                </button>
            </div>
            <div className={s.text_container_tablet}>
                <div className={s.title_wrapper_tablet}>
                    <span className={s.title_tablet}>ПРОГРАММНЫЙ КОМПЛЕКС СОСТОИТ</span>
                    <span className={s.title_tablet}>ИЗ 9 <span
                        className={s.title_tablet_blue}>ВЗАИМОСВЯЗАННЫХ МОДУЛЕЙ</span></span>
                </div>
                <div className={s.description_wrapper_tablet}>
<span className={s.description_tablet}>Эти модули обеспечивают взаимодействие, контроль
и управление всеми службами АТП, максимально возможная автоматизация  и полное исключение человеческого фактора из управления</span>
                </div>
            </div>
            <div className={s.card_container_tablet}>
                <div className={s.card_row_tablet}>
                    <ProgramComplexCard
                        number={cardData[1].number}
                        titles={cardData[1].title}
                        description={cardData[1].description}/>
                    <ProgramComplexCard
                        number={cardData[2].number}
                        titles={cardData[2].title}
                        description={cardData[2].description}/>
                    <ProgramComplexCard
                        number={cardData[3].number}
                        titles={cardData[3].title}
                        description={cardData[3].description}/>
                </div>
                <div className={s.card_row_tablet}>
                    <ProgramComplexCard
                        number={cardData[4].number}
                        titles={cardData[4].title}
                        description={cardData[4].description}/>
                    <ProgramComplexCard
                        number={cardData[5].number}
                        titles={cardData[5].title}
                        description={cardData[5].description}/>
                    <ProgramComplexCard
                        number={cardData[6].number}
                        titles={cardData[6].title}
                        description={cardData[6].description}/>
                </div>
                <div className={s.card_row_tablet}>
                    <ProgramComplexCard
                        number={cardData[7].number}
                        titles={cardData[7].title}
                        description={cardData[7].description}/>
                    <ProgramComplexCard
                        number={cardData[8].number}
                        titles={cardData[8].title}
                        description={cardData[8].description}/>
                    <div className={s.card_with_button}>
                        <ProgramComplexCard
                            height={'min(232px, calc(170px + 62 * ((100vw - 768px) / 255)))'}
                            descriptionFontSize={'min(15px, calc(10.5px + 3.5 * ((100vw - 768px) / 255)))'}
                            number={cardData[9].number}
                            titles={cardData[9].title}
                            description={cardData[9].description}/>
                        <button className={s.button_tablet} onClick={redirectHandler}>
                            <span className={s.button_text_tablet}>Попробовать</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}