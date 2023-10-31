import s from './QuestionFormBlock.module.scss';
import {useNavigate} from 'react-router-dom';
import {RoutPath} from '../../../../enum';
import {sendFeedback, PostFeedbackBody} from '../../../../api/feedback/api';
import {TextInput} from '../../../../components/TextInput/TextInput';
import {getValidation} from '../../../../helpers/getValidation';
import {useInput} from '../../../../hooks/useInput';
import cn from 'classnames';
import {YouTubeIcon} from '../../../../components/Icons/YouTubeIcon';
import {WhatsAppIcon} from '../../../../components/Icons/WhatsAppIcon';
import {TelegramIcon} from '../../../../components/Icons/TelegramIcon';
import {VkontakteIcon} from '../../../../components/Icons/VkontakteIcon';

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
        isFocused: nameIsFocused,
        reset: nameReset
    } = useInput(nameValidationFunction)

    const {
        value: emailValue,
        onChangeText: emailOnChange,
        error: emailError,
        errorMessage: emailErrorMessage,
        onBlur: emailOnBlur,
        onFocus: emailOnFocus,
        isFocused: emailIsFocused,
        reset: emailReset
    } = useInput(emailValidationFunction)

    const {
        value: phoneValue,
        onChangeText: phoneOnChange,
        error: phoneError,
        errorMessage: phoneErrorMessage,
        onBlur: phoneOnBlur,
        onFocus: phoneOnFocus,
        isFocused: phoneIsFocused,
        reset: phoneReset
    } = useInput(phoneValidationFunction)

    const {
        value: commentValue,
        onChangeTextArea: commentOnChange,
        onBlur: commentOnBlur,
        onFocus: commentOnFocus,
        isFocused: commentIsFocused,
        error: commentError,
        errorMessage: commentErrorMessage,
        reset: commentReset
    } = useInput(commentValidationFunction)

    const resetForm = () => {
        nameReset()
        emailReset()
        phoneReset()
        commentReset()
    }

    const isButtonDisabled = emailError || phoneError || nameError || commentError || !commentValue || !nameValue || (!phoneValue && !emailValue)

    const sendFeedbackHandler = () => {

        const requestBody: PostFeedbackBody = {
            name: nameValue,
            mail: emailValue,
            phone: phoneValue,
            comment: commentValue
        }

        sendFeedback(requestBody).then((res) => {
            if (res.status === 201) {
                alert('Сообщение отправлено')
                resetForm()
            }
        }).catch(error => console.error(error))
        
    }

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
                    <YouTubeIcon className={s.icon_youtube}/>
                    <WhatsAppIcon className={s.icon_whatsapp}/>
                    <TelegramIcon className={s.icon_telegram}/>
                    <VkontakteIcon className={s.icon_vkontakte}/>
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
                    <textarea className={cn(s.textarea, {
                        [s.textarea_error]: commentError
                    })}
                              placeholder={commentIsFocused ? '' : 'Комментарий'}
                              value={commentValue}
                              onChange={commentOnChange}
                              onBlur={commentOnBlur}
                              onFocus={commentOnFocus}/>
                    {
                        commentError && (
                            <div className={s.error_wrapper}>
                                <span
                                    className={s.errorMessage}>{commentErrorMessage}</span>
                            </div>
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
                            <YouTubeIcon className={s.icon_youtube}/>
                            <WhatsAppIcon className={s.icon_whatsapp}/>
                            <TelegramIcon className={s.icon_telegram}/>
                            <VkontakteIcon className={s.icon_vkontakte}/>
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
                            <textarea className={cn(s.textarea, {
                                [s.textarea_error]: commentError
                            })}
                                      placeholder={commentIsFocused ? '' : 'Комментарий'}
                                      value={commentValue}
                                      onChange={commentOnChange}
                                      onBlur={commentOnBlur}
                                      onFocus={commentOnFocus}/>
                            {
                                commentError && (
                                    <div className={s.error_wrapper}>
                                        <span
                                            className={s.errorMessage}>{commentErrorMessage}</span>
                                    </div>
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