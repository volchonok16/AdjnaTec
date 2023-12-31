import s from './ATPBlock.module.scss'
import logo from '../../../../assets/image/ATP-online/atp_logo.png'
import {TryButton} from '../../../../components/TryButton/TryButton';
import track from '../../../../assets/image/ATP-online/tracks.png'

export const ATPBlock = () => {
    return (
        <div className={s.atp_block_container}>
            <div className={s.logo_block}>
                <img className={s.logo} src={logo} alt={'logo'}/>
                <div className={s.title_block}>
                    <span className={s.title_text}>Программный комплекс учета</span>
                    <span className={s.title_text}>и управления автотранспортным</span>
                    <span className={s.title_text}>предприятием</span>
                </div>
            </div>
            <div className={s.description_block}>
                <span
                    className={s.text_description}>Полный контроль техники, ГСМ, ТО,</span>
                <span
                    className={s.text_description}>ТМЦ, заявок, сроков, денег, процессов</span>
                <span
                    className={s.text_description}>и документооборота на предприятии</span>
            </div>
            <img className={s.img} src={track} alt={'track-img'}/>
            <TryButton/>
        </div>
    )
}