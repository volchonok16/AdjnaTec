import s from './AtpOnline.module.scss'
import {ATPBlock} from './ATPBlock/ATPBlock';
import {IndicatorsBlock} from './IndicatorsBlock/IndicatorsBlock';
import {AutomationBlock} from './AutomationBlock/AutomationBlock';

export const AtpOnline = () => {
    return (
        <div className={s.atp_container}>
            <ATPBlock/>
            <IndicatorsBlock/>
            <AutomationBlock/>
        </div>
    )
}