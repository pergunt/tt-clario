import { FC } from 'react';
import { InputBase } from 'components';
import { ErrorMessage, FieldProps, Field } from 'formik';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const InputEmail: FC<{ name: string }> = ({ name }) => {
  const [parent] = useAutoAnimate();

  return (
    <Field name={name}>
      {(fieldProps: FieldProps) => (
        <div ref={parent}>
          <InputBase {...fieldProps} name={name} placeholder="Email" />
          <ErrorMessage
            name={name}
            component="div"
            className="mt-1 px-3 text-sm/loose text-red-400"
          />
        </div>
      )}
    </Field>
  );
};

export default InputEmail;
