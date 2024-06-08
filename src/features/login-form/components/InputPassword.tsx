import { FC, useState } from 'react';
import classNames from 'classnames';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Field, FieldProps, ErrorMessage } from 'formik';
import { useRunAfterUpdate } from 'hooks';
import { filterOut } from 'utils';

interface InputPasswordProps {
  className?: string;
}

const InputPassword: FC<InputPasswordProps> = ({ className }) => {
  const [visible, toggleVisible] = useState(false);
  const runAfterUpdate = useRunAfterUpdate();

  const { Icon, inputType } = visible
    ? {
        Icon: EyeIcon,
        inputType: 'text',
      }
    : {
        Icon: EyeSlashIcon,
        inputType: 'password',
      };

  const name = 'password';

  return (
    <Field name={name}>
      {(fieldProps: FieldProps) => {
        const {
          field,
          form,
          meta: { error, touched },
        } = fieldProps;
        return (
          <>
            <div className="relative">
              <input
                {...field}
                onChange={(event) => {
                  const input = event.target;

                  const value = event.target.value;
                  const cursor = input.selectionStart as number;

                  const { newText, newCursor } = filterOut(value, cursor);

                  form.setFieldValue(name, newText);

                  runAfterUpdate(() => {
                    input.selectionStart = newCursor;
                    input.selectionEnd = newCursor;
                  });
                }}
                type={inputType}
                minLength={8}
                maxLength={64}
                placeholder="Password"
                className={classNames(
                  'block h-[56px] w-full rounded-full border-2 border-gray-300 px-[24px] py-[18px] text-base text-primary-600 outline-0 transition-all',
                  {
                    'focus:border-primary-600': !error && !touched,
                    'border-red-400 bg-red-400/10': error && touched,
                    'border-green-400 bg-green-400/10': !error && touched,
                  },
                  className,
                )}
              />
              <Icon
                className="absolute right-[24px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 cursor-pointer text-primary-600"
                onMouseDown={(e) => {
                  // kep the input focused while toggling its type
                  e.preventDefault();
                  toggleVisible(!visible);
                }}
              />
            </div>
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

export default InputPassword;
