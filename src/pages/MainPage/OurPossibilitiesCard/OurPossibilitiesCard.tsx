import React, {useEffect, useState} from 'react';
import s from './OurPossibilitiesCard.module.scss';
import cn from 'classnames';
import {PossibilitiesCardType} from '../MainPage';

type OurPossibilitiesCardPropsType = {
    data: PossibilitiesCardType
}

export const OurPossibilitiesCard = ({data}: OurPossibilitiesCardPropsType) => {

    const {title, description, backgroundImage, paddingTop} = data

    const [vw, setVw] = useState(window.innerWidth)
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
            className={s.card_container}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: title[0] === 'ECM системы' ? '37.8vh' : '22.77vh',
            }}
            onMouseEnter={hoverHandler}
            onMouseLeave={hoverHandler}
            onClick={openHandler}
        >
            <div className={cn(s.content_container, {
                [s.content_container_hover]: isHover || isOpen
            })} style={{paddingTop: isHover ? '0%' : paddingTop}}>
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
                <div className={cn(s.description_container, {
                    [s.description_container_visible]: isHover || isOpen
                })}>
                    {
                        description.map((descriptionPart) => {
                            return (
                                <span className={s.description_text}
                                      key={descriptionPart}>{descriptionPart}</span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

