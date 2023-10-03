import s from './ProgramComplexCard.module.scss';
import React, {useState} from 'react';
import cn from 'classnames';

type ProgramComplexCardPropsType = {
    height?: string
    fontSize?: string
    descriptionFontSize?: string
    number: number,
    titles: string[],
    description: string
}

export const ProgramComplexCard = ({
                                       number,
                                       titles,
                                       description,
                                       fontSize,
                                       descriptionFontSize,
                                       height
                                   }: ProgramComplexCardPropsType) => {

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
            className={s.program_complex_card_container} style={{height: height}}
            onMouseOver={hoverHandler}
            onMouseOut={hoverHandler}
            onClick={openHandler}>
            <span className={s.number}>
                /{number}
            </span>
            <div className={cn(s.text_container, {
                [s.text_container_hover]: isHover || isOpen
            })}>
                <div className={cn(s.title_wrapper, {
                    [s.title_wrapper_hover]: isHover || isOpen
                })}>
                    {
                        titles.map((title) => {
                            return (
                                <span className={cn(s.title, {
                                    [s.title_hover]: isHover || isOpen
                                })}
                                      style={{fontSize: fontSize}}
                                      key={title}>{title}</span>
                            )
                        })
                    }
                </div>
                <span className={cn(s.description, {
                    [s.description_hover]: isHover || isOpen
                })}
                      style={{fontSize: descriptionFontSize}}>
                        {description}
                    </span>
            </div>
        </div>
    )
}