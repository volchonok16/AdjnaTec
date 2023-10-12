import s from './AdvantageCard.module.scss'
import cross from '../../../../../assets/image/ATP-online/cross.png'
import {AdvantagesDataType} from '../AdvantagesBlock';
import cn from 'classnames';
import {useState} from 'react';
import {Collapse} from 'antd';

type AdvantageCardPropsType = {
    data: AdvantagesDataType
}

const {Panel} = Collapse;

export const AdvantageCard = ({data}: AdvantageCardPropsType) => {

    const [isRotate, setIsRotate] = useState(false)

    const rotateHandler = () => {
        setIsRotate(!isRotate)
    }

    return (
        <div>
            <Collapse className={s.collapse} onChange={rotateHandler} bordered={false}>
                <Panel className={s.panel} key={data.title} showArrow={false} header={
                    <div className={s.panel_header}>
                        <span>{data.title}</span>
                        <img className={cn(s.img, {
                            [s.img_rotate]: isRotate
                        })} src={cross} alt={'cross'}/>
                    </div>
                }>
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
                </Panel>
            </Collapse>
        </div>
    )
}