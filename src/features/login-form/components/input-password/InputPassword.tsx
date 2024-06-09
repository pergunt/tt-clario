import { FC, useState } from 'react';
import { InputBase } from 'components';
import { ValidationMessages } from './components';
import classNames from 'classnames';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Field, FieldProps } from 'formik';

interface InputPasswordProps {
  className?: string;
  name: string;
}

const InputPassword: FC<InputPasswordProps> = ({ className, name }) => {
  const [visible, toggleVisible] = useState(false);

  const { Icon, inputType } = visible
    ? {
        Icon: EyeIcon,
        inputType: 'text',
      }
    : {
        Icon: EyeSlashIcon,
        inputType: 'password',
      };

  return (
    <Field name={name}>
      {(fieldProps: FieldProps) => {
        const {
          meta: { error = '', value },
        } = fieldProps;

        return (
          <>
            <div className={classNames('relative', className)}>
              <InputBase
                {...fieldProps}
                name={name}
                type={inputType}
                minLength={8}
                maxLength={64}
                placeholder="Password"
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
            <ValidationMessages name={name} inputValue={value} error={error} />
          </>
        );
      }}
    </Field>
  );
};

export default InputPassword;
