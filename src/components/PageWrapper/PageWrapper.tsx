import s from './PageWrapper.module.scss'
import React from 'react';
import rightArrow from '../../assets/image/RightArrow.svg'
import leftArrow from '../../assets/image/LeftArrow.svg'

type PageWrapperPropsType = {
    title: string,
    rightBtn?: boolean
    children: React.ReactNode
    leftBtnFunc: VoidFunction
    rightBtnFunc?: VoidFunction
}

export const PageWrapper = ({
                                title,
                                rightBtn = true,
                                children,
                                leftBtnFunc,
                                rightBtnFunc
                            }: PageWrapperPropsType) => {
    return (
        <div className={s.wrapperContainer}>
            <div className={s.navigateButtonWrapper}>
                <div className={s.title_block}>
                    <img className={s.image} src={leftArrow} alt={'left-button'}
                         onClick={leftBtnFunc}/>
                    <span className={s.title}>{title}</span>
                </div>
                {rightBtn && (
                    <img className={s.image} src={rightArrow} alt={'right-button'}
                         onClick={rightBtnFunc}/>
                )}
            </div>
            <div className={s.contentWrapper}>
                {children}
            </div>
        </div>
    )
}