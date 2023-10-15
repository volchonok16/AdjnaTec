import s from './ConnectForm.module.scss';
import {TextInput} from '../../../components/TextInput/TextInput';
import {getValidation} from '../../../helpers/getValidation';
import {useInput} from '../../../hooks/useInput';
import cn from 'classnames';
import {ConnectButton} from '../../../components/ConnectButton/ConnectButton';
import {sendFeedback, PostFeedbackBody} from '../../../api/feedback/api';
import {useNavigate} from 'react-router-dom';
import {RoutPath} from '../../../enum';

type ConnectFormPropsType = {
    closeModal: VoidFunction
}

export const ConnectForm = ({closeModal}: ConnectFormPropsType) => {

    const navigate = useNavigate();

    const goToPrivacyPolicyPage = () => {
        navigate(RoutPath.PrivacyPolicy)
    }

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

        sendFeedback(requestBody).then((res) => {
            if (res.status === 201) {
                closeModal()
                alert('Сообщение отправлено')
            }
        }).catch(error => console.error(error))
    }

    return (
        <div className={s.connect_form_container}>
            <div className={s.header_form}>
                <span className={s.title}>Остались вопросы?</span>
                <span className={s.text}>Вы можете задать любой интересующий вас</span>
                <span className={s.text}>вопрос нашим специалистам</span>
            </div>
            <div className={s.field_form}>
                <TextInput isMainPageForm={true}
                           value={nameValue}
                           onChange={nameOnChange}
                           onBlur={nameOnBlur}
                           error={nameError}
                           errorMessage={nameErrorMessage}
                           onFocus={nameOnFocus}
                           isFocused={nameIsFocused}
                           placeholder={'Имя'}/>
                <TextInput isMainPageForm={true}
                           value={phoneValue}
                           onChange={phoneOnChange}
                           placeholder={'Телефон'}
                           error={phoneError}
                           errorMessage={phoneErrorMessage}
                           onBlur={phoneOnBlur}
                           onFocus={phoneOnFocus}
                           isFocused={phoneIsFocused}/>
                <TextInput isMainPageForm={true}
                           value={emailValue}
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
                            <span className={s.errorMessage}>{commentErrorMessage}</span>
                        </div>
                    )
                }
                <div className={s.button_form}>
                    <ConnectButton isMainPageForm={true} isDisabled={isButtonDisabled}
                                   onClick={sendFeedbackHandler}/>
                    <div className={s.privacy_text_wrapper}>
                        <span
                            className={s.text_privacy}>Нажимая на кнопку, я соглашаюсь <span
                            className={s.text_privacy_blue}
                            onClick={goToPrivacyPolicyPage}>с политикой</span></span>
                        <span
                            className={s.text_privacy_blue}
                            onClick={goToPrivacyPolicyPage}>конфиденциальномти сайта</span>
                    </div>
                </div>
            </div>
        </div>
    )
}