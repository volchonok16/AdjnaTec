import s from './ControlBlock.module.scss';
import arrow_green from '../../../../assets/image/ATP-online/arrow_green.svg';
import mark from '../../../../assets/image/ATP-online/check_mark.svg';
import minus from '../../../../assets/image/ATP-online/minus.svg'

type ControlBlockDataType = {
    left_block: string[];
    right_block: string[]
}

const controlBlockData: ControlBlockDataType = {
    left_block: ['Безконтрольное использование техники', 'Ошибки персонала, халатность, хищения', 'Не прозрачный процесс ремогта и ТО', 'Большие расходы на ГСМ и запчасти', 'Система управления не эффективна'],
    right_block: ['Автоматизированная работа  комплекса', 'Прозрачный контроль транспорта и оборудования', 'Экономия до 20% затрат предприятия', 'Полная информация по процессам и ресурсам ', 'Исключения человеческого фактора']
}

export const ControlBlock = () => {
    return (
        <div className={s.control_block_container}>
            <div className={s.text_wrapper_mobile}>
                <div className={s.total_control_wrapper_mobile}>
                    <span className={s.total_control_text}>АТП ОНЛАЙН -</span>
                    <span
                        className={s.total_control_text_blue}>ТОТАЛЬНЫЙ КОНТРОЛЬ</span>
                    <span
                        className={s.total_control_text}>ЗА ТРАНСПОРТОМ</span>
                    <span
                        className={s.total_control_text}>НА ПРЕДПРИЯТИИ*</span>
                </div>
                <div className={s.remark_position_wrapper}>
                    <div className={s.remark_wrapper_mobile}>
                        <span
                            className={s.remark_text}>*система построена с глубоким.</span>
                        <span className={s.remark_text}> пониманием как работает</span>
                        <span className={s.remark_text}>автотранспортное хозяйство.</span>
                    </div>
                </div>
            </div>
            <div className={s.remark_wrapper}>
                <span className={s.remark_text}>*система построена с глубоким пониманием как работает автотранспортное хозяйство.</span>
            </div>
            <div className={s.total_control_wrapper}>
                <span className={s.total_control_text}>АТП ОНЛАЙН - <span
                    className={s.total_control_text_blue}>ТОТАЛЬНЫЙ КОНТРОЛЬ</span></span>
                <span
                    className={s.total_control_text}>ЗА ТРАНСПОРТОМ НА ПРЕДПРИЯТИИ</span>
            </div>
            <div className={s.lists_wrapper}>
                <div className={s.list_block}>
                    {
                        controlBlockData.left_block.map((data) => {
                            return (
                                <div className={s.list_row} key={data}>
                                    <img className={s.img_minus} src={minus}
                                         alt={'minus'}/>
                                    <span className={s.text}>{data}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <img className={s.arrow_img} src={arrow_green} alt={'arrow-green'}/>
                <div className={s.list_block}>
                    {
                        controlBlockData.right_block.map((data) => {
                            return (
                                <div className={s.list_row} key={data}>
                                    <img className={s.img_mark} src={mark} alt={'mark'}/>
                                    <span className={s.text}>{data}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}