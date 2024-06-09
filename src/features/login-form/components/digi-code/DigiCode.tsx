import { FC } from 'react';
import ReactCodeInput from 'react-code-input';
import { Field, FieldProps, ErrorMessage } from 'formik';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import styles from './DigiCode.module.css';

const ANSWER = '1234';

const DigiCode: FC<{ name: string }> = ({ name }) => {
  const [parent] = useAutoAnimate();

  return (
    <Field name={name}>
      {({ meta, form }: FieldProps) => {
        const filled = meta.value.length === 4;
        const answerIsCorrect = meta.value === ANSWER;

        let inputStyles = {};

        if (filled && answerIsCorrect) {
          inputStyles = {
            border: '2px solid #009796',
            backgroundColor: 'rgb(0 151 150 / 0.1)',
          };
        }

        // we can't use isValid() method because it returns true if value is empty
        if ((filled && !answerIsCorrect) || (meta.error && meta.touched)) {
          inputStyles = {
            border: '2px solid #ED5F59',
            backgroundColor: 'rgb(237 95 89 / 0.1)',
          };
        }

        return (
          <div className="mt-5 flex flex-col items-center" ref={parent}>
            <ReactCodeInput
              type="text"
              inputMode="numeric"
              fields={4}
              name={name}
              autoFocus={false}
              inputStyle={inputStyles}
              className={styles.digiCode}
              onChange={(value) => {
                form.setFieldTouched(name, false);
                form.setFieldValue(name, value);
              }}
              value={meta.value}
            />
            <p className="text-center text-xs text-grey-600/30">
              The answer is {ANSWER}
            </p>
            <ErrorMessage
              name={name}
              component="div"
              className="mt-1 px-3 text-sm/loose text-red-400"
            />
          </div>
        );
      }}
    </Field>
  );
};

export default DigiCode;
