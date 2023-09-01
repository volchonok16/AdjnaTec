import s from './AtpOnline.module.scss'
import {ATPBlock} from './ATPBlock/ATPBlock';
import {IndicatorsBlock} from './IndicatorsBlock/IndicatorsBlock';

export const AtpOnline = () => {
    return (
        <div className={s.atp_container}>
            <ATPBlock/>
            <IndicatorsBlock/>
        </div>
    )
}