import s from './ProgramComplexCardMobile.module.scss';
import {Collapse} from 'antd';
import React from 'react';
import {CardType} from '../ProgramComplexBlock';

const {Panel} = Collapse

type ProgramComplexCardMobilePropsType = {
    data: CardType
}

export const ProgramComplexCardMobile = ({data}: ProgramComplexCardMobilePropsType) => {
    return (
        <Collapse className={s.collapse}
                  bordered={false}>
            <Panel key={data.number} header={
                <div className={s.panel_header}>
                    <span className={s.number}>/{data.number}</span>
                    <span
                        className={s.title_panel}>{data.mobile_title}</span>
                </div>
            } showArrow={false}>
                <div className={s.description}>
                    {data.description}
                </div>
            </Panel>
        </Collapse>
    )
}