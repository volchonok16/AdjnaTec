import s from './DocumentCard.module.scss';
import React, {useState} from 'react';
import cn from 'classnames';

type DocumentCardPropsType = {
    number: number,
    titles: string[],
}

export const DocumentCard = ({
                                       number,
                                       titles
                                   }: DocumentCardPropsType) => {

    const [isHover, setIsHover] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const hoverHandler = () => {
        setIsHover(!isHover)
    }

    const openHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div
            className={s.document_card_container}
            onMouseOver={hoverHandler}
            onMouseOut={hoverHandler}
            onClick={openHandler}>
            <span className={s.number}>
                /{number}
            </span>
            <div className={cn(s.text_container, {
                [s.text_container_hover]: isHover || isOpen
            })}>
                <div className={s.title_wrapper}>
                    {
                        titles.map((title) => {
                            return (
                                <span className={cn(s.title, {
                                    [s.title_hover]: isHover || isOpen
                                })}
                                      key={title}>{title}</span>
                            )
                        })
                    }
                </div>
                <div className={cn(s.button_container, {
                    [s.button_container_hover]: isHover || isOpen
                })}>
                        <button className={s.button}>
                            <span className={s.button_text}>посмотреть</span>
                        </button>
                        <button className={s.button}>
                            <span className={s.button_text}>
                                скачать
                            </span>
                        </button>
                    </div>
            </div>
        </div>
    )
}