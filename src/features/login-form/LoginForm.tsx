import { InputEmail, InputPassword, DigiCode } from './components';
import { Formik, Form } from 'formik';
import { schemas } from './duck';

const App = () => {
  return (
    <Formik<{
      email: string;
      password: string;
      digiCode: string;
    }>
      validationSchema={schemas.LoginSchema}
      initialValues={{
        email: '',
        password: '',
        digiCode: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {() => (
        <Form className="w-[311px]">
          <InputEmail name="email" />
          <InputPassword className="mt-8" name="password" />
          <DigiCode name="digiCode" />
          <button hidden />
        </Form>
      )}
    </Formik>
  );
};

export default App;
