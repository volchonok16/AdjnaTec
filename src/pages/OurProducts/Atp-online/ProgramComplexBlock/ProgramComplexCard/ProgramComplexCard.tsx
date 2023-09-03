import s from './ProgramComplexCard.module.scss';
import React, {useState} from 'react';
import cn from 'classnames';

type ProgramComplexCardPropsType = {
    fontSize?: string
    number: number,
    titles: string[],
    description: string
}

export const ProgramComplexCard = ({
                                       number,
                                       titles,
                                       description,
                                       fontSize
                                   }: ProgramComplexCardPropsType) => {

    const [isHover, setIsHover] = useState(false)

    const hoverHandler = () => {
        setIsHover(!isHover)
    }

    return (
        <div className={s.program_complex_card_container} onMouseOver={hoverHandler}
             onMouseOut={hoverHandler}>
            <span className={s.number}>
                /{number}
            </span>
            <div className={cn(s.text_container, {
                [s.text_container_hover]: isHover
            })}>
                <div className={cn(s.title_wrapper, {
                    [s.title_wrapper_hover]: isHover
                })}>
                    {
                        titles.map((title) => {
                            return (
                                <span className={cn(s.title, {
                                    [s.title_hover]: isHover
                                })}
                                      style={{fontSize: fontSize}}
                                      key={title}>{title}</span>
                            )
                        })
                    }
                </div>
                <span className={cn(s.description, {
                    [s.description_hover]: isHover
                })}>
                        {description}
                    </span>
            </div>
        </div>
    )
}