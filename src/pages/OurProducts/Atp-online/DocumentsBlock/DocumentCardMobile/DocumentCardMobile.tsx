import s from './DocumentCardMobile.module.scss';
import {Collapse} from 'antd';
import {CardDataType} from '../DocumentsBlock';
import React from 'react';
import {ParamsType} from '../../../../../api/documentAPI/api';

const {Panel} = Collapse

type DocumentCardMobilePropsType = {
    data: CardDataType
    lookFunction: (params: ParamsType) => void,
    downloadFunction: (params: ParamsType) => void
}

export const DocumentCardMobile = ({data, lookFunction, downloadFunction}: DocumentCardMobilePropsType) => {

    const handleWatch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        lookFunction(data.params)
    };

    const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        downloadFunction(data.params)
    };

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
                    <button className={s.button_look} onClick={handleWatch}>
                        посмотреть
                    </button>
                    <button className={s.button_download} onClick={handleDownload}>
                        скачать
                    </button>
                </div>
            </Panel>
        </Collapse>
    )
}