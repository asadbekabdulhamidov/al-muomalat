//components
import { SignButton, SignInput } from '../../../components';
import { useFormik } from 'formik';

import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup
    .string()
    .email('Email noto‘g‘ri formatda')
    .required('Email kiritilishi shart'),

  password: yup
    .string()
    .min(6, 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak')
    .required('Parol kiritilishi shart'),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      className=" w-full3  lg:w-[454px] flex flex-col gap-6"
      onSubmit={formik.handleSubmit}
    >
      <SignInput
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
        touched={formik.touched.email}
      />
      <SignInput
        id="password"
        name="password"
        type="password"
        placeholder="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
        touched={formik.touched.password}
      />
      <SignButton type={'submit'} className="mt-[6px] cursor-pointer">
        Sign in
      </SignButton>
    </form>
  );
};
export default SignupForm;
