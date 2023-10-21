import s from './MainPage.module.scss'
import React, {useState} from 'react'
import {ConnectButton} from '../../components/ConnectButton/ConnectButton';
import {useNavigate} from 'react-router-dom';
import {RoutPath} from '../../enum';
import {Modal} from '../../components/Modal/Modal';
import {ConnectForm} from './ConnectForm/ConnectForm';
import {OurPossibilitiesCard} from './OurPossibilitiesCard/OurPossibilitiesCard';
import ERP from '../../assets/image/MainPage/ERP.png'
import Virtualization from '../../assets/image/MainPage/Vertyalization.png';
import CPM from '../../assets/image/MainPage/CPM.png';
import DevelopForOrder from '../../assets/image/MainPage/DevelopForOrder.png';
import ECM from '../../assets/image/MainPage/ECM.png'

export type PossibilitiesCardType = {
    title: string[],
    description: string[],
    backgroundImage: string
}

const possibilitiesCardData: Record<string, PossibilitiesCardType> = {
    'ERP': {
        title: ['ERP системы'],
        description: ['Управление', 'корпоративным', 'цифровым контентом', 'системы электронного', 'документооборота'],
        backgroundImage: ERP
    },
    'Virtualization': {
        title: ['Визуализация данных'],
        description: ['Эффективный способ', 'интерпертации данных и', 'представления', 'результатов'],
        backgroundImage: Virtualization
    },
    'CPM': {
        title: ['Управление', 'эффективностью', 'предприятия CPM'],
        description: ['Подход СРМ декларирует', 'объединение всех ресурсов', 'компании для достижения', 'стратегических целей'],
        backgroundImage: CPM
    },
    'DevelopForOrder': {
        title: ['Разработка на заказ'],
        description: ['Ведем проект от', 'составления требований', 'до системного', 'администрирования', 'и поддержки'],
        backgroundImage: DevelopForOrder
    },
    'ECM': {
        title: ['ECM системы'],
        description: ['В ЕСМ у каждого', 'документа есть', 'цифровой образ,', 'который можно', 'подписать', 'и отправить по', 'назначения, не выходя', 'из кабинета'],
        backgroundImage: ECM
    }
}

