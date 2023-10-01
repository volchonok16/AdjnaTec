import s from './DocumentsBlock.module.scss';
import {DocumentCard} from './DocumentCard/DocumentCard';

type CardDataType = {
    number: number;
    title: string[];
}

const cardData: CardDataType[] = [
    {
        number: 1,
        title: ['Функционал ПК', 'АТП-онлайн']
    },
    {
        number: 2,
        title: ['Карта функционала', 'персонала']
    },
    {
        number: 3,
        title: ['Выгода от', 'внедрения']
    },
    {
        number: 4,
        title: ['Инструкция', 'пользователя']
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
                            <DocumentCard number={card.number} titles={card.title}
                                          key={card.number}/>
                        )
                    })
                }
            </div>
        </div>
    )
}