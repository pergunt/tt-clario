import { InputEmail, InputPassword } from './components';
import { Formik, Form } from 'formik';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { schemas } from './duck';

const App = () => {
  const [parent] = useAutoAnimate();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schemas.LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="w-[311px]">
          <div ref={parent}>
            <InputEmail />
            <InputPassword className="mt-8" />
          </div>
          <button type="submit" className="bg-red-400" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default App;
