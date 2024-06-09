import * as Yup from 'yup';
import emailValidator from 'email-validator';
import { INPUT_CASING_REGEXP, NUM_REGEXP } from 'consts';

Yup.addMethod(Yup.string, 'email', function (message) {
  return this.test({
    message,
    name: 'email',
    test: (value = '') => emailValidator.validate(value),
  });
});

export const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .transform((value) => value.trim())
    .min(8, 'min')
    .max(64, 'Reached max limit')
    .matches(INPUT_CASING_REGEXP, 'casing')
    .matches(NUM_REGEXP, 'digits')
    .required("Can't be blank"),
  email: Yup.string()
    .transform((value) => value.trim())
    .email('Invalid email')
    .required("Can't be blank"),
});
