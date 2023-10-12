import {SyntheticEvent, useState} from 'react';

type TValidation = (arg0: string) => boolean | string;

export function useInput(validate: TValidation) {
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(false)
    const [isFocused, setIsFocused] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onChangeText = (event: SyntheticEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setValue(target.value);
        setError(false);
        setIsValid(false);
        setErrorMessage('');
    };

    const onChangeTextArea = (event: SyntheticEvent<HTMLTextAreaElement>) => {
        const target = event.target as HTMLTextAreaElement;
        setValue(target.value);
        setError(false);
        setIsValid(false);
        setErrorMessage('');
    };

    const onFocus = () => setIsFocused(true);

    const onBlur = () => {
        setIsFocused(false);
        if (!value) return;
        const validationResult = validate(value);

        if (typeof validationResult === 'string') {
            setError(true);
            setErrorMessage(validationResult);
            setIsValid(false)
        } else {
            setError(false);
            setErrorMessage('');
            setIsValid(true)
        }
    };

    return {
        value,
        isFocused,
        isValid,
        error,
        errorMessage,
        onChangeText,
        onChangeTextArea,
        onFocus,
        onBlur,
        setError,
        setErrorMessage,
        setValue,
        setIsValid
    };
}
