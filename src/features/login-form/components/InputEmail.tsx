import { FC } from 'react';
import classNames from 'classnames';
import { Field, FieldProps, ErrorMessage } from 'formik';

interface InputEmailProps {
  className?: string;
}

const InputEmail: FC<InputEmailProps> = ({ className }) => {
  const name = 'email';

  return (
    <Field name={name}>
      {(fieldProps: FieldProps) => {
        const {
          field,
          meta: { error, touched },
        } = fieldProps;

        return (
          <>
            <input
              {...field}
              type="email"
              placeholder="Email"
              className={classNames(
                'block h-[56px] w-full rounded-full border-2 border-gray-300 px-[24px] py-[18px] text-base text-primary-600 outline-0 transition-all',
                {
                  'focus:border-primary-600': !error && !touched,
                  'border-red-400 bg-red-400/10': error && touched,
                  'border-green-400 bg-green-400/10': touched && !error,
                },
                className,
              )}
            />
            <ErrorMessage
              name={name}
              component="div"
              className="text-red-400"
            />
          </>
        );
      }}
    </Field>
  );
};

export default InputEmail;
