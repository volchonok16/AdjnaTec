import {useState} from 'react';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {CRMContent} from './CRMContent/CRMContent';
import {ECMContent} from './ECMContent/ECMContent';
import {CPMContent} from './CPMContent/CPMContent';
import {POContent} from './POContent/POContent';

type ContentType = 'CRM' | 'ECM' | 'CPM' | 'PO';

export const WhatWeDo = () => {

    const [content, setContent] = useState<ContentType>('CRM')

    const CRMContentHandle = () => {
        setContent('CRM')
    }

    const ECMContentHandle = () => {
        setContent('ECM')
    }

    const CPMContentHandle = () => {
        setContent('CPM')
    }

    const POContentHandle = () => {
        setContent('PO')
    }

    return (
        <div>
            {
                content === 'CRM' && (
                    <PageWrapper title={'Управление отношениями с клиентами СRM'}
                                 rightBtn={true}
                                 leftBtnFunc={POContentHandle}
                                 rightBtnFunc={ECMContentHandle}>
                        <CRMContent/>
                    </PageWrapper>
                )
            }
            {
                content === 'ECM' && (
                    <PageWrapper title={'ECM-системы'}
                                 rightBtn={true}
                                 leftBtnFunc={CRMContentHandle}
                                 rightBtnFunc={CPMContentHandle}>
                        <ECMContent/>
                    </PageWrapper>
                )
            }
            {
                content === 'CPM' && (
                    <PageWrapper title={'Управление эффективностью предприятия СРМ'}
                                 rightBtn={true}
                                 leftBtnFunc={ECMContentHandle}
                                 rightBtnFunc={POContentHandle}>
                        <CPMContent/>
                    </PageWrapper>
                )
            }
            {
                content === 'PO' && (
                    <PageWrapper title={'Разработка ПО на заказ'}
                                 rightBtn={true}
                                 leftBtnFunc={CPMContentHandle}
                                 rightBtnFunc={CRMContentHandle}>
                        <POContent/>
                    </PageWrapper>
                )
            }
        </div>
    )
}