export const MainPage = () => {

    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false)

    const modalHandler = () => {
        setIsModalOpen(!isModalOpen)
    }

    const ATPOnlineHandler = () => {
        navigate(RoutPath.OurProducts)
    }


    return (
        <div className={s.scroll_container}
        >
            <div
                className={s.advert_block}>
                <div className={s.adjna_block}>
                    <span className={s.companyName}>{'<AdjnaTec/>'}</span>
                    <span
                        className={s.text_2}>уникальные IT-продукты для наших клиентов</span>
                </div>
                <div className={s.we_create_container}>
                    <div className={s.we_create_back}>
                        <span className={s.we_create_text}>
Мы создаем системы эффективного контроля и управления, <span
                            className={s.part_1}>чтобы</span>  <span className={s.part_2}>вы достигли больших результатов</span>
                        </span>
                    </div>
                </div>
            </div>
            <div
                className={s.product_block}>
                <span className={s.product_h1}>Как сократить расходы на содержание автопарка?</span>
                <div className={s.product_container}>
                    <div className={s.product}>
                        <div className={s.atp_container}>
                            <span className={s.avtoplan_text}>Автоплан</span>
                        </div>
                        <div className={s.atp_online} onClick={ATPOnlineHandler}>
                            <span className={s.atp_text_1}>АТП-онлайн</span>
                            <span className={s.atp_text_2}>Учет и управление автотранспортным предприятием</span>
                        </div>
                    </div>
                    <div className={s.text_container}>
                        <span className={s.product_name}>Наше решение - АТП-онлайн</span>
                        <span className={s.text}>Программный комплекс нового поколения для автоматизации управления, учета и документооборота любой транспортной компании.
</span>
                        <span className={s.text}>
                            Такой подход к организации рабочих процессов позволит максимально исключить «человеческий фактор» и повысить эффективность ваших расходов.
                        </span>
                    </div>
                </div>
                <div className={s.product_container_mobile}>
                    <div className={s.text_container_mobile}>
                        <span
                            className={s.product_name_mobile}>Наше решение - АТП-онлайн</span>
                        <span className={s.text_mobile}>Программный комплекс нового поколения для автоматизации управления, учета и документооборота любой транспортной компании.
</span>
                    </div>
                    <div className={s.product_mobile}>
                        <div className={s.atp_container_mobile}>
                            <span className={s.avtoplan_text_mobile}>Автоплан</span>
                        </div>
                        <div className={s.atp_online_mobile} onClick={ATPOnlineHandler}>
                            <span className={s.atp_text_1_mobile}>АТП-онлайн</span>
                            <span className={s.atp_text_2_mobile}>Учет и управление автотранспортным предприятием</span>
                        </div>
                    </div>
                    <span className={s.text_2_mobile}>
                        Такой подход к организации рабочих процессов позволит максимально исключить «человеческий фактор»
и повысить эффективность ваших расходов.
                    </span>
                </div>
            </div>
            <div
                className={s.about_us_block}>
                <span className={s.our_possibilities}>Наши возможности</span>
                <div className={s.img_container}>
                    <div className={s.cards_container}>
                        <div className={s.cards_line}>
                            <OurPossibilitiesCard data={possibilitiesCardData['ERP']}/>
                            <div className={s.card_without_back}>
                            <span className={s.card_without_back_text}>Команда AdjnaTech  создает IT-решения, включающее  управление проектом,  составление технических заданий, разработку самой системы, а также её тестирование и дальнейшее сопровождение.
</span>
                            </div>
                            <OurPossibilitiesCard
                                data={possibilitiesCardData['Virtualization']}/>
                        </div>
                        <div className={s.cards_line}>
                            <OurPossibilitiesCard data={possibilitiesCardData['CPM']}/>
                            <OurPossibilitiesCard
                                data={possibilitiesCardData['DevelopForOrder']}/>
                            <div className={s.card_without_back}>
                            <span className={s.card_without_back_text}>Мы занимаемся разработкой програмного обеспечения. Создаем системы управления данными и оптимизации бизнес-процессов повышающие эффективность
бизнеса наших клиентов.
</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.connect_container}>
                        <OurPossibilitiesCard data={possibilitiesCardData['ECM']}/>
                        <ConnectButton onClick={modalHandler}/>
                    </div>
                </div>
                <div className={s.img_container_tablet}>
                    <div className={s.cards_container_tablet}>
                        <div className={s.cards_column}>
                            <OurPossibilitiesCard data={possibilitiesCardData['ERP']}/>
                            <OurPossibilitiesCard
                                data={possibilitiesCardData['DevelopForOrder']}/>
                        </div>
                        <div className={s.cards_column}>
                            <OurPossibilitiesCard data={possibilitiesCardData['CPM']}/>
                            <div className={s.card_without_back_tablet}>
        <span className={s.card_without_back_text_tablet}>Команда AdjnaTech  создает IT-решения, включающее  управление проектом,  составление технических заданий, разработку самой системы, а также её тестирование дальнейшее сопровождение.
        </span>
                            </div>
                        </div>
                    </div>
                    <div className={s.cards_container_tablet}>
                        <div className={s.cards_column}>
                            <div className={s.card_without_back_tablet}>
                                <span className={s.card_without_back_text_tablet}>Мы занимаемся разработкой програмного обеспечения. Создаем системы управления данными и оптимизации бизнес-процессов повышающие эффективность бизнеса наших клиентов.
                                </span>
                            </div>
                            <OurPossibilitiesCard
                                data={possibilitiesCardData['Virtualization']}/>
                        </div>
                        <div className={s.cards_column}>
                            <OurPossibilitiesCard data={possibilitiesCardData['ECM']}/>
                            <ConnectButton onClick={modalHandler}/>
                        </div>
                    </div>
                </div>
                <div className={s.img_container_mobile}>
                    <span className={s.card_without_back_text_mobile}
                          style={{paddingLeft: '20%'}}>
                        Команда AdjnaTech  создает IT-решения, включающее  управление проектом,  составление технических заданий, разработку самой системы, а также её тестирование и дальнейшее сопровождение.
                    </span>
                    <div className={s.cards_block_mobile}>
                        <div className={s.cards_column_mobile}>
                            <OurPossibilitiesCard data={possibilitiesCardData['ERP']}/>
                            <OurPossibilitiesCard data={possibilitiesCardData['CPM']}/>
                            <OurPossibilitiesCard
                                data={possibilitiesCardData['Virtualization']}/>
                        </div>
                        <div className={s.cards_column_mobile}>
                            <OurPossibilitiesCard
                                data={possibilitiesCardData['DevelopForOrder']}/>
                            <OurPossibilitiesCard data={possibilitiesCardData['ECM']}/>
                        </div>
                    </div>
                    <span className={s.card_without_back_text_mobile}>
                        Мы занимаемся разработкой програмного обеспечения. Создаем системы управления данными и оптимизации бизнес-процессов повышающие эффективность бизнеса наших клиентов.
                    </span>
                    <ConnectButton onClick={modalHandler}/>
                </div>
            </div>
            {
                isModalOpen && (
                    <Modal onCloseModal={modalHandler}>
                        <ConnectForm closeModal={modalHandler}/>
                    </Modal>
                )
            }
        </div>
    )
}