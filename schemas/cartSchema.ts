import * as yup from 'yup';

export const cartSchema = yup.object({
    name: yup.string().required('Нужно ввести имя'),
    lastname: yup.string().required('Нужно ввести фамилию'),
    email: yup.string().email('Неправильный формат email').required('Нужно ввести email'),
    "card-number": yup.string().required('Нужно ввести номер карты'),
    "card-name": yup.string().required('Нужно ввести имя карты'),
    "card-end-date": yup.string().required('Нужно ввести дату карты'),
    "cvc": yup.string().required('Нужно ввести cvc карты'),
});