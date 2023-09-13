import s from './DocumentsBlock.module.scss';

type CardDataType = {
    number: number;
    title: string[];
}

const cardData: CardDataType[] = [
    {
        number: 1,
        title: ['Журнал механика по', 'выпуску транспорта']
    },
    {
        number: 2,
        title: ['Журнал механика по', 'выпуску транспорта']
    },
    {
        number: 3,
        title: ['Журнал механика по', 'выпуску транспорта']
    },
    {
        number: 4,
        title: ['Журнал механика по', 'выпуску транспорта']
    }
]


export const DocumentsBlock = () => {
    return (
        <div className={s.documents_container}>
            <span className={s.title}>
                <span className={s.title_blue}>ДОКУМЕНТЫ</span> И СЕРТИФИКАТЫ
            </span>
            <div className={s.card_wrapper}>
                {
                    cardData.map((card) => {
                        return (
                            <div className={s.card} key={card.number}>
                                <span className={s.number}>/{card.number}</span>
                                <div className={s.card_title_container}>
                                    {
                                        card.title.map((title) => {
                                            return (
                                                <span className={s.card_title}
                                                      key={title}>{title}</span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}