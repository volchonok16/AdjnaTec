import s from './IndicatorsBlock.module.scss'
import {useEffect, useRef, useState} from 'react';

export const IndicatorsBlock = () => {

    const [years, setYears] = useState(1)
    const [workPercent, setWorkPercent] = useState(1)
    const [savingPercent, setSavingPercent] = useState(1)
    const [isVisible, setIsVisible] = useState(false);
    const parentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // entry.isIntersecting будет true, когда элемент видим в области просмотра
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Можно также отключить наблюдение после того, как элемент видим
                    if (parentRef.current) {
                        observer.unobserve(parentRef.current);
                    }
                }
            },
            {threshold: 0.5} // Можно настроить порог видимости по вашему усмотрению
        );
        // Начать отслеживание элемента
        if (parentRef.current) {
            observer.observe(parentRef.current);
        }
        // Очистить наблюдатель при размонтировании компонента
        return () => {
            if (parentRef.current) {
                observer.unobserve(parentRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isVisible && years < 17) {
                setYears((prevYears) => prevYears + 1);
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => {
            clearInterval(interval);
        };
    }, [years, isVisible]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isVisible && workPercent < 40) {
                setWorkPercent((prevWorkPercent) => prevWorkPercent + 1);
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => {
            clearInterval(interval);
        };
    }, [workPercent, isVisible]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isVisible && savingPercent < 20) {
                setSavingPercent((prevSavingPercent) => prevSavingPercent + 1);
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => {
            clearInterval(interval);
        };
    }, [savingPercent, isVisible]);

    return (
        <div className={s.indicators_container}>
            <div className={s.info_block}>
                <div className={s.left_text_block}>
                    <span className={s.left_text}>
                        <span className={s.blue_text}>ВЫСОКИЕ ПОКАЗАТЕЛИ</span> ЭКОНОМИИ И УДОБСТВА УПРАВЛЕНИЯ ОБЕСПЕЧИВАЮТСЯ <span
                        className={s.blue_text}>РЯДОМ ОСОБЕННОСТЕЙ</span> КОМПЛЕКСА
                    </span>
                </div>
                <div className={s.right_text_block}>
                    <span className={s.text_right}>
Все сделано так, чтобы максимально разгрузить персонал, обеспечить надежность работы комплекса даже при отсутствии связи, обезопасить данные и дать максимум достоверной информации руководству по состоянию процессов на предприятии
                    </span>
                </div>
            </div>
            <div className={s.cards_block} ref={parentRef}>
                <div className={s.card}>
                    <span className={s.number_value}>{years} лет</span>
                    <div className={s.description_container}>
                        <span className={s.description}>объединяет все ресурсы и</span>
                        <span className={s.description}>процессы автотранспортного</span>
                        <span
                            className={s.description}>предприятия в удобную систему</span>
                    </div>
                </div>
                <div className={s.card}>
                    <span className={s.number_value}>{workPercent}%</span>
                    <div className={s.description_container}>
                        <span className={s.description}>операторской, контрольной</span>
                        <span className={s.description}>и управленческой работы</span>
                        <span className={s.description}>выполняется автоматически</span>
                    </div>
                </div>
                <div className={s.card}>
                    <span className={s.number_value}>{savingPercent}%</span>
                    <div className={s.description_container}>
                        <span className={s.description}>экономии от всех</span>
                        <span className={s.description}>затрат предприятия</span>
                    </div>
                </div>
            </div>
        </div>
    )
}