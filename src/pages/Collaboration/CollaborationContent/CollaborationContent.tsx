import s from './CollaborationContent.module.scss'
import collaboration from '../../../assets/image/Collaboration.png'

export const CollaborationContent = () => {

    return (
        <div className={s.container}>
            <span className={s.usefulText}>Станьте нашим партнером - работать с нами выгодно.</span>
            <span className={s.infoText}>Дилеры получат значительные скидки на приобретение программных продуктов компании AdjnaTec.</span>
            <img src={collaboration} alt={'collaboration-img'}/>
        </div>
    )
}