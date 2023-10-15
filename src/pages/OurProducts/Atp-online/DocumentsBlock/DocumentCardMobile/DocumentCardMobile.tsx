import s from './DocumentCardMobile.module.scss';
import {Collapse} from 'antd';
import {CardDataType} from '../DocumentsBlock';
import React from 'react';

const {Panel} = Collapse

type DocumentCardMobilePropsType = {
    data: CardDataType
}

export const DocumentCardMobile = ({data}: DocumentCardMobilePropsType) => {
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
                <div className={s.button_container}>
                    <button className={s.button_look}>
                        посмотреть
                    </button>
                    <button className={s.button_download}>
                        скачать
                    </button>
                </div>
            </Panel>
        </Collapse>
    )
}