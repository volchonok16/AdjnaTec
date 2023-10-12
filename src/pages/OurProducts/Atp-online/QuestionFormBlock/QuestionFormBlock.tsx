import s from './QuestionFormBlock.module.scss';
import youtube from '../../../../assets/image/ATP-online/youtube.svg';
import whatsapp from '../../../../assets/image/ATP-online/whatsapp.svg';
import telegram from '../../../../assets/image/ATP-online/telegram.svg';
import vkontakte from '../../../../assets/image/ATP-online/vkontakte.svg'
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {RoutPath} from '../../../../enum';
import {postFeedback, PostFeedbackBody} from '../../../../api/feedback/api';
import {TextInput} from '../../../../components/TextInput/TextInput';
import {getValidation} from '../../../../helpers/getValidation';
import {useInput} from '../../../../hooks/useInput';

export const QuestionFormBlock = () => {

    const navigate = useNavigate();

    const nameValidationFunction = getValidation().personalDataName.validate
    const emailValidationFunction = getValidation().emailValidation.validate
    const phoneValidationFunction = getValidation().phoneValidation.validate
    const commentValidationFunction = getValidation().commentValidation.validate

    const {
        value: nameValue,
        onChangeText: nameOnChange,
        error: nameError,
        errorMessage: nameErrorMessage,
        onBlur: nameOnBlur,
        onFocus: nameOnFocus,
        isFocused: nameIsFocused
    } = useInput(nameValidationFunction)

    const {
        value: emailValue,
        onChangeText: emailOnChange,
        error: emailError,
        errorMessage: emailErrorMessage,
        onBlur: emailOnBlur,
        onFocus: emailOnFocus,
        isFocused: emailIsFocused
    } = useInput(emailValidationFunction)

    const {
        value: phoneValue,
        onChangeText: phoneOnChange,
        error: phoneError,
        errorMessage: phoneErrorMessage,
        onBlur: phoneOnBlur,
        onFocus: phoneOnFocus,
        isFocused: phoneIsFocused
    } = useInput(phoneValidationFunction)

    const {
        value: commentValue,
        onChangeTextArea: commentOnChange,
        onBlur: commentOnBlur,
        onFocus: commentOnFocus,
        isFocused: commentIsFocused,
        error: commentError,
        errorMessage: commentErrorMessage
    } = useInput(commentValidationFunction)

    const isButtonDisabled = emailError || phoneError || nameError || commentError || !commentValue || !nameValue || (!phoneValue && !emailValue)

    const sendFeedbackHandler = () => {

        const requestBody: PostFeedbackBody = {
            name: nameValue,
            mail: emailValue,
            phone: phoneValue,
            comment: commentValue
        }

        postFeedback(requestBody).then((res) => {
            if (res.status === 201) {
                alert('Сообщение отправлено')
            }
        }).catch(error => console.error(error))
    }

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

    const goToYouTube = () => {
        window.open('https://youtube.com/@AdjnaTech?si=CW-d9vIfmdfmmbxs', '_blank')
    }
    const goToVkontakte = () => {
        window.open('https://vk.com/club221983077', '_blank')
    }
    const goToTelegram = () => {
        window.open('https://t.me/AdjnaTech', '_blank')
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
                         src={youtube} onClick={goToYouTube} alt={'youtube'}/>
                    <img className={s.icon} style={{transform: `scale(${scale})`}}
                         src={whatsapp} alt={'whatsapp'}/>
                    <img className={s.icon} style={{transform: `scale(${scale})`}}
                         src={telegram} onClick={goToTelegram} alt={'telegram'}/>
                    <img className={s.icon} style={{transform: `scale(${scale})`}}
                         src={vkontakte} onClick={goToVkontakte} alt={'vkontakte'}/>
                </div>
            </div>
            <div className={s.right_container}>
                <div className={s.connect_wrapper}>
                    <TextInput value={nameValue}
                               onChange={nameOnChange}
                               onBlur={nameOnBlur}
                               error={nameError}
                               errorMessage={nameErrorMessage}
                               onFocus={nameOnFocus}
                               isFocused={nameIsFocused}
                               placeholder={'Имя'}/>
                    <TextInput value={phoneValue}
                               onChange={phoneOnChange}
                               placeholder={'Телефон'}
                               error={phoneError}
                               errorMessage={phoneErrorMessage}
                               onBlur={phoneOnBlur}
                               onFocus={phoneOnFocus}
                               isFocused={phoneIsFocused}/>
                    <TextInput value={emailValue}
                               onChange={emailOnChange}
                               placeholder={'Почта'}
                               error={emailError}
                               errorMessage={emailErrorMessage}
                               onBlur={emailOnBlur}
                               onFocus={emailOnFocus}
                               isFocused={emailIsFocused}/>
                    <textarea className={s.textarea}
                              placeholder={commentIsFocused ? '' : 'Комментарий'}
                              value={commentValue}
                              onChange={commentOnChange}
                              onBlur={commentOnBlur}
                              onFocus={commentOnFocus}/>
                    {
                        commentError && (
                            <span className={s.errorMessage}>{commentErrorMessage}</span>
                        )
                    }
                    <button className={s.button} onClick={sendFeedbackHandler}
                            disabled={isButtonDisabled}>
                        <span className={s.button_text}>Связаться</span>
                    </button>
                </div>
                <div className={s.politic_wrapper}>
                    <span className={s.text}>Нажимая на кнопку, вы соглашаетесь</span>
                    <span className={s.text_underline} onClick={goToPrivacyPolicyPage}>с политикой конфиденциальности сайта</span>
                </div>
            </div>
            <div className={s.tablet_content_wrapper}>
                <span className={s.title_tablet}>Остались вопросы?</span>
                <div className={s.tablet_blocks_wrapper}>
                    <div className={s.left_container}>
                        <div className={s.text_wrapper}>
                            <span className={s.description}>Вы можете задать любой интересующий вас вопрос нашим специалистам. Менеджеры компании с радостью ответят на ваши вопросы, произведут расчет стоимости услуг и подготовят коммерческое предложение.</span>
                        </div>
                        <div className={s.icon_wrapper}>
                            <img className={s.icon} style={{transform: `scale(${scale})`}}
                                 src={youtube} onClick={goToYouTube} alt={'youtube'}/>
                            <img className={s.icon} style={{transform: `scale(${scale})`}}
                                 src={whatsapp} alt={'whatsapp'}/>
                            <img className={s.icon} style={{transform: `scale(${scale})`}}
                                 src={telegram} onClick={goToTelegram} alt={'telegram'}/>
                            <img className={s.icon} style={{transform: `scale(${scale})`}}
                                 src={vkontakte} onClick={goToVkontakte}
                                 alt={'vkontakte'}/>
                        </div>
                    </div>
                    <div className={s.right_container}>
                        <div className={s.connect_wrapper}>
                            <TextInput value={nameValue}
                                       onChange={nameOnChange}
                                       onBlur={nameOnBlur}
                                       error={nameError}
                                       errorMessage={nameErrorMessage}
                                       onFocus={nameOnFocus}
                                       isFocused={nameIsFocused}
                                       placeholder={'Имя'}/>
                            <TextInput value={phoneValue}
                                       onChange={phoneOnChange}
                                       placeholder={'Телефон'}
                                       error={phoneError}
                                       errorMessage={phoneErrorMessage}
                                       onBlur={phoneOnBlur}
                                       onFocus={phoneOnFocus}
                                       isFocused={phoneIsFocused}/>
                            <TextInput value={emailValue}
                                       onChange={emailOnChange}
                                       placeholder={'Почта'}
                                       error={emailError}
                                       errorMessage={emailErrorMessage}
                                       onBlur={emailOnBlur}
                                       onFocus={emailOnFocus}
                                       isFocused={emailIsFocused}/>
                            <textarea className={s.textarea}
                                      placeholder={commentIsFocused ? '' : 'Комментарий'}
                                      value={commentValue}
                                      onChange={commentOnChange}
                                      onBlur={commentOnBlur}
                                      onFocus={commentOnFocus}/>
                            {
                                commentError && (
                                    <span
                                        className={s.errorMessage}>{commentErrorMessage}</span>
                                )
                            }
                            <button className={s.button} onClick={sendFeedbackHandler}
                                    disabled={isButtonDisabled}>
                                <span className={s.button_text}>Связаться</span>
                            </button>
                        </div>
                        <div className={s.politic_wrapper}>
                            <span
                                className={s.text}>Нажимая на кнопку, вы соглашаетесь</span>
                            <span className={s.text_underline}
                                  onClick={goToPrivacyPolicyPage}>с политикой конфиденциальности сайта</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}