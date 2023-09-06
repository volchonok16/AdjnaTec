import s from './AdvantageCard.module.scss'
import cross from '../../../../../assets/image/ATP-online/cross.png'
import {AdvantagesDataType} from '../AdvantagesBlock';
import cn from 'classnames';
import {useState} from 'react';

type AdvantageCardPropsType = {
    data: AdvantagesDataType
}

export const AdvantageCard = ({data}: AdvantageCardPropsType) => {

    const [isRotate, setIsRotate] = useState(false)

    const rotateHandler = () => {
        setIsRotate(!isRotate)
    }

    const elemHeight = isRotate ? data.maxHeight : '10.87vh'

    return (
        <div className={s.advantage_card_container} style={{height: elemHeight}}
             onClick={rotateHandler}>
            <div className={s.small_card}>
                <span className={s.title}>{data.title}</span>
                <img className={cn(s.img, {
                    [s.img_rotate]: isRotate
                })} src={cross} alt={'cross'}/>
            </div>
            <ul className={s.ul_block}>
                {
                    data.description.map((description) => {
                        return (
                            <li className={s.li_row}
                                key={description}>{description}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}