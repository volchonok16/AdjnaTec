import s from './DocumentsBlock.module.scss';
import {DocumentCard} from './DocumentCard/DocumentCard';
import React from 'react';
import {DocumentCardMobile} from './DocumentCardMobile/DocumentCardMobile';


export type CardDataType = {
    number: number;
    title: string[];
    mobile_title: string
}

const cardData: CardDataType[] = [
    {
        number: 1,
        title: ['Функционал ПК', 'АТП-онлайн'],
        mobile_title: 'Функционал ПК АТП-онлайн'
    },
    {
        number: 2,
        title: ['Карта функционала', 'персонала'],
        mobile_title: 'Карта функционала персонала'
    },
    {
        number: 3,
        title: ['Выгода от', 'внедрения'],
        mobile_title: 'Выгода от внедрения'
    },
    {
        number: 4,
        title: ['Инструкция', 'пользователя'],
        mobile_title: 'Инструкция пользователя'
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
                            <DocumentCard key={card.number} data={card}/>
                        )
                    })
                }
            </div>
            {/*<div className={s.card_wrapper_tablet}>
                <div className={s.card_row_tablet}>
                    <DocumentCard number={cardData[0].number}
                                  titles={cardData[0].title}
                    />
                    <DocumentCard number={cardData[1].number}
                                  titles={cardData[1].title}
                    />
                </div>
                <div className={s.card_row_tablet}>
                    <DocumentCard number={cardData[2].number}
                                  titles={cardData[2].title}
                    />
                    <DocumentCard number={cardData[3].number}
                                  titles={cardData[3].title}
                    />
                </div>
            </div>*/}
            <div className={s.card_wrapper_mobile}>

                {
                    cardData.map((card) => {
                        return (
                            <DocumentCardMobile data={card} key={card.number}/>
                        )
                    })
                }
            </div>
        </div>
    )
}