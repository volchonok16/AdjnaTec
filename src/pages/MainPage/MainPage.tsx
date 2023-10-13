import s from './MainPage.module.scss'
import React, {useState} from 'react'
import {ConnectButton} from '../../components/ConnectButton/ConnectButton';
import {useNavigate} from 'react-router-dom';
import {RoutPath} from '../../enum';
import {Modal} from '../../components/Modal/Modal';
import {ConnectForm} from './ConnectForm/ConnectForm';

export const MainPage = () => {

    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false)

    const modalHandler = () => {
        setIsModalOpen(!isModalOpen)
    }

    const ATPOnlineHandler = () => {
        navigate(RoutPath.OurProducts)
    }

    //Логика бля блочного скролинга контента
    /*    const blockRefs = useRef<HTMLDivElement[]>([]);

        const [currentBlock, setCurrentBlock] = useState<number>(0);

        const handleScroll = (e: React.WheelEvent) => {
            if (e.deltaY > 0) {
                setCurrentBlock((prevBlock) => Math.min(prevBlock + 1, blockRefs.current.length - 1));
            } else {
                setCurrentBlock((prevBlock) => Math.max(prevBlock - 1, 0));
            }
        };

        const moveBlocks = () => {
            const offset = currentBlock ? (-currentBlock * 87) : (-currentBlock * 100)
            blockRefs.current.forEach((block) => {
                block.style.transform = `translateY(${offset}vh)`;
            });
        };

        useEffect(() => {
            moveBlocks()
        })*/


    return (
        <div className={s.scroll_container}
            /*onWheel={handleScroll}*/
        >
            <div
                /*ref={(el: HTMLDivElement) => blockRefs.current[0] = el}*/
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
                /*ref={(el: HTMLDivElement) => blockRefs.current[1] = el}*/
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
                /*ref={(el: HTMLDivElement) => blockRefs.current[2] = el}*/
                className={s.about_us_block}>
                <span className={s.our_possibilities}>Наши возможности</span>
                <div className={s.img_container}>
                    <div className={s.cards_container}>
                        <div className={s.cards_line}>
                            <div className={s.card_1}>
                                <span className={s.card_text}>ERP системы</span>
                            </div>
                            <div className={s.card_without_back}>
                            <span className={s.card_without_back_text}>Команда AdjnaTech  создает IT-решения, включающее  управление проектом,  составление технических заданий, разработку самой системы, а также её тестирование и дальнейшее сопровождение.
</span>
                            </div>
                            <div className={s.card_2}>
                                <span className={s.card_text}>Визуализация данных</span>
                            </div>
                        </div>
                        <div className={s.cards_line}>
                            <div className={s.card_3}>
                                <span className={s.card_text}>Управление</span>
                                <span className={s.card_text}>эффективностью</span>
                                <span className={s.card_text}>предприятия СРМ</span>
                            </div>
                            <div className={s.card_4}>
                                <span className={s.card_text}>Разработка на заказ</span>
                            </div>
                            <div className={s.card_without_back}>
                            <span className={s.card_without_back_text}>Мы занимаемся разработкой програмного обеспечения. Создаем системы управления данными и оптимизации бизнес-процессов повышающие эффективность
бизнеса наших клиентов.
</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.connect_container}>
                        <div className={s.connect_card}>
                            <span className={s.connect_card_text}>ЕСМ системы</span>
                        </div>
                        <ConnectButton onClick={modalHandler}/>
                    </div>
                </div>
                <div className={s.img_container_tablet}>
                    <div className={s.cards_container_tablet}>
                        <div className={s.cards_column}>
                            <div className={s.card_1}>
                                <span className={s.card_text}>ERP системы</span>
                            </div>
                            <div className={s.card_4}>
                                <span className={s.card_text}>Разработка на заказ</span>
                            </div>
                        </div>
                        <div className={s.cards_column}>
                            <div className={s.card_3}>
                                <span
                                    className={s.card_text}>Управление эффективностью</span>
                                <span className={s.card_text}>предприятия СРМ</span>
                            </div>
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
                            <div className={s.card_2}>
                                <span className={s.card_text}>Виртуализация данных</span>
                            </div>
                        </div>
                        <div className={s.cards_column}>
                            <div className={s.connect_card_tablet}>
                                <span
                                    className={s.connect_card_text_tablet}>ЕСМ системы</span>
                            </div>
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
                            <div className={s.card_1_mobile}>
                                <span className={s.card_text_mobile}>ERP системы</span>
                            </div>
                            <div className={s.card_3_mobile}>
                                <span className={s.card_text_mobile}>Управление</span>
                                <span className={s.card_text_mobile}>эффективностью</span>
                                <span
                                    className={s.card_text_mobile}>предприятия СРМ</span>
                            </div>
                            <div className={s.card_2_mobile}>
                                <span className={s.card_text_mobile}>Визуалтзация</span>
                                <span className={s.card_text_mobile}>данных</span>
                            </div>
                        </div>
                        <div className={s.cards_column_mobile}>
                            <div className={s.card_4_mobile}>
                                <span className={s.card_text_mobile}>
                                    Разработка
                                </span>
                                <span className={s.card_text_mobile}>
                                    на заказ
                                </span>
                            </div>
                            <div className={s.connect_card_tablet_mobile}>
                                <span className={s.connect_card_text_tablet_mobile}>
                                    ECM системы
                                </span>
                            </div>
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
                        <ConnectForm/>
                    </Modal>
                )
            }
        </div>
    )
}