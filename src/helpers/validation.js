import * as yup from 'yup'

export const schema = yup
    .object({
        name: yup
            .string()
            .min(1, 'Не правильно заполнено поле "Имя"')
            .max(50, 'Не правильно заполнено поле "Имя"')
            .required('Обязательное поле'),
        phone: yup
            .string()
            .required('Обязательное поле')
    })