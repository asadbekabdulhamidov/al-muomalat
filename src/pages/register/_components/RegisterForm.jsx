//components
import { SignButton, SignInput, PhoneInputForm } from '../../../components';
import { useFormik } from 'formik';

import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup
    .string()
    .email('Email noto‘g‘ri formatda')
    .required('Email kiritilishi shart'),

  username: yup.string().required('username kiritilishi shart'),
  tel: yup.string().required('Telefon raqam kiritilishi shart'),
});

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      tel: '',
      email: '',
      username: '',
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
        id="text"
        name="username"
        type="username"
        placeholder="Enter your email"
        onChange={formik.handleChange}
        value={formik.values.username}
        error={formik.errors.username}
        touched={formik.touched.username}
      />
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
      <PhoneInputForm
        name="tel"
        value={formik.values.tel}
        onChange={formik.setFieldValue}
        onBlur={formik.handleBlur}
        error={formik.errors.tel}
        touched={formik.touched.tel}
      />

      <SignButton type={'submit'} className="mt-[6px] cursor-pointer">
        Sign in
      </SignButton>
    </form>
  );
};
export default RegisterForm;
