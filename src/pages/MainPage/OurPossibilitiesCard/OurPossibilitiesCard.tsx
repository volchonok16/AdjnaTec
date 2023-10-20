import React, {useState} from 'react';
import s from './OurPossibilitiesCard.module.scss';
import cn from 'classnames';
import {PossibilitiesCardType} from '../MainPage';

type OurPossibilitiesCardPropsType = {
    data: PossibilitiesCardType
}

export const OurPossibilitiesCard = ({data}: OurPossibilitiesCardPropsType) => {

    const {title, description, backgroundImage} = data

    const [isHover, setIsHover] = useState(false)

    const hoverHandler = () => {
        setIsHover(!isHover)
    }

    return (
        <div
            className={cn(s.card_container, {
                [s.card_container_connect]: title[0] === 'ECM системы'
            })}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            onMouseEnter={hoverHandler}
            onMouseLeave={hoverHandler}
        >
            <div className={cn(s.content_container, {
                [s.content_container_connect]: title[0] === 'ECM системы',
                [s.content_container_hover]: isHover
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
                <div className={cn(s.description_container, {
                    [s.description_container_visible]: isHover
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

