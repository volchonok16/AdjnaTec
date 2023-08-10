import s from './MainPage.module.scss'
import React from 'react'
import arrow from '../../assets/image/MainPage/Arrow 1.svg'

export const MainPage = () => {

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
                    <span className={s.companyName}>{'<AdjnaTech/>'}</span>
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
                        <div className={s.atp_online}>
                            <span className={s.atp_text_1}>АТП-онлайн</span>
                            <span className={s.atp_text_2}>Учет и управление автотранспортным предприятием</span>
                        </div>
                    </div>
                    <div className={s.text_container}>
<span className={s.text}>
    Наше решение – автоплан. Программный комплекс нового поколения для автоматизации управления, учета и документооборота любой транспортной компании.
</span>
                        <span className={s.text}>
                            Такой подход к организации рабочих процессов позволит максимально исключить «человеческий фактор» и повысить эффективность ваших расходов.
                        </span>
                    </div>
                </div>
            </div>
            <div
                /*ref={(el: HTMLDivElement) => blockRefs.current[2] = el}*/
                className={s.about_us_block}>
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
                        <button className={s.button}>
                            <img className={s.img} src={arrow} alt={'arrow'}/>
                            <span className={s.button_text}>Связаться</span>
                        </button>
                    </div>
                </div>
                <div className={s.footer_container}>
                    <div className={s.block_1}>
                        <span className={s.block_1_text_1}>{`<AdjnaTech/>`}</span>
                        <span className={s.block_1_text_2}>Эффективные решения для перезагрузки вашего бизнеса</span>
                    </div>
                    <div className={s.block_2}>
                        <div className={s.line}/>
                        <span className={s.block_2_text_1}>@ AdjnaTech 2023</span>
                    </div>
                </div>
            </div>
        </div>
    )
}