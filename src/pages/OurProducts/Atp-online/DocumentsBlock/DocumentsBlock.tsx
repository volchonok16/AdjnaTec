import s from './DocumentsBlock.module.scss';
import {DocumentCard} from './DocumentCard/DocumentCard';
import React from 'react';
import {DocumentCardMobile} from './DocumentCardMobile/DocumentCardMobile';
import {
    downloadDocument,
    lookDocument,
    ParamsType
} from '../../../../api/documentAPI/api';
import {generatePDFFile} from '../../../../helpers/generatePDF';


export type CardDataType = {
    number: number;
    title: string[];
    mobile_title: string,
    params: ParamsType
}

const cardData: CardDataType[] = [
    {
        number: 1,
        title: ['Функционал ПК', 'АТП-онлайн'],
        mobile_title: 'Функционал ПК АТП-онлайн',
        params: 'functional'
    },
    {
        number: 2,
        title: ['Карта функционала', 'персонала'],
        mobile_title: 'Карта функционала персонала',
        params: 'staff_card'
    },
    {
        number: 3,
        title: ['Выгода от', 'внедрения'],
        mobile_title: 'Выгода от внедрения',
        params: 'benefit'
    },
    {
        number: 4,
        title: ['Инструкция', 'пользователя'],
        mobile_title: 'Инструкция пользователя',
        params: 'instructions'
    }
]

export const DocumentsBlock = () => {

    const lookDocumentHandle = (params: ParamsType) => {
        lookDocument(params).then((res) => {
            if (res.status === 200) {
                generatePDFFile(res.json.document)
            }
        }).catch(error => console.error(error))
    }

    const downloadDocumentHandle = (params: ParamsType) => {
        downloadDocument(params).then((res) => {
            if (res.status === 200) {
                const blob = res.blob

                const contentDisposition = res.headers.get('content-disposition');
                const fileNameMatch = contentDisposition && contentDisposition.match(/filename="(.+)"/);
                const fileName = fileNameMatch ? fileNameMatch[1] : `${params}-file.pdf`;

                const url = URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = fileName;

                document.body.appendChild(a);
                a.click();

                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }
        }).catch(error => console.error(error))
    }

    return (
        <div className={s.documents_container}>
            <span className={s.title}>
                <span className={s.title_blue}>ДОКУМЕНТЫ</span> И СЕРТИФИКАТЫ
            </span>
            <div className={s.card_wrapper}>
                {
                    cardData.map((card) => {
                        return (
                            <DocumentCard key={card.number} data={card}
                                          lookFunction={lookDocumentHandle}
                                          downloadFunction={downloadDocumentHandle}/>
                        )
                    })
                }
            </div>
            <div className={s.card_wrapper_tablet}>
                <div className={s.card_row_tablet}>
                    <DocumentCard data={cardData[0]} lookFunction={lookDocumentHandle}
                                  downloadFunction={downloadDocumentHandle}/>
                    <DocumentCard data={cardData[1]} lookFunction={lookDocumentHandle}
                                  downloadFunction={downloadDocumentHandle}/>
                </div>
                <div className={s.card_row_tablet}>
                    <DocumentCard data={cardData[2]} lookFunction={lookDocumentHandle}
                                  downloadFunction={downloadDocumentHandle}/>
                    <DocumentCard data={cardData[3]} lookFunction={lookDocumentHandle}
                                  downloadFunction={downloadDocumentHandle}/>
                </div>
            </div>
            <div className={s.card_wrapper_mobile}>
                {
                    cardData.map((card) => {
                        return (
                            <DocumentCardMobile data={card} key={card.number}
                                                lookFunction={lookDocumentHandle}
                                                downloadFunction={downloadDocumentHandle}/>
                        )
                    })
                }
            </div>
        </div>
    )
}