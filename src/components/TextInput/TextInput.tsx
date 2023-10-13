import {SyntheticEvent} from 'react';
import cn from 'classnames';
import s from './TextInput.module.scss'

type TextInputPropsType = {
    isMainPageForm?: boolean
    value: string,
    onChange: (event: SyntheticEvent<HTMLInputElement>) => void
    placeholder: string,
    error: boolean,
    errorMessage: string
    onBlur: VoidFunction
    onFocus: VoidFunction
    isFocused: boolean
}

export const TextInput = ({
                              value,
                              placeholder,
                              onChange,
                              error,
                              errorMessage,
                              onBlur,
                              onFocus,
                              isFocused,
                              isMainPageForm = false
                          }: TextInputPropsType) => {
    return (
        <div className={cn(s.container, {
            [s.container_main_page_form]: isMainPageForm
        })}>
            <input
                className={cn(s.input, {
                    [s.input_error]: error,
                })}
                value={value}
                placeholder={isFocused ? '' : placeholder}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
            />
            {
                error && (
                    <span className={s.errorMessage}>{errorMessage}</span>
                )
            }
        </div>
    )
}