import { InputEmail, InputPassword } from './components';
import { Formik, Form } from 'formik';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { schemas } from './duck';

const App = () => {
  const [parent] = useAutoAnimate();

  return (
    <Formik<{
      email: string;
      password: string;
    }>
      validationSchema={schemas.LoginSchema}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {() => {
        return (
          <Form className="w-[311px]">
            <div ref={parent}>
              <InputEmail />
              <InputPassword className="mt-8" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default App;
