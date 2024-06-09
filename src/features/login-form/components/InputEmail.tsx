import { FC } from 'react';
import { InputBase } from 'components';
import { ErrorMessage, FieldProps, Field } from 'formik';

const InputEmail: FC = () => {
  const name = 'email';

  return (
    <Field name={name}>
      {(fieldProps: FieldProps) => {
        return (
          <>
            <InputBase {...fieldProps} name={name} placeholder="Email" />
            <ErrorMessage
              name={name}
              component="div"
              className="mt-1 px-3 text-sm/loose text-red-400"
            />
          </>
        );
      }}
    </Field>
  );
};

export default InputEmail;
