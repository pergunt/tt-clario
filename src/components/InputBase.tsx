import { FC, InputHTMLAttributes } from 'react';
import { FieldProps } from 'formik';
import classNames from 'classnames';
import { useRunAfterUpdate } from 'hooks';
import { filterOut } from 'utils';

interface InputBaseProps
  extends FieldProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'form'> {
  name: string;
}

const InputBase: FC<InputBaseProps> = ({
  className,
  field,
  meta,
  name,
  form,
  ...props
}) => {
  const runAfterUpdate = useRunAfterUpdate();

  const { error, touched } = meta;

  return (
    <input
      {...field}
      {...props}
      onChange={(e) => {
        const input = e.target;
        const value = e.target.value;

        form.setFieldTouched(name, false);

        if (props.type === 'email') {
          form.setFieldValue(name, value);

          return;
        }

        const cursor = input.selectionStart as number;

        const { newText, newCursor } = filterOut(value, cursor);

        form.setFieldValue(name, newText);

        runAfterUpdate(() => {
          input.selectionStart = newCursor;
          input.selectionEnd = newCursor;
        });
      }}
      className={classNames(
        'block h-[56px] w-full rounded-full border-2 border-gray-300 px-[24px] py-[18px] text-base text-primary-600 outline-0 transition-colors',
        {
          'focus:border-primary-600': (!error || error) && !touched,
          'border-red-400 bg-red-400/10': error && touched,
          'border-green-400 bg-green-400/10': touched && !error,
        },
        className,
      )}
    />
  );
};

export default InputBase;
