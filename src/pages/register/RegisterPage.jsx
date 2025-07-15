//images
import SignImg from '../../assets/images/svg/signImg.svg?react';
import SiteLogo from '../../assets/images/svg/siteLogo.svg?react';

//react router dom
import { Link } from 'react-router-dom';
import RegisterForm from './_components/RegisterForm';

function RegisterPage() {
  return (
    <div className="flex items-center h-full p-5">
      <div className="w-full  xl:w-[50%] flex items-center   flex-col  pt-[100px] xl:pt-0 lg:pl-[50px]">
        <div className="flex items-center xl:items-start flex-col w-[90%]">
          <SiteLogo className="mb-5 xl:mb-10 " />

          <p className="text-black text-[40px] xl:text-[86px] leading-[105px] font-bold mb-4">
            Get started
          </p>
          <p className="mb-4 xl:mb-10">
            <span>Already have an account?</span>
            <Link className="text-[#009688]" to={'/login'}>
              Sign in
            </Link>
          </p>

          <RegisterForm />
        </div>
      </div>

      <div className="hidden   xl:w-[50%]  xl:flex items-center justify-center flex-col h-full rounded-[40px] pb-[20px] bg-[#009688]">
        <SignImg className="mb-[0px] w-[500px]" />
        <p className="font-inter text-white text-[36px] text-center w-[605px]  font-bold leading-[40px]">
          Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
