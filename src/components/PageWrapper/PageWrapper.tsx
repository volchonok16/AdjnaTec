import s from './PageWrapper.module.scss'
import React from 'react';
import rightArrow from '../../assets/image/RightArrow.svg'
import leftArrow from '../../assets/image/LeftArrow.svg'

type PageWrapperPropsType = {
    title: string,
    rightBtn?: boolean
    children: React.ReactNode
    leftBtnFunc:VoidFunction
}

export const PageWrapper = ({title, rightBtn = true, children, leftBtnFunc}: PageWrapperPropsType) => {
    return (
        <div className={s.wrapperContainer}>
            <div className={s.navigateButtonWrapper}>
                <img className={s.image} src={leftArrow} alt={'left-button'} onClick={leftBtnFunc}/>
                {rightBtn && (
                    <img className={s.image} src={rightArrow} alt={'right-button'}/>
                )}
            </div>
            <div className={s.contentWrapper}>
                <span className={s.title}>{title}</span>
                <div>{children}</div>
            </div>
        </div>
    )
}