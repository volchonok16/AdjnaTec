import React, {useState} from 'react';
import s from './DocumentCard.module.scss';
import {CardDataType} from '../DocumentsBlock';
import cn from 'classnames';

interface CardProps {
    data: CardDataType
}

export const DocumentCard = ({data}: CardProps) => {

    const {title, number} = data

    const [isHover, setIsHover] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const hoverHandler = () => {
        setIsHover(!isHover)
    }

    const openHandler = () => {
        setIsOpen(!isOpen)
    }

    const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log('Скачать');
    };

    const handleWatch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log('Смотреть');
    };

    return (
        <div
            className={s.card_container}
            onMouseEnter={hoverHandler}
            onMouseLeave={hoverHandler}
            onClick={openHandler}
        >
            <span className={s.number}>/{number}</span>
            <div className={cn(s.content_container, {
                [s.content_container_hover]: isHover || isOpen
            })}>
                <div className={s.title_container}>
                    {
                        title.map((titlePart) => {
                            return (
                                <span className={s.title}
                                      key={titlePart}>{titlePart}</span>
                            )
                        })
                    }
                </div>
                <div className={cn(s.buttons_container, {
                    [s.buttons_container_visible]: isHover || isOpen
                })}>
                    <button className={s.button_look} onClick={handleWatch}>
                        Смотреть
                    </button>
                    <button className={s.button_download} onClick={handleDownload}>
                        Скачать
                    </button>
                </div>
            </div>
        </div>
    );
};

