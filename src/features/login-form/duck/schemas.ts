import * as Yup from 'yup';
import emailValidator from 'email-validator';

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
    .min(8, 'Has at least 8 characters (no spaces)')
    .max(64, 'Reached the max limit (64)')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])\S/, 'Uppercase and lowercase letters')
    .matches(/[0-9]/, '1 digit minimum')
    .required('Required'),
  email: Yup.string()
    .transform((value) => value.trim())
    .email('Invalid email')
    .required('Required'),
});
