import s from './AdvantagesBlock.module.scss'
import {AdvantageCard} from './AdvantageCard/AdvantageCard';

export type AdvantagesDataType = {
    title: string
    description: string[]
    maxHeight: string
    slow_speed: boolean
}

const advantagesData: AdvantagesDataType[] = [
    {
        title: 'Удобство',
        description: ['Программа готова к работе сразу после установки. Для 95% предприятий не требуется каких либо доработок', 'Автоматическая подгрузка данных с GPS ГЛОНАСС оборудования мониторинга транспорта в режиме реального времени', 'Интеграция с 1С:Бухгалтерия', 'Умная сигнализация и многоуровневые напоминания если что-то идет не так', 'Отчеты в управленческом модуле доступны через интернет с любого устройства где есть браузер, что позволяет контролировать работу АТП из любого места, из дома, в командировке, в отпуске'],
        maxHeight: 'auto',
        slow_speed: false
    },
    {
        title: 'Контроль',
        description: ['Контроль перемещения бумажных документов с помощью сканера штрихкода', 'Периодические полные аудиты работы системы нашей техслужбой', 'Специальная управленческая доска для руководителя — все данные по всему АТП выводятся на экран широкоформатного телевизора на стене', 'Возможность водителям проставлять текущий статус через смартфон', 'Автоматический самоаудит эффективности работы системы', 'Филиальная схема, когда каждый филиал видит свое, а центральный офис видит все филиалы отдельно плюс консолидированную отчетность по компании.'],
        maxHeight: 'auto',
        slow_speed: false
    },
    {
        title: 'Технические возможности',
        description: ['Встроенная в систему встречная проверка информации из разных модулей, что создает невозможность сговора', 'Встроенный алгоритм контроля достоверности данных в путевом листе, табеле, направлениях на ремонт', 'Стабильность работы и безопасность данных — комплекс устанавливается на ваши компьютеры, и работает даже при обрыве интернет-соединения. Доступ к базе данных есть только у вас', 'Простой интерфейс', 'Доработка комплекса под клиента. Предусмотрена возможность изменения форм, отчетов под индивидуальные требования, доработки необходимого функционала'],
        maxHeight: 'auto',
        slow_speed: false
    },
    {
        title: 'Масса мелких автоматизаций',
        description: ['Заявочный модуль позволяет получать заявку на транспорт от вашего контрагента через интернет непосредственно в журнал заявок', 'Автоматически проставляются даты событий, люди не могут их менять по своему желанию', 'Автоматическое проставление времени въезда и выезда техники без вмешательства человека', 'Автоматически формируется журнал въезда и выезда транспорта с автоматической фиксацией пробега, времени холостой работы двигателя  времени нахождения на линии, остатков топлива на выезде и заезде, расхода топлива', 'Автоматически формирует план-задание на выпуск транспорта для механика по выпуску', 'Фиксируется факт заправки транспорта с привязкой по времени и адресом АЗС', 'Списываются со склада и распределяет по учетным карточкам транспорта запчасти установленные в процессе ремонта', 'Ведется журнал учета и выдачи автошин, аккумуляторов, учитывается их наработка, формируется карточки учета и акты на списание', 'Ведется автоматический учет и контроль выданных и сданных путевых листов', 'Автоматически формируется акт выполненных работ по любому подразделению, любой машине, любому водителю, и т.д.', 'Автоматизирована еще сотня разных нужных вещей, из которых состоит ежедневная рутина в АТП'],
        maxHeight: 'auto',
        slow_speed: true
    },

]

export const AdvantagesBlock = () => {
    return (
        <div className={s.advantages_block_container}>
            <span className={s.text}>НАШ <span className={s.text_blue}>КОМПЛЕКС</span> ОБЛАДАЕТ РЯДОМ <span
                className={s.text_blue}>ПРИЕМУЩЕСТВ</span></span>
            <div className={s.advantages_cards_block}>
                {
                    advantagesData.map((data) => {
                        return (
                            <AdvantageCard key={data.title} data={data}/>
                        )
                    })
                }
            </div>
        </div>
    )
}