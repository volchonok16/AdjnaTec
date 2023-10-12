export const getValidation = () => ({
    emailValidation: {
        required: true,
        validate: (value: string) => {
            const badValue =
                value.split('@').length !== 2 ||
                /[^a-zA-Z0-9!#$%&'*+-/=?^_`{|}~.@]/.test(value);

            if (badValue) return 'Пожалуйста, введите корректный электорнный адрес (example@email.com)';

            const name = value.split('@')[0];
            const domain = value.split('@')[1];

            const badName =
                /\W\W/.test(name) ||
                /\d+$/.test(name) ||
                !/^.{2,64}$/.test(name) ||
                /[^a-zA-Z0-9]/.test(name[0]) ||
                name.slice(name.lastIndexOf('.') + 1).length < 1;

            const badDomain =
                domain.length > 255 ||
                domain.split('.').length < 2 ||
                domain.split('.').length > 3;

            const domainFirstPart = domain.slice(0, domain.lastIndexOf('.'));
            const domainSecondPart = domain.slice(domain.lastIndexOf('.') + 1);

            const badDomainFirstPart =
                /^[0-9.]+$/.test(domainFirstPart) ||
                !/^[a-zA-Z0-9-.]{2,}$/.test(domainFirstPart) ||
                domainFirstPart.split('-').length > 2 ||
                domainFirstPart.startsWith('-') ||
                domainFirstPart.endsWith('-') ||
                domainFirstPart.split('').some((s) => s === '.');

            const badDomainSecondPart = !/^[a-z]{2,4}$/.test(domainSecondPart);

            const anyBad =
                badName || badDomain || badDomainFirstPart || badDomainSecondPart;

            return anyBad ? 'Пожалуйста, введите корректный электорнный адрес (example@email.com)' : true;
        },
    },

    phoneValidation: {
        required: true,
        validate: (value: string) => {

                const currectPhone = /^(?:\+7|8)(?:\d{10}|\d{3}-\d{3}-\d{2}-\d{2}|\d{3}-\d{7})$/.test(value)

                return currectPhone ? true : `Пожалуйста, введите корректный номер телефона. Пример: +79005553535`
        }
    },

    personalDataName: {
        required: true,
        validate: (value: string) => {
            value = value.trim();

            const badMaxLengthValue = value.length > 50;
            const badMinLengthValue = value.length < 2;
            const isNumber = /\d+/.test(value)

            if (badMinLengthValue || badMaxLengthValue) {
                return 'Имя должно содержать не менее 2 и не более 50 символов.';
            } else if (isNumber) {
                return 'Имя должно состоять только из букв.'
            } else return true;
        },
    }
});
