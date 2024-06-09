import { FC } from 'react';
import classNames from 'classnames';
import { Types } from './duck';

const ValidationMessageItem: FC<Types.ValidationMessagesItemProps> = ({
  error,
  inputValue,
  children,
}) => {
  return (
    <p
      className={classNames('transition-colors duration-500', {
        'text-red-400': error && inputValue,
        'text-green-400': !error && inputValue,
      })}
    >
      {children}
    </p>
  );
};

export default ValidationMessageItem;
