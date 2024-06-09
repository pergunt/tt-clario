import { FC } from 'react';
import { ErrorMessage } from 'formik';
import { INPUT_CASING_REGEXP, NUM_REGEXP } from 'consts';
import ValidationMessageItem from './ValidationMessageItem';
import { Types, constants } from './duck';

const ValidationMessages: FC<Types.ValidationMessagesProps> = ({
  error,
  name,
  inputValue,
}) => {
  const errors = {
    min: inputValue.length < 8,
    casing: !INPUT_CASING_REGEXP.test(inputValue),
    digits: !NUM_REGEXP.test(inputValue),
  };

  return (
    <div className="mt-1 px-3 text-sm/loose text-primary-600">
      {constants.LIVE_ERRORS.map(({ name, message }) => (
        <ValidationMessageItem
          key={name}
          error={errors[name]}
          inputValue={inputValue}
        >
          {message}
        </ValidationMessageItem>
      ))}
      {!constants.LIVE_ERRORS.some((item) => item.name === error) && (
        <ErrorMessage name={name} component="span" className="text-red-400" />
      )}
    </div>
  );
};

export default ValidationMessages;
