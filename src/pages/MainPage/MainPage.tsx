import s from './MainPage.module.scss'
import React, {useState, useRef, useEffect} from 'react'


export const MainPage = () => {

    const blockRefs = useRef<HTMLDivElement[]>([]);

    const [currentBlock, setCurrentBlock] = useState<number>(0);

    const handleScroll = (e: React.WheelEvent) => {
        if (e.deltaY > 0) {
            setCurrentBlock((prevBlock) => Math.min(prevBlock + 1, blockRefs.current.length - 1));
        } else {
            setCurrentBlock((prevBlock) => Math.max(prevBlock - 1, 0));
        }
    };

    const moveBlocks = () => {

        /*const offset = -currentBlock * 87;*/
        const offset = currentBlock ? (-currentBlock * 87) : (-currentBlock * 100)
        blockRefs.current.forEach((block) => {
            block.style.transform = `translateY(${offset}vh)`;
        });
    };

    useEffect(() => {
        moveBlocks()
    })


    return (
        <div className={s.scroll_container} onWheel={handleScroll}>
            <div ref={(el: HTMLDivElement) => blockRefs.current[0] = el}
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
            <div ref={(el: HTMLDivElement) => blockRefs.current[1] = el}
                 className={s.product_block}>
                <span className={s.product_h1}>Сколько стоит содержание авиапарка и куда реально утекают эти деньги?</span>
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
    Программа с простым интерфейсом и сложными алгоритмами работы поможет автоматизировать работу операторов, аналитиков, управленцев и контролеров.
</span>
                        <span className={s.text}>
                            Такой подход позволит свести ручную обработку к минимуму.
                        </span>
                    </div>
                </div>
            </div>
            <div ref={(el: HTMLDivElement) => blockRefs.current[2] = el}
                 className={s.about_us_block}>
                Hay
            </div>
            {/*<AdvertBlock/>
            <ProductBlock/>
            <div className={s.productBlock}>
                <div className={s.titleWrapper}>
                    <span className={s.text1}>Эффективные решения для перезагрузки вашего бизнеса </span>
                    <span className={s.text2}>движущая  сила ваших перемен</span>
                </div>
                <div className={s.cardWrapper}>
                    <div className={s.background}/>
                    <div className={s.content}>
                        <div className={s.autoPlan}>
                            <span className={s.autoPlanText}>Автоплан</span>
                        </div>
                        <div className={s.atp_online}>
                            <span className={s.atp_text1}>Атп-онлайн</span>
                            <span className={s.atp_text2}>Учет и управление автотранспортным предприятием</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.advertBlock}>
                <span className={s.companyName}>{'<AdjnaTech/>'}</span>
            </div>
            <div className={s.workTypeBlock}>
                <span className={s.text1}>Наша  команда разработчиков аналитиков и дизайнеров имеет опыт разработки и внедрения систем контроля и автоматизации бизнесс процессов на предприятиях.Мы создадим для вас надежную систему автоматизации которая позволит ускорить работу избежать ошибок связанных с человеческим фактором и оптимировать затраты. </span>
                <span className={s.text2}>Направления деятельности</span>
                <span className={s.text3}>
Наша экспертиза позволяет создавать эффективные индивидуальные решения: мы используем лучший опыт крупнейших ИТ‑проектов в России</span>
                <div className={s.imgBlock}>
                    <img src={PO} className={s.PO_img} alt={'PO'}/>
                    <img src={ECM} className={s.ECM_img} alt={'ECM'}/>
                    <img src={CRM} className={s.CRM_img} alt={'CRM'}/>
                    <img src={CPM} className={s.CPM_img} alt={'CPM'}/>
                </div>
            </div>*/}
        </div>
    )
}