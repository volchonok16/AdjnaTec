import s from './QuestionFormBlock.module.scss';
import youtube from '../../../../assets/image/ATP-online/youtube.svg';
import whatsapp from '../../../../assets/image/ATP-online/whatsapp.svg';
import telegram from '../../../../assets/image/ATP-online/telegram.svg';
import vkontakte from '../../../../assets/image/ATP-online/vkontakte.svg'
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {RoutPath} from '../../../../enum';

export const QuestionFormBlock = () => {

    const navigate = useNavigate();

    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth <= 1024) {
                setScale(0.5);
            } else if (screenWidth <= 1280) {
                setScale(0.6);
            } else if (screenWidth <= 1440) {
                setScale(0.7);
            } else if (screenWidth <= 1600) {
                setScale(0.8);
            } else {
                setScale(1.0);
            }
        };

        window.addEventListener('resize', updateScale);
        updateScale();

        return () => {
            window.removeEventListener('resize', updateScale);
        };
    }, []);

    const goToPrivacyPolicyPage = () => {
        navigate(RoutPath.PrivacyPolicy)
    }

    return (
        <div className={s.question_form_container}>
            <div className={s.left_container}>
                <div className={s.text_wrapper}>
                    <span className={s.title}>Остались вопросы?</span>
                    <span className={s.description}>Вы можете задать любой интересующий вас вопрос нашим специалистам. Менеджеры компании с радостью ответят на ваши вопросы, произведут расчет стоимости услуг и подготовят коммерческое предложение.</span>
                </div>
                <div className={s.icon_wrapper}>
                    <img className={s.icon} style={{transform: `scale(${scale})`}}
                         src={youtube} alt={'youtube'}/>
                    <img className={s.icon} style={{transform: `scale(${scale})`}}
                         src={whatsapp} alt={'whatsapp'}/>
                    <img className={s.icon} style={{transform: `scale(${scale})`}}
                         src={telegram} alt={'telegram'}/>
                    <img className={s.icon} style={{transform: `scale(${scale})`}}
                         src={vkontakte} alt={'vkontakte'}/>
                </div>
            </div>
            <div className={s.right_container}>
                <div className={s.connect_wrapper}>
                    <input className={s.input} placeholder={'Имя'}/>
                    <input className={s.input} placeholder={'Телефон/Почта'}/>
                    <textarea className={s.textarea} placeholder={'Комментарий'}/>
                    <button className={s.button}>
                        <span className={s.button_text}>Связаться</span>
                    </button>
                </div>
                <div className={s.politic_wrapper}>
                    <span className={s.text}>Нажимая на кнопку, вы соглашаетесь</span>
                    <span className={s.text_underline} onClick={goToPrivacyPolicyPage}>с политикой конфиденциальности сайта</span>
                </div>
            </div>
        </div>
    )
}