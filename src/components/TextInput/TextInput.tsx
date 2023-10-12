import {SyntheticEvent} from 'react';
import cn from 'classnames';
import s from './TextInput.module.scss'

type TextInputPropsType = {
    value: string,
    onChange: (event: SyntheticEvent<HTMLInputElement>) => void
    placeholder: string,
    error?: boolean,
    errorMessage?: string
    onBlur?: VoidFunction
}

export const TextInput = ({
                              value,
                              placeholder,
                              onChange,
                              error,
                              errorMessage,
                              onBlur,
                          }: TextInputPropsType) => {
    return (
        <div className={s.container}>
                <input
                    className={cn(s.input, {
                        [s.input_error]: error,
                    })}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            {
                error && (
                    <span className={s.errorMessage}>{errorMessage}</span>
                )
            }
        </div>
    )
}